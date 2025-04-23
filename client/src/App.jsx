import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import Course from "./pages/Course.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route index path="/home" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/course" element={ <Course /> } />
            <Route path="/marketplace" element={ <Marketplace /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
