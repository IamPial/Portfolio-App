import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";
import ArrowButton from "../buttons/arrow-button";

const LetsWorkTogether = () => {
  return (
    <div className="bg-gray-900 py-28 px-28">
      <div>
        <Heading classStyle="text-center text-4xl font-poppins font-bold text-white leading-relaxed mb-5">
          Do you have Project idia? <br /> Let's discuss your porject!
        </Heading>
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum availvable, but the majority have suffered alteration."
          classStyle="text-center text-gray-500 px-80 font-poppins"
        />
      </div>
      <div className=" flex items-center justify-center">
        <ArrowButton
          type="button"
          icon="fa-solid fa-arrow-right"
          iconStyle="text-white ml-2 "
          groupHover="group-hover:text-purple-500"
          name="Let's work Together"
          classStyle="group text-base px-5 py-3 rounded font-medium mt-8 bg-purple-500 hover:ring-2 hover:ring-purple-500 hover:bg-white text-white hover:text-purple-500 transition-all duration-300 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default LetsWorkTogether;
