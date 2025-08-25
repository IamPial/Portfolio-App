import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";
import Button from "../buttons/button";
import MySkill from "./my-skill";

const WhatIDo = () => {
  return (
    <div className="columns-2 px-28 pt-28 pb-20">
      <div className="mb-10 py-28 pr-16">
        <Heading
          classStyle="text-4xl text-black font-bold font-poppins mb-8"
          title="What I do?"
        />
        <Paragraph
          classStyle="text-gray-600 mb-4"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nisi corporis pariatur rerum. Id aperiam debitis, ullam quod  obcaecati tempora inventore corporis facilis temporibus dolorem molestiae!asdf asdfa"
        />
        <Paragraph
          classStyle="text-gray-600 mb-4 "
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus aperiam culpa, neque officia nihil."
        />
        <Button
          type="button"
          classStyle="px-4 py-2 rounded font-medium mt-8 bg-purple-500 hover:ring-2 hover:ring-purple-500 hover:bg-transparent hover:text-purple-500 text-white transition-all duration-300 cursor-pointer"
          text="Say Hello!"
        />
      </div>
      <div>
        <MySkill />
      </div>
    </div>
  );
};

export default WhatIDo;
