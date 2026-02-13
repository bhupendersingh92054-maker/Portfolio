import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
  return (
<section className="min-h-screen flex items-center justify-center px-6">


      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
              Bhupender Singh
            </span>
          </h1>

        <h2 className="text-xl sm:text-2xl text-gray-400">
  <span className="text-sky-400">
    <Typewriter
      words={[
        "MERN Stack Developer",
        "React Developer",
        "Backend Developer",
        "Full Stack Enthusiast"
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h2>


          <p className="text-gray-500 max-w-lg">
            I build modern, scalable and high-performance web applications 
            using React, Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            <button className="px-6 py-3 rounded-full bg-gradient-to-r 
                               from-sky-400 to-purple-500 text-white 
                               font-medium shadow-lg hover:scale-105 
                               transition duration-300">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-600 
                               text-gray-300 hover:border-sky-400 
                               hover:text-sky-400 transition duration-300">
              Contact Me
            </button>

          </div>
        </motion.div>


        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-72 sm:w-80 md:w-96">

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-3xl 
                            bg-gradient-to-r from-sky-400/20 
                            to-purple-500/20 blur-2xl"></div>

            {/* Clean Border */}
            <div className="relative p-[3px] rounded-3xl 
                            bg-gradient-to-r from-sky-400 to-purple-500">

              <img
                src={profile}
                alt="Profile"
                className="rounded-3xl bg-slate-900 shadow-2xl"
              />

            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
