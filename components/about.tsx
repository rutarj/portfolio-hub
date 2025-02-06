import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Git",
  "AWS",
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
      >
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            My Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            As an aspiring software developer, I am passionate about building
            innovative products through code. My journey in tech began with a
            deep curiosity about how things work, leading me to pursue Computer
            Programming and Analysis from Seneca College.
            <br>
            </br> 
            <br>
            </br>Since then, I have
            been refining my skills in full-stack web development, working with
            technologies like JavaScript, Node.js, Express, and MongoDB. My
            projects range from cloud-based APIs to AI-driven applications,
            demonstrating my commitment to solving real-world problems through
            software engineering.
            <br>
            </br>
          <br>
          </br> I have  worked as Student Lab Assistant at
            Seneca College, where I provided some assistance to students in the
            Computer Programming and Analysis program, moreover currently I am
            working as Peer Mentor at Seneca College, where I provide guidance
            and support to students in the program.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Skills & Tools
          </h3>
          {/* <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div> */}
          <img
            src="https://skillicons.dev/icons?i=js,html,css,react,nodejs,express,postgres,mongodb,git,github,bootstrap,tailwind,graphql,docker,python,java,typescript,vue,angular,jquery,linux"
            alt="My Skills"
            className="mt-6"
            style={{ width: '800px', height: 'auto' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
