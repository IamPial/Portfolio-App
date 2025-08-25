import Introduction from "../intro/Introduction";
import Heading from "../headings/headings";
import Button from "../buttons/button";
import HeroImg from "../hero-Images/Hero-Images";

const HeroSection = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-transparent via-[#f5dcfa] to-[#e0f9f3]  pt-18">
      <div className=" columns-2  mx-8 bg-white rounded-r-xl ">
        <div className="mt-10">
          <Heading classStyle="text-black font-bold font-poppins text-6xl mt-4 leading-normal">
            Hello, I'm <br /> Brooklyn Gilbert
          </Heading>
          <p className="text-gray-600  text-lg pt-5">
            I'm a Freelance{" "}
            <span className="bg-orange-500 text-black">UI/UX Designer</span> and{" "}
            <span className="bg-orange-500 text-black">Developer</span> based in
            London, England. <br /> I strives to build immersive and beautiful
            web applications through <br /> carefully crafted code and
            user-centric design.
          </p>
          <Button
            classStyle="px-4 py-2 rounded font-medium mt-8 bg-purple-500 hover:ring-2 hover:ring-purple-500 hover:bg-transparent hover:text-purple-500 text-white transition-all duration-300 cursor-pointer"
            text="Say Hello!"
            type="button"
          />
        </div>
        <div className="columns-3 mb-4 mt-28 text-center pt-2">
          <Introduction title="15 Y." text="Experience" />
          <Introduction title="250+" text="Project Completed" />
          <Introduction title="58" text="Happy Client" />
        </div>
        <div>
          <HeroImg src="/src/assets/person.png" alt="Brooklyn" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
