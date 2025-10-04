import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuthContext } from "./hooks/useAuthContext";
import CreateCourse from "./pages/CreateCourse.jsx";
import { Toaster } from 'react-hot-toast';
import DraftEdit from './pages/DraftEdit.jsx';

import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  const { state } = useAuthContext();
  const user = state?.user || null;

  return (
    <>
      <BrowserRouter>
        <div className="font-league">
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

            <Route
              path={`/draft-edit/:id`}
              element={
                <ProtectedRoute allowedRoles={["Instructor", "Administrator"]}>
                  <DraftEdit />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        <Toaster position="top-center" toastOptions={{duration: 3000}} />
      </BrowserRouter>
    </>
  );
}

export default App;
