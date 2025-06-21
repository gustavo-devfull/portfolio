import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
<section
  id="home"
  className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-center bg-cover bg-no-repeat bg-fixed"
  style={{ backgroundImage: "url('/programming.jpg')" }}
>
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <img
              src="/logo-gpreto.png"
              alt="Logo GPreto"
              className="h-32"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-m md:text-l lg:text-xl font-light mb-4 text-muted-foreground"
          >
            DESIGN E SOLUÇÕES DIGITAIS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl text-foreground">
              Criação de sites e plataformas digitais para empresas e profissionais liberais.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-muted-foreground mb-10 text-lg"
          >
            Transformamos suas ideias em realidade digital com desenvolvimento web de alta qualidade, rapidez e mais de 20 anos de experiência no mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-[#6110ff] text-primary-foreground hover:bg-[#5019bf] shadow-lg"
              onClick={scrollToContact}
            >
              Solicite um Orçamento
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-[#0a0a0a] border border-[#6110ff] text-foreground hover:bg-[#5019bf] shadow-lg"
              onClick={scrollToServices}
            >
              Nossos Serviços
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex space-x-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#6110ff] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
              }}
              className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#6110ff] transition-colors"
              aria-label="Sobre Nós"
            >
              <Users className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToServices();
              }}
              className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#6110ff] transition-colors"
              aria-label="Serviços"
            >
              <Briefcase className="h-5 w-5 text-foreground" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-14 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
8
export default Hero;
