import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/modal";

export function AwardsSection() {
  const [selectedAward, setSelectedAward] = useState<{
    name: string;
    image: string;
    requirement: string;
  } | null>(null);

  const awards = [
    {
      name: "Combat Infantryman Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Combat_Infantry_Badge.svg/1280px-Combat_Infantry_Badge.svg.png",
      description:
        "The Combat Infantryman Badge (CIB) is a United States Army military decoration. The badge is issued to infantrymen who fought in active ground combat while assigned as members of an infantry unit",
      requirements: [
        "Be an infantryman satisfactorily performing infantry duties;",
        "Assigned to an infantry unit during such time as the unit is engaged in active ground combat;",
        "Actively participate in such ground combat. Combat against another group acknowledged by QMC and approved by both Command and Army Staff",
      ],
    },
    {
      name: "Marksmanship Badges",
      image:
        "https://media.discordapp.net/attachments/1399506681041522719/1405709315712618589/Armyqual-removebg-preview_1.png?ex=689fd051&is=689e7ed1&hm=e110fac3e400b40d2bada29e7a4880a9acb879b3d7a7de69e362d89c6f0ba2ca&=&format=webp&quality=lossless",
      description:
        "The Marksmanship Badges are U.S. military badges or civilian badges which are awarded to personnel upon successful completion of a weapons qualification course (known as marksmanship qualification badges). This badge can be earned by passing the marksmanship course. Based on your score you will receive a different title. Expert Marksmanship - achieved higher grades in a marksmanship course. Sharpshooter - achieved satisfactory grades in a marksmanship course. Marksman - completed marksmanship course with no other achievements",
      requirements: [
        "Complete the Marksmanship Qualification Course in the John F. Kennedy Special Warfare Center and School",
        "Achieve a qualifying score or higher",
      ],
    },
    {
      name: "Expert Infantryman Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Expert_Infantry_Badge.svg/1280px-Expert_Infantry_Badge.svg.png",
      description:
        "The Expert Infantryman Badge (EIB) is a special skills badge of the United States Army. The Combat Infantryman’s Badge (CIB) is issued to infantrymen for participation in ground combat while the EIB is presented for completion of a course of testing designed to demonstrate proficiency in infantry skills. Currently, the Expert Infantryman Badge is awarded to U.S. Army personnel who hold infantry or special forces military occupational specialties with the exception of soldiers with occupational specialty of Special Forces. To be eligible for EIB, the soldier must complete a number of prerequisites and pass a battery of graded tests on basic infantry skills",
      requirements: [
        "Complete the Expert Infantryman Badge Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Pathfinder Badge",
      image:
        "https://media.discordapp.net/attachments/1399506681041522719/1405710003922534480/Pathfinder-removebg-preview__1_-removebg-preview.png?ex=689fd0f5&is=689e7f75&hm=4b206deed9d9665c983cb24192b412e7924363cb0599b4c4d67d0d709c011f50&=&format=webp&quality=lossless",
      description:
        "The Pathfinder Badge is a military badge of the United States Army awarded to soldiers who complete the Pathfinder course in ASOC",
      requirements: [
        "Complete the Pathfinder Badge Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Military Freefall Badge",
      image:
        "https://media.discordapp.net/attachments/1399506681041522719/1405710190338113719/USASOC_Military_Free_Fall_Parachute_Badge-removebg-preview.png?ex=689fd122&is=689e7fa2&hm=e5f9ed011d7c759e1ada54c04e5d67656ffc0721ece297adf6c669dffeb540ad&=&format=webp&quality=lossless",
      description:
        "Complete a Military Freefall course recognized by QMC and Army Staff and serve for 6 consecutive months, earning the title of Jumpmaster",
      requirements: [
        "Complete the Military Freefall Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Special Operations Diver Badge",
      image:
        "https://media.discordapp.net/attachments/1399506681041522719/1405710482219864145/US_Military_2nd_Class_Diver_Badge-removebg-preview.png?ex=689fd167&is=689e7fe7&hm=3a6f36826589e323dc5ab12090884dc6bebd7c1b3825f5447eaedf8468db2fbf&=&format=webp&quality=lossless",
      description:
        "The Special Operations Diver Badge is a military badge awarded by the U.S. Army for the successful completion of the Combat Diver Qualification Course, signifying that the soldier is qualified to conduct Special Forces Underwater Operations",
      requirements: [
        "Complete the Combat Diver Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Ranger Tab",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ranger_Tab.svg/1280px-Ranger_Tab.svg.png",
      description:
        "The U.S. Army Ranger Tab is a qualification tab authorized upon completion of the U.S. Army Ranger School by a member of the U.S. Military",
      requirements: [
        "Complete the Ranger School Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Instructor Identification Badge",
      image:
        "https://media.discordapp.net/attachments/1399506681041522719/1405713077118308432/US_Army_Instructor_ID_Badge-removebg-preview.png?ex=689fd3d2&is=689e8252&hm=d6bff681631c1a90eb8915044d0cc7420aa2e6aad615bd5b980d34b576961e04&=&format=webp&quality=lossless",
      description:
        "The Army Instructor Identification Badge (AIIB) is an identification badge that recognizes specific instructors within all commands and divisions. Arguably, instructors make up a vital portion of this army, which for such, have been given an identification badge to display their contributions and efforts into pursuing the army forwards",
      requirements: [
        "Complete the Army Instructor Course in the Recruiting and Retention College",
        "This badge is only available to the 10th Special Forces Group",
      ],
    },
    {
      name: "Army Master Instructor Identification Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/US_Army_Master_Instructor_ID_Badge.png",
      description:
        "The Army Instructor Identification Badge (AIIB) is an identification badge that recognizes specific instructors within all commands and divisions. Arguably, instructors make up a vital portion of this army, which for such, have been given an identification badge to display their contributions and efforts into pursuing the army forwards",
      requirements: [
        "Complete the Army Master Instructor Course in the Recruiting and Retention College",
        "This badge is only available to the 10th Special Forces Group",
      ],
    },
    {
      name: "Jungle Tab",
      image:
        "https://media.discordapp.net/attachments/1399506681041522719/1405713737888825354/Jungle_Tab-removebg-preview.png?ex=689fd470&is=689e82f0&hm=425ced8af8bc91c047785a8204337cdf2d4d82edc72939839be991574f4a218e&=&format=webp&quality=lossless",
      description:
        "The U.S. Army Jungle Tab is a qualification tab authorized upon completion of the U.S. Army Jungle Operations Training Course by a member of the U.S. Military",
      requirements: [
        "Complete the Jungle Tab Course in the 1st Infantry Division",
      ],
    },
    {
      name: "Driver-W Clasp",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Driver_and_Mechanic_Badge.png",
      description:
        "The Driver and Mechanic Badge is a military special skill badge of the United States Army which was first created in July of 1942. The badge is issued to drivers, mechanics, and special equipment operators to denote the attainment of a high degree of skill in the operation and maintenance of motor vehicles. The badge is strictly limited for Enlisted service members only. The Driver and Mechanic Badge offers 5 claps: Driver - M (for motorcycles), Driver - T (for tracked vehicles), Driver - W (for wheeled vehicles), Mechanic (for automotive or allied vehicles), Operator - S (for special mechanical equipment). Soldiers who obtained the Driver and Mechanic Badge may wear a maximum of 3 clasps at any given time",
      requirements: [
        "Complete the Mechanic and Driver-W Course in the 1st Cavarly Division",
      ],
    },
    {
      name: "Army Parachutist Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/46/US_Military_Basic_Military_Parachutist_Badge.png",
      description:
        "The United States Army Parachutist badge is awarded to all military personnel of any service who completed the U.S. Army Airborne Schools. It signifies that the soldier is a trained military parachutist, and is qualified to participate in airborne operations.",
      requirements: [
        "Complete the Special Forces Qualification Course and serve for 2 consecutive weeks",
      ],
    },
    {
      name: "Army Air Assault Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/AirAssault.gif",
      description:
        "The United States Army Air Assault Badge is awarded by the U.S. Army for successful completion of the Air Assault School",
      requirements: [
        "Complete the Air Assault Course in the 101st Airborne Division",
      ],
    },
    {
      name: "Combat Medical Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Combat_Medical_Badge%2C_1st_award.svg/1280px-Combat_Medical_Badge%2C_1st_award.svg.png",
      description:
        "The Combat Medical Badge (CMB) is an award of the United States Army. Any member of the Army Medical department who is assigned or attached to a ground combat arms unit of brigade or smaller size which provides medical support during any period in which the unit was engaged in ground combat is eligible for the CMB",
      requirements: [
        "Be a medical operator satisfactorily performing medical duties",
        "Assigned to a medical unit during such time as the unit is engaged in active ground combat",
        "Actively participate in such ground combat. Combat against another group acknowledged by QMC and approved by both Command and Army Staff",
        "This badge is only available to the 5th Special Forces Group",
      ],
    },
    {
      name: "Expert Field Medical Badge",
      image:
        "https://media.discordapp.net/attachments/1405824808318664714/1405869158981173318/ExpertMedBadge-removebg-preview.png?ex=68a0652f&is=689f13af&hm=ba376369d77926574e77d303025fb19fcaa4e3e2b9efac727c0113c531630b41&=&format=webp&quality=lossless",
      description:
        "The Expert Field Medical Badge (EFMB)  is a United States Army special skills badge first created on 18th of June 1965. This badge is the non-combat equivalent of the Combat Medical Badge (CMB) and is issued to U.S. military personnel who successfully complete a set of qualification tests, including both written and performance portions",
      requirements: [
        "Complete the Expert Field Medical Badge Course in the John F. Kennedy Special Warfare Center and School",
        "This badge is only available to the 5th Special Forces Group",
      ],
    },
    {
      name: "ASF Combat Service Identification Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/United_States_Army_Special_Forces_SSI_%281958-2015%29.png",
      description:
        "Combat Service Identification Badges, also known as deployment patches, are badges used to identify soldiers who've been deployed into a combat area/mission while serving in a unit",
      requirements: [
        "Attend a deployment against a foreign enemy. The soldier cannot earn the same deployment patch multiple times versus the same group",
      ],
    },
    {
      name: "Special Forces Tab",
      image:
        "https://media.discordapp.net/attachments/1399487113057271838/1405707623860539495/sftab.png?ex=689fcebe&is=689e7d3e&hm=4f3fc94332611159cd93969c9b366e4a43dd98a2f9bb7e4049fb3937d05b0ec7&=&format=webp&quality=lossless",
      description:
        "The Special Forces Tab is a service school qualification tab of the United States Army, awarded to any soldier completing the Special Forces Qualification Course",
      requirements: [
        "Complete the Special Forces Qualification Course in the Army Special Forces",
      ],
    },
    {
      name: "Arctic Tab",
      image:
        "https://media.discordapp.net/attachments/1399487113057271838/1405708596158926858/US_Army_Arctic_Tab-Color-removebg-preview.png?ex=689fcfa6&is=689e7e26&hm=681cb038e5c22f07925c09f98118c4a74c49cd4f75dc7b1c339332a01b35ea85&=&format=webp&quality=lossless",
      description:
        "The U.S. Army Arctic Tab is a qualification tab authorized upon completion of the U.S. Army Cold Weather Leaders Course by a member of the U.S. Military",
      requirements: [
        "Complete the Cold Weather Leaders Course in the Army Special Forces",
      ],
    },
    {
      name: "Antarctica Service Medal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Antarctica_Service_Medal_ribbon.svg/1280px-Antarctica_Service_Medal_ribbon.svg.png",
      description:
        "Awarded to a person who has completed an Antarctica expedition without death",
      requirements: [
        "Attend a deployment to Antarctica and complete it without death",
      ],
    },
    {
      name: "Armed Forces Expeditionary Medal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Armed_Forces_Expeditionary_Medal_ribbon.svg/1280px-Armed_Forces_Expeditionary_Medal_ribbon.svg.png",
      description:
        "Awarded to an individual when deployed against a foreign enemy. Added to uniforms automatically on the basis of having a Combat Action Badge or Combat Infantryman Badge adorned onto your uniform",
      requirements: [
        "Obtain the Combat Action Badge or the Combat Infantryman Badge",
      ],
    },
    {
      name: "Global War on Terrorism Expeditionary Medal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Global_War_on_Terrorism_Expeditionary_Medal_ribbon.svg/1280px-Global_War_on_Terrorism_Expeditionary_Medal_ribbon.svg.png",
      description:
        "Awarded to an individual when deployed against a foreign enemy",
      requirements: ["Attend a deployment against a foreign enemy"],
    },
    {
      name: "Armed Forces Service Medal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Armed_Forces_Service_Medal_ribbon.svg/1280px-Armed_Forces_Service_Medal_ribbon.svg.png",
      description:
        "Awarded for completing an expedition without dying in an expedition zone that does not have tis own unique expeditionary medal",
      requirements: ["Attend a deployment to Mt. Everest"],
    },
    {
      name: "Army Overseas Service Ribbon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Army_Overseas_Service_Ribbon.svg/1280px-Army_Overseas_Service_Ribbon.svg.png",
      description:
        "Awarded to an individual when deployed against a foreign enemy",
      requirements: ["Attend a deployment against a foreign enemy"],
    },
    {
      name: "Joint Service Achievement",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Joint_Service_Achievement_Medal_ribbon.svg/1280px-Joint_Service_Achievement_Medal_ribbon.svg.png",
      description:
        "The Joint Service Achievement ribbon is an award available to soldiers who have participated in a total of fifteen joint events (deployments + other types of joints in total) supported by Army Foreign Affairs. Past events will not count, only events after 9/10/2023 will count",
      requirements: [
        "Attend a joint event with an ally or against a foreign enemy",
      ],
    },
  ];
  return (
    <section className="py-24 bg-asf-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-asf-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
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
            ELITE <span className="text-asf-accent">AWARDS</span>
          </h2>
          <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
            Honor, Excellence, and Recognition - The badges and awards that
            define our elite warriors
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="group glow-border p-6 rounded-xl bg-asf-gray-dark/60 backdrop-blur-sm hover:bg-asf-dark/80 cursor-pointer text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.02 }}
              viewport={{ once: true }}
              onClick={() => setSelectedAward(award)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-asf-accent/10 rounded-lg group-hover:bg-asf-accent/20 transition-colors duration-300">
                    <img
                      src={award.image}
                      alt={award.name}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-rajdhani font-bold text-lg mb-3 text-white group-hover:text-asf-accent transition-colors duration-300 leading-tight">
                  {award.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={!!selectedAward}
        onClose={() => setSelectedAward(null)}
        title={selectedAward?.name || ""}
        size="lg"
      >
        {selectedAward && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src={selectedAward.image}
                alt={selectedAward.name}
                className="w-32 h-32 object-contain"
              />
            </div>

            <div className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray">
              <h4 className="font-rajdhani font-bold text-lg text-white mb-3">
                Description
              </h4>
              <p className="text-asf-gray-light leading-relaxed">
                {selectedAward.description}
              </p>
            </div>

            <div className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray">
              <h4 className="font-rajdhani font-bold text-lg text-white mb-3">
                Requirements
              </h4>
              <ul className="list-disc list-inside text-asf-gray-light space-y-1">
                {selectedAward.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
