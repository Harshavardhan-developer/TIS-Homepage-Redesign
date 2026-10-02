import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhyTIS from "./components/sections/WhyTIS";
import Statistics from "./components/sections/Statistics";
import Sports from "./components/sections/Sports";
import Highlights from "./components/sections/Highlights";
import Testimonials from "./components/sections/Testimonials";
import Collaborations from "./components/sections/Collaborations";
import Admissions from "./components/sections/Admissions";
import FinalCTA from "./components/sections/FinalCTA";

import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;

    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden transition-colors duration-500 dark:bg-neutral-950 dark:text-white">
      <ScrollProgress />
      <CustomCursor />

      <Navbar
        dark={dark}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <WhyTIS />
        <Statistics />
        <Sports />
        <Highlights />
        <Testimonials />
        <Collaborations />
        <Admissions />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}