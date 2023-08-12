"use client";

import React, {
  createContext,
  type SetStateAction,
  useState,
  useContext,
} from "react";

type FormContextType = {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  step1Info: {
    name: string;
    emailAddress: string;
    phoneNumber: string;
  };
  setStep1Info: React.Dispatch<
    SetStateAction<{
      name: string;
      emailAddress: string;
      phoneNumber: string;
    }>
  >;
  monthly: boolean;
  setMonthly: React.Dispatch<SetStateAction<boolean>>;
  plan: PlanType;
  setPlan: React.Dispatch<SetStateAction<PlanType>>;
  addOns: AddOnsType;
  setAddOns: React.Dispatch<SetStateAction<AddOnsType>>;
  total: number;
  setTotal: React.Dispatch<SetStateAction<number>>;
};

type FormContextProviderProps = {
  children: React.ReactNode;
};

type PlanType = "arcade" | "advanced" | "pro";
type AddOnsType = {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
};

export const FormContext = createContext<FormContextType>(
  null as unknown as FormContextType
);

const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [step, setStep] = useState(1);
  const [step1Info, setStep1Info] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [monthly, setMonthly] = useState(true);
  const [plan, setPlan] = useState<PlanType>("arcade");
  const [addOns, setAddOns] = useState<AddOnsType>({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });
  const [total, setTotal] = useState(0);

  return (
    <FormContext.Provider
      value={{
        step,
        setStep,
        step1Info,
        setStep1Info,
        monthly,
        setMonthly,
        plan,
        setPlan,
        addOns,
        setAddOns,
        total,
        setTotal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
}

export default FormContextProvider;
