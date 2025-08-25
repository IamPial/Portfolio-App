const Button = ({ type, classStyle, text }) => {
  return (
    <button type={type} className={classStyle}>
      {text}
    </button>
  );
};
export default Button;
