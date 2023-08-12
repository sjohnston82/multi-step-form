"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";
import MobileBanner from "../../public/images/bg-sidebar-mobile.svg";
import StepCounter from "./_components/StepCounter";

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
  return (
    <StyledMain>
      <BackgroundImageMobile>
        <StyledImage src={MobileBanner} alt="Mobile sized background banner." />
      </BackgroundImageMobile>
      <StepCounter />
    </StyledMain>
  );
}
