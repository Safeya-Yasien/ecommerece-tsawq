import { UserInfoInputs } from "@components/ecommerece/UserInfoForm";

const Checkout = () => {
  return (
    <div className="flex gap-8">
      {/* right */}
      <div className="w-full md:w-[50%] flex flex-col gap-8 ">
        <div className="flex flex-col gap-4 border border-[#F0F3F6] shadow-[0px_4px_19px_0px_#0000000F] rounded-3xl p-8 ">
          <h2 className="text-[#252534] font-bold text-[26px]">
            يرجي إدخال بياناتك الشخصية
          </h2>
          <p className="font-medium text-lg text-[#7D7D7D]">
            قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.
          </p>

          <UserInfoInputs />
        </div>
        <div className="flex flex-col gap-4 border border-[#F0F3F6] shadow-[0px_4px_19px_0px_#0000000F] rounded-3xl p-8 ">
          <h2 className="text-[#252534] font-bold text-[26px]">
            يرجي إدخال بياناتك الشخصية
          </h2>
          <p className="font-medium text-lg text-[#7D7D7D]">
            قم بادخال بياناتك الشخصيه والتأكد منها لاتمام الطلب.
          </p>
        </div>
      </div>

      {/* left */}
      <div className="w-full md:w-[50%] flex flex-col gap-4 border border-[#F0F3F6] shadow-[0px_4px_19px_0px_#0000000F] rounded-3xl p-8 ">
        <h2 className="text-[#252534] font-bold text-[26px]">ملخص الطلب </h2>
      </div>
    </div>
  );
};

export default Checkout;
