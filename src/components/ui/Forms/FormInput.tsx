import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IInputProps {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type,
  value = "",
  id,
  placeholder,
  validation,
  label,
}: IInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(name, errors);

  return (
    <div className="mb-3">
      {label && <div className="mb-1"> {label ? label : ""}</div>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            {...field}
            value={value ? value : field?.value}
            className="input input-bordered w-11/12 rounded-none"
          />
        )}
      />
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </div>
  );
};

export default FormInput;
