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
      <div className="card">
        <h4>User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="dashboard-link" to="/cart">
              my cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="dashboard-link" to="/profile/update">
              update profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInformation = () => {
    return (
      <div className="card">
        <h3 className="card-title">user info</h3>
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

  const purchasedHistory = () => {
    return (
      <div className="card">
        <h3 className="card-title">purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">history</li>
        </ul>
      </div>
    );
  };

  return (
    <Layout title="Dashboard" description="User Dashboard" className="">
      <div>
      {userInformation ()}
      {purchasedHistory ()}
      {userLinks ()}
      </div>
    </Layout>
  );
};

export default Dashboard;
