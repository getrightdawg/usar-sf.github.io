import { motion } from "framer-motion";
import { Clock, Mail } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { ContactConfig } from "../../../config/index";

export default function Contact() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="py-24 bg-asf-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ContactConfig.hero.backgroundImage})`,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90">
          <div className="absolute top-left w-96 h-96 bg-asf-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-right w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              {ContactConfig.hero.title.split(ContactConfig.hero.accentWord)[0]}
              <span className="text-asf-accent">
                {ContactConfig.hero.accentWord}
              </span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              {ContactConfig.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 professional-gradient">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {[
            { title: "OVERSEER", members: ContactConfig.overseer },
            { title: "ASF HIGH COMMAND", members: ContactConfig.hicomMembers },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              className="glow-border p-12 bg-asf-dark/80 backdrop-blur-sm rounded-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent"></div>
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-rajdhani font-black text-asf-accent mb-6">
                    {section.title}
                  </h2>
                  <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
                  <p className="text-xl text-asf-gray-light">
                    {section.title === "OVERSEER"
                      ? "The leaders of the Army Special Operations Command"
                      : "The elite leadership driving Special Forces excellence"}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {section.members.map((member, index) => (
                    <motion.div
                      key={index}
                      className="text-center group cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="glow-border p-8 bg-asf-black/60 backdrop-blur-sm rounded-xl hover:bg-asf-black/80 transition-all duration-300">
                        <div className="w-20 h-20 mx-auto mb-6 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                          <img
                            src={member.insignia}
                            alt={member.position}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-rajdhani font-bold text-xl mb-2 text-white group-hover:text-asf-accent transition-colors duration-300">
                          {member.position}
                        </h3>
                        <div className="h-px bg-gradient-to-r from-transparent via-asf-gray-dark to-transparent mb-3 group-hover:via-asf-accent transition-colors duration-300"></div>
                        <p className="text-asf-gray-light font-medium">
                          {member.rank}, {member.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              {
                ContactConfig.sections.specialForcesGroups.title.split(
                  ContactConfig.sections.specialForcesGroups.accentWord
                )[0]
              }
              <span className="text-asf-accent">
                {ContactConfig.sections.specialForcesGroups.accentWord}
              </span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              {ContactConfig.sections.specialForcesGroups.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ContactConfig.groups.map((group, index) => (
              <motion.div
                key={index}
                className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMember(group)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                      <img
                        src={group.src}
                        alt={group.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-rajdhani font-bold text-2xl text-asf-accent">
                      {group.name}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {group.leadership.map((leader, leaderIndex) => (
                      <div key={leaderIndex} className="group/leader">
                        <h4 className="font-rajdhani font-bold text-sm text-white mb-2 group-hover/leader:text-asf-accent transition-colors duration-300">
                          {leader.position}
                        </h4>
                        <div className="h-px bg-gradient-to-r from-asf-gray-dark via-asf-accent/30 to-transparent mb-2 group-hover/leader:via-asf-accent transition-colors duration-300"></div>
                        <p className="text-asf-gray-light text-sm">
                          {leader.name
                            ? `${leader.rank}, ${leader.name}`
                            : leader.rank}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        title={selectedMember?.name || selectedMember?.position}
        size="lg"
      >
        {selectedMember && (
          <div className="space-y-6" data-testid="member-details">
            {!selectedMember.leadership && (
              <div className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray space-y-2">
                <h4 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                  Information
                </h4>
                {selectedMember.name && (
                  <p>
                    <strong>Username:</strong> {selectedMember.name}
                  </p>
                )}
                {selectedMember.position && (
                  <p>
                    <strong>Position:</strong> {selectedMember.position}
                  </p>
                )}
                {selectedMember.rank && (
                  <p>
                    <strong>Rank:</strong> {selectedMember.rank}
                  </p>
                )}
              </div>
            )}
            {!selectedMember.leadership &&
              selectedMember.position &&
              ContactConfig.positionDuties[selectedMember.position] && (
                <div className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray">
                  <h4 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                    Duties & Responsibilities
                  </h4>
                  <p className="text-asf-gray-light">
                    {ContactConfig.positionDuties[selectedMember.position]}
                  </p>
                </div>
              )}
            {selectedMember.leadership &&
              selectedMember.leadership.length > 0 && (
                <div className="space-y-6">
                  {selectedMember.leadership.map((leader: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray space-y-3"
                    >
                      <h4 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                        {leader.position}
                      </h4>
                      {leader.name && (
                        <p>
                          <strong>Username:</strong> {leader.name}
                        </p>
                      )}
                      {leader.rank && (
                        <p>
                          <strong>Rank:</strong> {leader.rank}
                        </p>
                      )}
                      {leader.position &&
                        ContactConfig.positionDuties[leader.position] && (
                          <p className="text-asf-gray-light">
                            <strong>Duties & Responsibilities:</strong>{" "}
                            {ContactConfig.positionDuties[leader.position]}
                          </p>
                        )}
                      {leader.roblox && (
                        <div className="text-center mt-2">
                          <a
                            href={leader.roblox}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-asf-accent text-black font-rajdhani font-bold rounded-lg hover:bg-asf-accent/80 transition-colors duration-300"
                          >
                            ROBLOX PROFILE
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            {selectedMember.roblox && !selectedMember.leadership && (
              <div className="text-center mt-6">
                <a
                  href={selectedMember.roblox}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-asf-accent text-black font-rajdhani font-bold rounded-lg hover:bg-asf-accent/80 transition-colors duration-300 z-20 relative"
                >
                  ROBLOX PROFILE
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>

      <section className="py-24 bg-asf-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                  <Clock className="w-full h-full text-asf-accent" />
                </div>
                <h2 className="text-3xl font-rajdhani font-bold text-white">
                  {ContactConfig.responseTimes[0].title}
                </h2>
              </div>
              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-8"></div>
              <div className="space-y-6">
                {ContactConfig.responseTimes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-asf-black/40 rounded-lg"
                  >
                    <div>
                      <h3 className="font-rajdhani font-bold text-lg text-white">
                        {item.title}
                      </h3>
                      <p className="text-asf-gray-light text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-asf-accent font-rajdhani font-bold text-xl">
                      {item.duration}
                    </div>
                  </div>
                ))}
              </div>
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
                  <Mail className="w-full h-full text-asf-accent" />
                </div>
                <h2 className="text-3xl font-rajdhani font-bold text-white">
                  {ContactConfig.sections.readyToConnect.title}
                </h2>
              </div>
              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-8"></div>
              <div className="space-y-6">
                {ContactConfig.contactMethods.map((method, idx) => (
                  <div key={idx} className="p-4 bg-asf-black/40 rounded-lg">
                    <h3 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                      {method.title}
                    </h3>
                    <p className="text-asf-gray-light mb-2">
                      {method.description}
                    </p>
                    {method.note && (
                      <div className="text-sm text-asf-gray">{method.note}</div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl inline-block">
              <h3 className="text-2xl font-rajdhani font-bold text-asf-accent mb-4">
                {ContactConfig.sections.readyToConnect.title}
              </h3>
              <p className="text-asf-gray-light mb-6 max-w-md">
                {ContactConfig.sections.readyToConnect.subtitle}
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-asf-accent rounded-full animate-pulse"></div>
                <span className="text-asf-accent font-rajdhani font-bold">
                  {ContactConfig.sections.readyToConnect.motto}
                </span>
                <div className="w-2 h-2 bg-asf-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
