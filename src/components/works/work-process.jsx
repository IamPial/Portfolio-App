const WorkProcess = ({
  mainStyle,
  spanStyle,
  icon,
  textColor,
  groupHover,
  titleStyle,
  title,
  descStyle,
  desc,
}) => {
  return (
    <div className={mainStyle}>
      <span className={spanStyle}>
        <i className={`${icon} ${textColor} ${groupHover}`}></i>
      </span>
      <h3 className={titleStyle}>{title}</h3>
      <p className={descStyle}>{desc}</p>
    </div>
  );
};
export default WorkProcess;
