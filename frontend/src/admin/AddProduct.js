import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct, getCategories } from "./ApiAdmin";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  const { user, token } = isAuthenticated();
  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          photo: "",
          price: "",
          quantity: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const showError = () => (
    <div className="alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert-success"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <p className="">{`${createdProduct}`} is created!</p>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert-info">
        <p>Loading...</p>
      </div>
    );

  const newPostForm = () => (
    <form className="" onSubmit={clickSubmit}>
      <div className="header-div">
        <p className="header-product">upload photo</p>{" "}
      </div>
      <div className="form-group">
        <label className="first-label">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          />
        </label>
      </div>

      <div className="form-group">
        <label>name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="">description</label>
        <textarea
          onChange={handleChange("description")}
          value={description}
          className="text-muted"
        />
      </div>

      <div className="form-group">
        <label className="">price</label>
        <input
          onChange={handleChange("price")}
          type="number"
          value={price}
          className="text-muted"
        />
      </div>

      <div className="form-group">
        <label className="">category</label>
        <select onChange={handleChange("category")} className="text-muted">
          <option value="">please select</option>
          {categories &&
            categories.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label className="">shipping</label>
        <select onChange={handleChange("shipping")} className="text-muted">
          <option value="">please select</option>
          <option value="0">no</option>
          <option value="1">yes</option>
        </select>
      </div>

      <div className="form-group">
        <label className="">quantity</label>
        <input
          onChange={handleChange("quantity")}
          type="number"
          value={quantity}
          className="text-muted"
        />
      </div>

      <button className="">create</button>
    </form>
  );
  return (
    <Layout
      title="Product"
      description="In this page you can add a new product. You can access this page only if you are and admin and you are logged in!"
      className="section"
    >
      <div className="container-create-product">
        {showLoading()}
        {showSuccess()}
        {showError()}
        {newPostForm()}
      </div>
    </Layout>
  );
};
export default AddProduct;
