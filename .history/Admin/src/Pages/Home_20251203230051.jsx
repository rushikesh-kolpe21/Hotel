import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items") // backend ka API call
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      {data.map(item => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
