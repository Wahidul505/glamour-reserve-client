"use client";
import React, { ReactElement, ReactNode, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type IFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type IFormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & IFormConfig;

const Form = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
}: IFormProps) => {
  const formConfig: IFormConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm<IFormProps>(formConfig);
  const { handleSubmit, reset } = methods;
  const watch = methods.watch();
  console.log(watch);

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
