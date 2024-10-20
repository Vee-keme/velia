import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      <section className="w-11/12 mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
