import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({
  children,
  allowedRoles = [],
}) {

  const { user } =
    useContext(AuthContext);

  // Login नाही
  if (!user) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  // Role Check
  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.role)
  ) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  return children;

}

export default ProtectedRoute;