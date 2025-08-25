import Heading from "../headings/headings";
const Logo = ({ mainStyle, links, imgSrc, width, height, headingStyle }) => {
  return (
    <div className={mainStyle}>
      <a href={links}>
        <img src={imgSrc} width={width} height={height} />
      </a>
      <Heading classStyle={headingStyle} title="Brooklyn" />
    </div>
  );
};
export default Logo;
