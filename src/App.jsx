import react from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Career from "./components/Career/Career";
import Testimonials from "./components/Testimonials/Testimonials";
import Clients from "./components/Clients/Clients";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Work />
      <Clients />
      <Testimonials />
      <Career />
      <About />
      {/* <Form /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
