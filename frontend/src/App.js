import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import StripePayment from "./StripePayment"; 
import Success from "./success"; 
import Cancel from "./cancel"; 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/success" element={<Success />} /> 
        <Route path="/cancel" element={<Cancel />} /> 
        <Route path="/" element={<StripePayment />} /> 
      </Routes> 
    </BrowserRouter> 
  ); 
}  
export default App; 