import React, { useRef } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";
import { useFormContext } from "@/context/FormContext";
import StepChanger from "./StepChanger";

const FormOneSchema = z.object({
  name: z.string().min(2, { message: "This field is required" }).max(60),
  emailAddress: z
    .string()
    .min(1, { message: "This field is required" })
    .email({ message: "Must be a valid email address" }),
  phoneNumber: z
    .string()
    .min(1, { message: "This field is required" })
    .refine(validator.isMobilePhone, {
      message: "Must be a valid phone number",
    }),
});

type StepOneInputProps = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
};

const FormAndStepChange = styled.div`
  @media (min-width: 768px) {
    /* width: 300px; */
    padding: 0 1rem;
    position: relative;
  }
`;

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

  @media (min-width: 768px) {
    width: 510px;
    /* flex: 1; */
    background: transparent;
  }
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

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 2.2rem;
  }
`;

const StyledFormOne = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.3rem;
  }
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
  cursor: pointer;

  &::placeholder {
    color: var(--cool-gray);
    font-size: 16px;
    font-weight: bold;
    font-family: var(--font-ubuntu);
  }
  &:focus {
    border: 1px solid var(--purplish-blue);
  }
`;

const StyledLabelAndError = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.p`
  color: var(--strawberry-red);
  font-weight: bold;
  font-size: 13px;
`;

const FormOneContainer = () => {
  const { step1Info, setStep1Info, step, setStep } = useFormContext();
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<StepOneInputProps>({
    resolver: zodResolver(FormOneSchema),
    defaultValues: {
      name: step1Info.name,
      emailAddress: step1Info.emailAddress,
      phoneNumber: step1Info.phoneNumber,
    },
  });

  const onSubmit = (data: StepOneInputProps) => {
    console.log(isValid);
    if (!formRef.current) return null;
    isValid &&
      setStep1Info({
        name: data.name,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
      });
    setStep(step + 1);
  };
  return (
    <FormAndStepChange>
      <FormOneWrapper>
        <FormOneHeading>Personal info</FormOneHeading>
        <FormOneSubheading>
          Please provide your name, email address, and phone number.
        </FormOneSubheading>
        <StyledFormOne onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <div className="">
            <StyledLabelAndError>
              <StyledInputLabel htmlFor="name">Name</StyledInputLabel>
              {errors.name?.message && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )}
            </StyledLabelAndError>
            <StyledInput
              placeholder="e.g. Stephen King"
              {...register("name")}
              name="name"
              id="name"
            />
          </div>
          <div className="">
            <StyledLabelAndError>
              <StyledInputLabel htmlFor="emailAddress">
                Email Address
              </StyledInputLabel>
              {errors.emailAddress?.message && (
                <ErrorMessage>{errors.emailAddress?.message}</ErrorMessage>
              )}
            </StyledLabelAndError>
            <StyledInput
              placeholder="e.g. stephenking@lorem.com"
              {...register("emailAddress")}
              name="emailAddress"
              id="emailAddress"
            />
          </div>
          <div className="">
            <StyledLabelAndError>
              <StyledInputLabel htmlFor="phoneNumber">
                Phone Number
              </StyledInputLabel>
              {errors.phoneNumber?.message && (
                <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
              )}
            </StyledLabelAndError>
            <StyledInput
              placeholder="e.g. +1 234 567 890"
              {...register("phoneNumber")}
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
        </StyledFormOne>
      </FormOneWrapper>
      <StepChanger formRef={formRef} />
    </FormAndStepChange>
  );
};

export default FormOneContainer;
