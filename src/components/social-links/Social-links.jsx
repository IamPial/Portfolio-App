const SingleSocialLinks = (props) => {
  return (
    <a href={props.links} className={props.classStyle}>
      <i
        className={`${props.icon} ${props.iconColor} ${props.hoverBgColor}`}
      ></i>
    </a>
  );
};

export default SingleSocialLinks;
