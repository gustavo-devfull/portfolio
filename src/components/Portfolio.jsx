import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Dra. Andreza Gilio",
    category: "Site Onepage",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site da Dra. Andreza Gilio",
    link: "andrezagilio.com.br",
    imageCrop: { x: 0, y: 0, width: 280, height: 180 } 
  },
  {
    id: 2,
    title: "Asksuite",
    category: "Portal Institucional",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Portal da Asksuite",
    link: "asksuite.com",
    imageCrop: { x: 290, y: 0, width: 280, height: 180 }
  },
  {
    id: 3,
    title: "Mori",
    category: "Site Institucional",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site da Mori",
    link: "moribr.com",
    imageCrop: { x: 580, y: 0, width: 280, height: 180 }
  },
  {
    id: 4,
    title: "takeoff by hands",
    category: "Landing Page",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Landing Page takeoff by hands",
    link: "hands.ag/takeoff",
    imageCrop: { x: 870, y: 0, width: 280, height: 180 }
  },
  {
    id: 5,
    title: "Escola de Enfermagem USP",
    category: "Portal Institucional",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Portal da Escola de Enfermagem USP",
    link: "ee.usp.br",
    imageCrop: { x: 0, y: 230, width: 280, height: 180 }
  },
  {
    id: 6,
    title: "Video Imagem",
    category: "Site Onepage",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site Video Imagem",
    link: "videoimagem.com",
    imageCrop: { x: 290, y: 230, width: 280, height: 180 }
  },
  {
    id: 7,
    title: "Rocket Science",
    category: "Site Institucional",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site da Rocket Science",
    link: "rocketscience.tech",
    imageCrop: { x: 580, y: 230, width: 280, height: 180 }
  },
  {
    id: 8,
    title: "Odonto Lógica",
    category: "Site Institucional",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site da Odonto Lógica",
    link: "odontologicaavare.com.br",
    imageCrop: { x: 870, y: 230, width: 280, height: 180 }
  },
  {
    id: 9,
    title: "Green Domus",
    category: "Site Institucional",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site da Green Domus",
    link: "greendomus.com.br",
    imageCrop: { x: 0, y: 460, width: 280, height: 180 }
  },
  {
    id: 10,
    title: "PX Controlling Services",
    category: "Site Institucional",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site da PX Controlling Services",
    link: "pxcs.com.br/en",
    imageCrop: { x: 290, y: 460, width: 280, height: 180 }
  },
  {
    id: 11,
    title: "ShareHub",
    category: "Site Onepage",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Site da ShareHub",
    link: "sharehub.com.br",
    imageCrop: { x: 580, y: 460, width: 280, height: 180 }
  },
  {
    id: 12,
    title: "NeuroTEAid",
    category: "Landing Page",
    imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2cfb1b03-1837-40fe-acc1-5b06b47cd404/deac94189ee7438fe1185b65a4023b02.png",
    imageDescription: "Landing Page NeuroTEAid",
    link: "neuroteaid.com",
    imageCrop: { x: 870, y: 460, width: 280, height: 180 }
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
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
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
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeInUpVariants}
            custom={2}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Confira alguns dos projetos incríveis que desenvolvemos para nossos clientes. Soluções digitais que geram resultados e encantam.
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
              <Card className="overflow-hidden card-hover h-full flex flex-col shadow-lg border-transparent hover:border-primary/50 transition-all duration-300 bg-white dark:bg-gray-800">
                <CardHeader className="p-0">
                  <div 
                    className="aspect-[3/2] w-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundPosition: `-${item.imageCrop.x}px -${item.imageCrop.y}px`,
                      backgroundSize: `auto ${item.imageCrop.height * (1152 / item.imageCrop.width)}px` // Assuming original image width is 1152px
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                       <ImageIcon className="h-12 w-12 text-white/70" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardDescription className="text-xs uppercase tracking-wider text-primary mb-1">{item.category}</CardDescription>
                  <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/20"
                    onClick={() => window.open(`http://${item.link}`, "_blank")}
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg px-10 py-6 text-lg"
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