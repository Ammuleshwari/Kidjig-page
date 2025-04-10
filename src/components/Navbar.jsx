import React from "react";
const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">InternHub</h1>
        <ul className="flex gap-6 text-white">
          <a href="#home" className="hover:text-cyan-300">Home</a>
          <a href="#features" className="hover:text-cyan-300">Features</a>
          <a href="#testimonials" className="hover:text-cyan-300">Testimonials</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
