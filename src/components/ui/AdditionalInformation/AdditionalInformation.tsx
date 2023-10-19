import React from "react";

interface IProps {
  information: string[];
  textSize: string;
}

const AdditionalInformation = ({ information, textSize }: IProps) => {
  return (
    <div>
      {information &&
        information?.map((info: string, index: number) => (
          <p key={index} className={textSize}>
            • {info}
          </p>
        ))}
    </div>
  );
};

export default AdditionalInformation;
