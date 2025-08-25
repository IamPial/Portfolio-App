import WorkDescription from "../works";
import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";

const MyWorkProcess = () => {
  return (
    <div className="bg-gray-200 ">
      {/* color:"#f0f1f3" */}
      <div className="columns-2 px-28 py-28">
        <div className="mb-10 py-28">
          <Heading
            classStyle="text-4xl text-black font-bold font-poppins mb-8"
            title="Work Process"
          />
          <Paragraph
            classStyle="text-gray-600 mb-4"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nisi corporis pariatur rerum. Id aperiam debitis, ullam quod unde obcaecati tempora inventore corporis facilis temporibus dolorem molestiae earum. Minima, deleniti!"
          />
          <Paragraph
            classStyle="text-gray-600 mb-4 "
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus aperiam culpa, neque officia nihil."
          />
        </div>
        <div>
          <WorkDescription />
        </div>
      </div>
    </div>
  );
};

export default MyWorkProcess;
