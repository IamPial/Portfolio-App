import Portfolio from "../portfolio-section";
import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";
import Button from "../buttons/button";

const MyPortfolio = () => {
  return (
    <div className="py-24 px-24">
      <div className="mb-12">
        <Heading
          classStyle="text-center text-4xl font-bold text-gray-800 font-poppins mb-8"
          title="Portfolio"
        />
        <Paragraph
          classStyle="text-center text-gray-500 px-84 font-poppins "
          text="There are many variations of passages of Lorem Ipsum availvable, but the majority have suffered alteration."
        />
      </div>
      <div>
        <Portfolio />
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          type="button"
          classStyle="px-4 py-2 rounded font-medium mt-8 bg-purple-500 hover:ring-2 hover:ring-purple-500 hover:bg-transparent hover:text-purple-500 text-white transition-all duration-300 cursor-pointer"
          text="More Project"
        />
      </div>
    </div>
  );
};

export default MyPortfolio;
