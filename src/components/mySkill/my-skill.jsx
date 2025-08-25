import Skill from "./skill";
const MySkill = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Skill
        cardStyle="w-full px-8 py-6 h-40 hover:border-s-5 transition-all hover:border-purple-600 rounded-lg bg-white hover:shadow-lg"
        title="User Experience (UX)"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem beatae incidunt enim vero repudiandae?"
      />
      <Skill
        cardStyle="w-full px-8 py-6 h-40 hover:border-s-5 transition-all hover:border-purple-600 rounded-lg bg-white hover:shadow-lg"
        title="User Interface (UI)"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem beatae incidunt enim vero repudiandae?"
      />
      <Skill
        cardStyle="w-full px-8 py-6 h-40 hover:border-s-5 transition-all hover:border-purple-600 rounded-lg bg-white hover:shadow-lg"
        title="Web Development"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem beatae incidunt enim vero repudiandae?"
      />
    </div>
  );
};
export default MySkill;
