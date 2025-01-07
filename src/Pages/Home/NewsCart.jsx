import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div>
      <div className="card bg-base-100 w-[600px] shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">
            {title}
          
          </h2>
            {
                details.length > 200 ?
                <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="font-bold text-yellow-500 ">Read More ....</Link> </p>
                :
                <p>{details}</p>
            }
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
