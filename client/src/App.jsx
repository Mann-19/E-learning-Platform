import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;