import { Logo } from ".";

import { PiWechatLogoThin } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineSafety } from "react-icons/ai";

const CheckoutHeader = () => {
  return (
    <header className="h-24 flex items-center justify-between border-b border-[#EBEEFF] px-4 md:px-12">
      <div className="flex items-center gap-2">
        <AiOutlineSafety className="text-custom-blue " size={24} />
        <span className="text-custom-gray font-bold text-lg">دفع امن</span>
      </div>

      <div className="h-full flex items-center ">
        <Logo isLogoWhite={false} />
      </div>

      {/* icons */}
      <div className="flex items-center gap-5 md:gap-10">
        <button className="flex items-center gap-2" aria-label="support chat">
          <PiWechatLogoThin size={25} className="text-custom-blue" />
          <span className="text-custom-gray font-bold text-lg hidden md:block">
            الدعم الفني
          </span>
        </button>
        <button className="flex items-center gap-2" aria-label="support phone">
          <FiPhoneCall size={25} className="text-custom-blue" />
          <span className="text-custom-gray font-bold text-lg hidden md:block">
            54841
          </span>
        </button>
      </div>
    </header>
  );
};
export default CheckoutHeader;
