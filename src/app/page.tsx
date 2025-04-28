"use client";
import { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";

export default function Home() {
  const [section, setSection] = useState('home');
  return (
    <>
    <NavBar section={section} setSection={setSection}/>
    {Array.from({ length: 100 }, (_, i) => (
      <div key={i} className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Section {i + 1}</h1>
      </div>
    ))}
    </>
  );
}
