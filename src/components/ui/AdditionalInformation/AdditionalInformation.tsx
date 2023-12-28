import React from "react";
import { LuCheckSquare } from "react-icons/lu";

interface IProps {
  information: string[];
  textSize: string;
}

const AdditionalInformation = ({ information, textSize }: IProps) => {
  return (
    <div>
      {information &&
        information?.map((info: string, index: number) => (
          <p key={index} className={`${textSize} flex items-center`}>
            <LuCheckSquare className="mr-2" /> {info}
          </p>
        ))}
    </div>
  );
};

export default AdditionalInformation;
