import React, { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu") // backend ka API call
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      {data.map(item => (
        <div key={item._id}>
            <h3>{item._id}</h3>
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
          <h3>{item.category}</h3>
          <h3>{new Date(item.createdAt).toLocaleString()}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}


// 
_id
69302de9ea720d1b7da3385a
name
"pannere"
price
121
category
"veg"
description
"tasty"
createdAt
2025-12-03T12:32:41.486+00:00
updatedAt
2025-12-03T12:32:41.486+00:00
__v
0