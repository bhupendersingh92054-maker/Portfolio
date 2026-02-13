import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-12 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Branding */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
            Bhupender.dev
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/bhupendersingh92054-maker"
            target="_blank"
            className="text-gray-400 hover:text-sky-400 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhupender-singh-1390b73aa/"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <Linkedin size={24} />
          </a>  
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Bhupender Singh. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
  