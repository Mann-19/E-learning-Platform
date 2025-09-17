import { Navigate } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { state } = useAuthContext();

  if(state.isLoading) return (
    <div>
      <LoadingSpinner />
    </div>
  );

  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return state.user ? children : <Navigate to={"/login"} /> ;
};

export default ProtectedRoute;
