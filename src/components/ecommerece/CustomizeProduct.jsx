import { CiShoppingCart } from "react-icons/ci";

const CustomizeProduct = () => {
  return (
    <>
      {/* title + price */}
      <div className="flex flex-col gap-4">
        <h2 className="text-custom-gray text-3xl font-medium">
          آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي، 5G مع تطبيق
          FaceTime{" "}
        </h2>
        <div className="flex items-center gap-6">
          <p className="text-custom-dark font-bold text-[32px]">
            6500ج
            {""}{" "}
            <span className="line-through text-[#808080] font-normal text-[22px]">
              7000
            </span>
          </p>
          <div className="w-[99px] h-[31px] flex items-center justify-center bg-[#E0E5FF] rounded-lg text-custom-blue text-lg font-bold">
            وفر 1000ج
          </div>
        </div>
      </div>

      {/* size + color */}
      <div className="flex flex-col gap-5">
        {/* size */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-lg text-custom-gray">المساحة:</h3>
          <ul className="flex items-center gap-3 flex-wrap">
            <li className="ring-2 ring-custom-blue rounded-lg text-custom-blue font-medium text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5 py-1 cursor-pointer">
              20x30
            </li>
          </ul>
        </div>

        {/* color */}
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-lg text-custom-gray">اللون:</h3>
          <ul className="flex items-center gap-3 flex-wrap">
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5  py-1 cursor-pointer">
              سيلفر{" "}
            </li>
            <li className="ring-2 ring-custom-blue rounded-lg text-custom-blue font-medium text-lg px-5 py-1 cursor-pointer">
              رمادي
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5  py-1 cursor-pointer">
              ازرق{" "}
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5  py-1 cursor-pointer">
              احمر{" "}
            </li>
            <li className="ring-1 ring-[#CFD7E5] rounded-lg text-[#6E768F] font-normal text-lg px-5  py-1 cursor-pointer">
              بنفسجي{" "}
            </li>
          </ul>
        </div>

        {/* add to cart */}
        <div className="flex items-center gap-4 ">
          <button
            className="ring-1 ring-[#ECECEC] bg-[#141D2E] w-[358px] h-[49px] rounded-[61px] flex items-center justify-center
            text-white font-bold text-lg gap-1"
          >
            <CiShoppingCart size={22} /> <span>اضف الي السلة </span>
          </button>
          <div className="flex items-center ring-1 ring-[#ECECEC] h-[49px] rounded-[61px] px-4">
            <button className="w-[12px] text-custom-blue flex items-center justify-center">
              +
            </button>
            <div className="hidden md:block border-l border-[#ECECEC] h-full mx-3"></div>
            <input
              type="number"
              defaultValue={1}
              className="text-[#666666] font-medium text-lg outline-none border-none text-center h-full w-[91px]"
            />
            <div className="hidden md:block border-l border-[#ECECEC] h-full mx-3"></div>
            <button className="text-[#979797] w-[12px] ">-</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomizeProduct;
