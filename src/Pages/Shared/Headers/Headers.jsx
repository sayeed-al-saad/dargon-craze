import logo from "../../../assets/logo.png";
import moment from "moment";

const Headers = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p>{moment().format("MMMM Do YYYY, h:mm a")}</p>
    </div>
  );
};

export default Headers;
