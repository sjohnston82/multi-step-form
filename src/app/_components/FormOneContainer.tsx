import React from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";
import { useFormContext } from "@/context/FormContext";

const FormOneSchema = z.object({
  name: z.string().min(2).max(60),
  emailAddress: z.string().min(1).email(),
  phoneNumber: z.string().refine(validator.isMobilePhone),
});

type StepOneInputProps = {
  name: string;
  email: string;
  phoneNumber: string;
};

const FormOneWrapper = styled.div`
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
const FormOneHeading = styled.h1`
  color: var(--marine-blue);
  font-size: 26px;
  margin-bottom: 0.6rem;
  /* font-family: var(--font-ubuntu); */
`;
const FormOneSubheading = styled.h2`
  color: var(--cool-gray);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0.6rem;
`;

const FormOneContainer = () => {
  const { step1Info, setStep1Info } = useFormContext();
  const { register, reset, handleSubmit } = useForm<StepOneInputProps>({
    resolver: zodResolver(FormOneSchema),
    defaultValues: {
      name: step1Info.name,
      email: step1Info.emailAddress,
      phoneNumber: step1Info.phoneNumber,
    },
  });

  const StyledFormOne = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;
  const StyledInputLabel = styled.label`
    color: var(--marine-blue);
    font-size: 14px;
  `;
  const StyledInput = styled.input`
    width: 100%;
    outline: none;
    border: 1px solid var(--light-gray);
    border-radius: 5px;
    padding: 1rem;
    margin-top: 6px;

    &::placeholder {
      color: var(--cool-gray);
      font-size: 16px;
      font-weight: bold;
      font-family: var(--font-ubuntu);
    }
  `;
  return (
    <FormOneWrapper>
      <FormOneHeading>Personal info</FormOneHeading>
      <FormOneSubheading>
        Please provide your name, email address, and phone number.
      </FormOneSubheading>
      <StyledFormOne>
        <div className="">
          <StyledInputLabel htmlFor="name">Name</StyledInputLabel>
          <StyledInput placeholder="e.g. Stephen King" />
        </div>
        <div className="">
          <StyledInputLabel htmlFor="email">Email Address</StyledInputLabel>
          <StyledInput placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="">
          <StyledInputLabel htmlFor="name">Phone Number</StyledInputLabel>
          <StyledInput placeholder="e.g. +1 234 567 890" />
        </div>
      </StyledFormOne>
    </FormOneWrapper>
  );
};

export default FormOneContainer;
