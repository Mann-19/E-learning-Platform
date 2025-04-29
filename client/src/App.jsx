import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Course from "./pages/Course.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuthContext } from "./hooks/useAuthContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              index
              path="/"
              element={
                <ProtectedRoute allowedRoles={["Mentor", "Student"]}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to={"/"} />}
            />

            <Route
              path="/course"
              element={
                <ProtectedRoute allowedRoles={["Mentor", "Student"]}>
                  <Course />
                </ProtectedRoute>
              }
            />

            <Route
              path="/marketplace"
              element={
                <ProtectedRoute allowedRoles={["Mentor", "Student"]}>
                  <Marketplace />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
