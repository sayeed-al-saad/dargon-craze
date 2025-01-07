import { useLoaderData } from "react-router-dom";
import Headers from "../Shared/Headers/Headers";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div className="space-y-5">
      <Headers></Headers>
      <BreakingNews></BreakingNews>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
        <div className="col-span-2 space-y-10 mx-auto">
          {news.map((anews) => (
            <NewsCart key={anews._id} news={anews}></NewsCart>
          ))}
        </div>
        <div className="col-span-1">
          <LeftSideNav></LeftSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
