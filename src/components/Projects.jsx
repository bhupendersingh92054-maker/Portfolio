import { motion } from "framer-motion";
import { useState } from "react";
import project1 from "../assets/youtube.jpg";
import project2 from "../assets/login.jpg";
import project3 from "../assets/weather.jpg";

const projects = [
  {
    title: "YouTube Clone",
    description:
      "A fully responsive YouTube clone built with React and YouTube API.",
    tech: "React, API, Tailwind",
    image: project1,
    github: "https://github.com/bhupendersingh92054-maker/MyTube.git",
    live: "https://luminous-paletas-aef1a9.netlify.app/",
  },
  {
    title: "Login & Register System",
    description:
      "Authentication system with Node.js backend and MongoDB.",
    tech: "React, Node.js, MongoDB",
    image: project2,
    github: "https://github.com/bhupendersingh92054-maker/Login-Page.git",
    live: "https://tubular-donut-c1f8b5.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "Weather forecast application using external API.",
    tech: "React, API, CSS",
    image: project3,
    github: "https://github.com/yourusername/weather-app",
    live: "https://github.com/bhupendersingh92054-maker/weather.git",
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        My <span className="text-purple-400">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 
                       rounded-3xl shadow-xl hover:shadow-purple-500/20 
                       transition duration-300 cursor-pointer"
            onClick={() => setModalOpen(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-3xl w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <span className="text-sm text-sky-400">{project.tech}</span>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-sky-400 to-purple-500 text-white hover:scale-105 transition"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:border-sky-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Modal */}
      {modalOpen !== null && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalOpen(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 p-6 rounded-3xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[modalOpen].image}
              alt={projects[modalOpen].title}
              className="rounded-2xl w-full mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              {projects[modalOpen].title}
            </h3>
            <p className="text-gray-400 mb-2">{projects[modalOpen].description}</p>
            <span className="text-sm text-sky-400">{projects[modalOpen].tech}</span>
            <div className="mt-4 flex gap-4">
              <a
                href={projects[modalOpen].live}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-sky-400 to-purple-500 text-white hover:scale-105 transition"
              >
                Live
              </a>
              <a
                href={projects[modalOpen].github}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:border-sky-400 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
};

export default Projects;
