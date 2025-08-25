import ListItem from "./ListItem";

const HeaderNavBar = () => {
  return (
    <div className="flex items-center">
      <nav>
        <ul className="text-black flex items-center">
          <ListItem
            listStyle="m-2  hover:bg-indigo-600 hover:text-white px-4 py-1 rounded"
            name="Home"
          />
          <ListItem
            listStyle="m-2  hover:bg-indigo-600 hover:text-white px-4 py-1 rounded"
            name="About"
          />
          <ListItem
            listStyle="m-2  hover:bg-indigo-600 hover:text-white px-4 py-1 rounded"
            name="Process"
          />
          <ListItem
            listStyle="m-2  hover:bg-indigo-600 hover:text-white px-4 py-1 rounded"
            name="Portfolio"
          />
          <ListItem
            listStyle="m-2  hover:bg-indigo-600 hover:text-white px-4 py-1 rounded"
            name="Blog"
          />
          <ListItem
            listStyle="m-2  hover:bg-indigo-600 hover:text-white px-4 py-1 rounded"
            name="Services"
          />
          <ListItem
            listStyle="m-2  hover:bg-indigo-600 hover:text-white px-4 py-1 rounded"
            name="Contact"
          />
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavBar;
