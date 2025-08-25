const BlogDesc = ({
  classStyle,
  imgSrc,
  imgAlt,
  cardBody,
  spanDivStyle,
  spanFirstTitle,
  spanLastTitle,
  paraStyle,
  paraTitle,
}) => {
  return (
    <div className={classStyle}>
      <figure>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className={cardBody}>
        <div className={spanDivStyle}>
          <span>{spanFirstTitle}</span> / <span>{spanLastTitle}</span>
        </div>
        <p className={paraStyle}>
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing */}
          {paraTitle}
        </p>
      </div>
    </div>
  );
};
export default BlogDesc;
