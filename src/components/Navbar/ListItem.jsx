const ListItem = ({ listStyle, name }) => {
  return (
    <li className={listStyle}>
      <a href="#">{name}</a>
    </li>
  );
};
export default ListItem;
