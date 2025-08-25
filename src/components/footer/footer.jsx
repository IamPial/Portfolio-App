import ProfileLogo from "../profile-logo";
import ListItem from "../Navbar/ListItem";

const Footer = () => {
  return (
    <div className=" w-full  py-28 px-28 pb-20 bg-slate-800 absolute -z-10">
      <div className="flex items-center justify-between mt-20">
        <div>
          <ProfileLogo headingStyle="text-2xl text-white font-bold font-poppins" />
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="text-white flex items-center">
              <ListItem
                listStyle="m-2  hover:text-purple-500 px-2 py-1 "
                name="Home"
              />
              <ListItem
                listStyle="m-2  hover:text-purple-500 px-2 py-1 "
                name="About"
              />
              <ListItem
                listStyle="m-2  hover:text-purple-500 px-2 py-1 "
                name="Process"
              />
              <ListItem
                listStyle="m-2  hover:text-purple-500 px-2 py-1 "
                name="Portfolio"
              />
              <ListItem
                listStyle="m-2  hover:text-purple-500 px-2 py-1 "
                name="Blog"
              />
              <ListItem
                listStyle="m-2  hover:text-purple-500 px-2 py-1 "
                name="Services"
              />
              <ListItem
                listStyle="m-2  hover:text-purple-500 px-2 py-1 "
                name="Contact"
              />
            </ul>
          </nav>
        </div>
        <div>
          <span className="text-base text-white">
            Copyright &copy; 2025 picto.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
