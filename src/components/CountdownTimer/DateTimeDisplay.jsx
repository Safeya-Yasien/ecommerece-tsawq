import React from "react";

const DateTimeDisplay = ({ value, isDanger }) => {
  return (
    <div
      className={`flex items-center justify-center bg-[#FF000021] w-8 h-8 rounded   ${isDanger} ? "text-red-500" : ""`}
    >
      <p className="text-[#FF2C2C] font-bold text-lg leading-6">{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
