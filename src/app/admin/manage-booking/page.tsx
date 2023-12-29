"use client";
import LoadingPage from "@/app/loading";
import BookingDetailsAdmin from "@/components/ui/Booking/BookingDetailsAdmin";
import Modal from "@/components/ui/Modal/Modal";
import CustomTable from "@/components/ui/Table/CustomTable";
import { useDebounce } from "@/hooks/useDebounce";
import {
  useAllBookingsQuery,
  useBookingsByDateQuery,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
  useUpdateBookingStatusMutation,
} from "@/redux/api/bookingApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import BookingInfoCard from "@/components/ui/Booking/BookingInfoCard";
import DatePickerComponent from "@/components/ui/DatePicker/DatePicker";
import { checkAvailableSlots } from "@/utils/chechAvailableSlots";
import { slotOptions } from "@/constants/slotOptions";

const columns = [
  { key: "bookingId", label: "Booking Id" },
  { key: "service", label: "Service" },
  { key: "date", label: "Booking Date" },
  { key: "slot", label: "Booking Slot" },
  { key: "status", label: "Status" },
];

const ManageBookingPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [slot, setSlot] = useState("");
  const router = useRouter();
  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const [deleteBooking] = useDeleteBookingMutation();
  const [updateBooking] = useUpdateBookingMutation();
  const { data: slotData, isLoading: isSlotLoading } = useBookingsByDateQuery(
    selectedDate && format(selectedDate, "yyyy-MM-dd")
  );

  const handleCopyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard");
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    const res = await updateBookingStatus({
      id: id,
      payload: { status: status },
    });
    toast.success(`Status updated to "${status.toUpperCase()}"`);
  };

  const handleDeleteBooking = async (id: string) => {
    const res = await deleteBooking(id);
    toast.success("Booking Deleted");
    setModalOpen(false);
  };

  const handleAdjustSchedule = async (id: string) => {
    if (!slot) {
      toast.error("Please select a Slot for booking");
      return;
    } else if (!selectedDate) {
      toast.error("Please select a Date for booking");
      return;
    }
    const selectedSlot = JSON.parse(slot);
    const payload = {
      date: format(selectedDate, "yyyy-MM-dd"),
      startTime: selectedSlot?.startTime,
      endTime: selectedSlot?.endTime,
      status: "confirmed",
    };
    const res = await updateBooking({ id: id, payload: payload }).unwrap();
    if (res?.id) toast.success("Rescheduled");
    else toast.error("Something went wrong");
    setModalOpen(false);
  };

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debounce = useDebounce(searchTerm, 600);

  if (!!debounce) query["search"] = searchTerm;

  const { data, isLoading } = useAllBookingsQuery({ ...query });

  if (isLoading || isSlotLoading) return <LoadingPage />;

  const availableSlots = checkAvailableSlots(slotOptions, slotData);

  if (data?.length < 1) return <h2 className="text-center">No Bookings</h2>;

  const bookingData = data?.map((booking: any) => ({
    bookingId: (
      <div
        className="cursor-pointer"
        onClick={() => handleCopyToClipBoard(booking?.id)}
      >
        {booking?.id?.slice(0, 7)}...
      </div>
    ),
    service: booking?.makeoverService?.title,
    date: booking?.date,
    slot: `${booking?.startTime} - ${booking?.endTime}`,
    status: booking?.status,
    actionButton: (
      <div className="flex lg:flex-row flex-col">
        <Modal
          htmlFor={`admin/manage-booking/view/${booking?.id}`}
          label="View"
          btnSize="btn-xs"
          btnTheme="btn-neutral mb-1 lg:mb-0 lg:mr-1"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        >
          <BookingDetailsAdmin booking={booking} />
        </Modal>
        {booking?.status === "pending" && (
          <Modal
            htmlFor={`admin/manage-booking/update/${booking?.id}`}
            label="Pending"
            btnSize="btn-xs"
            btnTheme="btn-accent mb-1 lg:mb-0 lg:mr-1"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          >
            <div>
              <h3 className="text-center">Update Booking Status</h3>
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => handleUpdateStatus(booking?.id, "confirmed")}
                  className="btn btn-accent btn-sm mx-2"
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleUpdateStatus(booking?.id, "rejected")}
                  className="btn btn-error btn-sm mx-2"
                >
                  Reject
                </button>
              </div>
            </div>
          </Modal>
        )}
        {booking?.status === "pending" && (
          <Modal
            htmlFor={`admin/manage-booking/schedule/${booking?.id}`}
            label="Reschedule"
            btnSize="btn-xs"
            btnTheme="btn-info mb-1 lg:mb-0 lg:mr-1"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          >
            <div>
              <h3 className="mb-4">Current Schedule</h3>
              <div className="grid grid-cols-2">
                <BookingInfoCard label="Date" data={booking?.date} />
                <BookingInfoCard
                  label="Slot"
                  data={`${booking?.startTime} - ${booking?.endTime}`}
                />
              </div>
              <h3 className="my-4">Adjust Schedule</h3>
              <div className="flex flex-col items-center">
                <DatePickerComponent
                  label="Pick a Date for booking"
                  selectedDate={selectedDate as Date}
                  setSelectedDate={setSelectedDate}
                />
                <div className="flex items-center my-4 lg:my-0">
                  <select
                    className="select select-bordered w-full max-w-xs"
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
                <button
                  className="mt-4 btn"
                  onClick={() => handleAdjustSchedule(booking?.id)}
                >
                  Reschedule and Confirm
                </button>
              </div>
            </div>
          </Modal>
        )}
        {booking?.status !== "confirmed" && (
          <Modal
            htmlFor={`admin/manage-booking/delete/${booking?.id}`}
            label="Delete"
            btnSize="btn-xs"
            btnTheme="btn-error mb-1 lg:mb-0 lg:mr-1"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          >
            <div>
              <h3 className="text-center">Confirm Booking Deletion</h3>
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => handleDeleteBooking(booking?.id)}
                  className="btn btn-error btn-sm mx-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    ),
  }));

  return (
    <div>
      {/* {data &&
        data?.map((booking: any) => (
          <BookingDetailsAdmin key={booking?.id} booking={booking} />
        ))} */}
      <CustomTable columns={columns} data={bookingData} />
    </div>
  );
};

export default ManageBookingPage;
