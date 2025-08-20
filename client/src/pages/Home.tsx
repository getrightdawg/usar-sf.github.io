import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Modal } from "@/components/ui/modal";

export default function Home() {
  const heroParticles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 4,
    driftX: (Math.random() - 0.5) * 20,
    bobY: 15 + Math.random() * 10,
  }));

  function Counter({
    end,
    suffix = "",
    duration = 2,
    start,
  }: {
    end: number;
    suffix?: string;
    duration?: number;
    start: boolean;
  }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }, [start, end, duration]);

    return (
      <span data-testid="stat-counter">
        {count}
        {suffix}
      </span>
    );
  }

  const stats = [
    { value: 100, label: "Active Personnel", suffix: "+" },
    { value: 80, label: "Deployments/Operations Hosted", suffix: "+" },
    { value: 98, label: "Success Rate", suffix: "%" },
  ];
  const statsRef = useRef<HTMLElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  interface EventDetail {
    title: string;
    description: string;
    mechanics: {
      duration?: string;
      participants?: string;
      awards?: string;
      objective?: string;
      rules?: string[];
    };
    activeInfo: {
      title: string;
      location?: string;
      status: string;
      statusColor: string;
    };
  }

  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);

  const DeploymentIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-sf-gray"
    >
      <path
        d="M24 4L44 14V34L24 44L4 34V14L24 4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 16L32 20V28L24 32L16 28V20L24 16Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );

  const OperationsIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-sf-gray"
    >
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 8V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 32V40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 24H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 24H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  );

  const JointExerciseIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-sf-gray"
    >
      <circle
        cx="18"
        cy="18"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <circle
        cx="30"
        cy="30"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M24 20L28 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 28L24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const events = [
    {
      id: "deployments",
      title: "DEPLOYMENTS",
      description:
        "Large-scale operations/wargames with award recognition for outstanding performance.",
      icon: DeploymentIcon,
      action: "Click to view more →",
    },
    {
      id: "mock-operations",
      title: "MOCK OPERATIONS",
      description:
        "Advanced combat scenarios and tactical exercises. Developing elite-level combat proficiency and team coordination.",
      icon: OperationsIcon,
      action: "Click to view more →",
    },
    {
      id: "joint-events",
      title: "JOINT EVENTS",
      description:
        "Events hosted with other USAR units or allies to the USAR with award recognition.",
      icon: JointExerciseIcon,
      action: "Click to view more →",
    },
  ];

  const eventDetails: Record<string, EventDetail> = {
    deployments: {
      title: "DEPLOYMENTS",
      description:
        "Major operational deployments that test unit cohesion and tactical proficiency in extended mission scenarios.",
      mechanics: {
        duration: "1+ hour(s)",
        participants: "All Special Forces personnel unless restricted",
        objective:
          "Within these events, the objective is to typically eliminate the enemy team. Rules are providied within the events by the host.",
      },
      activeInfo: {
        title: "Template Operation/Deployment",
        location: "Location/Game of the Operation/Deployment",
        status: "Active/Inactive/Scheduled",
        statusColor: "text-green-400",
      },
    },
    "mock-operations": {
      title: "MOCK OPERATIONS",
      description:
        "Advanced combat scenarios and tactical exercises. Developing elite-level combat proficiency and team coordination.",
      mechanics: {
        duration: "1+ hour(s)",
        participants: "All Special Forces personnel unless restricted",
        objective:
          "Provided by the host(s) of the Mock Operation. Can be Capture or Kill, Hostage Rescue, etc.",
      },
      activeInfo: {
        title: "Template Mock Operation",
        location: "Location/Game of the Mock Operation",
        status: "Active/Inactive/Scheduled",
        statusColor: "text-yellow-400",
      },
    },
    "joint-events": {
      title: "JOINT EVENTS",
      description:
        "Events hosted with other USAR units or allies to the USAR with award recognition.",
      mechanics: {
        duration: "1+ hour(s)",
        participants:
          "All Special Forces personnel unless restricted & USAR units or allied groups.",
        objective: "Depends on the type of Joint Event.",
      },
      activeInfo: {
        title: "Template Joint Event",
        location: "Location/Game of the Joint Event",
        status: "Active/Inactive/Scheduled",
        statusColor: "text-red-400",
      },
    },
  };

  const handleEventClick = (eventId: string) =>
    setSelectedEvent(eventDetails[eventId]);
  const [selectedAward, setSelectedAward] = useState<{
    name: string;
    image: string;
    description: string;
    requirements: string[];
  } | null>(null);
  const awards = [
    {
      name: "Combat Infantryman Badge",
      image: "images/awards/CIB.png",
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
      image: "images/awards/Marksmanship.png",
      description:
        "The Marksmanship Badges are U.S. military badges or civilian badges which are awarded to personnel upon successful completion of a weapons qualification course (known as marksmanship qualification badges). This badge can be earned by passing the marksmanship course. Based on your score you will receive a different title. Expert Marksmanship - achieved higher grades in a marksmanship course. Sharpshooter - achieved satisfactory grades in a marksmanship course. Marksman - completed marksmanship course with no other achievements",
      requirements: [
        "Complete the Marksmanship Qualification Course in the John F. Kennedy Special Warfare Center and School",
        "Achieve a qualifying score or higher",
      ],
    },
    {
      name: "Expert Infantryman Badge",
      image: "images/awards/EIB.png",
      description:
        "The Expert Infantryman Badge (EIB) is a special skills badge of the United States Army. The Combat Infantryman’s Badge (CIB) is issued to infantrymen for participation in ground combat while the EIB is presented for completion of a course of testing designed to demonstrate proficiency in infantry skills. Currently, the Expert Infantryman Badge is awarded to U.S. Army personnel who hold infantry or special forces military occupational specialties with the exception of soldiers with occupational specialty of Special Forces. To be eligible for EIB, the soldier must complete a number of prerequisites and pass a battery of graded tests on basic infantry skills",
      requirements: [
        "Complete the Expert Infantryman Badge Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Pathfinder Badge",
      image: "images/awards/PFB.png",
      description:
        "The Pathfinder Badge is a military badge of the United States Army awarded to soldiers who complete the Pathfinder course in ASOC",
      requirements: [
        "Complete the Pathfinder Badge Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Military Freefall Badge",
      image: "images/awards/MFFB.png",
      description:
        "Complete a Military Freefall course recognized by QMC and Army Staff and serve for 6 consecutive months, earning the title of Jumpmaster",
      requirements: [
        "Complete the Military Freefall Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Special Operations Diver Badge",
      image: "images/awards/Diver.png",
      description:
        "The Special Operations Diver Badge is a military badge awarded by the U.S. Army for the successful completion of the Combat Diver Qualification Course, signifying that the soldier is qualified to conduct Special Forces Underwater Operations",
      requirements: [
        "Complete the Combat Diver Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Ranger Tab",
      image: "images/awards/RTab.png",
      description:
        "The U.S. Army Ranger Tab is a qualification tab authorized upon completion of the U.S. Army Ranger School by a member of the U.S. Military",
      requirements: [
        "Complete the Ranger School Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Instructor Identification Badge",
      image: "images/awards/AIIB.png",
      description:
        "The Army Instructor Identification Badge (AIIB) is an identification badge that recognizes specific instructors within all commands and divisions. Arguably, instructors make up a vital portion of this army, which for such, have been given an identification badge to display their contributions and efforts into pursuing the army forwards",
      requirements: [
        "Complete the Army Instructor Course in the Recruiting and Retention College",
        "This badge is only available to the 10th Special Forces Group",
      ],
    },
    {
      name: "Army Master Instructor Identification Badge",
      image: "images/awards/MAIB.png",
      description:
        "The Army Instructor Identification Badge (AIIB) is an identification badge that recognizes specific instructors within all commands and divisions. Arguably, instructors make up a vital portion of this army, which for such, have been given an identification badge to display their contributions and efforts into pursuing the army forwards",
      requirements: [
        "Complete the Army Master Instructor Course in the Recruiting and Retention College",
        "This badge is only available to the 10th Special Forces Group",
      ],
    },
    {
      name: "Jungle Tab",
      image: "images/awards/JTab.png",
      description:
        "The U.S. Army Jungle Tab is a qualification tab authorized upon completion of the U.S. Army Jungle Operations Training Course by a member of the U.S. Military",
      requirements: [
        "Complete the Jungle Tab Course in the 1st Infantry Division",
      ],
    },
    {
      name: "Driver-W Clasp",
      image: "images/awards/Driver.png",
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
      image: "images/awards/AAB.png",
      description:
        "The United States Army Air Assault Badge is awarded by the U.S. Army for successful completion of the Air Assault School",
      requirements: [
        "Complete the Air Assault Course in the 101st Airborne Division",
      ],
    },
    {
      name: "Combat Medical Badge",
      image: "images/awards/CMB.png",
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
      image: "images/awards/EFMB.png",
      description:
        "The Expert Field Medical Badge (EFMB)  is a United States Army special skills badge first created on 18th of June 1965. This badge is the non-combat equivalent of the Combat Medical Badge (CMB) and is issued to U.S. military personnel who successfully complete a set of qualification tests, including both written and performance portions",
      requirements: [
        "Complete the Expert Field Medical Badge Course in the John F. Kennedy Special Warfare Center and School",
        "This badge is only available to the 5th Special Forces Group",
      ],
    },
    {
      name: "ASF Combat Service Identification Badge",
      image: "images/awards/CSIB.png",
      description:
        "Combat Service Identification Badges, also known as deployment patches, are badges used to identify soldiers who've been deployed into a combat area/mission while serving in a unit",
      requirements: [
        "Attend a deployment against a foreign enemy. The soldier cannot earn the same deployment patch multiple times versus the same group",
      ],
    },
    {
      name: "Special Forces Tab",
      image: "images/awards/SFTab.png",
      description:
        "The Special Forces Tab is a service school qualification tab of the United States Army, awarded to any soldier completing the Special Forces Qualification Course",
      requirements: [
        "Complete the Special Forces Qualification Course in the Army Special Forces",
      ],
    },
    {
      name: "Arctic Tab",
      image: "images/awards/ATab.png",
      description:
        "The U.S. Army Arctic Tab is a qualification tab authorized upon completion of the U.S. Army Cold Weather Leaders Course by a member of the U.S. Military",
      requirements: [
        "Complete the Cold Weather Leaders Course in the Army Special Forces",
      ],
    },
    {
      name: "Antarctica Service Medal",
      image: "images/awards/Antarctica.png",
      description:
        "Awarded to a person who has completed an Antarctica expedition without death",
      requirements: [
        "Attend a deployment to Antarctica and complete it without death",
      ],
    },
    {
      name: "Armed Forces Expeditionary Medal",
      image: "images/awards/AFExp.png",
      description:
        "Awarded to an individual when deployed against a foreign enemy. Added to uniforms automatically on the basis of having a Combat Action Badge or Combat Infantryman Badge adorned onto your uniform",
      requirements: [
        "Obtain the Combat Action Badge or the Combat Infantryman Badge",
      ],
    },
    {
      name: "Global War on Terrorism Expeditionary Medal",
      image: "images/awards/GWTE.png",
      description:
        "Awarded to an individual when deployed against a foreign enemy",
      requirements: ["Attend a deployment against a foreign enemy"],
    },
    {
      name: "Armed Forces Service Medal",
      image: "images/awards/AFS.png",
      description:
        "Awarded for completing an expedition without dying in an expedition zone that does not have tis own unique expeditionary medal",
      requirements: ["Attend a deployment to Mt. Everest"],
    },
    {
      name: "Army Overseas Service Ribbon",
      image: "images/awards/AOS.png",
      description:
        "Awarded to an individual when deployed against a foreign enemy",
      requirements: ["Attend a deployment against a foreign enemy"],
    },
    {
      name: "Joint Service Achievement",
      image: "images/awards/JSA.png",
      description:
        "The Joint Service Achievement ribbon is an award available to soldiers who have participated in a total of fifteen joint events (deployments + other types of joints in total) supported by Army Foreign Affairs. Past events will not count, only events after 9/10/2023 will count",
      requirements: [
        "Attend a joint event with an ally or against a foreign enemy",
      ],
    },
  ];
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('images/propaganda/image6.png')" }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 professional-gradient opacity-80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-asf-black via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          {heroParticles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-1 h-1 bg-asf-accent rounded-full"
              style={{ top: p.top, left: p.left }}
              animate={{
                x: [0, p.driftX, 0],
                y: [0, -p.bobY, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>
        <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-black mb-8 tracking-tight text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="relative">
                ARMY
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-asf-accent transform scale-x-0 animate-pulse"></div>
              </span>
              <br />
              <span className="text-asf-gray-light relative">
                SPECIAL FORCES
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-asf-accent to-transparent"></div>
              </span>
            </motion.h1>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl font-rajdhani font-bold text-asf-accent mb-2">
                De Oppresso Liber
              </p>
              <p className="text-lg md:text-xl text-asf-gray-light max-w-2xl mx-auto">
                To Free the Oppressed
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/recruitment">
                <Button
                  size="lg"
                  className="glow-border bg-asf-accent text-asf-black px-10 py-5 font-rajdhani font-black text-lg hover:bg-asf-accent-dark hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  JOIN THE ELITE
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white px-10 py-5 font-rajdhani font-bold text-lg hover:bg-white hover:text-asf-black hover:scale-105 transition-all duration-300"
                >
                  LEARN MORE
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 inset-x-0 flex flex-col items-center z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-asf-gray-light mb-2 font-rajdhani">
            SCROLL TO EXPLORE
          </p>
          <ChevronDown className="w-6 h-6 text-asf-accent" />
        </motion.div>
      </section>

      <section ref={statsRef} className="py-20 professional-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-asf-black border-y border-asf-gray-dark py-6 overflow-hidden mb-20 -mx-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-asf-accent/10 to-transparent opacity-50"></div>
            <motion.div
              className="flex whitespace-nowrap relative z-10"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[
                "SPECIAL FORCES",
                "ARMY SPECIAL OPERATIONS COMMAND",
                "DE OPPRESSO LIBER",
                "TO FREE THE OPPRESSED",
                "THE BEST OF THE BEST",
                "ELITE WARRIORS",
                "UNCONVENTIONAL WARFARE",
              ].map((text, i) => (
                <span
                  key={i}
                  className="font-rajdhani font-bold text-xl mx-12 text-asf-accent"
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glow-border p-8 rounded-lg bg-asf-dark/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                data-testid={`stat-item-${index}`}
              >
                <div className="relative mb-4">
                  <div className="text-5xl md:text-7xl font-rajdhani font-black mb-2 text-asf-accent">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      start={startCounting}
                    />
                  </div>
                  <div className="absolute inset-0 text-5xl md:text-7xl font-rajdhani font-black mb-2 text-asf-accent/20 blur-sm">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      start={startCounting}
                    />
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-asf-accent to-transparent mb-4"></div>
                <p className="text-asf-gray-light font-rajdhani font-medium text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-4 text-asf-gray-light">
              <div className="w-8 h-px bg-asf-accent"></div>
              <p className="font-rajdhani font-bold">
                MISSION-READY EXCELLENCE
              </p>
              <div className="w-8 h-px bg-asf-accent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-asf-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-asf-dark/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-rajdhani font-black mb-6">
              FORGE THE <span className="text-asf-accent"> ELITE</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              Join our intensive training programs and participate in unit
              events that will transform you into an elite Special Forces
              operator.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <motion.div
                  key={event.id}
                  className="group glow-border p-8 rounded-lg bg-asf-gray-dark/80 backdrop-blur-sm hover:bg-asf-dark/90 transition-all duration-500 cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedEvent(eventDetails[event.id])}
                  data-testid={`event-card-${event.id}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-asf-accent/10 rounded-lg mr-4 group-hover:bg-asf-accent/20 transition-colors duration-300">
                        <IconComponent />
                      </div>
                      <h3 className="text-2xl font-rajdhani font-bold text-white group-hover:text-asf-accent transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-asf-gray-light mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center text-asf-accent font-rajdhani font-bold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">{event.action}</span>
                      <div className="w-4 h-px bg-asf-accent"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent?.title || ""}
          size="xl"
        >
          {selectedEvent && (
            <div className="space-y-6" data-testid="event-details">
              <p className="text-asf-gray-light text-lg mb-6">
                {selectedEvent.description}
              </p>
              <div className="bg-asf-gray-dark p-6 rounded-lg border border-asf-gray">
                <h4 className="font-rajdhani font-bold text-lg text-white mb-3">
                  Event Mechanics
                </h4>
                {selectedEvent.mechanics.duration && (
                  <p>
                    <strong>Duration:</strong>{" "}
                    {selectedEvent.mechanics.duration}
                  </p>
                )}
                {selectedEvent.mechanics.participants && (
                  <p>
                    <strong>Participants:</strong>{" "}
                    {selectedEvent.mechanics.participants}
                  </p>
                )}
                {selectedEvent.mechanics.awards && (
                  <p>
                    <strong>Awards:</strong> {selectedEvent.mechanics.awards}
                  </p>
                )}
                {selectedEvent.mechanics.objective && (
                  <p>
                    <strong>Objective:</strong>{" "}
                    {selectedEvent.mechanics.objective}
                  </p>
                )}
                {selectedEvent.mechanics.rules &&
                  selectedEvent.mechanics.rules.length > 0 && (
                    <div>
                      <strong>Rules:</strong>
                      <ul className="list-disc list-inside">
                        {selectedEvent.mechanics.rules.map((rule, idx) => (
                          <li key={idx}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            </div>
          )}
        </Modal>
      </section>
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
              Discover the exceptional benefits and opportunities that await
              elite warriors
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
              {[
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
              ].map((benefit, index) => (
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
            </motion.div>

            <motion.div
              className="glow-border p-10 rounded-xl bg-asf-dark/60 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-rajdhani font-black mb-4 text-asf-accent">
                  JOIN THE ELITE
                </h3>
                <div className="w-16 h-1 bg-asf-accent mx-auto"></div>
              </div>
              {[
                "Access to operations and deployments",
                "Advanced tactical training programs",
                "Elite unit recognition across USAR",
                "Opportunity for Designated Fighter status",
                "Leadership development opportunities",
              ].map((privilege, index) => (
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
    </div>
  );
}
