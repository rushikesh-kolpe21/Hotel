import React, { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu") // backend ka API call
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      {data.map((item) => (
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
};

//
