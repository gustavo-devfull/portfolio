import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Briefcase, Mail, LayoutGrid } from "lucide-react"; // Adicionado LayoutGrid
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "services", "portfolio", "contact"]; // Adicionado "portfolio"
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSection = "home";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          if (element.offsetTop <= scrollPosition) {
            currentSection = sectionId;
          } else {
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = mobileMenuOpen ? 60 : 80; 
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
      setActiveSection(sectionId); 
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  const navLinks = [
    { id: "home", label: "Início", icon: <Home size={18} /> },
    { id: "about", label: "Sobre Nós", icon: <Info size={18} /> },
    { id: "services", label: "Serviços", icon: <Briefcase size={18} /> },
    { id: "portfolio", label: "Portfólio", icon: <LayoutGrid size={18} /> }, // Adicionado Portfólio
    { id: "contact", label: "Contato", icon: <Mail size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              className="text-2xl md:text-3xl font-bold gradient-text flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <span className="mr-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md px-2 py-0.5 text-xl">G</span>preto
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out flex items-center space-x-2 ${
                  activeSection === link.id 
                  ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground" 
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary-foreground"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.icon}
                <span>{link.label}</span>
              </motion.a>
            ))}
            <div className="ml-2">
             <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="ml-2"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "x" : "menu"}
                  initial={{ rotate: mobileMenuOpen ? -90 : 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: mobileMenuOpen ? 0 : 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 shadow-xl absolute w-full"
            style={{top: "100%"}}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`flex items-center space-x-3 py-3 px-3 text-base font-medium rounded-md transition-colors duration-200 ${
                    activeSection === link.id
                      ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary-foreground"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;