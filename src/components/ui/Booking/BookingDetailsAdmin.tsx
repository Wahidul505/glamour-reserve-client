"use client";
import React, { useState } from "react";
import BookingInfoCard from "./BookingInfoCard";
import Modal from "../Modal/Modal";
import {
  useDeleteBookingMutation,
  useUpdateBookingStatusMutation,
} from "@/redux/api/bookingApi";
import { toast } from "react-hot-toast";

const BookingDetailsAdmin = ({ booking }: { booking: any }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const [deleteBooking] = useDeleteBookingMutation();

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

  return (
    <div
      style={{ border: "1px solid black" }}
      className="card card-side bg-base-100 z-0 mb-6"
    >
      <figure>
        <div className="bg-gray-400 h-full w-full"></div>
      </figure>
      <div className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3>Booking Details</h3>
            <div className="mt-6">
              <BookingInfoCard
                label="Service"
                data={booking?.makeoverService?.title}
              />
              <BookingInfoCard
                label="Category"
                data={booking?.makeoverService?.category?.title}
              />
              <BookingInfoCard label="Date" data={booking?.date} />
              <BookingInfoCard
                label="Slot"
                data={`${booking?.startTime} - ${booking?.endTime}`}
              />
              <BookingInfoCard label="Status" data={booking?.status} />
            </div>
          </div>
          <div>
            <h3>User Details</h3>
            <div className="mt-6">
              <BookingInfoCard label="Name" data={booking?.user?.name} />
              <BookingInfoCard label="Email" data={booking?.user?.email} />
              <BookingInfoCard
                label="Contact Number"
                data={booking?.contactNo}
              />
              <BookingInfoCard
                label="Alternative Contact Number"
                data={booking?.alternativeContactNo}
              />
              <BookingInfoCard label="Address" data={booking?.user?.address} />
            </div>
          </div>
        </div>
        <div className="card-actions justify-end">
          {booking?.status === "pending" && (
            <Modal
              htmlFor={`admin/booking/update/${booking?.id}`}
              label="Pending"
              btnSize="btn-sm"
              btnTheme="btn-accent"
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
          {booking?.status !== "confirmed" && (
            <Modal
              htmlFor={`admin/booking/delete/${booking?.id}`}
              label="Delete"
              btnSize="btn-sm"
              btnTheme="btn-error"
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
      </div>
    </div>
  );
};

export default BookingDetailsAdmin;
