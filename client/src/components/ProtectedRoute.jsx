import { Navigate } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, role, loading } = useAuthContext();

  if(loading) return (
    <div>
      <LoadingSpinner />
    </div>
  );

  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return user ? children : <Navigate to={"/login"} /> ;
};

export default ProtectedRoute;
