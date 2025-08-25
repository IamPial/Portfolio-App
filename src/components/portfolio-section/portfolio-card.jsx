import ArrowButton from "../buttons/arrow-button";
const PortfolioCard = ({
  classStyle,
  imgSrc,
  imgAlt,
  cardBody,
  roleStyle,
  role,
  titleStyle,
  title,
  descStyle,
  desc,
}) => {
  return (
    <div className={classStyle}>
      <figure>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className={cardBody}>
        <h4 className={roleStyle}>{role}</h4>
        <h2 className={titleStyle}>{title}</h2>
        <p className={descStyle}>{desc}</p>
        <div>
          <ArrowButton
            type="button"
            icon="fa-solid fa-arrow-right"
            iconStyle="text-purple-500 ml-2"
            groupHover="group-hover:text-white"
            name="Case Study"
            classStyle="group text-base px-5 py-3 rounded font-medium mt-8 hover:bg-purple-500 ring-2 ring-purple-500 bg-transparent text-purple-500 hover:text-white transition-all duration-300 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
