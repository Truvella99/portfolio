"use client";
import NavBar from "@/components/navbar";
import Home from "@/sections/home";
import { useState } from "react";
import { TranslationProvider } from "@/components/DataContext";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import FadeInOnScroll from "@/utils/fadein";
import Education from "@/sections/education";
import Work from "@/sections/work";
import Projects from "@/sections/projects";
import ContactMe from "@/sections/contactMe";
import { useEffect } from 'react';
import Footer from "@/components/footer";
import BackToTopButton from "@/components/backToTopBtn";

export default function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  /* RESET THE URL ON PAGE REFRESH */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if there's a hash in the URL on page load (e.g., #contact)
      if (window.location.hash) {
        // Remove the hash from the URL without causing a page reload
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  }, []);

  return (
    <TranslationProvider>
      <NavBar setIsSideBarOpen={setIsSideBarOpen} />
      {!isSideBarOpen ? <div className="scroll-padding-top-custom"> 
        <FadeInOnScroll><Home/></FadeInOnScroll>
        <FadeInOnScroll><About/></FadeInOnScroll>
        <FadeInOnScroll><Skills/></FadeInOnScroll>
        <FadeInOnScroll><Education/></FadeInOnScroll>
        <FadeInOnScroll><Work/></FadeInOnScroll>
        <FadeInOnScroll><Projects/></FadeInOnScroll>
        <FadeInOnScroll><ContactMe/></FadeInOnScroll>
        <FadeInOnScroll><Footer/></FadeInOnScroll>
        <BackToTopButton/>
      </div> : ''}
    </TranslationProvider>
  );
}
