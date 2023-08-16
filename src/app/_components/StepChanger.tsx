import { useFormContext } from "@/context/FormContext";
import React, { useState } from "react";
import { styled } from "styled-components";

type StepChangerProps = {
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
};

const StepChangeContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 5rem;
  background-color: var(--magnolia);
  width: 100vw;
  display: flex;

   @media (min-width: 768px) {
    width: 500px;
    position: absolute;
    /* margin-top: 4rem; */
    bottom: 1rem;
    background-color: transparent;
   }
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const PreviousButton = styled.button<{ $step: number }>`
  color: var(--cool-gray);
  font-family: var(--font-ubuntu);
  font-weight: bold;
  outline: none;
  border: none;
  font-size: 16px;
  background: transparent;
  visibility: ${(props) => (props.$step === 1 ? "hidden" : "visible")};
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--marine-blue);
  }
`;

const NextButton = styled.button`
  color: var(--light-gray);
  background-color: var(--marine-blue);
  outline: none;
  border-radius: 3px;
  padding: 1rem;
  border: none;
  font-family: var(--font-ubuntu);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--purplish-blue);
  }
`;

const ConfirmButton = styled(NextButton)``;

const StepChanger = ({ formRef }: StepChangerProps) => {
  const { step, setStep, setConfirmed } = useFormContext();

  return (
    <StepChangeContainer>
      <ButtonWrapper>
        <PreviousButton $step={step} onClick={() => setStep(step - 1)}>
          Go Back
        </PreviousButton>
        {step === 4 ? (
          <ConfirmButton onClick={() => setConfirmed(true)}>
            Confirm
          </ConfirmButton>
        ) : (
          <NextButton
            type="submit"
            onClick={
              formRef?.current || step === 1
                ? () => formRef?.current?.requestSubmit()
                : () => setStep(step + 1)
            }
          >
            Next Step
          </NextButton>
        )}
      </ButtonWrapper>
    </StepChangeContainer>
  );
};

export default StepChanger;
