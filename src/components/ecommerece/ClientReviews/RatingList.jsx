import PropTypes from "prop-types";
import { memo, useMemo } from "react";

import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const RatingList = () => {
  const ratingsData = useMemo(
    () => [
      { id: 1, stars: 5, percentage: 60 },
      { id: 2, stars: 4, percentage: 34 },
      { id: 3, stars: 3, percentage: 4 },
      { id: 4, stars: 2, percentage: 2 },
      { id: 5, stars: 1, percentage: 0 },
    ],
    []
  );

  return (
    <div className="flex items-center gap-8 flex-1">
      <ul className="flex justify-between flex-col gap-2 flex-1">
        {ratingsData.map((rat) => (
          <RatingRow
            key={rat.id}
            stars={rat.stars}
            percentage={rat.percentage}
          />
        ))}
      </ul>
    </div>
  );
};

export default RatingList;

const RatingRow = memo(({ stars, percentage }) => {
  return (
    <li className="flex items-center justify-between gap-12 flex-1">
      <div className="flex items-center gap-2">
        <span>{stars}</span>

        <ul className="flex items-center gap-1 flex-row-reverse">
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index} className="">
              {index < stars ? (
                <FaStar className="text-custom-blue" />
              ) : (
                <CiStar className="text-[#AAAAAA]" />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 flex-1 ">
        <div className="w-full bg-[#AAAAAA59] rounded-lg ">
          <div
            className="bg-custom-blue h-2 rounded-lg transition-all duration-300"
            style={{ width: percentage }}
          ></div>
        </div>
        <div className="text-center text-[16px] font-medium text-[#6B6B6B] ">
          {percentage}%
        </div>
      </div>
    </li>
  );
});

RatingRow.displayName = "RatingRow";
RatingRow.propTypes = {
  stars: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
