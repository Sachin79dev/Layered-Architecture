import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/ui/component/Navbar";

const MainLayout = () => {
  return (
    <div className="p-2">
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
