import React, { useState, useEffect } from "react";

const QuestionTimer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(true);

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

  return (
    <div className="hidden md:block">
      <div className="py-0 px-0 mt-[2px]"></div>
      <h1 className="font-semibold text-[black] text-[15px]">
        Time: 00:{time < 10 ? `0${time}` : time}
      </h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default QuestionTimer;
