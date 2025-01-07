
import Headers from '../Shared/Headers/Headers';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import { useParams } from 'react-router-dom';
const News = () => {
    const {id} = useParams();
    return (
        <div>
            <div className="space-y-5">
      <Headers></Headers>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
        <div className="col-span-2 space-y-10 mx-auto">

        </div>
        <div className="col-span-1">
          <LeftSideNav></LeftSideNav>
        </div>
      </div>
    </div>
        </div>
    );
};

export default News;