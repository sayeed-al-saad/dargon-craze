import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {

  const [categories, setCategories] = useState([])

  useEffect(() =>{
    fetch('categories.json')
    .then(res=>  res.json())
    .then(data => setCategories(data))
  } ,[])

  return (
    <div className="border-4">
      <h2>Categoreis No: {categories.length}</h2>
      {
        categories.map(category => <Link to={`/category/${category.id}`} className="block" key={category.id}>{category.name}</Link>)
      }
    </div>
  );
};

export default RightSideNav;
