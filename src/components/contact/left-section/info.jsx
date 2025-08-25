import Heading from "../../headings/headings";
import Paragraph from "../../paragraphs/paragraphs";
import LeftSectionInfo from "./left-section-info";

const Info = ({ title, desc }) => {
  return (
    <div>
      <div>
        <Heading
          classStyle="text-4xl text-gray-800 font-bold font-poppins mb-4"
          title={title}
        />
        <Paragraph classStyle="text-base text-gray-500" text={desc} />
      </div>
      <LeftSectionInfo
        name="Address :"
        title="New Mexico 31134"
        mainStyle="bg-white rounded-lg p-4 group mb-5 flex transition-all duration-300 hover:shadow-lg"
        spanStyle="group text-2xl m-4 mb-5 px-6 py-4 rounded-lg bg-purple-200 group-hover:bg-purple-500 duration-300 inline-block"
        icon="fa-solid fa-location-dot"
        textColor="text-purple-500"
        groupHover="group-hover:text-white"
      />
      <LeftSectionInfo
        name="Email :"
        title="brooklyn@example.com"
        mainStyle="bg-white rounded-lg p-4 group mb-5 flex transition-all duration-300 hover:shadow-lg"
        spanStyle="group text-2xl m-4 mb-5 px-6 py-4 rounded-lg bg-purple-200 group-hover:bg-purple-500 duration-300 inline-block"
        icon="fa-solid fa-envelope-open"
        textColor="text-purple-500"
        groupHover="group-hover:text-white"
      />
      <LeftSectionInfo
        name="Call Me Now :"
        title="000-12470-4441"
        mainStyle="bg-white rounded-lg p-4 group mb-0 flex transition-all duration-300 hover:shadow-lg"
        spanStyle="group text-2xl m-4 mb-5 px-6 py-4 rounded-lg bg-purple-200 group-hover:bg-purple-500 duration-300 inline-block"
        icon="fa-solid fa-phone"
        textColor="text-purple-500"
        groupHover="group-hover:text-white"
      />
    </div>
  );
};
export default Info;
