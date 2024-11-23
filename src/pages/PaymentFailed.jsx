import { Link } from "react-router-dom";
import paymentFailed from "../assets/images/payment-failed.svg";

const PaymentFailed = () => {
  return (
    <div className="mx-auto  md:w-[600px] flex flex-col gap-11">
      <div className="flex flex-col gap-4 text-center">
        <div className="mx-auto">
          <img
            src={paymentFailed}
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

      <div className="flex items-center gap-4">
        <Link
          to="/checkout"
          className="bg-custom-blue text-white flex items-center justify-center flex-nowrap font-bold text-sm md:text-xl rounded-[60px] py-6 px-6 md:px-12 w-fit mx-auto"
        >
          العودة الي الدفع{" "}
        </Link>

        <Link
          to="/"
          className="bg-[#E8E8E8] text-custom-blue flex items-center justify-center flex-nowrap font-bold text-sm md:text-xl rounded-[60px] py-6 px-6 md:px-12 w-fit mx-auto"
        >
          العودة الي الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
