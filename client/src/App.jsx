import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
