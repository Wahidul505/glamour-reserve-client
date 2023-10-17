"use client";
import SubmitButton from "@/components/ui/Forms/SubmitButton";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import React from "react";
import CommonHeading from "@/components/ui/Heading/CommonHeading";
import { useSignInMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [signIn] = useSignInMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const result = await signIn({ ...data }).unwrap();
      storeUserInfo({ accessToken: result });
      if (result) {
        router.push("/");
        toast.success("Logged in");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
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
