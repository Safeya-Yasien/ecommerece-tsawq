import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import client from "../../../assets/images/client.svg";

const ClientReviewsSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        dir="rtl"
        className="w-full h-full mx-auto reviews-grid-swiper"
      >
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#F3F5F9] rounded-3xl p-4 !flex !flex-col gap-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[53px] h-[53px] ">
              <img
                src={client}
                className="w-full h-full"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-custom-blue font-medium text-sm">
                Mohamed Ahmed
              </h3>
              <p className="text-[#282A2B] font-normal text-[12px]">112/3/24</p>
            </div>
          </div>
          <p className="font-normal text-lg leading-6 text-[#262D35] text-right">
            &quot;تجربه رائعة ومميزه. لقد أعجبني هذا المنتج حقًا، ويستحق
            التجربة. اذا كنت ترغب بشرائه لا تتردد انا انصح به وبشدة&quot;
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default ClientReviewsSwiper;
