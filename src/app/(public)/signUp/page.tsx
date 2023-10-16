"use client";
import SubmitButton from "@/components/ui/Forms/SubmitButton";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import React from "react";
import CommonHeading from "@/components/ui/Heading/CommonHeading";

const SignUpPage = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <CommonHeading label="Create Your Account" />
      <Form submitHandler={handleSubmit}>
        <div className="border border-black rounded flex flex-col w-2/3 lg:w-1/3 mx-auto">
          <FormInput
            name="name"
            type="text"
            placeholder="Your Name"
            label="Name"
          />
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
          <FormInput
            name="phone"
            placeholder="Your Phone Number"
            label="Phone Number"
          />
          <FormInput
            name="address"
            placeholder="Your Address"
            label="Address"
          />
        </div>
        <div className="flex justify-center">
          <SubmitButton label="Create Account" />
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
