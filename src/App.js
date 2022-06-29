import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OneToFifty from "./components/OneToFifty";


export default function App() {
  return (
    // <OneToFifty></OneToFifty>
    <Router>
      <Routes>
        {/* <Route path="Main" element={<Main />} /> */}
          <Route path="OneToFifty" element={<OneToFifty />} />
      </Routes>
    </Router>
  );
}