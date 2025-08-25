import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";
import SliderTestimonial from "./slider-testimonial";

const Testimonial = ({ title, desc }) => {
  return (
    <div>
      <div className="text-center">
        <Heading
          classStyle="text-4xl text-gray-800 font-bold font-poppins mb-8"
          title={title}
        />
        <Paragraph
          classStyle="text-base text-gray-500 px-80 font-normal"
          text={desc}
        />
      </div>
      <SliderTestimonial />
    </div>
  );
};
export default Testimonial;
