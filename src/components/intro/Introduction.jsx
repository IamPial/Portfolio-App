const Introduction = (props) => {
  return (
    <div className="bg-pink-100 p-2 rounded-lg">
      <h2 className="font-bold text-3xl mb-2 text-gray-700">{props.title}</h2>
      <p className="text-gray-500">{props.text}</p>
    </div>
  );
};
export default Introduction;
