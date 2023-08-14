import { useFormContext } from "@/context/FormContext";
import React from "react";
import { styled } from "styled-components";
import StepChanger from "./StepChanger";

const FormThreeWrapper = styled.div`
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
const FormThreeHeading = styled.h1`
  color: var(--marine-blue);
  font-size: 26px;
  margin-bottom: 0.8rem;
  /* font-family: var(--font-ubuntu); */
`;
const FormThreeSubheading = styled.h2`
  color: var(--cool-gray);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0.8rem;
`;

const AddOnsButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddOnsButtonContent = styled.div`
  display: flex;
  justify-content: flex-start;
  /* padding: 0.8rem; */
  gap: 1rem;
  background-color: transparent;
  align-items: center;
`;

const AddOnButton = styled.button<{ isSelected: boolean }>`
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  border: ${(props) =>
    props.isSelected
      ? "1px solid var(--purplish-blue)"
      : "1px solid var(--light-gray)"};

  &:hover {
    border: 1px solid var(--purplish-blue);
  }
  cursor: pointer;
`;

const StyledCheckbox = styled.input<{ isSelected: boolean }>`
  /* background-color: var(--purplish-blue); */
  background-color: yellow;
  width: 1.2rem;
  height: 1.2rem;
  accent-color: ${(props) =>
    props.isSelected ? "var(--purplish-blue)" : "transparent"};
`;

const AddOnsWithPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  align-items: center;
`;

const AddOnsButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-ubuntu);
  gap: 6px;
  align-items: flex-start;
  justify-content: center;
`;

const AddOnsTitle = styled.p`
  color: var(--marine-blue);
  font-family: var(--font-ubuntu);
  font-weight: bold;
  font-size: 14px;
`;

const AddOnsPrice = styled.p`
  color: var(--purplish-blue);
`;

const AddOnsDescription = styled.p`
  color: var(--cool-gray);
  font-size: 12px;
  text-align: left;
`;

const FormThreeContainer = () => {
  const { addOns, setAddOns, monthly, step, setStep } = useFormContext();
  return (
    <div className="">
      <FormThreeWrapper>
        <FormThreeHeading>Pick add-ons</FormThreeHeading>
        <FormThreeSubheading>
          Add-ons help enhance your gaming experience.
        </FormThreeSubheading>
        <AddOnsButtonGroup>
          <AddOnButton
            isSelected={addOns.onlineService}
            onClick={() =>
              setAddOns((prev) => ({
                ...prev,
                onlineService: !prev.onlineService,
              }))
            }
          >
            <AddOnsWithPriceWrapper>
              <AddOnsButtonContent>
                <StyledCheckbox
                  isSelected={addOns.onlineService}
                  type="checkbox"
                  checked={addOns.onlineService}
                />
                <AddOnsButtonTextWrapper>
                  <AddOnsTitle>Online service</AddOnsTitle>
                  <AddOnsDescription>
                    Access to multiplayer games
                  </AddOnsDescription>
                </AddOnsButtonTextWrapper>
              </AddOnsButtonContent>
              <AddOnsPrice>{monthly ? "+$1/mo" : "+$10/yr"}</AddOnsPrice>
            </AddOnsWithPriceWrapper>
          </AddOnButton>
          <AddOnButton
            isSelected={addOns.largerStorage}
            onClick={() =>
              setAddOns((prev) => ({
                ...prev,
                largerStorage: !prev.largerStorage,
              }))
            }
          >
            <AddOnsWithPriceWrapper>
              <AddOnsButtonContent>
                <StyledCheckbox
                  type="checkbox"
                  name=""
                  id=""
                  checked={addOns.largerStorage}
                  isSelected={addOns.largerStorage}
                />
                <AddOnsButtonTextWrapper>
                  <AddOnsTitle>Larger Storage</AddOnsTitle>
                  <AddOnsDescription>Extra 1TB of cloud save</AddOnsDescription>
                </AddOnsButtonTextWrapper>
              </AddOnsButtonContent>
              <AddOnsPrice>{monthly ? "+$2/mo" : "+$20/yr"}</AddOnsPrice>
            </AddOnsWithPriceWrapper>
          </AddOnButton>
          <AddOnButton
            isSelected={addOns.customizableProfile}
            onClick={() =>
              setAddOns((prev) => ({
                ...prev,
                customizableProfile: !prev.customizableProfile,
              }))
            }
          >
            <AddOnsWithPriceWrapper>
              <AddOnsButtonContent>
                <StyledCheckbox
                  isSelected={addOns.customizableProfile}
                  type="checkbox"
                  checked={addOns.customizableProfile}
                />
                <AddOnsButtonTextWrapper>
                  <AddOnsTitle>Customizable profile</AddOnsTitle>
                  <AddOnsDescription>
                    Custom theme on your profile
                  </AddOnsDescription>
                </AddOnsButtonTextWrapper>
              </AddOnsButtonContent>
              <AddOnsPrice>{monthly ? "+$2/mo" : "+$20/yr"}</AddOnsPrice>
            </AddOnsWithPriceWrapper>
          </AddOnButton>
        </AddOnsButtonGroup>
      </FormThreeWrapper>
      <StepChanger />
    </div>
  );
};

export default FormThreeContainer;
