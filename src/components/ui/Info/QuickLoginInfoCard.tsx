import React from "react";

const QuickLoginInfoCard = ({
  handleCopy,
  text,
}: {
  handleCopy: (arg: string) => void;
  text: string;
}) => {
  return (
    <div className="text-sm md:text-base lg:text-lg">
      Email:{" "}
      <span className="cursor-pointer" onClick={() => handleCopy(text)}>
        {text}
      </span>
    </div>
  );
};

export default QuickLoginInfoCard;
