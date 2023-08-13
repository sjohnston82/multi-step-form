import React from "react";
import { styled } from "styled-components";
import StepChanger from "./StepChanger";
import { useFormContext } from "@/context/FormContext";
import ArcadeIcon from "../../../public/images/icon-arcade.svg";
import AdvancedIcon from "../../../public/images/icon-advanced.svg";
import ProIcon from "../../../public/images/icon-pro.svg";
import Image from "next/image";

const FormTwoWrapper = styled.div`
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
`;
const FormTwoHeading = styled.h1`
  color: var(--marine-blue);
  font-size: 26px;
  margin-bottom: 0.8rem;
  /* font-family: var(--font-ubuntu); */
`;
const FormTwoSubheading = styled.h2`
  color: var(--cool-gray);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0.8rem;
`;

const PlanButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// const ArcadeButton = styled.button<{ $plan: string }>`
//   width: 100%;
//   border: 1px solid
//     ${(props) =>
//       props.$plan === "arcade" ? "var(--purplish-blue)" : "var(--light-gray"};
//   border-radius: 8px;
//   background-color: transparent;
// `;

// const AdvancedButton = styled.button<{ $plan: string }>`
//   width: 100%;
//   border: 1px solid
//     ${(props) =>
//       props.$plan === plan ? "var(--purplish-blue)" : "var(--light-gray"};
//   border-radius: 8px;
//   background-color: transparent;
// `;

// const ProButton = styled.button<{ $plan: string }>`
//   width: 100%;
//   border: 1px solid
//     ${(props) =>
//       props.$plan === "pro" ? "var(--purplish-blue)" : "var(--light-gray"};
//   border-radius: 8px;
//   background-color: transparent;
// `;

const PlanButtonContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.8rem;
  gap: 0.5rem;
  background-color: transparent;
`;
const PlanButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-ubuntu);
  gap: 4px;
  align-items: flex-start;
  justify-content: center;
`;

const StyledImage = styled(Image)``;

const PlanTitle = styled.p`
  color: var(--marine-blue);
  font-family: var(--font-ubuntu);
  font-weight: bold;
  font-size: 14px;
`;

const PlanCost = styled.p`
  color: var(--cool-gray);
`;

const FormTwoContainer = () => {
  const { plan, setPlan, monthly } = useFormContext();

  const PlanButton = styled.button<{ $plan: string; isSelected: boolean }>`
    width: 100%;
    border-radius: 8px;
    background-color: transparent;
    outline: none;
    border: ${(props) =>
      props.isSelected
        ? "1px solid var(--purplish-blue)"
        : "1px solid var(--light-gray)"};
  `;

  return (
    <div>
      <FormTwoWrapper>
        <FormTwoHeading>Select your plan</FormTwoHeading>
        <FormTwoSubheading>
          You have the option of monthly or yearly billing.
        </FormTwoSubheading>
        <PlanButtonGroup>
          <PlanButton
            $plan={"arcade"}
            isSelected={plan === "arcade"}
            onClick={() => setPlan("arcade")}
          >
            <PlanButtonContent>
              <StyledImage src={ArcadeIcon} alt="Arcade Icon" />
              <PlanButtonTextWrapper>
                <PlanTitle>Arcade</PlanTitle>
                <PlanCost>$9/mo</PlanCost>
              </PlanButtonTextWrapper>
            </PlanButtonContent>
          </PlanButton>
          <PlanButton
            $plan={"advanced"}
            isSelected={plan === "advanced"}
            onClick={() => setPlan("advanced")}
          >
            <PlanButtonContent>
              <StyledImage src={AdvancedIcon} alt="Advanced Icon" />
              <PlanButtonTextWrapper>
                <PlanTitle>Advanced</PlanTitle>
                <PlanCost>$12/mo</PlanCost>
              </PlanButtonTextWrapper>
            </PlanButtonContent>
          </PlanButton>
          <PlanButton
            $plan={"pro"}
            isSelected={plan === "pro"}
            onClick={() => setPlan("pro")}
          >
            <PlanButtonContent>
              <StyledImage src={ProIcon} alt="Pro icon" />
              <PlanButtonTextWrapper>
                <PlanTitle>Pro</PlanTitle>
                <PlanCost>$15/mo</PlanCost>
              </PlanButtonTextWrapper>
            </PlanButtonContent>
          </PlanButton>
        </PlanButtonGroup>
      </FormTwoWrapper>
      <StepChanger />
    </div>
  );
};

export default FormTwoContainer;
