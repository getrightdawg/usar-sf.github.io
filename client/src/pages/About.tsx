import { motion } from "framer-motion";
import { AboutConfig } from "../../../config/index";

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${AboutConfig.hero.backgroundImage})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-asf-accent/10 rounded-full blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3}}
          >
            <h1 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              {AboutConfig.hero.title.split(AboutConfig.hero.accentWord)[0]}
              <span className="text-asf-accent">{AboutConfig.hero.accentWord}</span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              {AboutConfig.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl">
              <h2 className="text-2xl font-rajdhani font-bold text-asf-accent mb-4">
                {AboutConfig.mission.title}
              </h2>
              <p className="text-asf-gray-light leading-relaxed">
                {AboutConfig.mission.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 professional-gradient relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-rajdhani font-black mb-6">
              {AboutConfig.groupsSection.title}{" "}
              <span className="text-asf-accent">
                {AboutConfig.groupsSection.accentWord}
              </span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              {AboutConfig.groupsSection.subtitle}
            </p>
          </motion.div>

          <motion.div
            className={`grid md:grid-cols-${AboutConfig.groupsSection.gridCols} gap-8 mb-20`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {AboutConfig.groupsSection.groups.map((group, i) => (
              <motion.div
                key={i}
                className="group glow-border p-8 bg-asf-dark/60 backdrop-blur-sm hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                      <img
                        src={group.badgeSrc}
                        alt={group.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-rajdhani font-bold mb-2 text-white group-hover:text-asf-accent transition-colors duration-300">
                      {group.name}
                    </h3>
                    <p className="text-asf-accent font-rajdhani font-medium">
                      {group.tagline}
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-asf-gray-dark to-transparent mb-4 group-hover:via-asf-accent transition-colors duration-300"></div>

                  <p className="text-asf-gray-light mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-rajdhani font-bold text-white text-sm">
                      COMPANIES:
                    </h4>
                    <ul className="text-sm text-asf-gray-light space-y-2">
                      {group.companies.map((company, j) => (
                        <li key={j} className="flex items-start">
                          <span className="w-2 h-2 bg-asf-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>{company.name}</strong>
                            {company.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="glow-border p-12 bg-asf-dark/80 backdrop-blur-sm rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            data-testid="df-program-section"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent"></div>
            <div className="relative text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-rajdhani font-black mb-6 text-asf-accent">
                {AboutConfig.dfProgram.title}
              </h3>
              <div className="w-32 h-1 bg-asf-accent mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-asf-gray-light">
                {AboutConfig.dfProgram.subtitle}
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg mb-6 leading-relaxed">
                {AboutConfig.dfProgram.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  <div className="rounded-2xl border border-asf-gray-dark p-6 shadow-sm">
    <h4 className="text-xl font-rajdhani font-bold mb-3 text-asf-accent">
      SELECTION CRITERIA
    </h4>
    <ul className="text-asf-gray-light space-y-2">
      {AboutConfig.dfProgram.criteria.map((item, idx) => (
        <li key={idx}>• {item}</li>
      ))}
    </ul>
  </div>

  <div className="rounded-2xl border border-asf-gray-dark p-6 shadow-sm">
    <h4 className="text-xl font-rajdhani font-bold mb-3 text-asf-accent">
      DF PRIVILEGES
    </h4>
    <ul className="text-asf-gray-light space-y-2">
      {AboutConfig.dfProgram.privileges.map((item, idx) => (
        <li key={idx}>• {item}</li>
      ))}
    </ul>
  </div>
</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
