import { motion } from "framer-motion";

export function WhyASFSection() {
  const benefits = [
    {
      title: "Elite Status",
      description:
        "Join an elite force recognized for excellence and tactical expertise.",
      icon: "🎖️",
    },
    {
      title: "Brotherhood",
      description:
        "Build lifelong bonds with highly trained and committed comrades.",
      icon: "🤝",
    },
    {
      title: "Presidential Recognition",
      description:
        "There are reasons why the Army Special Forces has the Army Presidential Unit Citation.",
      icon: "🏆",
    },
  ];

  const privileges = [
    "Access to operations and deployments",
    "Advanced tactical training programs",
    "Elite unit recognition across USAR",
    "Opportunity for Designated Fighter status",
    "Leadership development opportunities",
  ];

  return (
    <section className="py-24 professional-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-asf-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-asf-accent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
            WHY JOIN <span className="text-asf-accent">ASF?</span>
          </h2>
          <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
          <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
            Discover the exceptional benefits and opportunities that await elite
            warriors
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="group flex items-start space-x-6 p-6 rounded-lg bg-asf-dark/30 backdrop-blur-sm hover:bg-asf-dark/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-asf-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-rajdhani font-bold mb-3 text-white group-hover:text-asf-accent transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-asf-gray-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="glow-border p-10 rounded-xl bg-asf-dark/60 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="join-benefits-section"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-rajdhani font-black mb-4 text-asf-accent">
                JOIN THE ELITE
              </h3>
              <div className="w-16 h-1 bg-asf-accent mx-auto"></div>
            </div>
            <div className="space-y-5">
              {privileges.map((privilege, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-asf-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-asf-gray-light group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {privilege}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-10 pt-8 border-t border-asf-gray-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <p className="text-asf-accent font-rajdhani font-bold text-lg">
                  READY TO SERVE?
                </p>
                <p className="text-asf-gray-light text-sm mt-2">
                  The elite await your commitment
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
