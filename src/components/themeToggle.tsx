import { useEffect, useState } from 'react'
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { isMobile } from '@/utils/isMobile';

export default function ThemeToggle() {
  const [userTheme, setUserTheme] = useState<'light' | 'dark' | null>(null)
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setUserTheme(storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
    } else {
      // Let system preference apply; no manual override
      document.documentElement.removeAttribute('data-theme')
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
