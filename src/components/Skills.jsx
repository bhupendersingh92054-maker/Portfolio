import { motion } from "framer-motion";
import {
  FileCode,
  Database,
  Server,
  Globe,
  Github,
  Layers
} from "lucide-react";

const skills = [
  { name: "HTML", icon: <Globe size={28} />, color: "text-orange-400" },
  { name: "CSS", icon: <Layers size={28} />, color: "text-blue-400" },
  { name: "JavaScript", icon: <FileCode size={28} />, color: "text-yellow-400" },
  { name: "React", icon: <FileCode size={28} />, color: "text-cyan-400" },
  { name: "Node.js", icon: <Server size={28} />, color: "text-green-400" },
  { name: "Express", icon: <Server size={28} />, color: "text-gray-300" },
  { name: "MongoDB", icon: <Database size={28} />, color: "text-green-500" },
  { name: "GitHub", icon: <Github size={28} />, color: "text-white" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        My <span className="text-sky-400">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 
                       p-6 rounded-2xl text-center shadow-lg 
                       hover:shadow-sky-500/20 transition duration-300"
          >
            <div className={`flex justify-center mb-3 ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="font-medium text-gray-300">{skill.name}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
