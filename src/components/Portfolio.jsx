import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Dra. Andreza Gilio",
    category: "Site Onepage",
    imageUrl: "/andreza.webp",
    link: "andrezagilio.com.br",
  },
  {
    id: 2,
    title: "Asksuite",
    category: "Portal Institucional",
    imageUrl: "/asksuite.webp",
    link: "asksuite.com",
  },
  {
    id: 3,
    title: "Mori",
    category: "Site Institucional",
    imageUrl: "/mori1.webp",
    link: "moribr.com",
  },
  {
    id: 4,
    title: "takeoff by hands",
    category: "Landing Page",
    imageUrl: "/hands.webp",
    link: "hands.ag/takeoff",
  },
  {
    id: 5,
    title: "Escola de Enfermagem USP",
    category: "Portal Institucional",
    imageUrl: "/eusp.webp",
    link: "ee.usp.br",
  },
  {
    id: 6,
    title: "Video Imagem",
    category: "Site Onepage",
    imageUrl: "/video.webp",
    link: "videoimagem.com",
  },
  {
    id: 7,
    title: "Rocket Science",
    category: "Site Institucional",
    imageUrl: "/rocket.webp",
    link: "rocketscience.tech",
  },
  {
    id: 8,
    title: "Odonto Lógica",
    category: "Site Institucional",
    imageUrl: "/odonto.webp",
    link: "odontologicaavare.com.br",
  },
  {
    id: 9,
    title: "ThinkRider",
    category: "Site Institucional e e-commerce",
    imageUrl: "/mori.webp",
    link: "thinkrider.com.br",
  },
  {
    id: 10,
    title: "PX Controlling Services",
    category: "Site Institucional",
    imageUrl: "/pxcs.webp",
    link: "pxcs.com.br/en",
  },
  {
    id: 11,
    title: "ShareHub",
    category: "Site Onepage",
    imageUrl: "/share.webp",
    link: "sharehub.com.br",
  },
  {
    id: 12,
    title: "NeuroTEAid",
    category: "Landing Page",
    imageUrl: "/neuro.webp",
    link: "neuroteaid.com",
  },
];

const Portfolio = () => {
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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-[#0a0a0a] text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUpVariants}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Nosso <span className="gradient-text">Portfólio</span>
          </motion.h2>
          <motion.div
            variants={fadeInUpVariants}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-[#722cff] to-[#5019bf] mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeInUpVariants}
            custom={2}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Confira alguns dos projetos incríveis que desenvolvemos para nossos clientes.
            <br /> Soluções digitais que geram resultados e encantam.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index}
              className="h-full"
            >
              <Card className="overflow-hidden card-hover h-full flex flex-col shadow-lg border-[#5019bf] bg-[#000]transition-all duration-300">
                <CardHeader className="p-0">
                  <div
                    className="aspect-[16/9] w-full bg-[#000] overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundPosition: `center`,
                      backgroundSize: `cover`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[#5019bf]/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {item.category}
                  </CardDescription>
                  <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-[#0c0c0c] border-[#5019bf] text-foreground hover:bg-[#5019bf]"
                    onClick={() => window.open(`https://${item.link}`, "_blank")}
                  >
                    Visitar Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={portfolioItems.length}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-[#6110ff] text-primary-foreground shadow-lg px-10 py-6 text-base hover:bg-[#5019bf]"
            onClick={scrollToContact}
          >
            Gostou? Vamos Criar o Seu Projeto!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
