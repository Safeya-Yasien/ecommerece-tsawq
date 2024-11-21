import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ReviewForm = ({ handleReviewForm }) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-3xl p-8 border absolute z-50 w-[600px] left-1/2 top-1/2 -translate-x-1/2`}
    >
      <h2 className="font-bold text-[28px] text-[#212328] text-center mb-4">
        اكتب تقييمك!
      </h2>
      <form>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-1 text-center justify-center items-center">
            <p className="font-normal text-lg text-[#212328]">
              ماهو تقييمك لهذا المنتج؟
            </p>
            <ul className="flex items-center gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index}>
                  <CiStar size={34} color="#4B525E" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <textarea
              placeholder="اكتب تقييمك عن المنتج..."
              className="bg-[#F6F6F6] rounded-lg border border-[#F6F6F6] outline-none  w-full p-4 h-40 "
            ></textarea>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="full-name"
                className="font-medium text-sm text-[#333333]"
              >
                الأسم الكامل
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="ادخل اسمك بالكامل"
                className="border border-[#EDEDED] rounded-lg w-full p-4 text-sm outline-none"
              />
            </div>

            <button className="bg-custom-blue text-white rounded-[40px] font-bold text-lg h-12">
              إرسال التقييم
            </button>

            <button
              onClick={handleReviewForm}
              className="w-4 h-4 text-[#444444] absolute top-6 left-6"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  handleReviewForm: PropTypes.func.isRequired,
};

export default ReviewForm;
