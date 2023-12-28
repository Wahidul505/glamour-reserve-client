"use client";
import LoadingPage from "@/app/loading";
import DatePickerComponent from "@/components/ui/DatePicker/DatePicker";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import SubmitButton from "@/components/ui/Forms/SubmitButton";
import Redirect from "@/components/ui/Redirect/Redirect";
import {
  useBookServiceMutation,
  useBookingsByDateQuery,
} from "@/redux/api/bookingApi";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import React, { useState } from "react";
import { format } from "date-fns";
import { slotOptions } from "@/constants/slotOptions";
import { checkAvailableSlots } from "@/utils/chechAvailableSlots";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Heading from "@/components/ui/Heading/Heading";
import PrimaryButton from "@/components/ui/Button/PrimaryButton";
import ServiceDetailsCard from "@/components/ui/Service/ServiceDetailsCard";
import { useProfileQuery } from "@/redux/api/profileApi";
import InfoHeading from "@/components/ui/Info/InfoHeading";
import { LuCheckSquare } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "@/schema/booking";

const BookServicePage = ({ params }: { params: any }) => {
  const { serviceId } = params;
  const { data, isLoading } = useSingleServiceQuery(serviceId);
  const { userId } = getUserInfo() as any;
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [slot, setSlot] = useState("");
  const { data: slotData, isLoading: isSlotLoading } = useBookingsByDateQuery(
    selectedDate && format(selectedDate, "yyyy-MM-dd")
  );
  const { data: userData, isLoading: isUserLoading } = useProfileQuery(userId);
  const [bookService] = useBookServiceMutation();
  const router = useRouter();

  if (isLoading || isSlotLoading || isUserLoading) return <LoadingPage />;

  const handleSubmit = async (data: any) => {
    delete data?.name;
    delete data?.email;
    if (!slot) {
      toast.error("Please select a Slot for booking");
      return;
    } else if (!selectedDate) {
      toast.error("Please select a Date for booking");
      return;
    }
    const selectedSlot = JSON.parse(slot);
    data.startTime = selectedSlot?.startTime;
    data.endTime = selectedSlot?.endTime;
    data.date = format(selectedDate, "yyyy-MM-dd");
    data.userId = userId;
    data.makeoverServiceId = serviceId;
    const res = await bookService(data).unwrap();
    if (res.id) {
      toast.success("Service Booked, wait for the confirmation");
      router.push("/booking");
    } else {
      toast.error("Try different slot to book");
    }
  };

  const availableSlots = checkAvailableSlots(slotOptions, slotData);

  return (
    <Redirect>
      <Form
        submitHandler={handleSubmit}
        doReset={false}
        resolver={yupResolver(bookingSchema)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-4 lg:m-5 border border-solid border-gray-500 rounded-2xl p-3 lg:p-4">
            <InfoHeading serial={1} label="Booking Overview" />
            <div className="text-lg md:text-2xl text-[#92140C]">Service</div>
            <div className="font-bold mt-1">{data?.title}</div>
            <div className="text-lg md:text-2xl text-[#92140C] mt-3 md:mt-4">
              Details
            </div>
            <div className="mt-1">
              {data?.information &&
                data?.information?.map((info: string, index: number) => (
                  <p
                    key={index}
                    className="text-sm md:text-base flex items-center"
                  >
                    <LuCheckSquare className="mr-2" /> {info}
                  </p>
                ))}
            </div>
            <div className="text-lg md:text-2xl text-[#92140C] mt-3 md:mt-4">
              Category
            </div>
            <p className="text-sm md:text-base">
              {data?.category?.title ? data?.category?.title : ""}
            </p>
          </div>

          <div className=" m-4 lg:m-5 border border-solid border-gray-500 rounded-2xl p-3 lg:p-4">
            <InfoHeading serial={2} label="Pick Booking Date" />
            <DatePickerComponent
              selectedDate={selectedDate as Date}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="m-4 lg:m-5 border border-solid border-gray-500 rounded-2xl p-3 lg:p-4">
            <InfoHeading serial={3} label="Pick Booking Slot" />
            <select
              className="select w-full box-border bg-transparent  rounded border border-solid border-gray-600 focus:outline-none"
              onChange={(e) => setSlot(e?.target?.value)}
              disabled={!selectedDate}
            >
              <option disabled selected>
                Pick a time slot
              </option>
              {availableSlots.map((option: any, index: number) => (
                <option
                  key={index}
                  value={JSON.stringify({
                    startTime: option?.startTime,
                    endTime: option?.endTime,
                  })}
                >
                  {option.startTime} - {option.endTime}
                </option>
              ))}
            </select>
          </div>
          <div className=" m-4 lg:m-5 border border-solid border-gray-500 rounded-2xl p-3 lg:p-4">
            <InfoHeading serial={4} label="Client Information" />
            <FormInput
              name="name"
              label="Your Name"
              disabled={true}
              value={userData?.name}
            />
            <FormInput
              name="email"
              label="Email Address"
              disabled={true}
              value={userData?.email}
            />
            <FormInput name="contactNo" label="Contact Number" />
            <FormInput
              name="alternativeContactNo"
              label="Alternative Contact Number"
            />
          </div>

          <div className=" m-4 lg:m-5 border border-solid border-gray-500 rounded-2xl p-3 lg:p-4">
            <InfoHeading serial={5} label="Price Summary" />
            <div className="flex items-start justify-between text-base md:text-lg lg:text-xl">
              <div className="font-bold">Total</div>
              <div className="text-end">
                <div className="font-bold">BDT {data?.price}</div>
                <div>Includes taxes and charges</div>
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-4 flex justify-end mr-4">
            <PrimaryButton label="Book" type="submit" />
          </div>
        </div>
      </Form>
    </Redirect>
  );
};

export default BookServicePage;
