import Info from "./info";
import SocialLinks from "../../social-links";
const LeftSection = () => {
  return (
    <div>
      <Info
        title="Let's discuss your Project"
        desc="There are many variations of passages of Lorem Ipsum availvable, but the majority have suffered alt."
      />
      <div className="mt-8">
        <SocialLinks />
      </div>
    </div>
  );
};
export default LeftSection;
