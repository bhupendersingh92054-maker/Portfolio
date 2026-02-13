import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Code2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "About", icon: <User size={18} /> },
    { name: "Projects", icon: <Briefcase size={18} /> },
    { name: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-slate-900/70 shadow-lg"
    >
      <div className="flex justify-between items-center h-16 px-6 md:px-8 text-white max-w-7xl mx-auto">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 bg-gradient-to-r from-sky-400 to-purple-500 rounded-xl shadow-md group-hover:rotate-6 transition duration-300">
            <Code2 size={20} />
          </div>

          <h1 className="text-2xl font-bold tracking-wide 
            bg-gradient-to-r from-sky-400 to-purple-500 
            bg-clip-text text-transparent">
            Bhupender.dev
          </h1>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer group px-3 py-1 rounded-lg hover:bg-white/10 transition"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={`#${link.name.toLowerCase()}`}
                className="flex items-center gap-2 hover:text-sky-400 transition duration-300"
              >
                <motion.span
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.icon}
                </motion.span>

                {link.name}
              </a>

              {hovered === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[3px] w-full bg-sky-400 rounded"
                />
              )}
            </li>
          ))}
          <ThemeToggle />
        </ul>

        {/* Mobile Right Section */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-lg px-6 pb-6"
        >
          <ul className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.name.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-sky-400 transition"
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
