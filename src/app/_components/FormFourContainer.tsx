import { useFormContext } from "@/context/FormContext";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import StepChanger from "./StepChanger";
import ConfirmationPage from "./ConfirmationPage";

const FormFourWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-top: 2.3rem;
  margin-left: auto;
  margin-right: auto;
  background: var(--alabaster);
  position: relative;
  padding: 1.5rem;
  border-radius: 15px;

  @media (min-width: 768px) {
    width: 510px;
    /* flex: 1; */
    background: transparent;
  }
`;
const FormFourHeading = styled.h1`
  color: var(--marine-blue);
  font-size: 26px;
  margin-bottom: 0.8rem;
  /* font-family: var(--font-ubuntu); */
`;
const FormFourSubheading = styled.h2`
  color: var(--cool-gray);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-weight: 400;

    margin-bottom: 2.5rem;
  }
`;

const CostSummaryWrapper = styled.div`
  background-color: var(--magnolia);
  padding: 1rem;
  border-radius: 8px;
`;

const PlanCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PlanCostTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
`;
const PlanTitle = styled.h5`
  color: var(--marine-blue);
  font-size: 16px;
  font-weight: 700;
`;
const PlanChangeButton = styled.button`
  border: none;
  outline: none;
  text-decoration: underline;
  color: var(--cool-gray);
  font-size: 16px;
  background-color: transparent;
  text-decoration-thickness: 2px;
  cursor: pointer;

  &:hover {
    color: var(--purplish-blue);
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const PlanCost = styled.h4`
  color: var(--marine-blue);
  font-weight: bold;
  font-size: 16px;
`;

const StyledHR = styled.hr`
  border-top: 1px solid var(--light-gray);
  margin: 1rem 0;
  color: transparent;
  opacity: 0.5;
`;

const AddOnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddOnSummary = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddOnTitle = styled.p`
  font-size: 16px;
  color: var(--cool-gray);
  font-weight: 500;
`;
const AddOnCost = styled.p`
  color: var(--marine-blue);
  font-size: 16px;
  font-weight: 400;
`;

const TotalCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem 1rem 1rem;

  @media (min-width: 768px) {
    margin-top: .5rem;
  }
`;

const TotalDescription = styled.p`
  color: var(--cool-gray);
  font-weight: 400;
`;

const TotalCost = styled.h3`
  color: var(--purplish-blue);
  font-weight: bold;
`;

const FormAndStepChange = styled.div`
  @media (min-width: 768px) {
    /* width: 300px; */
    padding: 0 1rem;
    position: relative;
  }
`;


const FormFourContainer = () => {
  const { setStep, plan, monthly, addOns, total, setTotal, confirmed } =
    useFormContext();
  const [hasAddOns, setHasAddOns] = useState(false);

  useEffect(() => {
    const getTotal = () => {
      if (plan === "arcade") {
        setTotal(9);
      } else if (plan === "advanced") {
        setTotal(12);
      } else if (plan === "pro") {
        setTotal(15);
      }
      if (addOns.onlineService) {
        setTotal((prev) => prev + 1);
      }
      if (addOns.largerStorage) {
        setTotal((prev) => prev + 2);
      }
      if (addOns.customizableProfile) {
        setTotal((prev) => prev + 2);
      }
      if (!monthly) {
        setTotal((prev) => prev * 10);
      }
    };
    getTotal();

    if (
      addOns.onlineService ||
      addOns.largerStorage ||
      addOns.customizableProfile
    ) {
      setHasAddOns(true);
    }
  }, [
    plan,
    setTotal,
    monthly,
    addOns.customizableProfile,
    addOns.largerStorage,
    addOns.onlineService,
  ]);
  return !confirmed ? (
    <FormAndStepChange>
      <FormFourWrapper>
        <FormFourHeading>Finishing up</FormFourHeading>
        <FormFourSubheading>
          Double-check everything looks OK before confirming.
        </FormFourSubheading>
        <CostSummaryWrapper>
          <PlanCostContainer>
            <PlanCostTextWrapper>
              <PlanTitle>
                {plan === "arcade"
                  ? "Arcade"
                  : plan === "advanced"
                  ? "Advanced"
                  : "Pro"}{" "}
                ({monthly ? "Monthly" : "Yearly"})
              </PlanTitle>
              <PlanChangeButton onClick={() => setStep(2)}>
                Change
              </PlanChangeButton>
            </PlanCostTextWrapper>
            {plan === "arcade" && (
              <PlanCost>{monthly ? "$9/mo" : "$90/yr"}</PlanCost>
            )}
            {plan === "advanced" && (
              <PlanCost>{monthly ? "$12/mo" : "$120/yr"}</PlanCost>
            )}
            {plan === "pro" && (
              <PlanCost>{monthly ? "$15/mo" : "$150/yr"}</PlanCost>
            )}
          </PlanCostContainer>
          {hasAddOns && <StyledHR />}
          <AddOnsContainer>
            {addOns.onlineService && (
              <AddOnSummary>
                <AddOnTitle>Online service</AddOnTitle>
                <AddOnCost>{monthly ? "$1/mo" : "$10/yr"}</AddOnCost>
              </AddOnSummary>
            )}
            {addOns.largerStorage && (
              <AddOnSummary>
                <AddOnTitle>Larger storage</AddOnTitle>
                <AddOnCost>{monthly ? "$2/mo" : "$20/yr"}</AddOnCost>
              </AddOnSummary>
            )}
            {addOns.customizableProfile && (
              <AddOnSummary>
                <AddOnTitle>Customizable profile</AddOnTitle>
                <AddOnCost>{monthly ? "$2/mo" : "$20/yr"}</AddOnCost>
              </AddOnSummary>
            )}
          </AddOnsContainer>
        </CostSummaryWrapper>
        <TotalCostContainer>
          <TotalDescription>
            Total (per {monthly ? "month" : "year"})
          </TotalDescription>
          <TotalCost>{monthly ? `+${total}/mo` : `+${total}/yr`}</TotalCost>
        </TotalCostContainer>
      </FormFourWrapper>
      <StepChanger />
    </FormAndStepChange>
  ) : (
    <ConfirmationPage />
  );
};

export default FormFourContainer;
