import React from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, ShoppingCart, CheckSquare, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesComponent = () => { 
  const services = [
    {
      id: 1,
      title: "Landing Pages",
      icon: <LayoutTemplate className="h-12 w-12 text-gray-500 mb-4" />,
      description: "Uma landing page profissional pode ajudar a melhorar a imagem da sua marca, aumentar a taxa de conversão, atrair mais tráfego e fidelizar clientes. Investir em uma landing page de alta qualidade é uma ótima maneira de impulsionar o crescimento do seu negócio.",
      details: [
        "Design responsivo para todos os dispositivos.",
        "Otimização para conversão e SEO.",
        "Foco na experiência do usuário.",
      ],
      image: "landing-page-service",
    },
    {
      id: 2,
      title: "Site Institucional",
      icon: <CheckSquare className="h-12 w-12 text-gray-600 mb-4" />,
      description: "Ter um site institucional profissional pode trazer muitas vantagens para o seu negócio. Primeiramente, um site bem projetado e otimizado pode ajudar a aumentar a visibilidade da sua marca na internet, atraindo mais tráfego e potenciais clientes.",
      details: [
        "Imagem sólida e confiável para sua empresa.",
        "Aumento da credibilidade da marca.",
        "Informações claras e acessíveis sobre seus serviços.",
      ],
      image: "institutional-site-service",
    },
    {
      id: 3,
      title: "E-commerce",
      icon: <ShoppingCart className="h-12 w-12 text-gray-500 mb-4" />,
      description: "Um e-commerce profissional pode ajudar a aumentar as vendas, melhorar a imagem da sua marca, fornecer uma experiência de compra segura e confiável, atrair mais tráfego e fidelizar clientes. É uma ótima maneira de impulsionar o crescimento do seu negócio.",
      details: [
        "Navegação fácil e intuitiva.",
        "Integração com ferramentas de pagamento seguras.",
        "Design responsivo e otimizado para vendas.",
      ],
      image: "ecommerce-service-illustration",
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
    <section id="services" className="py-16 md:py-24">
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
            className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeInUpVariants}
            custom={2}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Soluções digitais personalizadas para impulsionar o seu negócio, desde landing pages impactantes até plataformas de e-commerce robustas.
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
              <Card className="overflow-hidden card-hover h-full flex flex-col shadow-xl border-transparent hover:border-gray/50 transition-all duration-300 bg-white dark:bg-gray-800/70">
                 <CardHeader className="items-center text-center pt-8">
                  {service.icon}
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-6 pb-6">
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-left text-gray-600 dark:text-gray-400 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckSquare size={14} className="mr-2 mt-1 text-black-600 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative aspect-video w-full max-w-xl mx-auto rounded-md overflow-hidden mt-8 mb-8 shadow-xl">
                     {service.id === 1 && <img  alt="Ilustração de Landing Page" class="w-full h-full object-contain" src="/video.webp" />}
                     {service.id === 2 && <img  alt="Ilustração de Site Institucional" class="w-full h-full object-contain" src="asksuite.webp" />}
                     {service.id === 3 && <img  alt="Ilustração de E-commerce" class="w-full h-full object-contain" src="mori.webp" />}
                  </div>
                   <Button 
                      variant="outline" 
                      className="w-full border-gray text-gray hover:bg-gray/10 dark:border-gray dark:text-gray dark:hover:bg-gray/20"
                      onClick={scrollToContact}
                    >
                      Saiba Mais <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
              </Card>
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
            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-purple-700 text-white shadow-lg px-10 py-6 text-lg"
            onClick={scrollToContact}
          >
            Transforme Sua Presença Online Agora!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesComponent; 