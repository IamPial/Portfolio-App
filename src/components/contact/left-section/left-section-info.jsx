import Paragraph from "../../paragraphs/paragraphs";
import Heading from "../../headings/headings";

const LeftSectionInfo = ({
  name,
  title,
  mainStyle,
  spanStyle,
  icon,
  textColor,
  groupHover,
}) => {
  return (
    <aside>
      <div className={mainStyle}>
        <span className={spanStyle}>
          <i class={`${icon} ${textColor} ${groupHover}`}></i>
        </span>
        <div className="mt-4">
          <Paragraph classStyle="text-base text-gray-500 mb-2 " text={name} />
          <Heading
            classStyle="text-base font-bold text-gray-800 font-poppins"
            title={title}
          />
        </div>
      </div>
    </aside>
  );
};
export default LeftSectionInfo;
