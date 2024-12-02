import { useState } from "react";

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(600);
  const [maxPrice, setMaxPrice] = useState(6500);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-custom-dark font-bold text-[20px]">السعر</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col flex-1 border border-[#EAEAEA] rounded-lg px-2 py-1">
          <label className="font-normal text-[12px] text-[#454545]">من</label>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinChange}
            className="w-full outline-none"
            min={0}
            max={maxPrice - 100}
          />
        </div>
        <div className="flex flex-col flex-1 border border-[#EAEAEA] rounded-lg px-2 py-1">
          <label className="font-normal text-[12px] text-[#454545]">حتي</label>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxChange}
            className="w-full  outline-none"
            min={minPrice + 100}
            max={10000}
          />
        </div>
      </div>
      {/* Range sliders */}
      <div className="relative w-full mt-4">
        <input
          type="range"
          min="600"
          max="6500"
          value={minPrice}
          onChange={handleMinChange}
          className="absolute z-10 w-full h-1 bg-transparent pointer-events-none appearance-none"
          style={{ direction: "ltr" }}
        />
        <input
          type="range"
          min="600"
          max="6500"
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute z-10 w-full h-1 bg-transparent pointer-events-none appearance-none"
          style={{ direction: "ltr" }}
        />
        {/* Custom track */}
        <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded"></div>
        <div
          className="absolute h-1 bg-blue-500 rounded"
          style={{
            left: `${((minPrice - 600) / 5900) * 100}%`,
            right: `${100 - ((maxPrice - 600) / 5900) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PriceRange;
