import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";

import { Logo } from ".";

const Footer = () => {
  return (
    <footer className="bg-[#141D2E] p-12 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
        {/* first col: logo */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <Logo isLogoWhite={true} />
          <p className="text-lg font-normal">
            منتجات إلكترونية أنيقة ذات جودة ممتازة تناسب كل فرد من أفراد الأسرة.
            وبأسعار جد معقولة
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href=""
                className="flex items-center justify-center  rounded-md w-10 h-10 bg-[#FFFFFF21]"
              >
                <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-center text-white rounded-md w-10 h-10 bg-[#FFFFFF21]"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-center text-white rounded-md w-10 h-10 bg-[#FFFFFF21]"
              >
                {" "}
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center justify-center text-white rounded-md w-10 h-10 bg-[#FFFFFF21]"
              >
                {" "}
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* second col: contact us */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-8 lg:mx-auto">
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span>
                  <HiOutlineMail size={25} />
                </span>
                <span className="font-normal text-lg ">البريد الإلكتروني</span>
              </p>
              <a href="#" className="font-normal text-lg ">
                tasawaqonline@gmail.com
              </a>
            </li>
            <li className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span>
                  <BiPhoneCall size={25} />{" "}
                </span>
                <span className="font-normal text-lg ">اتصل بنا</span>
              </p>
              <a href="#" dir="ltr" className="font-normal text-lg ">
                + 966 5643 56688
              </a>
            </li>
          </ul>
        </div>

        {/* third col: subscribe */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          <p className="font-bold text-2xl">
            اشترك معنا ليصلك اخر العروض والخصومات والحصول عليي خصم 15%
          </p>
          <form>
            <div className="flex items-center flex-wrap gap-4">
              <label className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                placeholder="ادخل بريدك الاكتروني"
                className="w-[362px] h-[49px] border-none outline-none rounded-[26px] px-6"
              />
              <button
                className="flex items-center justify-center bg-custom-blue text-white text-[16px] font-bold
              w-[114px] h-[49px] rounded-[26px] border border-custom-blue px-6"
              >
                الاشتراك
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
