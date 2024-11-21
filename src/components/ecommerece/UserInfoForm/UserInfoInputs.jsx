import { CiLocationOn } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import InputField from "./InputField";

const UserInfoInputs = () => {
  return (
    <div className="flex flex-col gap-3">
      <InputField
        id={"full-name"}
        label={"الأسم الكامل"}
        type={"text"}
        placeholder={"ادخل اسمك بالكامل"}
        icon={AiOutlineUser}
      />
      <InputField
        id={"phone-number"}
        label={"رقم الهاتف"}
        type={"text"}
        placeholder={"ادخل رقم الهاتف الخاص بك"}
        icon={FiPhone}
      />
      <InputField
        id={"address"}
        label={"العنوان"}
        type={"text"}
        placeholder={"ادخل عنوانك بالتفصيل"}
        icon={CiLocationOn}
      />
    </div>
  );
};
export default UserInfoInputs;
