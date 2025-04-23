import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, role } = useAuthContext();

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
