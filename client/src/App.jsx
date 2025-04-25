import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Course from "./pages/Course.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import { useAuthContext } from './hooks/useAuthContext';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route index path="/" element={user ? <Home /> : <Navigate to={'/login'} /> } />
            <Route path="/login" element={!user ? <Login /> : <Navigate to={'/'} /> } />
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to={'/'} /> } />
            <Route path="/course" element={user ? <Course /> : <Navigate to={'/'} /> } />
            <Route path="/marketplace" element={user ? <Marketplace /> : <Navigate to={'/'} /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;