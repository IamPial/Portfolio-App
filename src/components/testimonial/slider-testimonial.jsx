import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "./single-testimonial";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SliderTestimonial = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {" "}
      <div className="testimonial-section">
        <SwiperSlide>
          <SingleTestimonial
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique sunt ab dignissimos, facere dolores nobis tempora. Dolorem doloremque consequuntur nemo aliquid expedita architecto incidunt pariatur animi voluptatibus, iusto, vero qui vitae ad quis itaque odio, alias dicta inventore. Quae pariatur ducimus minus beatae sequi, quos facilis qui corrupti quia."
            name="Michael Christopher"
            role="Product Manager, Oracle Health Care"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleTestimonial
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique sunt ab dignissimos, facere dolores nobis tempora. Dolorem doloremque consequuntur nemo aliquid expedita architecto incidunt pariatur animi voluptatibus, iusto, vero qui vitae ad quis itaque odio, alias dicta inventore. Quae pariatur ducimus minus beatae sequi, quos facilis qui corrupti quia."
            name="Sanzida Akter"
            role="Marketing Manager, Google "
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleTestimonial
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique sunt ab dignissimos, facere dolores nobis tempora. Dolorem doloremque consequuntur nemo aliquid expedita architecto incidunt pariatur animi voluptatibus, iusto, vero qui vitae ad quis itaque odio, alias dicta inventore. Quae pariatur ducimus minus beatae sequi, quos facilis qui corrupti quia."
            name="Richard Joseph"
            role="Senior Software Engineer, Meta"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleTestimonial
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique sunt ab dignissimos, facere dolores nobis tempora. Dolorem doloremque consequuntur nemo aliquid expedita architecto incidunt pariatur animi voluptatibus, iusto, vero qui vitae ad quis itaque odio, alias dicta inventore. Quae pariatur ducimus minus beatae sequi, quos facilis qui corrupti quia."
            name="Samia Sara"
            role="Business Development Consultants, Uber"
          />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SliderTestimonial;
