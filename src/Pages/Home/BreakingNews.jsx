import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-2">
      <button className="btn btn-primary">Breaking News</button>
      <Marquee className="" speed={170} pauseOnClick={true}>
        You know who is coming . you should know that
      </Marquee>
    </div>
  );
};

export default BreakingNews;
