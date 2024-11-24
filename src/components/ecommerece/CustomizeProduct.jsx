import { useCart } from "@/context/cart";
import { CiShoppingCart } from "react-icons/ci";

const CustomizeProduct = ({ item }) => {
  const { addItemToCart, decreaseItemQuantity } = useCart();

  return (
    <>
      {/* size + color */}
      <div className="flex flex-col gap-5">
        {/* size */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-lg text-custom-gray">المساحة:</h3>
          <ul className="flex items-center gap-3 flex-wrap">
            <li className="ring-2 ring-custom-blue rounded-lg text-custom-blue font-medium text-xs md:text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
          </ul>
        </div>

        {/* color */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-lg text-custom-gray">اللون:</h3>
          <ul className="flex items-center gap-3 flex-wrap">
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5  py-1 cursor-pointer">
              سيلفر{" "}
            </li>
            <li className="ring-2 ring-custom-blue rounded-lg text-custom-blue font-medium text-xs md:text-lg px-5 py-1 cursor-pointer">
              رمادي
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5  py-1 cursor-pointer">
              ازرق{" "}
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5  py-1 cursor-pointer">
              احمر{" "}
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-xs md:text-lg px-5  py-1 cursor-pointer">
              بنفسجي{" "}
            </li>
          </ul>
        </div>

        {/* add to cart */}
        <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
          <button
            className="ring-1 ring-[#ECECEC] bg-[#141D2E] px-6 w-full h-[49px] rounded-[61px] flex items-center justify-center
    text-white font-bold text-lg gap-1 flex-nowrap"
            aria-label="أضف إلى السلة"
            onClick={() => addItemToCart(item)}
          >
            <CiShoppingCart size={22} />
            <span>اضف الي السلة</span>
          </button>

          <div
            className="flex items-center ring-1 ring-[#ECECEC] h-[49px] rounded-[61px] px-4 w-full sm:w-auto justify-between"
            aria-label="اختيار الكمية"
          >
            <button
              className="w-[12px] text-custom-blue flex items-center justify-center"
              aria-label="زيادة الكمية"
              onClick={() => addItemToCart(item)}
            >
              +
            </button>
            <div className="hidden md:block border-l border-[#ECECEC] h-full mx-3"></div>
            <label className="sr-only" htmlFor="quantity-input">
              عدد
            </label>{" "}
            <input
              id="quantity-input"
              type="number"
              min={1}
              value={item.quantity}
              aria-label="عدد المنتجات"
              className="text-[#666666] font-medium text-lg outline-none border-none text-center h-full w-[91px]"
            />
            <div className="hidden md:block border-l border-[#ECECEC] h-full mx-3"></div>
            <button
              className="text-[#979797] w-[12px]"
              aria-label="تقليل الكمية"
              onClick={() => decreaseItemQuantity(item)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomizeProduct;
