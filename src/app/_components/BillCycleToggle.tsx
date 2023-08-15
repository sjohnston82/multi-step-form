import { useFormContext } from "@/context/FormContext";
import React from "react";
import { styled } from "styled-components";

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 1rem 0;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
  }
`;

const ToggleOptionText = styled.h5<{ isMonthly: boolean }>`
  color: ${(props) =>
    props.isMonthly === true ? "var(--marine-blue)" : "var(--cool-gray)"};
`;

const SwitchContainer = styled.div`
  background-color: var(--marine-blue);
  display: inline-block;
  height: 18px;
  width: 34px;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  
`;
const SwitchDot = styled.span<{ isMonthly: boolean }>`
  background-color: var(--alabaster);
  /* background-color: green; */
  position: absolute;
  height: 10px;
  width: 10px;
  z-index: 999;
  left: ${(props) => (props.isMonthly ? "4px" : "20px")};
  right: 0;
  top: 4px;
  bottom: 0;
  border-radius: 50%;
  transition: all 0.3s;
`;

const BillCycleToggle = () => {
  const { monthly, setMonthly } = useFormContext();

  return (
    <ToggleWrapper>
      <ToggleOptionText isMonthly={monthly}>Monthly</ToggleOptionText>
      <SwitchContainer onClick={() => setMonthly(!monthly)}>
        <SwitchDot isMonthly={monthly} />
      </SwitchContainer>
      <ToggleOptionText isMonthly={!monthly}>Yearly</ToggleOptionText>
    </ToggleWrapper>
  );
};

export default BillCycleToggle;
