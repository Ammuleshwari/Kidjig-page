import React from "react";
import CircleNavbar from './components/CircleNavbar';
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Models from "./components/Models";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <CircleNavbar/>
      <Hero />
      <Clients />
      <Models/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
