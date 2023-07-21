import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://the-dragon-news-server-devmehedi.vercel.app/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data))
          .catch((error) => console.error(error));
    },[])


    return (
      <div>
        <h2>All Categories</h2>
        <div className="ps-4">
          {categories.map((category) => (
            <p key={category.id}>
              <Link
                className="text-decoration-none text-secondary-emphasis"
                to={`/categories/${category.id}`}
              >
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
    );
};

export default LeftNav;