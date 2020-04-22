import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4>Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="dashboard-link" to="/create/category">
              create category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="dashboard-link" to="/create/product">
              create product
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInformation = () => {
    return (
      <div className="card">
        <h3 className="card-title">admin info</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };


  return (
    <Layout title="Dashboard" description="Admin Dashboard" className="">
      <div>
      {adminInformation()}
      {adminLinks()}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
