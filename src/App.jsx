import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";


import { motion } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-slate-950 text-white min-h-screen"
    >
      <Cursor />
      <Navbar />
        <main className="pt-16">
  <Hero />
<About />
<Skills />
<Projects />
<Contact />
<Footer />

  </main>
    </motion.div>
  );
}


export default App;
