import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Check } from "@mui/icons-material";
import {
  Stack,
  StepConnector,
  StepIconProps,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import { FormsStepperContext } from "@contexts/FormsStepper.context";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.text.primary,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.text.secondary,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: theme.palette.text.primary,
    }),
    "& .QontoStepIcon-completedIcon": {
      color: theme.palette.text.secondary,
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const FormsStepper: React.FC = () => {
  const { forms, activeStep, handleReset,setStepsCompleted } =
    React.useContext(FormsStepperContext)!;

  React.useEffect(() => {
    if (forms.length !== 0 && activeStep === forms.length) {
      setStepsCompleted(true)
    }
  }, [activeStep, forms]);

  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"space-between"}
      gap={"10vh"}
      height={"100%"}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
        orientation="horizontal">
        {forms.length > 0 &&
          forms.map((_: any, index: any) => (
            <Step key={index}>
              <StepLabel StepIconComponent={QontoStepIcon} />
            </Step>
          ))}
      </Stepper>
      {forms[activeStep]}
    </Stack>
  );
};
export default FormsStepper;
