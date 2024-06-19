// eslint-disable-next-line react/prop-types
import { Link, useNavigate } from "react-router-dom";
const Card = ({ item }) => {
  const navigate = useNavigate();
  console.log(item, "item");
  return (
    <div className="w-[300px] h-[250px] bg-white border border-gray-200 shadow-md">
      {/* <Link to={`${item.path}`}> */}
      <p
        className="flex justify-center items-center h-full text-2xl font-bold"
        onClick={() => navigate(`${item.path}`)}
      >
        {item?.name}
      </p>
      {/* </Link> */}
    </div>
  );
};

export default Card;
