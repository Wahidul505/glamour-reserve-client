"use client";
import LoadingPage from "@/app/loading";
import DatePickerComponent from "@/components/ui/DatePicker/DatePicker";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import SubmitButton from "@/components/ui/Forms/SubmitButton";
import Redirect from "@/components/ui/Redirect/Redirect";
import { useBookingsByDateQuery } from "@/redux/api/bookingApi";
import { useProfileQuery } from "@/redux/api/profileApi";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const BookServicePage = ({ params }: { params: any }) => {
  const { serviceId } = params;
  const { data, isLoading } = useSingleServiceQuery(serviceId);
  const { userId } = getUserInfo() as any;
  const { data: userData, isLoading: isUserLoading } = useProfileQuery(userId);
  const [selectedDate, setSelectedDate] = useState("");
  const { data: slotData, isLoading: slotIsLoading } =
    useBookingsByDateQuery(selectedDate);

  if (isLoading || isUserLoading) return <LoadingPage />;

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  //   console.log(slotData);
  console.log(selectedDate);
  return (
    <Redirect>
      <div className="lg:px-16 px-4">
        <h1 className="mb-12">Book Your Service</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:text-base font-semibold uppercase">
          <div className="text-center">Service</div>
          <div className="text-center">Price</div>
          <div className="text-center hidden lg:block">Category</div>
        </div>
        <hr />
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 items-center">
          <div className="flex lg:items-center justify-center">
            <Image
              src={
                data?.image
                  ? data?.image
                  : "https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
              }
              alt=""
              width={100}
              height={100}
              className="hidden lg:block"
            />
            <div className="uppercase font-semibold lg:ml-3">{data?.title}</div>
          </div>
          <div className="text-center">{data?.price} TK</div>
          <div className="text-center hidden lg:block">
            {data?.category?.title}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:text-base font-semibold uppercase mt-10">
          <div className="text-center">Information</div>
          <div className="text-center hidden lg:block">
            Additional Information
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
          <div className="">
            {data?.information &&
              data?.information?.map((info: string, index: number) => (
                <p key={index} className="lg:text-lg">
                  • {info}
                </p>
              ))}
          </div>
          <div className="hidden lg:block">
            {data?.category?.information &&
              data?.category?.information?.map(
                (info: string, index: number) => (
                  <p key={index} className="lg:text-lg">
                    • {info}
                  </p>
                )
              )}
          </div>
        </div>

        {/* form  */}
        <div className="mt-10">
          <h1 className="mb-10">Booking Information</h1>
          <Form submitHandler={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 space-x-6">
              <DatePickerComponent />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-x-6">
              <FormInput name="contactNo" label="Contact Number" />
              <FormInput
                name="alternativeContactNo"
                label="Alternative Contact Number"
              />
            </div>
            <SubmitButton label="Book" />
          </Form>
        </div>
      </div>
    </Redirect>
  );
};

export default BookServicePage;
