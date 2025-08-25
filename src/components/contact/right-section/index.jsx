import Form from "./form";
import Paragraph from "../../paragraphs/paragraphs";

const RightSection = () => {
  return (
    <div className="pl-5 pt-5 w-full">
      <Paragraph
        classStyle="text-base text-gray-500 py-2  tracking-tight"
        text="There are many variations of passages of Lorem Ipsum availvable, but the majority have suffered alt."
      />
      <Form />
    </div>
  );
};

export default RightSection;
