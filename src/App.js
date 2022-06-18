import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import react, { Suspense } from 'react'

function App() {
  const isLogin = localStorage.getItem('isLogin')
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Home />
      </div>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}/>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
