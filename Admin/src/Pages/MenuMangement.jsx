import React, { useState } from "react";
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const MenuManagement = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    // image: "",
  });

  const onChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value }); //

  const onSubmit = async (event) => {
    event.preventDefault();// stop form submission
    try {
      await API.post("/api/menu", form); // 
      alert("Menu item added!");
      setForm({ name: "", price: "", category: "", description: "", image: "" });
    } catch (err) {
      alert("Failed to add");
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Add Menu Item</h2>
      <form onSubmit={onSubmit}>
        <input name="name" value={form.name} onChange={onChange} placeholder="Name" required />
        <input name="price" value={form.price} onChange={onChange} placeholder="Price" required />
        <input name="category" value={form.category} onChange={onChange} placeholder="Category" />
        <input name="description" value={form.description} onChange={onChange} placeholder="Description" />
        <input name="image" value={form.image} onChange={onChange} placeholder="Image URL" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
