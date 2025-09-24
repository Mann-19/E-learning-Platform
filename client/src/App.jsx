import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuthContext } from "./hooks/useAuthContext";
import CreateCourse from "./pages/CreateCourse.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  const { state } = useAuthContext();
  const user = state?.user || null;

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              index
              path="/"
              element={
                  user ? <Profile /> : <Navigate to={'/login'} />
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
              path="/profile"
              element={user ? <Profile /> : <Navigate to={"/login"} />}
            />

            <Route
              path={`/create-course`}
              element={
                <ProtectedRoute allowedRoles={["Instructor", "Administrator"]}>
                  <CreateCourse />
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
