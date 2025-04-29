"use client";
import NavBar from "@/components/navbar";
import Home from "@/sections/home";

export default function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      {Array.from({ length: 2 }, (_, i) => (
        <div key={i} className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Section {i + 1}</h1>
        </div>
      ))}
    </>
  );
}
