import LeftSection from "./left-section";
import RightSection from "./right-section";

const MainForm = () => {
  return (
    <div className="columns-2 px-20 py-20">
      {/* Left Section */}
      <div className="inline-block">
        <LeftSection />
      </div>

      {/* Right Section */}
      <div>
        <RightSection />
      </div>
    </div>
  );
};
export default MainForm;
