import logo from "../../../assets/logo.png";
import moment from "moment";

const Headers = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="" />
      <p>{moment().format("MMMM Do YYYY, h:mm a")}</p>
    </div>
  );
};

export default Headers;
