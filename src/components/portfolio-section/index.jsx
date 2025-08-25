import PortfolioCard from "./portfolio-card";

const Portfolio = () => {
  return (
    <>
      <div className="columns-3">
        <PortfolioCard
          classStyle="card bg-white w-96 shadow-sm  hover:shadow-lg transition duration-300"
          imgSrc="./src/assets/portfolio-images/card-1.png"
          imgAlt="Scenario1"
          cardBody="card-body"
          role="UI-UX Designer"
          roleStyle="text-xs text-gray-400 font-bold font-poppins uppercase"
          title="Product Admin Dashboard"
          titleStyle="card-title text-gray-800 font-poppins font-bold"
          desc="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          descStyle="text-gray-500"
        />
        <PortfolioCard
          classStyle="card bg-white w-96 shadow-sm hover:shadow-lg transition duration-300"
          imgSrc="./src/assets/portfolio-images/card-2.png"
          imgAlt="Scenario2"
          cardBody="card-body"
          role="UI-UX Designer"
          roleStyle="text-xs text-gray-400 font-bold font-poppins uppercase"
          title="Product Admin Dashboard"
          titleStyle="card-title text-gray-800 font-poppins font-bold"
          desc="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          descStyle="text-gray-500"
        />
        <PortfolioCard
          classStyle="card bg-white w-96 shadow-sm hover:shadow-lg transition duration-300"
          imgSrc="./src/assets/portfolio-images/card-3.png"
          imgAlt="Scenario1"
          cardBody="card-body"
          role="UI-UX Designer"
          roleStyle="text-xs text-gray-400 font-bold font-poppins uppercase"
          title="Product Admin Dashboard"
          titleStyle="card-title text-gray-800 font-poppins font-bold"
          desc="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          descStyle="text-gray-500"
        />
      </div>

      <div className="columns-3 mt-6">
        <PortfolioCard
          classStyle="card bg-white w-96 shadow-sm hover:shadow-lg transition duration-300"
          imgSrc="./src/assets/portfolio-images/card-4.png"
          imgAlt="Scenario1"
          cardBody="card-body"
          role="UI-UX Designer"
          roleStyle="text-xs text-gray-400 font-bold font-poppins uppercase"
          title="Product Admin Dashboard"
          titleStyle="card-title text-gray-800 font-poppins font-bold"
          desc="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          descStyle="text-gray-500"
        />
        <PortfolioCard
          classStyle="card bg-white w-96 shadow-sm hover:shadow-lg transition duration-300"
          imgSrc="./src/assets/portfolio-images/card-5.png"
          imgAlt="Scenario1"
          cardBody="card-body"
          role="UI-UX Designer"
          roleStyle="text-xs text-gray-400 font-bold font-poppins uppercase"
          title="Product Admin Dashboard"
          titleStyle="card-title text-gray-800 font-poppins font-bold"
          desc="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          descStyle="text-gray-500"
        />
        <PortfolioCard
          classStyle="card bg-white w-96 shadow-sm hover:shadow-lg transition duration-300"
          imgSrc="./src/assets/portfolio-images/card-6.png"
          imgAlt="Scenario1"
          cardBody="card-body"
          role="UI-UX Designer"
          roleStyle="text-xs text-gray-400 font-bold font-poppins uppercase"
          title="Product Admin Dashboard"
          titleStyle="card-title text-gray-800 font-poppins font-bold"
          desc="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          descStyle="text-gray-500"
        />
      </div>
    </>
  );
};
export default Portfolio;
