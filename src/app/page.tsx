"use client";
import NavBar from "@/components/navbar";
import Home from "@/sections/home";
import { useState } from "react";
import { TranslationProvider } from "@/components/DataContext";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import FadeInOnScroll from "@/utils/fadein";

export default function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <TranslationProvider>
      <NavBar setIsSideBarOpen={setIsSideBarOpen} />
      {!isSideBarOpen ? <div className="scroll-padding-top-custom"> 
        <FadeInOnScroll children={<Home/>}/>
        <FadeInOnScroll children={<About/>}/>
        <FadeInOnScroll children={<Skills/>}/>
        {Array.from({ length: 2 }, (_, i) => (
          <div key={i} className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Section {i + 1}</h1>
          </div>
        ))}
      </div> : ''}
    </TranslationProvider>
  );
}
