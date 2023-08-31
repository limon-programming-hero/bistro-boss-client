import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(authContext);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
