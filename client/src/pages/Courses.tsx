import { motion } from "framer-motion";
import {
  Snowflake,
  Award,
  Clock,
  Users,
  MapPin,
  Target,
  Shield,
  BookOpen,
} from "lucide-react";

export default function Courses() {
  const courseFeatures = [
    {
      icon: Clock,
      title: "Duration",
      value: "1 Week",
      description: "Intensive training program",
    },
    {
      icon: Users,
      title: "Eligibility",
      value: "All USAR",
      description: "Open to all divisions",
    },
    {
      icon: Award,
      title: "Certification",
      value: "Arctic Tab",
      description: "Prestigious qualification",
    },
  ];

  const requirements = [
    "Active member of any USAR division and must serve 1+ month",
    "Minimum rank of E4B, Corporal",
    "Must have a spotless record for the past 6 months",
    "Must be on desktop and have a working microphone",
  ];

  const skills = [
    "Advanced cold weather survival techniques",
    "Arctic warfare and tactical operations",
    "Leadership in extreme conditions",
    "Cold weather equipment expertise",
    "Risk management and safety protocols",
  ];

  const benefits = [
    {
      icon: Award,
      title: "Arctic Tab",
      description:
        "Prestigious certification recognized across all USAR divisions",
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description:
        "Enhanced leadership capabilities in challenging environments",
    },
    {
      icon: Snowflake,
      title: "Specialized Training",
      description: "Unique expertise in cold weather operations",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/692044595793756284/1199370481019658241/ASF_RECCE_1.png?ex=689f4dcd&is=689dfc4d&hm=e0ede3a7d7b89ee8b9440466220260c67099ad9be086c1313e0ee10db76576a8&=&format=webp&quality=lossless&width=1232&height=659')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-asf-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              ELITE <span className="text-asf-accent">COURSES</span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              Specialized training programs for Army Special Forces and USAR
              personnel. Forge yourself in the crucible of elite military
              education.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {courseFeatures.map((feature, index) => {
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent"></div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 p-4 bg-asf-accent/10 rounded-xl mr-6">
                      <Snowflake className="w-full h-full text-asf-accent" />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-rajdhani font-black text-asf-accent mb-2">
                        Cold Weather
                      </h2>
                      <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-white">
                        Leaders Course
                      </h3>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/50 to-transparent mb-8"></div>

                  <p className="text-xl text-asf-gray-light mb-8 leading-relaxed">
                    An elite training program designed for personnel across all
                    USAR divisions to earn the prestigious Arctic Tab
                    certification. Test your limits in the harshest environments
                    and emerge as a cold weather warfare expert.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg">
                        <Clock className="w-full h-full text-asf-accent" />
                      </div>
                      <div>
                        <span className="font-rajdhani font-bold text-white">
                          Duration:
                        </span>
                        <span className="text-asf-gray-light ml-2">
                          1 week intensive training
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg">
                        <Users className="w-full h-full text-asf-accent" />
                      </div>
                      <div>
                        <span className="font-rajdhani font-bold text-white">
                          Eligibility:
                        </span>
                        <span className="text-asf-gray-light ml-2">
                          Open to all USAR personnel
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg">
                        <Award className="w-full h-full text-asf-accent" />
                      </div>
                      <div>
                        <span className="font-rajdhani font-bold text-white">
                          Certification:
                        </span>
                        <span className="text-asf-gray-light ml-2">
                          Arctic Tab qualification
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glow-border bg-asf-accent text-asf-black font-rajdhani font-black px-8 py-4 text-lg rounded-xl hover:bg-asf-accent-dark transition-colors duration-300"
                    onClick={() =>
                      window.open("https://discord.gg/yQSFux5UGb", "_blank")
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
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg">
                        <Shield className="w-full h-full text-asf-accent" />
                      </div>
                      <h5 className="font-rajdhani font-bold text-white mb-4 text-xl">
                        CLASSIFIED TRAINING
                      </h5>
                      <div className="h-px bg-gradient-to-r from-transparent via-asf-accent/50 to-transparent mb-4"></div>
                      <p className="text-asf-gray-light text-sm">
                        Training details are classified for operational
                        security. Course participants will receive comprehensive
                        briefings upon enrollment.
                      </p>
                    </div>

                    <div className="bg-asf-accent/5 p-6 rounded-lg border border-asf-accent/20">
                      <h6 className="text-asf-accent font-rajdhani font-bold mb-3">
                        SECURITY NOTE
                      </h6>
                      <p className="text-asf-gray-light text-sm leading-relaxed">
                        This course involves specialized military tactics and
                        procedures. All participants must maintain operational
                        security protocols.
                      </p>
                    </div>
                  </div>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              COURSE <span className="text-asf-accent">DETAILS</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Comprehensive information about requirements, training, and
              benefits
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg mr-4">
                  <BookOpen className="w-full h-full text-asf-accent" />
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white">
                  Entry Requirements
                </h3>
              </div>

              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-6"></div>

              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
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
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg mr-4">
                  <Target className="w-full h-full text-asf-accent" />
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white">
                  Training Content
                </h3>
              </div>

              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-6"></div>

              <ul className="space-y-4">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-3">
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
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-rajdhani font-black text-center mb-12">
              COURSE <span className="text-asf-accent">BENEFITS</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center group">
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
