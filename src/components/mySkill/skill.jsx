import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";

const Skill = ({ title, desc, cardStyle }) => {
  return (
    <div className={cardStyle}>
      <Heading
        classStyle="text-2xl font-bold text-gray-700 font-poppins"
        title={title}
      />
      <Paragraph
        classStyle="text-lg text-gray-500 mt-5 font-normal"
        text={desc}
      />
    </div>
  );
};

export default Skill;
