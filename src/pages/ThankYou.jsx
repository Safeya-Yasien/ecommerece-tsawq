import { Link } from "react-router-dom";
import thankyou from "../assets/images/Confirmed-cuate 1.svg";
import phone from "../assets/images/apple-iphone.png";
import { CartItem } from "@/components/ecommerece";

const ThankYou = () => {
  return (
    <div className="mx-auto  md:w-[600px] flex flex-col gap-11">
      <div className="flex flex-col gap-4 text-center">
        <div className="mx-auto">
          <img
            src={thankyou}
            alt="ThankYou"
            loading="lazy"
            className="object-cover"
          />
        </div>
        <h1 className="text-[40px]">
          <span className="font-bold text-[#263238]">شكراً لك!</span> <br />
          <span className="text-custom-blue font-medium ">
            لقد تم تأكيد طلبك بنجاح!
          </span>
        </h1>
        <p className="font-medium text-lg text-[#8B939F]">
          لقد قمنا باستلام طلبك وسيتم العمل عليه. سنتواصل معك في اقرب وقت
          لاستلام طلبك.
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-white shadow-[0px_4px_24px_0px_#0000000D] rounded-3xl p-8">
        <h2 className="font-bold text-[26px] text-[#252534]">ملخص الطلب</h2>
        {/* 
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
              <span
                className="w-[27px] h-[27px] rounded-full bg-[#D9D9D9] text-white font-bold text-[22px]
              flex items-center justify-center absolute -top-3 -right-3"
              >
                1
              </span>
            </div>
            <div className="flex flex-col gap-4 justify-between md:w-72">
              <h2 className="font-medium text-sm md:text-lg text-[#505255]">
                آيفون 15 برو ماكس، سعة 256 جيجابايت، تيتانيوم طبيعي
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col md:flex-row">
            <span className="text-custom-gray font-bold text-[22px]">
              6500ج
            </span>{" "}
            <span className="text-[#808080] font-normal  text-[16px] line-through">
              7000
            </span>
          </div>
        </div> */}

        <CartItem showQuantityControls={false}/>

        {/* line */}
        <div className="border border-[#E5E9F1]  mt-4"></div>

        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">السلع</span>
            <span className="text-[#8B939F] font-medium text-lg">6500ج</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">
              مصاريف الشحن
            </span>
            <span className="text-[#8B939F] font-medium text-lg">00.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[#8B939F] font-medium text-lg">
              كوبون الخصم
            </span>
            <span className="text-[#8B939F] font-medium text-lg">00.00</span>
          </li>
        </ul>

        <div className="border border-[#E5E9F1]  mb-4"></div>

        {/* total */}
        <div className="flex items-center justify-between text-[#3A4353] font-bold text-[22px]">
          <span className="">إجمالي المبلغ</span>
          <span className="">6500ج</span>
        </div>
      </div>

      <Link
        to="/"
        className="bg-custom-blue text-white flex items-center justify-center flex-nowrap font-bold text-sm md:text-xl rounded-[60px] py-6 px-6 md:px-12 w-fit mx-auto"
      >
        العودة الي الصفحة الرئيسية
      </Link>
    </div>
  );
};
export default ThankYou;
