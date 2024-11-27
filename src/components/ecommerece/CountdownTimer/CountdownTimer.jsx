import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "@/hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="text-center p-8 border border-[#ebebeb] rounded-s m-2">
      <span className="text-[2.5rem] font-bold text-red-600">Expired!!!</span>
      <p className="text-2xl">Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex items-center gap-3 self-baseline">
      <span className="text-custom-gray font-normal text-lg">ينتهي في</span>
      <div className="flex justify-center items-center gap-2   text-[#FF2C2C] ">
        <DateTimeDisplay value={seconds} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={hours} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
