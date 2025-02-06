"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Header />
      <main className="container mx-auto px-6 py-12 space-y-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </motion.div>
  )
}

