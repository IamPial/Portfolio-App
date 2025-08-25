import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";

const SingleTestimonial = ({ name, desc, role }) => {
  return (
    <div className="text-center space-y-3">
      <Paragraph
        classStyle="text-lg text-gray-600 px-40 mt-10 font-semibold "
        text={desc}
      />
      <Heading
        classStyle="text-xl text-gray-800 mt-8 font-bold font-poppins"
        title={name}
      />
      <span className="text-base text-gray-800  font-normal">{role}</span>
    </div>
  );
};
export default SingleTestimonial;
