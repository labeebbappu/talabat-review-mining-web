// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./my-routes/home"; 

function App() {
   

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </>
  );
}

export default App;
