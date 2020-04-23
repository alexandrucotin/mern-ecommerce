import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

const Dashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className="user-links">
        <p className="user-header">links to...</p>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="dashboard-link" to="/cart">
              <span>--></span> my cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="dashboard-link" to="/profile/update">
              <span>--></span> update profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInformation = () => {
    return (
      <div className="user-info">
        <p className="user-header">user info</p>
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

  const purchasedHistory = () => {
    return (
      <div className="purchasedHistory">
        <p className="history-header">purchase history</p>
        <ul className="list-group">
          <li className="list-group-item">history</li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description="This is the user dashboard where you can view your user informations,your cart, your purchase history or update your profile with new info!"
      className="section"
    >
      <div className="container-user-dashboard">
        {userLinks()}
        {userInformation()}
      </div>

      {purchasedHistory()}
    </Layout>
  );
};

export default Dashboard;
