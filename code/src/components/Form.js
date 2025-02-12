import React, { useState } from "react";

import FirstQuestion from "components/FirstQuestion";
import SecondQuestion from "components/SecondQuestion";
import { ThirdQuestion } from "components/ThirdQuestion";
import FourthQuestion from "components/FourthQuestion";
import FifthQuestion from "components/FifthQuestion";
import Overview from "components/Overview";
import Footer from "components/Footer";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [goals, setGoals] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [handInTime, setHandInTime] = useState("");
  const [graduation, setGraduation] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onGoalsChange = (event) => {
    setGoals(event.target.value);
  };

  const onHandInTimeChange = (event) => {
    setHandInTime(event.target.value);
  };

  const onGraduationChange = (event) => {
    setGraduation(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          goals={goals}
          onGoalsChange={onGoalsChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          radioValue={radioValue}
          setRadioValue={setRadioValue}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <FourthQuestion
          handInTime={handInTime}
          onHandInTimeChange={onHandInTimeChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <FifthQuestion
          graduation={graduation}
          onGraduationChange={onGraduationChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <Overview
          nameInput={nameInput}
          goals={goals}
          radioValue={radioValue}
          handInTime={handInTime}
          graduation={graduation}
        />
      )}
      <Footer />
    </div>
  );
};

export default Form;
