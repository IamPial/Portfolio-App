const FormInput = ({ inputStyle, type, placeholder, name }) => {
  return (
    <input
      className={inputStyle}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default FormInput;
