"use client";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface IProps {
  name?: string;
  label?: string;
  setDate?: any;
}

const DatePickerComponent = ({ name, label, setDate }: IProps) => {
  const [selected, setSelected] = useState<Date>();
  useEffect(() => {
    console.log(selected && format(selected as Date, "yyyy-MM-dd"));
  }, [selected]);

  return (
    <>
      {label ? label : ""}
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
    </>
  );
};

export default DatePickerComponent;
