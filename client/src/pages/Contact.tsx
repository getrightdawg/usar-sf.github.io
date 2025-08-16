import { motion } from "framer-motion";
import { Clock, Mail } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";

export default function Contact() {
  const [selectedMember, setSelectedMember] = useState(null);

  const overseer = [
    {
      rank: "General",
      name: "NeroOvuh",
      position: "Commanding General",
      roblox:
        "https://www.roblox.com/users/248480265/profile?friendshipSourceType=PlayerSearch",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/US-O10_insignia.svg/1280px-US-O10_insignia.svg.png",
    },
    {
      rank: "Lieutenant General",
      name: "FairwelIs",
      position: "Deputy Commanding General",
      roblox:
        "https://www.roblox.com/users/2326467240/profile?friendshipSourceType=PlayerSearch",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/US-O9_insignia.svg/1280px-US-O9_insignia.svg.png",
    },
    {
      rank: "Command Sergeant Major",
      name: "Alexis13480",
      position: "Command Sergeant Major",
      roblox:
        "https://www.roblox.com/users/553012024/profile?friendshipSourceType=PlayerSearch",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Army-USA-OR-09b.svg/800px-Army-USA-OR-09b.svg.png",
    },
    {
      rank: "Major General",
      name: "NasDaily_Alpha",
      position: "Chief of Staff",
      roblox:
        "https://www.roblox.com/users/553357381/profile?friendshipSourceType=PlayerSearch",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/US-O8_insignia.svg/1280px-US-O8_insignia.svg.png",
    },
  ];

  const hicomMembers = [
    {
      rank: "Major General",
      name: "JoshyWagner",
      position: "Commanding Officer",
      roblox:
        "https://www.roblox.com/users/1816986602/profile?friendshipSourceType=PlayerSearch",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/US-O8_insignia.svg/1280px-US-O8_insignia.svg.png",
    },
    {
      rank: "Brigadier General",
      name: "ElvinAyhan",
      position: "Executive Officer",
      roblox:
        "https://www.roblox.com/users/375199292/profile?friendshipSourceType=PlayerSearch",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/US-O7_insignia.svg/1024px-US-O7_insignia.svg.png",
    },
    {
      rank: "Command Sergeant Major",
      name: "SusIsKool",
      position: "Regimental Sergeant Major",
      roblox:
        "https://www.roblox.com/users/2854274741/profile?friendshipSourceType=PlayerSearch",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Army-USA-OR-09b.svg/800px-Army-USA-OR-09b.svg.png",
    },
  ];

  const groups = [
    {
      name: "1st Special Forces Group",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/1sfg.svg/1024px-1sfg.svg.png",
      leadership: [
        {
          position: "Group Commanding Officer",
          rank: "Colonel",
          name: "KashVoylve",
          roblox:
            "https://www.roblox.com/users/995137288/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Executive Officer",
          rank: "Lieutenant Colonel",
          name: "plantspeakers",
          roblox:
            "https://www.roblox.com/users/406615517/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Sergeant Major",
          rank: "VACANT",
          name: "",
          roblox: "",
        },
      ],
    },
    {
      name: "5th Special Forces Group",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/5th_SFG_Beret_Flash.png",
      leadership: [
        {
          position: "Group Commanding Officer",
          rank: "Colonel",
          name: "ElijahIWilliams",
          roblox:
            "https://www.roblox.com/users/104156319/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Executive Officer",
          rank: "Lieutenant Colonel",
          name: "xRed_v",
          roblox:
            "https://www.roblox.com/users/772617327/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Sergeant Major",
          rank: "Sergeant Major",
          name: "0rangecat50",
          roblox:
            "https://www.roblox.com/users/104156319/profile?friendshipSourceType=PlayerSearch",
        },
      ],
    },
    {
      name: "10th Special Forces Group",
      insignia:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/USA_-_10th_Special_Forces_Flash.svg/800px-USA_-_10th_Special_Forces_Flash.svg.png",
      leadership: [
        {
          position: "Group Commanding Officer",
          rank: "Colonel",
          name: "TjayWins",
          roblox:
            "https://www.roblox.com/users/1572002202/profile?friendshipSourceType=PlayerSearch",
        },
        {
          position: "Group Executive Officer",
          rank: "Lieutenant Colonel",
          name: "GetRightDawg",
          roblox: "https://www.roblox.com/users/902970011/profile",
        },
        {
          position: "Group Sergeant Major",
          rank: "Sergeant Major",
          name: "Airport_imdeleteduo2",
          roblox:
            "https://www.roblox.com/users/2667322014/profile?friendshipSourceType=PlayerSearch",
        },
      ],
    },
  ];

  const positionDuties: Record<string, string> = {
    "Commanding General":
      "Leads the entire Army Special Operations Command (ASOC), oversees all operations, sets strategic objectives, and ensures overall mission readiness. Rank: O10",

    "Deputy Commanding General":
      "Assists the Commanding General in managing ASOC, oversees delegated operations, and ensures continuity of command. Rank: O9",

    "Command Sergeant Major":
      "Leads the enlisted advisors within ASOC, mentors senior enlisted personnel, and ensures discipline and readiness across the enlisted ranks. Rank: E9B",

    "Chief of Staff":
      "Leads the officer staff within ASOC, coordinates planning and administration, and ensures that the General’s directives are effectively executed. Rank: O8",

    "Commanding Officer":
      "Leads the Special Forces unit, oversees all operations, and ensures mission readiness and team performance within ASF.",

    "Executive Officer":
      "Assists the Commanding Officer in operations and administration, manages logistics, and ensures operational objectives are met.",

    "Regimental Sergeant Major":
      "Senior enlisted advisor for ASF, oversees enlisted personnel, maintains discipline, and provides mentorship.",

    "Group Commanding Officer":
      "Leads a specific Special Forces group, plans missions, coordinates group training, and ensures group readiness.",

    "Group Executive Officer":
      "Assists the Group Commanding Officer in executing missions and managing the group’s administration and operations.",

    "Group Sergeant Major":
      "Senior enlisted advisor for the group, ensures discipline, provides mentorship, and monitors readiness of all enlisted members within the group.",
  };
  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="py-24 bg-asf-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/692044595793756284/1221932630249836584/sssda1.png?ex=689fa571&is=689e53f1&hm=be1b027ed226acfec6fab4a4abf05569e9bb656361603bff8958ebbd5a13e856&=&format=webp&quality=lossless&width=1232&height=500')] bg-cover bg-center bg-no-repeat"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-asf-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              CHAIN OF <span className="text-asf-accent">COMMAND</span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              Leadership structure and contact information for the Army Special
              Forces command hierarchy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 professional-gradient">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <motion.div
            className="glow-border p-12 bg-asf-dark/80 backdrop-blur-sm rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-rajdhani font-black text-asf-accent mb-6">
                  OVERSEER
                </h2>
                <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
                <p className="text-xl text-asf-gray-light">
                  The leaders of the Army Special Operations Command
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {overseer.map((member, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
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

          <motion.div
            className="glow-border p-12 bg-asf-dark/80 backdrop-blur-sm rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-rajdhani font-black text-asf-accent mb-6">
                  ASF HIGH COMMAND
                </h2>
                <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
                <p className="text-xl text-asf-gray-light">
                  The elite leadership driving Special Forces excellence
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {hicomMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
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

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              SPECIAL FORCES <span className="text-asf-accent">GROUPS</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Three elite groups, each with specialized missions and dedicated
              leadership
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {groups.map((group, index) => (
              <motion.div
                key={index}
                className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl hover:bg-asf-dark/80 transition-all duration-500 relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMember(group)}
                data-testid={`sfg-contact-${group.name.toLowerCase()}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                      <img
                        src={group.insignia}
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
        title={selectedMember?.name || selectedMember?.position || selectedMember?.name}
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
            positionDuties[selectedMember.position] && (
              <div className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray">
                <h4 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                  Duties & Responsibilities
                </h4>
                <p className="text-asf-gray-light">
                  {positionDuties[selectedMember.position]}
                </p>
              </div>
            )}

          {selectedMember.leadership && selectedMember.leadership.length > 0 && (
            <div className="space-y-6">
              {selectedMember.leadership.map((leader: any, idx: number) => (
                <div key={idx} className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray space-y-3">
                  <h4 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                    {leader.position}
                  </h4>
                  {leader.name && <p><strong>Username:</strong> {leader.name}</p>}
                  {leader.rank && <p><strong>Rank:</strong> {leader.rank}</p>}
                  {leader.position && positionDuties[leader.position] && (
                    <p className="text-asf-gray-light">
                      <strong>Duties & Responsibilities:</strong> {positionDuties[leader.position]}
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
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              data-testid="response-times-section"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg mr-4">
                  <Clock className="w-full h-full text-asf-accent" />
                </div>
                <h2 className="text-3xl font-rajdhani font-bold text-white">
                  Response Times
                </h2>
              </div>

              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-asf-black/40 rounded-lg">
                  <div>
                    <h3 className="font-rajdhani font-bold text-lg text-white">
                      Routine Inquiries
                    </h3>
                    <p className="text-asf-gray-light text-sm">
                      General questions and information requests
                    </p>
                  </div>
                  <div className="text-asf-accent font-rajdhani font-bold text-xl">
                    24-48h
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-asf-black/40 rounded-lg">
                  <div>
                    <h3 className="font-rajdhani font-bold text-lg text-white">
                      Urgent Matters
                    </h3>
                    <p className="text-asf-gray-light text-sm">
                      Time-sensitive operational issues
                    </p>
                  </div>
                  <div className="text-asf-accent font-rajdhani font-bold text-xl">
                    3-6h
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 p-3 bg-asf-accent/10 rounded-lg mr-4">
                  <Mail className="w-full h-full text-asf-accent" />
                </div>
                <h2 className="text-3xl font-rajdhani font-bold text-white">
                  Contact Methods
                </h2>
              </div>

              <div className="h-px bg-gradient-to-r from-asf-accent via-asf-accent/30 to-transparent mb-8"></div>

              <div className="space-y-6">
                <div className="p-4 bg-asf-black/40 rounded-lg">
                  <h3 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                    Primary Channel
                  </h3>
                  <p className="text-asf-gray-light mb-2">
                    Discord Server - Official USAR Community
                  </p>
                  <div className="text-sm text-asf-gray">
                    Use for formal communications and requests
                  </div>
                </div>

                <div className="p-4 bg-asf-black/40 rounded-lg">
                  <h3 className="font-rajdhani font-bold text-lg text-asf-accent mb-3">
                    OPSEC Notice
                  </h3>
                  <p className="text-asf-gray-light text-sm leading-relaxed">
                    All communications must follow operational security
                    protocols. Sensitive information should only be discussed
                    through secure channels.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl inline-block">
              <h3 className="text-2xl font-rajdhani font-bold text-asf-accent mb-4">
                READY TO CONNECT?
              </h3>
              <p className="text-asf-gray-light mb-6 max-w-md">
                Reach out to ASF leadership through official channels
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
    </div>
  );
}
