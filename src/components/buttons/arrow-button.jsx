const ArrowButton = ({
  icon,
  iconStyle,
  groupHover,
  classStyle,
  name,
  type,
}) => {
  return (
    <button className={classStyle} type={type}>
      {name} <i className={`${icon} ${iconStyle} ${groupHover}`}></i>
    </button>
  );
};

export default ArrowButton;
