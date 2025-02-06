"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-gray-800 dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         RS
        </motion.a>
        <ul className="flex space-x-6">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

