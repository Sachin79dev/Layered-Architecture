import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  let { isAuthenticated, user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <h1>Loading state...</h1>;

  if (!isAuthenticated || !user) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default MainProtected;
