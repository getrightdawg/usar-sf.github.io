import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle, Clock, Users, Shield } from "lucide-react";

export default function Recruitment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const requirements = [
    {
      title: "Account Age",
      text: "Both your Roblox and Discord account must be at least 3 months old.",
      icon: Clock,
    },
    {
      title: "Clean Record",
      text: "You must not have any recent dishonorable discharges within ASF.",
      icon: Shield,
    },
    {
      title: "Blacklist Status",
      text: "You must not be blacklisted from the Army Special Operations Command.",
      icon: CheckCircle,
    },
    {
      title: "Account Status",
      text: "You must not use an alternate account and your Roblox account must have its inventory on public.",
      icon: Users,
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Selection/Application Process",
      text: "Attend an ASF (group-restricted) selection event or apply through applications in the #open-positions forum within the USAR community server.",
    },
    {
      step: "2",
      title: "Phase Role Request",
      text: "Once you pass your selection or application, you will need to file a phase role request to be enrolled in SFQC within the ASF server.",
    },
    {
      step: "3",
      title: "SFQC Training",
      text: "After you receive your roles, you will be placed in SFQC. You will need to complete all 5 phases designed for your specified group to graduate and become a Special Forces member.",
    },
  ];

  const faqs = [
    {
      question: "How do I join ASF?",
      answer:
        "You can join by attending a group-restricted selection event or applying through the #open-positions forum in the USAR community server. Once accepted, you'll enter SFQC training.",
    },
    {
      question: "How long does SFQC take?",
      answer:
        "The Special Forces Qualification Course is divided into 5 phases. You are required to complete the pipeline under a week. Failure to do so, without notice, will result in a removal from the course.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Prior MILSIM or combat experience is required. While ASF will train you from the ground up through SFQC, you will be evaluated on combat multiple times. Dedication and discipline are expected.",
    },
    {
      question: "What does each phase in SFQC have?",
      answer:
        "It depends on the group you're joining. For 1st SFG, it has a Combat Evaluation, Raid Grounds Evaluation and a Classroom Session phase. For 5th SFG, it has a CQB Assessment, Land Navigation and Roles and Tactics phase. Lastly, for 10th SFG, it has a Combat Evaluation, Map Introduction and a Classroom Session phase. The last two phases are universal for all groups, which includes an Airborne Qualification and a Practice Inspection phase.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/692044595793756284/1192649252673953812/image.png?ex=689f3dec&is=689dec6c&hm=2be4f05fb59fbd060fc4ccb0a54f9f559158b85516fbccd52ebc12d49db13c84&=&format=webp&quality=lossless&width=1232&height=702')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
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
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              JOIN THE <span className="text-asf-accent">ELITE</span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              Thinking about joining? Here's what you need to know to become
              part of the Army Special Forces.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl inline-block">
              <h2 className="text-2xl font-rajdhani font-bold text-asf-accent mb-4">
                READY TO SERVE?
              </h2>
              <p className="text-asf-gray-light mb-6">
                Begin your journey to becoming an elite warrior
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-asf-accent rounded-full animate-pulse"></div>
                <span className="text-asf-accent font-rajdhani font-bold">
                  DE OPPRESSO LIBER
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
            transition={{ duration: 0.6 }}
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
            {requirements.map((req, index) => {
              const IconComponent = req.icon;
              return (
                <motion.div
                  key={index}
                  className="group glow-border p-8 bg-asf-dark/60 backdrop-blur-sm hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
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
            transition={{ duration: 0.6 }}
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
            {processSteps.map((proc, index) => (
              <motion.div
                key={index}
                className="group flex items-start space-x-6 p-8 rounded-xl bg-asf-dark/40 backdrop-blur-sm hover:bg-asf-dark/60 transition-all duration-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED
          </motion.h2>

          <div className="space-y-4">
            <div className="space-y-4">
              <motion.div
                className="bg-asf-dark border border-asf-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-asf-black transition-colors duration-300"
                  onClick={() => toggleFAQ(0)}
                >
                  <span className="text-lg font-rajdhani font-bold">
                    How do I join ASF?
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === 0 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 mt-4">
                        <p className="text-asf-gray-light">
                          You can join by attending a group-restricted selection
                          event or applying through the #open-positions forum in
                          the USAR community server. Once accepted, you’ll enter
                          SFQC training.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="bg-asf-dark border border-asf-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-asf-black transition-colors duration-300"
                  onClick={() => toggleFAQ(1)}
                >
                  <span className="text-lg font-rajdhani font-bold">
                    How long does SFQC take?
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === 1 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === 1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 mt-4">
                        <p className="text-asf-gray-light">
                          The Special Forces Qualification Course is divided
                          into 5 phases. You are required to complete the
                          pipeline under a week. Failure to do so, without
                          notice, will result in a removal from the course.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="bg-asf-dark border border-asf-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-asf-black transition-colors duration-300"
                  onClick={() => toggleFAQ(2)}
                >
                  <span className="text-lg font-rajdhani font-bold">
                    Do I need prior experience?
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === 2 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === 2 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 mt-4">
                        <p className="text-asf-gray-light">
                          Prior MILSIM or combat experience is required. While
                          ASF will train you from the ground up through SFQC,
                          you will be evaluated on combat multiple times.
                          Dedication and discipline are expected.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="bg-asf-dark border border-asf-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-asf-black transition-colors duration-300"
                  onClick={() => toggleFAQ(3)}
                >
                  <span className="text-lg font-rajdhani font-bold">
                    What does each phase in SFQC have?
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === 0 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === 3 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 mt-4">
                        <p className="text-asf-gray-light">
                          It depends on the group you're joining. For 1st SFG,
                          it has a Combat Evaluation, Raid Grounds Evaluation
                          and a Classroom Session phase. For 5th SFG, it has a
                          CQB Assessment, Land Navigation and Roles and Tactics
                          phase. Lastly, for 10th SFG, it has a Combat
                          Evaluation, Map Introduction and a Classroom Session
                          phase. The last two phases are universal for all
                          groups, which includes an Airborne Qualification and a
                          Practice Inspection phase.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
