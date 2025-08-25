const Heading = ({ classStyle, title, children }) => {
  if (children) {
    return <h2 className={classStyle}>{children}</h2>;
  }
  return <h2 className={classStyle}>{title}</h2>;
};
export default Heading;
