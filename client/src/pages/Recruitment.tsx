import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle, Clock, Users, Shield } from "lucide-react";
import { RecruitmentConfig } from "../../../config/index";

export default function Recruitment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${RecruitmentConfig.hero.backgroundImage})`,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-asf-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              {RecruitmentConfig.hero.title.split(" ").map((word) =>
                word === RecruitmentConfig.hero.accentWord ? (
                  <span key={word} className="text-asf-accent">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              {RecruitmentConfig.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl inline-block">
              <h2 className="text-2xl font-rajdhani font-bold text-asf-accent mb-4">
                {RecruitmentConfig.hero.readySection.title}
              </h2>
              <p className="text-asf-gray-light mb-6">
                {RecruitmentConfig.hero.readySection.subtitle}
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-asf-accent rounded-full animate-pulse"></div>
                <span className="text-asf-accent font-rajdhani font-bold">
                  {RecruitmentConfig.hero.readySection.motto}
                </span>
                <div className="w-2 h-2 bg-asf-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 professional-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              ENTRY <span className="text-asf-accent">REQUIREMENTS</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Meet these essential criteria to begin your Special Forces journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {RecruitmentConfig.requirements.map((req, index) => {
              const IconComponent = req.icon;
              return (
                <motion.div
                  key={index}
                  className="group glow-border p-8 bg-asf-dark/60 backdrop-blur-sm hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-asf-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-rajdhani font-bold text-xl mb-3 text-white group-hover:text-asf-accent transition-colors duration-300">
                        {req.title}
                      </h3>
                      <div className="h-px bg-gradient-to-r from-asf-gray-dark via-asf-accent/30 to-transparent mb-3 group-hover:via-asf-accent transition-colors duration-300"></div>
                      <p className="text-asf-gray-light leading-relaxed">
                        {req.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-asf-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              JOINING <span className="text-asf-accent">PROCESS</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Your pathway from a USAR personnel to an elite Special Forces
              operator
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {RecruitmentConfig.processSteps.map((proc, index) => (
              <motion.div
                key={index}
                className="group flex items-start space-x-6 p-8 rounded-xl bg-asf-dark/40 backdrop-blur-sm hover:bg-asf-dark/60 transition-all duration-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-asf-accent text-asf-black flex items-center justify-center font-rajdhani font-black text-2xl rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {proc.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-rajdhani font-bold text-2xl mb-4 text-white group-hover:text-asf-accent transition-colors duration-300">
                    {proc.title}
                  </h3>
                  <div className="h-px bg-gradient-to-r from-asf-gray-dark via-asf-accent/30 to-transparent mb-4 group-hover:via-asf-accent transition-colors duration-300"></div>
                  <p className="text-asf-gray-light leading-relaxed">
                    {proc.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-asf-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-rajdhani font-black text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED
          </motion.h2>

          <div className="space-y-4">
            {RecruitmentConfig.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-asf-dark border border-asf-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-asf-black transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-rajdhani font-bold">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 mt-4">
                        <p className="text-asf-gray-light">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
