import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Teams from "./components/Teams/Teams";
import ValueProportion from "./components/ValueProportion/ValueProportion";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <ValueProportion />
      <Products />
      <Teams />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
