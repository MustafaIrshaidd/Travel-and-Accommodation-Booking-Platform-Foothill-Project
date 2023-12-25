import React, { createContext, ReactNode, useEffect, useState } from "react";

interface FormsStepperContextProps {
  forms: React.ReactElement[];
  setForms: (forms: React.ReactElement[]) => void;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  setStepsCompleted: (isCompleted: boolean) => void;
  stepsCompleted: boolean;
}

export const FormsStepperContext = createContext<
  FormsStepperContextProps | undefined
>(undefined);

export const FormsStepperProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [forms, setForms] = useState<React.ReactElement[]>([]);
  const [stepsCompleted, setStepsCompleted] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setForms([]);
    setStepsCompleted(false);
  };

  const contextValue: FormsStepperContextProps = {
    forms,
    setForms,
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    handleReset,
    stepsCompleted,
    setStepsCompleted,
  };

  return (
    <FormsStepperContext.Provider value={contextValue}>
      {children}
    </FormsStepperContext.Provider>
  );
};
