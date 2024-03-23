import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./add.scss";
import Sidebar from "../Sidebar/Sidebar";
const Add = ({ user }) => {
  const addNew = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        post,
        post.id
      );
      console.log(response);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const [post, setPost] = useState([
    {
      id: "10",
      rating: "",
      brand: "",
      price: "",
      stock: "",
    },
  ]);

  return (
    <div className="main">
      <Sidebar />
      <form className="form">
        <div className="input_group">
          <label htmlFor="artikul" className="form-label">
            Артикул
          </label>
          <input
            id="artikul"
            type="number"
            className="form-control"
            required
            onChange={(e) => setPost({ ...post, rating: e.target.value })}
            value={post.rating}
            name="rating"
          />

          <label htmlFor="brand" className="form-label">
            Бренд
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            className="form-control"
            required
            onChange={(e) => setPost({ ...post, brand: e.target.value })}
            value={post.brand}
          />
          <label htmlFor="price" className="form-label">
            Цена
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            required
            onChange={(e) => setPost({ ...post, price: e.target.value })}
            value={post.price}
          />

          <label htmlFor="stock" className="form-label">
            Цена со скидкой
          </label>
          <input
            type="number"
            name="discountPercentage"
            id="stock"
            className="form-control"
            required
            onChange={(e) => setPost({ ...post, stock: e.target.value })}
            value={post.discountPercentage}
          />
        </div>
        <div className="btns">
          <Link to="/">
            <button className="btn btn-secondary">Cancel</button>
          </Link>
          <Link to="/">
            <button type="submit" className="btn btn-primary" onClick={addNew}>
              Save
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
