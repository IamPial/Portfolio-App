// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import BlogDesc from "./blog-desc";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
const Blogs = () => {
  return (
    <div className="blogs-section">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={4}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="columns-4 mt-12">
          <SwiperSlide>
            {" "}
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-1.jpg"
              imgAlt="Blog1"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>

          <SwiperSlide>
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-2.jpg"
              imgAlt="Blog2"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-3.jpg"
              imgAlt="Blog3"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-4.jpg"
              imgAlt="Blog4"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-1.jpg"
              imgAlt="Blog1"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>

          <SwiperSlide>
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-2.jpg"
              imgAlt="Blog2"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-3.jpg"
              imgAlt="Blog3"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogDesc
              classStyle="card bg-base-100 w-68 shadow-sm"
              imgSrc="./src/assets/blog/blog-4.jpg"
              imgAlt="Blog4"
              cardBody="card-body bg-white"
              paraStyle="font-semibold text-gray-800 text-base"
              paraTitle="Lorem ipsum dolor, sit amet consectetur adipisicing"
              spanDivStyle="text-gray-500"
              spanFirstTitle="22 Oct, 2020"
              spanLastTitle="246 Comments"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Blogs;
