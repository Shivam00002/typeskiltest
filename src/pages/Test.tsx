import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Instructions from '../components/Instructions';
import Quiz from '../components/Quiz';
import { MyContext } from '@/context/AppContext';

const Test: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { instructionPage, setInstructionPage } = useContext(MyContext);

  return (
    <>
      <Header />
      {isActive ? (
        <Quiz />
      ) : (
        <Instructions setIsActive={setIsActive} />
      )}
      {/* <Result/> */}
      {/* <QInstruction/> */}
      {/* <QSections/> */}
    </>
  );
};

export default Test;
