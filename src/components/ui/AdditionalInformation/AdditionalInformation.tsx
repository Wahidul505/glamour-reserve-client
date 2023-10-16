import React from "react";

interface IProps {
  information: string[];
}

const AdditionalInformation = ({ information }: IProps) => {
  return (
    <div className="mt-3 lg:px-24 px-4">
      {information &&
        information?.map((info: string, index: number) => (
          <p key={index} className="lg:text-lg">
            • {info}
          </p>
        ))}
    </div>
  );
};

export default AdditionalInformation;
