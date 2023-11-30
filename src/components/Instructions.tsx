import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface InstructionsProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Instructions: React.FC<InstructionsProps> = ({ setIsActive }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  function onCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setIsDisabled(checked);
  }

  const NextButtonActive = () => {
    setIsActive(true);
  };


  return (
    <div className="w-full h-28 grid grid-cols-4 gap-x-3 py-2 px-4 mt-12">
      <div className="col-span-4 md:col-span-3">
        <h2 className="py-2 px-4 font-semibold text-20">General Instructions</h2>
        <p className="py-1 px-4 font-semibold text-15">
          1: The clock will be set at the server. The countdown timer at the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.
        </p>

        {/* Remaining code... */}

        <div className="justify-center flex gap-5 py-2 px-4 ml-10">
          <button className="border w-36 px-2 py-2 rounded hover:bg-amber-300 bg-amber-400">
            Back to test
          </button>
          <button
            disabled={!isDisabled}
            onClick={NextButtonActive}
            className="border w-36 px-6 py-2 rounded hover:bg-amber-300 bg-amber-400"
          >
            Next
          </button>
        </div>
      </div>

      <div className="w-full h-28 hidden md:block">
        <Sidebar />
      </div>
    </div>
  );
};

export default Instructions;
