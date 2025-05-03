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

export default function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <TranslationProvider>
      <NavBar setIsSideBarOpen={setIsSideBarOpen} />
      {!isSideBarOpen ? <div className="scroll-padding-top-custom"> 
        <FadeInOnScroll><Home/></FadeInOnScroll>
        <FadeInOnScroll><About/></FadeInOnScroll>
        <FadeInOnScroll><Skills/></FadeInOnScroll>
        <FadeInOnScroll><Education/></FadeInOnScroll>
        <FadeInOnScroll><Work/></FadeInOnScroll>
      </div> : ''}
    </TranslationProvider>
  );
}
