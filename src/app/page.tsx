"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";
import MobileBanner from "../../public/images/bg-sidebar-mobile.svg";
import DesktopBanner from "../../public/images/bg-sidebar-desktop.svg";
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

  @media (min-width: 768px) {
    visibility: hidden;
  }
`;

const DesktopImageContainer = styled.div`
  width: 274px;
  margin-right: auto;
  padding: 1rem;
`;

const StyledImage = styled(Image)`
  position: absolute;
  z-index: 0;
  width: 100dvw;

  @media (min-width: 768px) {
    width: 274px;
  }
`;

const DesktopFormWrapper = styled.div`
  width: 951px;
  height: 600px;

  background-color: var(--alabaster);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopFormContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Window = styled.div`
  @media (min-width: 768px) {
    width: 100vw;
    height: 100dvh;
    background-color: var(--really-light-gray);
    display: grid;
    place-items: center;
  }
`;

const MobileWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledMain = styled.main`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--light-blue);

  @media (min-width: 768px) {
    width: 1440px;
    height: 900px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
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
    <Window>
      <StyledMain>
        <MobileWrapper>
          <BackgroundImageMobile>
            <StyledImage
              src={MobileBanner}
              alt="Mobile sized background banner."
            />
          </BackgroundImageMobile>
          <StepCounter />
          {getFormByStep()}
        </MobileWrapper>
        <DesktopFormWrapper>
          <DesktopImageContainer>
            <StyledImage src={DesktopBanner} alt="Desktop banner" />
            <StepCounter />
          </DesktopImageContainer>
          <DesktopFormContainer>{getFormByStep()}</DesktopFormContainer>
        </DesktopFormWrapper>
      </StyledMain>
    </Window>
  );
}
