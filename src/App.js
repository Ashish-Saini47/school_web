import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
// import AboutPage from "./AboutPage";
import Gallery from "./Gallery";
// import Testimonials from "./Testimonials";
import ContactUs from "./Contact";
import FooterSection from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Home/>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
