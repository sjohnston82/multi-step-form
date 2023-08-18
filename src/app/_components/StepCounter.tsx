import { useFormContext } from "@/context/FormContext";
import React from "react";
import { styled } from "styled-components";

const StepCounterWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.8rem;

  @media (min-width: 768px) {
    flex-direction: column;
    position: absolute;
    gap: 1.5rem;
    margin-left: 2.5rem;
    margin-top: 2.5rem;
  }
`;

const StepCountGroup = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
`;

const StepTextContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const StepTitle = styled.p`
  visibility: hidden;
  @media (min-width: 768px) {
    visibility: visible;
    color: var(--cool-gray);
    text-transform: uppercase;
    font-size: 12px;
  }
`;

const StepDescription = styled.h4`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: var(--alabaster);
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const StepCounter = () => {
  const { step, setStep } = useFormContext();

  const StyledStep = styled.button<{ $step: number }>`
    border-radius: 50%;
    color: ${(props) =>
      props.$step === step ? "var(--marine-blue)" : "white"};
    width: 2.3rem;
    height: 2.3rem;
    font-weight: 700;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${(props) =>
      props.$step === step ? "var(--light-blue)" : "transparent"};
  `;

  return (
    <StepCounterWrapper>
      <StepCountGroup>
        <StyledStep $step={1} onClick={() => setStep(1)}>
          1
        </StyledStep>
        <StepTextContainer>
          <StepTitle>Step 1</StepTitle>
          <StepDescription>Your info</StepDescription>
        </StepTextContainer>
      </StepCountGroup>
      <StepCountGroup>
        <StyledStep $step={2} onClick={() => setStep(2)} disabled={step < 2}>
          2
        </StyledStep>
        <StepTextContainer>
          <StepTitle>Step 2</StepTitle>
          <StepDescription>Select plan</StepDescription>
        </StepTextContainer>
      </StepCountGroup>
      <StepCountGroup>
        <StyledStep $step={3} onClick={() => setStep(3)} disabled={step < 3}>
          3
        </StyledStep>
        <StepTextContainer>
          <StepTitle>Step 3</StepTitle>
          <StepDescription>Add-ons</StepDescription>
        </StepTextContainer>
      </StepCountGroup>
      <StepCountGroup>
        <StyledStep $step={4}>4</StyledStep>
        <StepTextContainer>
          <StepTitle>Step 4</StepTitle>
          <StepDescription>Summary</StepDescription>
        </StepTextContainer>
      </StepCountGroup>
    </StepCounterWrapper>
  );
};

export default StepCounter;
