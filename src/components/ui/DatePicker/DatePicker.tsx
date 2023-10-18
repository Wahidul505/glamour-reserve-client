"use client";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface IProps {
  label?: string;
  selectedDate: Date;
  setSelectedDate: any;
}

const DatePickerComponent = ({
  label,
  selectedDate,
  setSelectedDate,
}: IProps) => {
  // useEffect(() => {
  //   selected && setDate(format(selected as Date, "yyyy-MM-dd"));
  // }, [selected, setDate]);

  return (
    <div>
      <div className="mb-2 text-lg">{label ? label : ""}</div>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
};

export default DatePickerComponent;
