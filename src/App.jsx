import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="flex flex-col sm:px-20 px-5 sm:py-2 py-2">
        <Navbar />
        <Hero />
        <Services />
      </div>
      <Footer />
    </>
  );
}

export default App;
