import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fragments Microservice",
    description:
      "A scalable, cloud-based API enabling secure storage, retrieval, and format conversion of text, application data, and images. Designed for seamless integration via RESTful API, ensuring reliability for developers needing efficient data management.",
    image: "/image.png",
    github: "https://github.com/rutarj/fragments",
    tech: ["JavaScript", "Jest", "AWS", "DynamoDB", "Docker"],
  },

  {
    title: "Travel LogBook",
    description:
      "A JavaFX-powered travel logbook for explorers to document journeys, organize reflections, and track destinations. Built for travel enthusiasts who want a structured and visual way to preserve memories.",
    image: "/placeholder.svg",
    github: "https://github.com/rutarj/Travel-LogBook",
    tech: ["Java", "JavaFX", "XML"],
  },
  {
    title: "Blog Post Application",
    description:
      "A user-friendly blogging platform that allows content creators to publish, edit, and manage posts with ease. Features authentication, media support, and responsive UI to enhance the blogging experience.",
    image: "/images.png",
    github: "https://github.com/rutarj/Blog-Post-Application",
    tech: ["Node.js", "Express", "EJS", "MongoDB"],
  },
  {
    title: "Python Learning",
    description:
      "A structured collection of Python-based projects demonstrating automation, game development, and scripting skills. Showcases problem-solving in real-world scenarios, from encryption tools to interactive applications.",
    image: "/placeholder.svg",
    github: "https://github.com/rutarj/Python-Learning",
    tech: ["Python", "OOP", "Turtle", "Flask", "Game Development", "Automation"],
  },
];

const currentProjects = [
  {
    title: "Deep Vision Analytics",
    description:
      "An AI-powered deep learning toolkit for image processing applications, including face recognition, object tracking, and medical imaging analysis. Optimized for research and real-world implementation.",
    image: "/deepvision.svg",
    github: "https://github.com/rutarj/Deep-Vision-Analytics",
    tech: ["Python", "OpenCV", "Image Recognition", "Jupyter Notebook", "Kernel"],
  },
  {
    title: "DataSense (Sensor Data Management System)",
    description:
      "A centralized IoT-based RaspBerry Pi automation system that aims to simplify the collection, organization, and management of sensor data, minimizing the time, effort and resources required to configure and manage large sensor data.",
    image: "/Screenshot_2-2-2025_215612_localhost.jpeg",
    github: "https://github.com/JP-sDEV/prj666-team2",
    tech: ["Node.js", "Raspberry Pi", "React Native", "IoT", "Google Auth", "Next.js"],
  },
  {
    title: "AI Travel Planner ",
    description:
      "Explore a personalized travel experience with Gemini's advanced features, allowing you to effortlessly customize your travel plans. This guide will help you tailor your itinerary with precision, ensuring every trip is unique.",
    image: "/Screenshot_2-2-2025_215612_localhost.jpeg",
    github: "https://github.com/rutarj/AI-Travel-Assistant",
    tech: ["(Python, React.js, Gemini API, MongoDB) "],
    Link : "https://github.com/rutarj/AI-Travel-Assistant"
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
      >
        My Projects
      </motion.h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg ${
              project.title === "Python Learning"
                ? "col-span-medium justify-self-center"
                : ""
            }`}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mt-20 mb-10 text-gray-800 dark:text-white"
      >
        Current Projects
      </motion.h2>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 justify-items-center">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-md w-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800} // Increased width
              height={300} // Adjusted height proportionally
              className="w-full h-60 object-contain p-2" // Increased height slightly for better visibility
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
