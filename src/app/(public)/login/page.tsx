"use client";
import SubmitButton from "@/components/ui/Forms/SubmitButton";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import React from "react";
import CommonHeading from "@/components/ui/Heading/CommonHeading";

const LoginPage = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <CommonHeading label="Login to your Account" />
      <Form submitHandler={handleSubmit}>
        <div className="border border-black rounded flex flex-col w-2/3 lg:w-1/3 mx-auto">
          <FormInput
            name="email"
            type="email"
            placeholder="Your Email"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
        </div>
        <div className="flex justify-center">
          <SubmitButton label="Login" />
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
