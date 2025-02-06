import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">Hi, I'm Rutarj</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">Aspiring Software Developer</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Passionate about creating innovative products through code.
        </p>
        <div className="flex items-center justify-center mt-10 space-x-4">
          <motion.a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="https://github.com/rutarj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rutarj-shah-29b842270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:shahrutarj@gmail.com"
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <Image src="/Hello1-ezgif.com-crop.png" alt="Rutarj Shah" width={300} height={300} className="rounded-full shadow-2xl" />
      </motion.div>
      
    </section>
  )
}

export default Hero

