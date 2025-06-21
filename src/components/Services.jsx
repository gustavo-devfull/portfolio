import React from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, ShoppingCart, CheckSquare, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SpotlightCard from './SpotlightCard';

const ServicesComponent = () => {
  const services = [
    {
      id: 1,
      title: "Landing Pages",
      icon: <LayoutTemplate className="h-12 w-12 text-muted-foreground mb-4" />,
      description:
        "Uma landing page profissional pode melhorar a imagem da sua marca, aumentar conversões, atrair tráfego qualificado e fidelizar clientes.",
      details: [
        "Design responsivo para todos os dispositivos.",
        "Otimização para conversão e SEO.",
        "Foco na experiência do usuário.",
      ],
      image: "/video.webp",
    },
    {
      id: 2,
      title: "Site Institucional",
      icon: <CheckSquare className="h-12 w-12 text-muted-foreground mb-4" />,
      description:
        "Um site institucional profissional fortalece sua presença online, aumenta a credibilidade da marca e apresenta seus serviços de forma clara.",
      details: [
        "Imagem sólida e confiável para sua empresa.",
        "Aumento da credibilidade da marca.",
        "Informações claras e acessíveis sobre seus serviços.",
      ],
      image: "/asksuite.webp",
    },
    {
      id: 3,
      title: "E-commerce",
      icon: <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />,
      description:
        "Um e-commerce robusto amplia suas vendas, reforça sua marca, garante uma experiência de compra segura e fideliza clientes.",
      details: [
        "Navegação fácil e intuitiva.",
        "Integração com pagamentos seguros.",
        "Design responsivo e otimizado para vendas.",
      ],
      image: "/mori.webp",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
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
    <section id="services" className="py-16 md:py-24 bg-[#0c0c0c] text-foreground">
    
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
            Nossos <span className="gradient-text">Serviços</span>
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
            Soluções digitais personalizadas para impulsionar seu negócio: de landing pages impactantes a e-commerces robustos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index}
              className="h-full"
            >
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="#5019bf">

              <Card className="overflow-hidden card-hover h-full flex flex-col shadow-xl border-[#5019bf] bg-[#0f0f0f]transition-all duration-300">
                <CardHeader className="items-center text-center pt-8">
                  {service.icon}
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-6 pb-6">
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-left text-muted-foreground mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckSquare size={14} className="mr-2 mt-1 flex-shrink-0 text-[#ffffff]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative aspect-video w-full max-w-xl mx-auto rounded-md overflow-hidden mt-8 mb-8 shadow-xl">
                    <img
                      alt={`Ilustração de ${service.title}`}
                      className="w-full h-full object-contain"
                      src={service.image}
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-[#0c0c0c] border-[#5019bf] text-foreground hover:bg-[#5019bf]"
                    onClick={scrollToContact}
                  >
                    Saiba Mais <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={services.length}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-[#6110ff] text-primary-foreground shadow-lg px-10 py-6 text-base hover:bg-[#5019bf]"
            onClick={scrollToContact}
          >
            Transforme Sua Presença Online!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesComponent;
