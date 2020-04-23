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
      <div className="admin-create">
        <p className="admin-header">create...</p>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="dashboard-link" to="/create/category">
              category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="dashboard-link" to="/create/product">
              product
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInformation = () => {
    return (
      <div className="admin-info">
        <p className="admin-header">informations</p>
        <ul className="list-group">
          <li className="list-group-item">
            <span>name:</span> {name}
          </li>
          <li className="list-group-item">
            <span>email:</span> {email}
          </li>
          <li className="list-group-item">
            <span>role:</span> {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description="This is the admin dashboard where you can create a new category or a new product that will be added to the category or product page!"
      className="section"
    >
      <div className="container-admin-dashboard">
        {adminLinks()}
        {adminInformation()}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
