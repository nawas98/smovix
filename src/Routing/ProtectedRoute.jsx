import React from "react";
import { Route, Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by checking if there is a token in local storage)
  return window.sessionStorage.getItem("token") !== null;
};

const ProtectedRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
