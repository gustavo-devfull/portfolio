import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ps6nd7n',
        'template_xg78p2e',
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'vOcAkPFycnS_Hh97Q'
      );

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado por entrar em contato com a GPRETO.",
        duration: 5000,
        className: "bg-green-500 text-white",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Não foi possível enviar o e-mail.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-muted-foreground" />,
      title: "Telefone / WhatsApp",
      value: "+55 (16) 99752-0110",
      link: "https://wa.me/5516997520110",
    },
    {
      icon: <Mail className="h-6 w-6 text-muted-foreground" />,
      title: "Email Principal",
      value: "contato@gpreto.site",
      link: "mailto:contato@gpreto.site",
    },
    {
      icon: <MapPin className="h-6 w-6 text-muted-foreground" />,
      title: "Localização",
      value: "Atendemos todo o Brasil",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={24} />, label: "Instagram", url: "https://instagram.com/gpreto.site" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0a0a] text-foreground ">

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
            Fale com a <span className="gradient-text">GPRETO</span>
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
            Tem um projeto incrível em mente ou precisa de soluções digitais? Estamos prontos para ouvir você e transformar suas ideias em realidade!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-[#0f0f0f] p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Envie sua mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-muted-foreground">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-[#000] text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder="Ex: João da Silva"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-muted-foreground">
                    Seu Melhor Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-[#000] text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder="Ex: joao.silva@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-muted-foreground">
                  Assunto Principal
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-[#000] text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  placeholder="Ex: Orçamento para Landing Page"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-muted-foreground">
                  Sua Mensagem Detalhada
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-[#000] text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none shadow-sm"
                  placeholder="Descreva seu projeto ou dúvida aqui..."
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-[#5019bf] text-primary-foreground shadow-lg py-3 text-base hover:bg-[#3c138e]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </div>
                ) : (
                  <>
                    Enviar Agora <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#0f0f0f] p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Canais de Contato</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#0f0f0f] transition-colors group"
                  >
                    <div className="flex-shrink-0 bg-[#0f0f0f] p-3 rounded-full group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{info.title}</h4>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-[#0f0f0f] p-8 rounded-xl shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  Siga no Instagram
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 bg-[#0f0f0f] rounded-full text-muted-foreground hover:text-foreground hover:bg-[#5019bf] transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
