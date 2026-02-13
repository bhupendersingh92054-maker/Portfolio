import { motion } from "framer-motion";
import { Code, Rocket, Briefcase } from "lucide-react";


const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        About <span className="text-sky-400">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-xl hover:scale-105 transition duration-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-sky-400">
            Who I Am
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I am an enthusiastic MERN Stack Developer passionate about 
            building modern, scalable and user-friendly web applications.
            I focus on writing clean code and creating smooth user experiences.
          </p>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3">
              <Code className="text-sky-400" />
              <span>Strong in React & Node.js</span>
            </div>

            <div className="flex items-center gap-3">
              <Rocket className="text-purple-400" />
              <span>Performance Optimized Apps</span>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className="text-pink-400" />
              <span>Open to Internship Opportunities</span>
            </div>

          </div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold leading-snug">
            Crafting Digital Experiences 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
              That Make Impact
            </span>
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I specialize in building full-stack web applications using 
            React, Node.js, Express and MongoDB. I enjoy solving complex 
            problems and continuously learning new technologies to 
            improve my development skills.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My goal is to join a dynamic team where I can contribute, 
            grow and work on real-world scalable products.
          </p>

          
          <a href="/Resume_Bhupender.pdf" download>
<button className="mt-4 px-6 py-3 rounded-full 
                             bg-gradient-to-r from-sky-400 to-purple-500 
                             text-white font-medium shadow-lg 
                             hover:scale-105 transition duration-300">
            Download Resume
          </button>
</a>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
