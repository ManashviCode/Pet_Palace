import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
// import Home from "./pages/home/Home.page.tsx";

const App: React.FC = () => {
  return (
    <div>
      {/*navbar */}
      <Navbar />

      {/*wrapper */}
      <div className="wrapper">
        {/* <Routes>
          <Route path="/" element={<Home/>} />
        </Routes> */}
      </div>
    </div>
  );
};

export default App;
