import { Navigate } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { state } = useAuthContext();
  const { user, role, isLoading } = state;

  if(isLoading) return (
    <div>
      <LoadingSpinner />
    </div>
  );

  if(!user) {
    return <Navigate to={"/login"} replace />
  }

  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
