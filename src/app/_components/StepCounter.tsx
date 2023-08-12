import { useFormContext } from "@/context/FormContext";
import React from "react";
import { styled } from "styled-components";

const StepCounterWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.45rem;
`;


const StepCounter = () => {
  const { step, setStep } = useFormContext();
  const StyledStep = styled.div<{ $step?: number }>`
    border-radius: 50%;
    color: ${(props) => (props.$step === step ? 'var(--marine-blue)' : "white")};
    width: 2.5rem;
    height: 2.5rem;
    font-weight: 700;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.$step === step ? "white" : "transparent")};
  `;

  return (
    <StepCounterWrapper>
      <StyledStep $step={1}>1</StyledStep>
      <StyledStep $step={2}>2</StyledStep>
      <StyledStep $step={3}>3</StyledStep>
      <StyledStep $step={4}>4</StyledStep>
    </StepCounterWrapper>
  );
};

export default StepCounter;
