import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import GooeyNav from "./GooeyNav"; // <-- o seu GooeyNav pronto!

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links para GooeyNav
  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre Nós", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000000d4] backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#home">
              <img
                src="/logo-gpreto.png"
                alt="Logo GPreto"
                className="h-12"
              />
            </a>
          </motion.div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>

          {/* GOOEY NAV DESKTOP */}
          <div className="hidden md:block">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      </div>

      {/* GOOEY NAV MOBILE (opcional) */}
{mobileMenuOpen && (
  <div className="md:hidden absolute top-full w-full bg-black flex flex-col items-center gap-4 py-4">
    {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className="text-white text-lg py-2 hover:text-gray-300 transition-colors"
      >
        {item.label}
      </a>
    ))}
  </div>
)}
    </motion.header>
  );
};

export default Navbar;
