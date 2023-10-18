import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type ISelectOptions = {
  value: string;
  label: string;
};

interface ISelectProps {
  name: string;
  options: ISelectOptions[];
  value?: string | string[] | undefined;
  defaultValue?: ISelectOptions;
  size?: "small" | "large";
  label?: string;
  placeholder?: string;
}

const FormSelectInput = ({
  name,
  options,
  defaultValue,
  value,
  size,
  label,
  placeholder,
}: ISelectProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : ""}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <select
            onChange={onChange}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              {label}
            </option>
            {options &&
              options?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          //   <Select
          //     onChange={onChange}
          //     options={options}
          //     value={value}
          //     defaultValue={defaultValue?.value}
          //     style={{ width: "100%" }}
          //     placeholder={placeholder}
          //   />
        )}
      />
    </>
  );
};

export default FormSelectInput;
