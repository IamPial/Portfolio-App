import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";
import Blogs from "../blog";

const MainBlogs = () => {
  return (
    <div className="py-28 px-28">
      <div>
        <Heading classStyle="text-center text-4xl font-poppins font-bold text-gray-900 mb-5">
          Blog
        </Heading>
        <Paragraph
          text="There are many variations of passages of Lorem Ipsum availvable, but the majority have suffered alteration."
          classStyle="text-center text-gray-500 px-80 font-poppins"
        />
      </div>

      {/* <Blogs Description/> */}
      <div className="mt-12">
        <Blogs />
      </div>
    </div>
  );
};
export default MainBlogs;
