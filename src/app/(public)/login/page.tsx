"use client";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import React, { useState } from "react";
import { useSignInMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/auth";
import Link from "next/link";
import Heading from "@/components/ui/Heading/Heading";
import PrimaryButton from "@/components/ui/Button/PrimaryButton";
import Modal from "@/components/ui/Modal/Modal";
import QuickLoginInfo from "@/components/ui/Info/QuickLoginInfo";

const LoginPage = () => {
  const [signIn] = useSignInMutation();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      const result = await signIn({ ...data }).unwrap();
      if (!result) {
        toast.error("Wrong User Credentials");
        return;
      }
      if (result) {
        storeUserInfo({ accessToken: result });
        router.back();
        toast.success("Logged in");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className=" relative">
      <Heading label="Login to your account" subLabel="Login" />
      <Form submitHandler={handleSubmit} resolver={yupResolver(loginSchema)}>
        <div className=" flex flex-col w-2/3 md:w-1/3 mx-auto">
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
          <Link href={"/signUp"} className="text-gray-600 -mt-2">
            New to Out Website?
          </Link>

          <div className="flex justify-between mt-3 md:mt-5 items-center">
            <Modal
              htmlFor="quick-login"
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              btnSize="btn-md"
              label="Quick Login"
            >
              <QuickLoginInfo />
            </Modal>
            <PrimaryButton label="Login" type="submit" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
