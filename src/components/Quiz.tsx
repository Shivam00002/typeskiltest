import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import styles from "../styles/Quiz.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import QSidebar from "../components/QSidebar";

const Quiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ questionId: number; optionIndex: number; }[]>([]);
  const [star, showStar] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset timer
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(true);

  // Reset timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const handleRestart = () => {
    setTime(0);
    setRunning(true);
  };
  // Reset timer end

  const handleQuestionClick = (questionId: number) => {
    handleRestart();
    const questionIndex = questions.findIndex(
      (question) => question.id === questionId
    );

    setCurrentPage(questionIndex + 1);
  };

  useEffect(() => {
    const storedAnswers = sessionStorage.getItem("selectedAnswers");
    if (storedAnswers) {
      setSelectedAnswers(JSON.parse(storedAnswers) || []);
    }
  }, []);

  const starClick = () => {
    showStar(!star);
  };

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    const updatedAnswers = selectedAnswers.filter(
      (selectedAnswer) => selectedAnswer.questionId !== questionId
    );

    const answer = { questionId, optionIndex };
    const newAnswers = [...updatedAnswers, answer];
    setSelectedAnswers(newAnswers);

    sessionStorage.setItem("selectedAnswers", JSON.stringify(newAnswers));
  };

  const handleNextPage = () => {
    handleRestart();

    if (currentPage < questions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClearResponse = () => {
    const currentIndex = selectedAnswers.findIndex(
      (selectedAnswer) => selectedAnswer.questionId === question?.id
    );

    if (currentIndex !== -1) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers.splice(currentIndex, 1);
      setSelectedAnswers(updatedAnswers);

      sessionStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const question = questions[currentPage - 1];
  const totalPages = questions.length;

  return (
    <>
      <div className="w-full grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 mt-12 ">
        <div className="col-span-3 p-2">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <h2 className="font-semibold text-[16px]">
                Question {currentPage}
              </h2>
              <div className="flex space-x-1 items-center">
                <svg
                  fill="#3acc78"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 19 19"
                >
                  <path
                    id="Union_6"
                    d="M0,9.5A9.5,9.5,0,1,1,9.5,19,9.5,9.5,0,0,1,0,9.5Zm1.4,0A8.1,8.1,0,1,0,9.5,1.4,8.109,8.109,0,0,0,1.4,9.5Zm6.764,3.316a.763.763,0,0,1-.539-.223L5.29,10.256A.763.763,0,0,1,6.37,9.178l1.8,1.8,4.418-4.419a.764.764,0,0,1,1.08,1.08L8.7,12.594a.761.761,0,0,1-.539.222Z"
                  ></path>
                </svg>
                <p className="text-[green] text-[14px]">+2</p>
                <svg
                  fill="#fd4a43"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 19 19"
                >
                  <path
                    id="Union_5"
                    d="M0,9.5A9.5,9.5,0,1,1,9.5,19,9.5,9.5,0,0,1,0,9.5Zm1.4,0A8.1,8.1,0,1,0,9.5,1.4,8.109,8.109,0,0,0,1.4,9.5Zm10.522,3.433L9.5,10.511,7.078,12.934a.735.735,0,0,1-1.04-1.039L8.459,9.471,6.037,7.048a.735.735,0,0,1,1.04-1.04L9.5,8.43l2.423-2.421a.735.735,0,1,1,1.04,1.039L10.54,9.47l2.423,2.424a.736.736,0,1,1-1.041,1.039Z"
                  ></path>
                </svg>
                <p className="text-[red] text-[14px]  ">-0.66</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div>
                <MdOutlineTimer color="black" size={24} cursor="pointer" />
              </div>

              {/* <QuestionTimer /> */}

              {/* Timer */}
              <div className="hidden md:block">
                <div className="py-0 px-0 mt-[2px]"></div>
                <h1 className="font-semibold text-[black] text-[15px]">
                  Time: 00:{time < 10 ? `0${time}` : time}
                </h1>
              </div>

              {star ? (
                <AiOutlineStar
                  onClick={starClick}
                  color="black"
                  size={24}
                  cursor="pointer"
                />
              ) : (
                <AiFillStar
                  onClick={starClick}
                  color="teal"
                  size={24}
                  cursor="pointer"
                />
              )}
            </div>
          </div>

          {question && (
            <div key={question.id} className="mt-4 w-full">
              <p className="font-normal text-gray-700 mb-3">
                {question.question}
              </p>

              <div className="w-full">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswers.some(
                    (selectedAnswer) =>
                      selectedAnswer.questionId === question.id &&
                      selectedAnswer.optionIndex === index
                  );

                  return (
                    <div key={index}>
                      <div
                        id="btn-style"
                        key={index}
                        className={`${styles.option} ${
                          isSelected ? styles.highlighted : ""
                        }`}
                        onClick={() => handleAnswerSelect(question.id, index)}
                      >
                        <p>{option}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex gap-5 w-[100%] md:w-[70%] h-auto justify-center mx-auto mt-[175px] fixed ">
            <button
              className="bg-white-500 text-black border border-[black] rounded-md px-3 py-2 h-auto w-44 hover:bg-black hover:text-white"
              onClick={handleClearResponse}
              disabled={currentPage === 1}
            >
              Clear Response
            </button>

            <button
              className="bg-white-500 text-black border border-[black] rounded-md px-3 py-2 hover:bg-black hover:text-white"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Mark for Review later
            </button>

            <button
              className="bg-yellow-400 hover:bg-amber-300 text-black  rounded-md px-3 py-2 h-auto w-48  "
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        <div className="w-full  sticky top-10 hidden md:block h-fit">
          <QSidebar onQuestionClick={handleQuestionClick} />
        </div>
      </div>
    </>
  );
};

export default Quiz;
