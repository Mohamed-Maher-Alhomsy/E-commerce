import React from "react";

import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { loggedIn, loading } = useAuth();

  if (loading) {
    return <h4 className="m-auto">Loading</h4>;
  }

  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
