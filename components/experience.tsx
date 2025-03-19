import { motion } from "framer-motion"

const experiences = [
  {
    title: "Peer Mentor",
    company: "Seneca College",
    period: "Jan 2025 - Present",
    description:
      "Student Support for the Computer Programming and Analysis program",
  },
  {
    title: "Student Lab Assistant",
    company: "Seneca College",
    period: "May 2024 - Aug 2024",
    description:
      "Provided technical support, assisted in programming instruction, and collaborated on lab management for an efficient learning environment.",
  },
 
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
      >
        Experience & Education
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 flex"
          >
            <div className="flex flex-col items-center mr-4">
              <div className="w-px h-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience

