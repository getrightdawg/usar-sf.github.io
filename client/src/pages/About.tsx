import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="relative py-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/692044595793756284/1210955808007782430/IMG_8101.png?ex=689f437b&is=689df1fb&hm=91daf7ef77780ef34188e10e9ab0feec373dd8f494433bd07162c8cf289c910e&=&format=webp&quality=lossless')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

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
              ABOUT <span className="text-asf-accent">ASF</span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              The Army Special Forces represents the pinnacle of military
              excellence within USAR. Comprising three specialized groups, we
              conduct elite operations, advanced training, and maintain the
              highest standards of professional military conduct.
            </p>
          </motion.div>

          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl">
              <h2 className="text-2xl font-rajdhani font-bold text-asf-accent mb-4">
                OUR MISSION
              </h2>
              <p className="text-asf-gray-light leading-relaxed">
                To liberate the oppressed through unconventional warfare,
                special reconnaissance, and direct action missions while
                maintaining the highest standards of military excellence.
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-rajdhani font-black mb-6">
              OUR <span className="text-asf-accent">GROUPS</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Three elite Special Forces Groups, each with specialized
              capabilities and missions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              className="group glow-border p-8 bg-asf-dark/60 backdrop-blur-sm hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/USA_-_10th_Special_Forces_Flash.svg/800px-USA_-_10th_Special_Forces_Flash.svg.png"
                      alt="10th Special Forces Badge"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-rajdhani font-bold mb-2 text-white group-hover:text-asf-accent transition-colors duration-300">
                    10th Special Forces Group
                  </h3>
                  <p className="text-asf-accent font-rajdhani font-medium">
                    Gatekeepers of Special Forces Quality
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-asf-gray-dark to-transparent mb-4 group-hover:via-asf-accent transition-colors duration-300"></div>

                <p className="text-asf-gray-light mb-6 leading-relaxed">
                  Handles recruitment and hosts the Special Forces Qualification
                  Course (SFQC) alongside the CWLC.
                </p>

                <div className="space-y-3">
                  <h4 className="font-rajdhani font-bold text-white text-sm">
                    COMPANIES:
                  </h4>
                  <ul className="text-sm text-asf-gray-light space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asf-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Whiskey Company:</strong> Hosts SFQC for the 1st
                        SFG and 10th SFG
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asf-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Yankee Company:</strong> Hosts SFQC for the 5th
                        SFG and 10th SFG
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group glow-border p-8 bg-asf-dark/60 backdrop-blur-sm hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/08/5th_SFG_Beret_Flash.png"
                      alt="5th Special Forces Badge"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-rajdhani font-bold mb-2 text-white group-hover:text-asf-accent transition-colors duration-300">
                    5th Special Forces Group
                  </h3>
                  <p className="text-asf-accent font-rajdhani font-medium">
                    MILSIMs & Wargames Focused
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-asf-gray-dark to-transparent mb-4 group-hover:via-asf-accent transition-colors duration-300"></div>

                <p className="text-asf-gray-light mb-6 leading-relaxed">
                  The 5th SFG is mainly focused around Military Simulations
                  (MILSIMS) and Wargames.
                </p>

                <div className="space-y-3">
                  <h4 className="font-rajdhani font-bold text-white text-sm">
                    COMPANIES:
                  </h4>
                  <ul className="text-sm text-asf-gray-light space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asf-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Echo Company:</strong> Centered around Wargames.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asf-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Delta Company:</strong> Centered around MILSIMs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group glow-border p-8 bg-asf-dark/60 backdrop-blur-sm hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/1sfg.svg/1024px-1sfg.svg.png"
                      alt="1st Special Forces Badge"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-rajdhani font-bold mb-2 text-white group-hover:text-asf-accent transition-colors duration-300">
                    1st Special Forces Group
                  </h3>
                  <p className="text-asf-accent font-rajdhani font-medium">
                    Scrimmage & Raid Focused
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-asf-gray-dark to-transparent mb-4 group-hover:via-asf-accent transition-colors duration-300"></div>

                <p className="text-asf-gray-light mb-6 leading-relaxed">
                  The most elite group. Specializes in high-stakes scrimmages
                  and raids, leading ASF in elite combat performance.
                </p>

                <div className="space-y-3">
                  <h4 className="font-rajdhani font-bold text-white text-sm">
                    COMPANIES:
                  </h4>
                  <ul className="text-sm text-asf-gray-light space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asf-accent rounded-full mt-2 mr-3 flex-shrink-0">                        </span>
                      <span>
                        <strong>Alpha Company:</strong> Elite of the elite.
                        Focuses on Scrimmages & Raids.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-asf-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Yankee Company:</strong> Reserved elite
                        personnel. Focuses on Scrimmages & Raids.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="glow-border p-12 bg-asf-dark/80 backdrop-blur-sm rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            data-testid="df-program-section"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent"></div>
            <div className="relative text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-rajdhani font-black mb-6 text-asf-accent">
                DESIGNATED FIGHTER PROGRAM
              </h3>
              <div className="w-32 h-1 bg-asf-accent mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-asf-gray-light">
                Elite program that only a few manage to get in.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg mb-6 leading-relaxed">
                The Designated Fighter Program (DFP) is a rigorous program
                intended to select only the best of the best. Each Designated
                Fighter gets access and priority to certain events such as
                operations and deployments. They show combat excellence above
                all others and are the elite of the elite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-rajdhani font-bold mb-3">
                  SELECTION CRITERIA
                </h4>
                <ul className="text-asf-gray-light space-y-2">
                  <li>• Must be an active Special Forces member</li>
                  <li>• Must be excellent at combat</li>
                  <li>
                    • Can only be handpicked by DF Command if proven worthy
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-rajdhani font-bold mb-3">
                  DF PRIVILEGES
                </h4>
                <ul className="text-asf-gray-light space-y-2">
                  <li>• Priority selection for deployments and operations</li>
                  <li>• Recognition and award upon completion</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
