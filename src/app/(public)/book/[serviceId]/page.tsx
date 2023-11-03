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

const BookServicePage = ({ params }: { params: any }) => {
  const { serviceId } = params;
  const { data, isLoading } = useSingleServiceQuery(serviceId);
  const { userId } = getUserInfo() as any;
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [slot, setSlot] = useState("");
  const { data: slotData, isLoading: isSlotLoading } = useBookingsByDateQuery(
    selectedDate && format(selectedDate, "yyyy-MM-dd")
  );
  const [bookService] = useBookServiceMutation();
  const router = useRouter();

  if (isLoading || isSlotLoading) return <LoadingPage />;

  const handleSubmit = async (data: any) => {
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
      <div>
        <Heading label={data?.title} subLabel="Book your service" />
        <ServiceDetailsCard data={data} bookBtn={false} />

        {/* form  */}
        <div className="mt-8 md:mt-14">
          <Heading label="Provide Information" subLabel="Booking" />
          <Form submitHandler={handleSubmit} doReset={false}>
            <div className="flex flex-col items-center">
              <div className="w-full md:w-2/3 lg:w-1/3">
                <div className="mb-2 text-xl md:text-2xl text-[#92140C]">
                  Pick a date for booking
                </div>
                <div className="flex justify-center">
                  <DatePickerComponent
                    selectedDate={selectedDate as Date}
                    setSelectedDate={setSelectedDate}
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-1/3 mt-5">
                <div className="mb-3 text-xl md:text-2xl text-[#92140C]">
                  Pick a time for booking
                </div>
                <div className="flex justify-center">
                  <select
                    className="select w-56  md:w-72  rounded border border-solid border-[#FFCF99] focus:outline-none"
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
              </div>
              <div className="w-full mt-8 md:mt-12">
                <div className="mb-3 text-xl md:text-2xl text-[#92140C]">
                  Give Your Information
                </div>
                <FormInput name="contactNo" label="Contact Number" />
                <FormInput
                  name="alternativeContactNo"
                  label="Alternative Contact Number"
                />
                <PrimaryButton label="Book" type="submit" />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Redirect>
  );
};

export default BookServicePage;
