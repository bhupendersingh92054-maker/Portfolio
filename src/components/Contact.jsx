import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
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
        Get in <span className="text-sky-400">Touch</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-400">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let’s connect!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition cursor-pointer">
              <Mail /> <span>bhupendersingh92054@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition cursor-pointer">
              <Phone /> <span>+91 85128 92116</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition cursor-pointer">
              <Linkedin /> <span>https://www.linkedin.com/in/bhupender-singh-1390b73aa/</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition cursor-pointer">
              <Github /> <span>https://github.com/bhupendersingh92054-maker</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-xl"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-transparent border border-white/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:outline-none transition"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
