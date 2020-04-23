import React from "react";
import Menu from "./Menu";
import "../style/main.css";


const Layout = ({
  title = "Title",
  description = "Description",
  children,
  className
}) => (
  <div>
    <Menu />
    <div className="header">
      <h2 className="title">{title}</h2>
      <p className="">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
