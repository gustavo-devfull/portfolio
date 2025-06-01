import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services"; 
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Toaster />
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-8 bg-gray-100 dark:bg-gray-800 text-center"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Gpreto Design e Soluções Digitais. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Desenvolvido com <span className="text-red-500">❤️</span> pela Gpreto.
            </p>
          </div>
        </motion.footer>
      </div>
    </AnimatePresence>
  );
}

export default App;