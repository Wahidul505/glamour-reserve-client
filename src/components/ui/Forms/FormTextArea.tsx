import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormTextArea = ({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  label,
}: IProps) => {
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
          <textarea
            placeholder={placeholder}
            {...field}
            value={value ? value : field?.value}
            className="textarea textarea-bordered w-11/12 rounded-none"
          />
        )}
      />
      {errorMessage && (
        <small className="text-red-500 mt-1">{errorMessage}</small>
      )}
    </div>
  );
};

export default FormTextArea;
