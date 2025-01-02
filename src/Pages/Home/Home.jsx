import Headers from "../Shared/Headers/Headers";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div className="space-y-5">
      <Headers></Headers>
      <BreakingNews></BreakingNews>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
        <div className="col-span-2 border-2">
          <h2 className="text-5xl">hi this is Home</h2>
        </div>
        <div className="col-span-1">
          <LeftSideNav></LeftSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
