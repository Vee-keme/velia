import React from "react";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="w-11/12 mx-auto">
      <div>Header</div>
      <Outlet />
    </div>
  );
};

export default Layout;
