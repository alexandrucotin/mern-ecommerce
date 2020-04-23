import React, { useState } from "react";
import Layout from "../core/Layout";
import { Link } from 'react-router-dom'
import { isAuthenticated } from "../auth";
import { createCategory } from "./ApiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    //make request to api to create category
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const showSuccess = () => {
    if (success) {
      return (
        <p className="alert-info">
          <span>{name}</span> category is created!
        </p>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <p className="alert-danger">
          <span>{name}</span> category already exists!
        </p>
      );
    }
  };

  const goBack = () => (
      <div className="">
          <Link to="/admin/dashboard" className="text-warning"> <span> 	&#8592; </span> dashboard</Link>
      </div>
  )

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className="button">Create</button>
    </form>
  );

  return (
    <Layout
      title="Category"
      description="In this page you can add a new category. You can access this page only if you are and admin and you are logged in!"
      className="section"
    >
      <div className="container-create-category">
        {showSuccess()}
        {showError()}
        {newCategoryForm()}
        {goBack()}
      </div>
    </Layout>
  );
};

export default AddCategory;
