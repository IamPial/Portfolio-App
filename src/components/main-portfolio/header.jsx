import ProfileLogo from "../profile-logo";
import HeaderNavBar from "../Navbar/header-navbar";
const Header = () => {
  return (
    <div className="flex justify-between mx-8 py-5 mb-2">
      <ProfileLogo headingStyle="text-2xl text-black font-bold font-poppins" />
      <HeaderNavBar />
    </div>
  );
};
export default Header;
