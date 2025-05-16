import { useEffect, useState, useContext } from 'react'
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { isMobile } from '@/utils/isMobile';
import { Translation_Theme_Context } from "@/components/Provider";

export default function ThemeToggle() {
  const {userTheme, setUserTheme} = useContext(Translation_Theme_Context)!;

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setUserTheme(storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
    } else {
      // Fetch system preference and apply it
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const systemTheme = prefersLight ? 'light' : 'dark';
      setUserTheme(systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
    }
  }, [])

  const toggleTheme = () => {
    const newTheme =
      userTheme === 'light' || (!userTheme && window.matchMedia('(prefers-color-scheme: light)').matches)
        ? 'dark'
        : 'light'

    localStorage.setItem('theme', newTheme)
    setUserTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  /*const resetTheme = () => {
    localStorage.removeItem('theme')
    setUserTheme(null)
    document.documentElement.removeAttribute('data-theme')
  }*/

  return (
      <div onClick={toggleTheme} className="relative flex items-center p-1.5 rounded-full transform transition-transform duration-300 bg-transparent hover:bg-[#51a2ff]">
        {userTheme === 'light' || (!userTheme && window.matchMedia('(prefers-color-scheme: light)').matches) ?
          <MdSunny className="text-yellow-500" size={isMobile() ? 18 : 24}/> :
          <IoMdMoon className="text-white" size={isMobile() ? 18 : 24}/>
        }
      </div>
  );
}
