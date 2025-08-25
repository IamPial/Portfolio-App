import Logo from "./logo";
const ProfileLogo = ({ headingStyle }) => {
  return (
    <Logo
      mainStyle="flex items-center gap-2"
      headingStyle={headingStyle}
      links="#"
      imgSrc="./src/assets/logo.png"
      width={"50px"}
      height={"50px"}
    />
  );
};
export default ProfileLogo;
