import HeroImg from "../hero-Images/Hero-Images";
import SocialLinks from "../social-links";
import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";
import Button from "../buttons/button";

const Profession = () => {
  return (
    <div className="w-full  bg-gradient-to-b from-transparent via-[#e0f9f3] to-[#e9d699] pt-1 ">
      <div className="columns-2  rounded-xl shadow-2xl py-28 px-28 bg-white mx-8 mt-28 ">
        {/* For Left Section */}
        <div className="relative">
          <div className="bg-gray-200 text-center rounded-xl profession-img">
            <HeroImg src="/src/assets/images/person.png" alt="Brooklyn" />
            <div className="profession-link rounded-lg">
              <div className="flex items-center justify-between shadow-lg p-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* For Right Section */}
        <div className="p-6">
          <div className=" space-y-3 ">
            <Heading classStyle="text-3xl font-bold font-poppins text-black mb-5 leading-relaxed">
              I am Professional User <br /> Experience Designer
            </Heading>

            <Paragraph
              classStyle="tracking-wide text-gray-500"
              text=" I design and develop services for customerss specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences."
            />
            <Paragraph
              classStyle="tracking-wide text-gray-500"
              text="I design and develop sercices for customers specializing
                creating stylish, modern websites, web services."
            />
          </div>
          <div className="flex items-center mt-7">
            <Button
              type="button"
              classStyle="px-4 py-2 rounded font-medium mt-4 mr-4 bg-purple-500 hover:ring-2 hover:ring-purple-500 hover:bg-transparent hover:text-purple-500 text-white transition-all duration-300 cursor-pointer"
              text="My Project"
            />
            <button
              type="button"
              className="px-4 py-2 rounded font-medium mt-4  bg-purple-500 hover:ring-2 hover:ring-purple-500 hover:bg-transparent hover:text-purple-500 text-white transition-all duration-300 cursor-pointer"
            >
              <i className="fa-solid fa-download mr-2"></i>Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profession;
