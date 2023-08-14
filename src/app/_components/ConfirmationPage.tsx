import React from 'react'
import { styled } from 'styled-components';
import Image from 'next/image';
import ThankYouImage from '../../../public/images/icon-thank-you.svg';


const ConfirmationWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-top: 2.3rem;
  margin-left: auto;
  margin-right: auto;
  background: var(--alabaster);
  position: relative;
  padding: 4rem 1.5rem;
  border-radius: 15px;
  align-items: center;

`;

const StyledImage = styled(Image)`
  width: 3.7rem;
`

const Heading = styled.h2`
  color: var(--marine-blue);
  padding: 0.5rem 0;
`

const ThankYouText = styled.p`
  color: var(--cool-gray);
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5
`


const ConfirmationPage = () => {
  return (
    <ConfirmationWrapper>
      <StyledImage src={ThankYouImage} alt="Thanks!" />
      <Heading>Thank you!</Heading>
      <ThankYouText>Thanks for confirming your subscription!</ThankYouText>
      <ThankYouText>We hope you you have fun using our platform.  If you ever need support, please feel free to email us at support@loremgaming.com.</ThankYouText>
    </ConfirmationWrapper>
  )
}

export default ConfirmationPage