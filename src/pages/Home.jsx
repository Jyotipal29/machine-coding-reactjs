import componentList from "./card";
import Card from "../components/componentCard/Card";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1440px] mt-[50px] px-[20px] flex flex-col">
      <h1 className="text-2xl font-bold text-center">
        Reactjs Machine coding Round Questions
      </h1>

      <div className="flex justify-center">
        {" "}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-[20px] gap-5">
          {componentList.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
