import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Users, Award, Wrench as Tool, Briefcase, Linkedin, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const gustavoSkills = [
    "WordPress", "Elementor", "Plugins Crocoblock", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "HTML & CSS", "jQuery", "Figma", "Adobe XD", "Photoshop"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUpVariants}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Sobre a <span className="gradient-text">GPRETO</span>
          </motion.h2>
          <motion.div
            variants={fadeInUpVariants}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-800  dark:from-gray-500 dark:to-gray-700 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeInUpVariants}
            custom={2}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            A <span className="gradient-text font-bold dark:text-gray-200">GPRETO</span> Soluções Digitais é uma empresa especializada em desenvolvimento web de alta qualidade e rapidez, com mais de 20 anos de experiência no mercado digital.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 variants={fadeInUpVariants} custom={0} className="text-2xl font-bold mb-3 flex items-center">
                <Users className="mr-3 h-7 w-7 text-gray-600" /> Nossa Empresa
              </motion.h3>
              <motion.p variants={fadeInUpVariants} custom={1} className="text-gray-600 dark:text-gray-300 mb-2">
                Combinando pontualidade e criatividade, nossa equipe altamente capacitada cria soluções personalizadas para sua empresa, seja uma landing page, site institucional ou e-commerce, com foco em atrair e reter clientes.
              </motion.p>
              <motion.p variants={fadeInUpVariants} custom={2} className="text-gray-600 dark:text-gray-300">
                Oferecemos um site moderno e profissional que reflete sua marca, além de otimização para SEO, suporte técnico e outros serviços. Confie na GPRETO para construir sua presença online de sucesso!
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={fadeInUpVariants} custom={3} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
                <Briefcase className="h-10 w-10 text-gray-500 mb-3" />
                <h4 className="text-lg font-semibold mb-1">20+ Anos de Experiência</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">No mercado digital, entregando resultados.</p>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={4} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover">
                <Award className="h-10 w-10 text-gray-500 mb-3" />
                <h4 className="text-lg font-semibold mb-1">Qualidade e Rapidez</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Soluções eficientes com foco no cliente.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 variants={fadeInUpVariants} custom={0} className="text-2xl font-bold mb-4 flex items-center">
                <UserCheck className="mr-3 h-7 w-7 text-gray-600" /> Conheça o Fundador
              </motion.h3>
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="flex-shrink-0">

                  <img
                    src="/guto.jpg"
                    alt="Guto"
                    className="h-32 rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Gustavo Santos</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Desenvolvedor Web, Designer e Fotógrafo</p>
                  <div className="flex space-x-2 mt-2">
                    <a href="https://www.linkedin.com/in/gutosantos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Gustavo Santos" className="text-gray-500 hover:text-gray-600"><Linkedin size={20} /></a>
                    <a href="https://github.com/gustavo-devfull" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Gustavo Santos" className="text-gray-500 hover:text-gray-600"><Github size={20} /></a>
                  </div>
                </div>
              </div>
              <motion.p variants={fadeInUpVariants} custom={1} className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                <strong>Formações:</strong> <br /> Análise e Desenvolvimento de Sistemas [Senac/SP, 2023], Fotografia [Belas Artes/SP, 2016], Processamento de Dados [Escola de Engenharia Eletromecânica da Bahia, 1993].
              </motion.p>
            </div>

            <div>
              <motion.h4 variants={fadeInUpVariants} custom={2} className="text-xl font-semibold mb-3 flex items-center">
                <Tool className="mr-2 h-6 w-6 text-gray-600" /> Tecnologias Dominadas
              </motion.h4>
              <motion.div variants={fadeInUpVariants} custom={3} className="flex flex-wrap gap-2">
                {gustavoSkills.map(skill => (
                  <span key={skill} className="bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-sm font-medium shadow-sm">
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-800 hover:to-gray-600 text-white shadow-lg text-base"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            Vamos Conversar Sobre Seu Projeto
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;