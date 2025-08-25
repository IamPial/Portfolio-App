import WorkProcess from "./work-process";

const WorkDescription = () => {
  return (
    <div className="columns-2">
      <div className="-my-5">
        <WorkProcess
          mainStyle="bg-white aspect-square rounded-lg p-4 group mb-5"
          spanStyle=" group text-2xl m-4 mb-5 px-6 py-4 rounded-lg bg-purple-200 group-hover:bg-purple-500 duration-300 inline-block"
          icon="fa-solid fa-clipboard-list"
          textColor="text-purple-500"
          groupHover="group-hover:text-white"
          titleStyle="text-gray-900 font-bold text-xl mx-4 mb-5"
          title="1. Research"
          descStyle="text-gray-500 mx-4"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, vero."
        />
        <WorkProcess
          mainStyle="bg-white aspect-square rounded-lg p-4 group"
          spanStyle="group text-2xl m-4 mb-5 px-5 py-4 rounded-lg bg-purple-200 group-hover:bg-purple-500 duration-300 inline-block"
          icon="fa-solid fa-pen"
          textColor="text-purple-500"
          groupHover="group-hover:text-white"
          titleStyle="text-gray-900 font-bold text-xl mx-4 mb-5"
          title="2. Design"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, vero."
          descStyle="text-gray-500 mx-4"
        />
      </div>
      <div>
        <WorkProcess
          mainStyle="bg-white aspect-square rounded-lg p-4 group"
          spanStyle="group text-2xl m-4 mb-5 px-5 py-4 rounded-lg bg-purple-200 group-hover:bg-purple-500 duration-300 inline-block"
          icon="fa-solid fa-chart-line"
          textColor="text-purple-500 "
          groupHover="group-hover:text-white"
          titleStyle="text-gray-900 font-semibold text-xl mx-4 mb-5"
          title="3. Analyze"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, vero."
          descStyle="text-gray-500 mx-4"
        />

        <WorkProcess
          mainStyle="bg-white aspect-square rounded-lg p-4 group mt-5"
          spanStyle="group text-2xl m-4 mb-5 px-4.5 py-4 rounded-lg bg-purple-200 group-hover:bg-purple-500 duration-300 inline-block"
          icon="fa-solid fa-laptop"
          textColor="text-purple-500 "
          groupHover="group-hover:text-white "
          titleStyle="text-gray-900 font-semibold text-xl mx-4 mb-5"
          title="4. Launch"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, vero."
          descStyle="text-gray-500 mx-4"
        />
      </div>
    </div>
  );
};

export default WorkDescription;
