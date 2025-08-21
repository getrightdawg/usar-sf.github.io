import { motion } from "framer-motion";
import { CoursesConfig } from "../../../config/index.ts";

export default function Courses() {
  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${CoursesConfig.hero.backgroundImage})`,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90`}
        ></div>
        <div className="absolute inset-0">
          <div
            className={`absolute top-left w-96 h-96 bg-asf-accent/10 rounded-full blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-right w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl`}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              {CoursesConfig.hero.title.split(CoursesConfig.hero.accentWord)[0]}
              <span className="text-asf-accent">
                {CoursesConfig.hero.accentWord}
              </span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              {CoursesConfig.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {CoursesConfig.courseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="glow-border p-6 bg-asf-dark/60 backdrop-blur-sm rounded-xl">
                    <div className="w-16 h-16 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg">
                      <IconComponent className="w-full h-full text-asf-accent" />
                    </div>
                    <h3 className="font-rajdhani font-bold text-lg text-asf-accent mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-2xl font-rajdhani font-black text-white mb-1">
                      {feature.value}
                    </p>
                    <p className="text-sm text-asf-gray-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 professional-gradient relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="glow-border p-12 bg-asf-dark/80 backdrop-blur-sm rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 p-4 bg-asf-accent/10 rounded-xl mr-6">
                    <CoursesConfig.mainCourse.icon className="w-full h-full text-asf-accent" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-rajdhani font-black text-asf-accent mb-2">
                      {CoursesConfig.mainCourse.title
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-white">
                      {CoursesConfig.mainCourse.title
                        .split(" ")
                        .slice(2)
                        .join(" ")}
                    </h3>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/50 to-transparent mb-8"></div>

                <p className="text-xl text-asf-gray-light mb-8 leading-relaxed">
                  {CoursesConfig.mainCourse.subtitle}{" "}
                  {CoursesConfig.mainCourse.description}
                </p>

                <div className="space-y-6 mb-8">
                  {CoursesConfig.mainCourse.quickFacts.map((fact, index) => {
                    const IconComponent = fact.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg">
                          <IconComponent className="w-full h-full text-asf-accent" />
                        </div>
                        <div>
                          <span className="font-rajdhani font-bold text-white">
                            {fact.label}:
                          </span>
                          <span className="text-asf-gray-light ml-2">
                            {fact.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glow-border bg-asf-accent text-asf-black font-rajdhani font-black px-8 py-4 text-lg rounded-xl hover:bg-asf-accent-dark transition-colors duration-300"
                  onClick={() =>
                    window.open(CoursesConfig.mainCourse.enrollLink, "_blank")
                  }
                >
                  ENROLL NOW
                </motion.button>
              </div>

              <div className="glow-border p-8 bg-asf-black/60 backdrop-blur-sm rounded-xl">
                <h4 className="text-3xl font-rajdhani font-black text-asf-accent mb-8 text-center">
                  Course Overview
                </h4>

                <div className="space-y-8">
                  {CoursesConfig.courseOverview.map((overview, index) => (
                    <div
                      key={index}
                      className={`${
                        overview.highlight
                          ? "bg-asf-accent/5 p-6 rounded-lg border border-asf-accent/20"
                          : "text-center"
                      }`}
                    >
                      {overview.icon && (
                        <div className="w-16 h-16 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg">
                          <overview.icon className="w-full h-full text-asf-accent" />
                        </div>
                      )}
                      <h5 className="font-rajdhani font-bold text-white mb-4 text-xl text-asf-accent">
                        {overview.title}
                      </h5>
                      <div className="h-px bg-gradient-to-r from-transparent via-asf-accent/50 to-transparent mb-4"></div>
                      <p className="text-asf-gray-light text-sm">
                        {overview.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 bg-asf-dark/70 rounded-lg border border-asf-accent/20">
                  <h5 className="text-xl font-rajdhani font-bold text-asf-accent mb-4">
                    ARMY STAFF REVIEW
                  </h5>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      <span className="text-asf-accent">★</span>
                      <span className="text-asf-gray-light">★</span>
                      <span className="text-asf-gray-light">★</span>
                      <span className="text-asf-gray-light">★</span>
                      <span className="text-asf-gray-light">★</span>
                    </div>
                    <span className="ml-2 text-asf-gray-light text-sm">
                      0.5 / 5
                    </span>
                  </div>
                  <p className="text-asf-gray-light italic">
                    "i'm never doing ts again🥀"
                  </p>
                  <p className="mt-2 text-sm text-asf-gray">
                    — MC_T1gerTY
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-asf-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              COURSE{" "}
              <span className="text-asf-accent">
                {CoursesConfig.sections.courseDetails.accentWord}
              </span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              {CoursesConfig.sections.courseDetails.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg mr-4">
                  <CoursesConfig.sections.entryRequirements.icon className="w-full h-full text-asf-accent" />
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white">
                  {CoursesConfig.sections.entryRequirements.title}
                </h3>
              </div>
              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-6"></div>
              <ul className="space-y-4">
                {CoursesConfig.sections.entryRequirements.list.map((req, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-asf-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-asf-gray-light leading-relaxed">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg mr-4">
                  <CoursesConfig.sections.trainingContent.icon className="w-full h-full text-asf-accent" />
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white">
                  {CoursesConfig.sections.trainingContent.title}
                </h3>
              </div>
              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-6"></div>
              <ul className="space-y-4">
                {CoursesConfig.sections.trainingContent.list.map((skill, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-asf-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-asf-gray-light leading-relaxed">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-rajdhani font-black text-center mb-12">
              COURSE <span className="text-asf-accent">BENEFITS</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {CoursesConfig.sections.courseBenefits.map((benefit, i) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={i} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                      <IconComponent className="w-full h-full text-asf-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="font-rajdhani font-bold text-white mb-3 text-lg group-hover:text-asf-accent transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <div className="h-px bg-gradient-to-r from-transparent via-asf-gray-dark to-transparent mb-3 group-hover:via-asf-accent transition-colors duration-300"></div>
                    <p className="text-asf-gray-light text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
