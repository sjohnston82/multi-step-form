"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";
import MobileBanner from "../../public/images/bg-sidebar-mobile.svg";
import StepCounter from "./_components/StepCounter";
import FormOneContainer from "./_components/FormOneContainer";
import StepChanger from "./_components/StepChanger";
import { useFormContext } from "@/context/FormContext";
import FormTwoContainer from "./_components/FormTwoContainer";
import FormThreeContainer from "./_components/FormThreeContainer";
import FormFourContainer from "./_components/FormFourContainer";

const BackgroundImageMobile = styled.div`
  position: absolute;
  width: 100dvw;
  z-index: 0;
  top: 50;
  background: green;
`;

const StyledImage = styled(Image)`
  position: absolute;
  z-index: 0;
  width: 100dvw;
`;

const StyledMain = styled.main`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--really-light-gray);
`;

export default function Home() {
  const { step } = useFormContext();
  function getFormByStep() {
    if (step === 1) {
      return <FormOneContainer />;
    }
    if (step === 2) {
      return <FormTwoContainer />;
    }
    if (step === 3) {
      return <FormThreeContainer />;
    }
    if (step === 4) {
      return <FormFourContainer />;
    }
  }
  return (
    <StyledMain>
      <BackgroundImageMobile>
        <StyledImage src={MobileBanner} alt="Mobile sized background banner." />
      </BackgroundImageMobile>
      <StepCounter />

      {getFormByStep()}
    </StyledMain>
  );
}
