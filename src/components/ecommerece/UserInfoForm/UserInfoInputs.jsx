import { CiLocationOn } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import InputField from "./InputField";

const UserInfoInputs = ({ onInputChange }) => {
  return (
    <div className="flex flex-col gap-3">
      <InputField
        id={"full-name"}
        label={"الأسم الكامل"}
        type={"text"}
        placeholder={"ادخل اسمك بالكامل"}
        icon={AiOutlineUser}
        onChange={(e) => onInputChange("name", e.target.value)}
      />
      <InputField
        id={"phone-number"}
        label={"رقم الهاتف"}
        type={"text"}
        placeholder={"ادخل رقم الهاتف الخاص بك"}
        icon={FiPhone}
        onChange={(e) => onInputChange("phone", e.target.value)}
      />
      <InputField
        id={"address"}
        label={"العنوان"}
        type={"text"}
        placeholder={"ادخل عنوانك بالتفصيل"}
        icon={CiLocationOn}
        onChange={(e) => onInputChange("address", e.target.value)}
      />
    </div>
  );
};
export default UserInfoInputs;
