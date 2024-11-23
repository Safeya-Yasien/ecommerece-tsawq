import { useState } from "react";
import phone from "./../../assets/images/apple-iphone.png";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col md:flex-row  gap-6">
        <div
          className="shadow-[0px_0.76px_3.65px_0px_#0000000D] border border-[#E1E1E1] bg-[#F4F4F4] rounded-2xl p-8
        w-28 h-28 flex items-center justify-center  relative"
        >
          <img
            src={phone}
            alt="phone"
            loading="lazy"
            className="w-[100px] h-[100px]"
          />
        </div>
        <div className="flex flex-col gap-4 justify-between ">
          <h2 className="font-medium text-sm md:text-lg text-[#505255]">
            آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
          </h2>

          <div className="flex items-center w-[86px] h-[22px]">
            <button
              aria-label="زيادة الكمية"
              className="bg-custom-blue text-white w-8 h-5 rounded-full"
              onClick={handleIncrement}
            >
              +
            </button>
            <input
              type="number"
              aria-label="كمية المنتج"
              min={1}
              value={quantity}
              className="outline-none text-center w-full"
              onChange={() => setQuantity(value)}
            />
            <button
              aria-label="تقليل الكمية"
              className="bg-[#A1A1A3] text-[#EDEDED] w-8 h-5 rounded-full "
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="flex items-center justify-center flex-col md:flex-row">
        <span className="text-custom-gray font-bold text-[22px]">6500ج</span>{" "}
        <span className="text-[#808080] font-normal  text-[16px] line-through">
          7000
        </span>
      </div>
    </div>
  );
};
export default CartItem;
