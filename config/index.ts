// Change every part of the website here.
import {
  Snowflake,
  Award,
  Clock,
  Users,
  Shield,
  Target,
  BookOpen,
  Mail,
  Image,
  Play,
  CheckCircle,
} from "lucide-react";

export const AboutConfig = {
  hero: {
    title: "ABOUT ASF",
    accentWord: "ASF",
    subtitle:
      "The Army Special Forces represents the pinnacle of military excellence within USAR. Comprising three specialized groups, we conduct elite operations, advanced training, and maintain the highest standards of professional military conduct.",
    backgroundImage: "images/propaganda/image5.png",
  },

  mission: {
    title: "OUR MISSION",
    description:
      "To liberate the oppressed through unconventional warfare, special reconnaissance, and direct action missions while maintaining the highest standards of military excellence.",
  },

  groupsSection: {
    title: "OUR",
    accentWord: "GROUPS",
    subtitle:
      "Three elite Special Forces Groups, each with specialized capabilities and missions",
    gridCols: 3,
    animation: { duration: 0.8 },
    groups: [
      {
        name: "10th Special Forces Group",
        badgeSrc: "images/logos/10SFG.png",
        tagline: "Gatekeepers of Special Forces Quality",
        description:
          "Handles recruitment and hosts the Special Forces Qualification Course (SFQC) alongside the CWLC.",
        companies: [
          {
            name: "Whiskey Company: ",
            description: "Hosts SFQC for the 1st SFG and 10th SFG",
          },
          {
            name: "Yankee Company: ",
            description: "Hosts SFQC for the 5th SFG and 10th SFG",
          },
        ],
      },
      {
        name: "5th Special Forces Group",
        badgeSrc: "images/logos/5SFG.png",
        tagline: "MILSIMs & Wargames Focused",
        description:
          "The 5th SFG is mainly focused around Military Simulations (MILSIMS) and Wargames.",
        companies: [
          { name: "Echo Company: ", description: "Centered around Wargames." },
          { name: "Delta Company: ", description: "Centered around MILSIMs." },
        ],
      },
      {
        name: "1st Special Forces Group",
        badgeSrc: "images/logos/1SFG.png",
        tagline: "Scrimmage & Raid Focused",
        description:
          "The most elite group. Specializes in high-stakes scrimmages and raids, leading ASF in elite combat performance.",
        companies: [
          {
            name: "Alpha Company: ",
            description: "Elite of the elite. Focuses on Scrimmages & Raids.",
          },
          {
            name: "Bravo Company: ",
            description:
              "Reserved elite personnel. Focuses on Scrimmages & Raids.",
          },
        ],
      },
    ],
  },

  dfProgram: {
    title: "DESIGNATED FIGHTER PROGRAM",
    subtitle: "Elite program that only a few manage to get in.",
    description:
      "The Designated Fighter Program (DFP) is a rigorous program intended to select only the best of the best. Each Designated Fighter gets access and priority to certain events such as operations and deployments. They show combat excellence above all others and are the elite of the elite.",
    criteria: [
      "Must be an active Special Forces member",
      "Must be excellent at combat",
      "Can only be handpicked by DF Command if proven worthy",
    ],
    privileges: [
      "Priority selection for deployments and operations",
      "Recognition and award upon completion",
    ],
  },
};

export const ContactConfig = {
  hero: {
    title: "CHAIN OF COMMAND",
    accentWord: "COMMAND",
    subtitle:
      "Leadership structure and contact information for the Army Special Forces command hierarchy.",
    backgroundImage: "images/propaganda/image4.png",
  },

  overseer: [
    {
      rank: "General",
      name: "NeroOvuh",
      position: "Commanding General",
      roblox:
        "https://www.roblox.com/users/248480265/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O10.png",
    },
    {
      rank: "Lieutenant General",
      name: "FairwelIs",
      position: "Deputy Commanding General",
      roblox:
        "https://www.roblox.com/users/2326467240/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O9.png",
    },
    {
      rank: "Command Sergeant Major",
      name: "Alexis13480",
      position: "Command Sergeant Major",
      roblox:
        "https://www.roblox.com/users/553012024/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/enlisted/E9B.png",
    },
    {
      rank: "Major General",
      name: "NasDaily_Alpha",
      position: "Chief of Staff",
      roblox:
        "https://www.roblox.com/users/553357381/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O8.png",
    },
  ],

  hicomMembers: [
    {
      rank: "Major General",
      name: "JoshyWagner",
      position: "Commanding Officer",
      roblox:
        "https://www.roblox.com/users/1816986602/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O8.png",
    },
    {
      rank: "Brigadier General",
      name: "ElvinAyhan",
      position: "Executive Officer",
      roblox:
        "https://www.roblox.com/users/375199292/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/officer/O7.png",
    },
    {
      rank: "Command Sergeant Major",
      name: "SusIsKool",
      position: "Regimental Sergeant Major",
      roblox:
        "https://www.roblox.com/users/2854274741/profile?friendshipSourceType=PlayerSearch",
      insignia: "images/ranks/enlisted/E9B.png",
    },
  ],

  groups: [
    {
      name: "1st Special Forces Group",
      src: "images/logos/1SFG.png",
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
      src: "images/logos/5SFG.png",
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
      src: "images/logos/10SFG.png",
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
  ],

  positionDuties: {
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
  },

  responseTimes: [
    {
      title: "Routine Inquiries",
      description: "General questions and information requests",
      duration: "24-48h",
      icon: Clock,
    },
    {
      title: "Urgent Matters",
      description: "Time-sensitive operational issues",
      duration: "3-6h",
      icon: Clock,
    },
  ],

  contactMethods: [
    {
      title: "Primary Channel",
      description: "Discord Server - Official USAR Community",
      note: "Use for formal communications and requests",
      icon: Mail,
    },
    {
      title: "OPSEC Notice",
      description:
        "All communications must follow operational security protocols. Sensitive information should only be discussed through secure channels.",
      icon: Mail,
    },
  ],

  sections: {
    specialForcesGroups: {
      title: "SPECIAL FORCES GROUPS",
      accentWord: "GROUPS",
      subtitle:
        "Three elite groups, each with specialized missions and dedicated leadership",
    },
    readyToConnect: {
      title: "READY TO CONNECT?",
      subtitle: "Reach out to ASF leadership through official channels",
      motto: "DE OPPRESSO LIBER",
    },
  },
};

export const CoursesConfig = {
  hero: {
    title: "ELITE COURSES",
    accentWord: "COURSES",
    subtitle:
      "Specialized training programs for Army Special Forces and USAR personnel. Forge yourself in the crucible of elite military education.",
    backgroundImage: "images/propaganda/image7.png",
    decorativeBlurs: [
      { position: "top-left", size: "w-96 h-96", opacity: "bg-asf-accent/10" },
      {
        position: "bottom-right",
        size: "w-64 h-64",
        opacity: "bg-asf-accent/5",
      },
    ],
  },

  courseFeatures: [
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
  ],

  mainCourse: {
    title: "Cold Weather Leaders Course",
    subtitle:
      "An elite training program designed for personnel across all USAR divisions to earn the prestigious Arctic Tab certification.",
    icon: Snowflake,
    description:
      "Test your limits in the harshest environments and emerge as a cold weather warfare expert.",
    quickFacts: [
      { icon: Clock, label: "Duration", value: "1 week intensive training" },
      {
        icon: Users,
        label: "Eligibility",
        value: "Open to all USAR personnel",
      },
      {
        icon: Award,
        label: "Certification",
        value: "Arctic Tab qualification",
      },
    ],
    enrollLink: "https://discord.gg/yQSFux5UGb",
  },

  courseOverview: [
    {
      icon: Shield,
      title: "CLASSIFIED TRAINING",
      description:
        "Training details are classified for operational security. Course participants will receive comprehensive briefings upon enrollment.",
    },
    {
      icon: null,
      title: "SECURITY NOTE",
      description:
        "This course involves specialized military tactics and procedures. All participants must maintain operational security protocols.",
      highlight: true,
    },
  ],

  sections: {
    courseDetails: {
      title: "COURSE DETAILS",
      accentWord: "DETAILS",
      subtitle:
        "Comprehensive information about requirements, training, and benefits",
    },
    entryRequirements: {
      icon: BookOpen,
      title: "Entry Requirements",
      list: [
        "Active member of any USAR division and must serve 1+ month",
        "Minimum rank of E4B, Corporal",
        "Must have a spotless record for the past 6 months",
        "Must be on desktop and have a working microphone",
      ],
    },
    trainingContent: {
      icon: Target,
      title: "Training Content",
      list: [
        "Advanced cold weather survival techniques",
        "Arctic warfare and tactical operations",
        "Leadership in extreme conditions",
        "Cold weather equipment expertise",
        "Risk management and safety protocols",
      ],
    },
    courseBenefits: [
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
    ],
  },
};

export const HomeConfig = {
  hero: {
    particles: {
      amount: 25,
      delay: 4,
      driftX: 20,
      driftY: 10,
    },
    backgroundImage: "images/propaganda/image6.png",
    title: {
      line1: "ARMY",
      line2: "SPECIAL FORCES",
    },
    motto: {
      latin: "De Oppresso Liber",
      english: "To Free the Oppressed",
    },
    ctaButtons: [
      { label: "JOIN THE ELITE", link: "/recruitment", primary: true },
      { label: "LEARN MORE", link: "/about", primary: false },
    ],
    scrollText: "SCROLL TO EXPLORE",
  },

  stats: [
    { value: 100, label: "Active Personnel", suffix: "+" },
    { value: 80, label: "Deployments/Operations Hosted", suffix: "+" },
    { value: 98, label: "Success Rate", suffix: "%" },
  ],

  marqueeTexts: [
    "WE FREE THE OPPRESSED",
    "WE STRIKE FIRST",
    "FEAR NO ONE",
    "KILL OR BE KILLED",
    "HONOR IN BLOOD",
    "FEW, BUT DEADLY",
    "NO RETREAT",
  ],
  events: [
    {
      id: "deployments",
      title: "DEPLOYMENTS",
      description:
        "Large-scale missions designed to challenge tactical skills, teamwork, and endurance.",
      action: "Click to view more →",
    },
    {
      id: "mock-operations",
      title: "MOCK OPERATIONS",
      description:
        "Combat exercises that push teams to practice strategies and refine coordination under realistic scenarios.",
      action: "Click to view more →",
    },
    {
      id: "joint-events",
      title: "JOINT EVENTS",
      description:
        "Collaborative exercises with allied units or other USAR units to enhance interoperability and combat synergy.",
      action: "Click to view more →",
    },
    {
      id: "breach-trainings",
      title: "BREACH TRAININGS",
      description:
        "Specialized sessions focused on close-quarters combat, entry tactics, and rapid room-clearing drills.",
      action: "Click to view more →",
    },
    {
      id: "wargames",
      title: "WARGAMES",
      description:
        "Full-scale battles designed to test strategy, adaptability, and coordination between multiple USAR units.",
      action: "Click to view more →",
    },
    {
      id: "scrimmages",
      title: "SCRIMMAGES",
      description:
        "Friendly competitive engagements to refine team tactics, reaction time, and combat readiness against other units or internal squads.",
      action: "Click to view more →",
    },
  ],

  eventDetails: {
    deployments: {
      title: "DEPLOYMENTS",
      description:
        "Operational missions where teams are pushed to operate under prolonged pressure, testing leadership, coordination, and adaptability in complex environments.",
      mechanics: {
        duration: "1+ hour(s)",
        participants: "All Special Forces personnel unless restricted",
        objective:
          "Complete assigned mission objectives, typically neutralizing opposing forces or securing key objectives, under operational guidelines provided by the host.",
      },
    },
    "mock-operations": {
      title: "MOCK OPERATIONS",
      description:
        "Tactical simulations designed to hone decision-making, unit cohesion, and precision under controlled combat scenarios.",
      mechanics: {
        duration: "1+ hour(s)",
        participants: "All Special Forces personnel unless restricted",
        objective:
          "Varies per scenario; could involve capturing objectives, rescuing hostages, or coordinated elimination of targets.",
      },
    },
    "joint-events": {
      title: "JOINT EVENTS",
      description:
        "Events where USAR teams work alongside allied or external units to practice combined operations and strengthen inter-unit effectiveness.",
      mechanics: {
        duration: "1+ hour(s)",
        participants:
          "All Special Forces personnel unless restricted & USAR units or allied groups.",
        objective: "Depends on the type of Joint Event.",
      },
    },
    "breach-trainings": {
      title: "BREACH TRAININGS",
      description:
        "Focused training sessions emphasizing rapid entry, room clearing, and CQB techniques in high-intensity simulations.",
      mechanics: {
        duration: "30+ minutes",
        participants: "All Special Forces personnel unless restricted",
        objective:
          "Depends, though usually the objective is to clear a specific number of killhouses or complete breaching exercises.",
      },
    },
    wargames: {
      title: "WARGAMES",
      description:
        "Large-scale simulated battles where units test strategies, adaptability, and teamwork in complex scenarios against opposing forces.",
      mechanics: {
        duration: "2+ hour(s)",
        participants: "All Special Forces units involved in the exercise",
        objective:
          "Execute mission objectives while coordinating with multiple units; simulate real combat conditions with strategic planning and operational execution.",
      },
    },
    scrimmages: {
      title: "SCRIMMAGES",
      description:
        "Competitive yet friendly engagements designed to sharpen skills, improve communication, and evaluate team performance under pressure.",
      mechanics: {
        duration: "1+ hour(s)",
        participants: "Selected teams or all Special Forces personnel",
        objective:
          "Refine tactics and unit cohesion through controlled matches against other squads or internal teams; scoring and rules are scenario-dependent.",
      },
    },
  },

  benefits: [
    {
      title: "Elite Status",
      description:
        "Join an elite force recognized for excellence and tactical expertise.",
    },
    {
      title: "Brotherhood",
      description:
        "Build lifelong bonds with highly trained and committed comrades.",
    },
    {
      title: "Presidential Recognition",
      description:
        "There are reasons why the Army Special Forces has the Army Presidential Unit Citation.",
    },
  ],

  privileges: [
    "Access to operations and deployments",
    "Advanced tactical training programs",
    "Elite unit recognition across USAR",
    "Opportunity for Designated Fighter status",
    "Leadership development opportunities",
  ],

  awards: [
    {
      name: "Combat Infantryman Badge",
      image: "images/awards/CIB.png",
      description:
        "Awarded to infantrymen who personally fought in active ground combat while serving with an infantry unit. Recognizes direct engagement with enemy forces.",
      requirements: [
        "Be an infantryman satisfactorily performing infantry duties",
        "Assigned to an infantry unit engaged in active ground combat",
        "Actively participate in such ground combat against a force acknowledged by QMC and approved by both Command and Army Staff",
      ],
    },
    {
      name: "Marksmanship Badges",
      image: "images/awards/Marksmanship.png",
      description:
        "Awarded upon completion of a marksmanship qualification course. Levels are based on performance: Expert (highest), Sharpshooter (proficient), and Marksman (basic).",
      requirements: [
        "Complete the Marksmanship Qualification Course in the John F. Kennedy Special Warfare Center and School",
        "Achieve a qualifying score or higher",
      ],
    },
    {
      name: "Expert Infantryman Badge",
      image: "images/awards/EIB.png",
      description:
        "Awarded to infantry and select special operations personnel who successfully complete a rigorous battery of tests demonstrating mastery of basic infantry skills.",
      requirements: [
        "Complete the Expert Infantryman Badge Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Pathfinder Badge",
      image: "images/awards/PFB.png",
      description:
        "Recognizes soldiers who complete the Pathfinder Course, specializing in navigation, air traffic control, and establishing landing zones for airborne operations.",
      requirements: [
        "Complete the Pathfinder Badge Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Military Freefall Badge",
      image: "images/awards/MFFB.png",
      description:
        "Awarded for successful completion of the Military Freefall Course and subsequent service as a qualified freefall parachutist. Recognizes jumpmasters after sustained service.",
      requirements: [
        "Complete the Military Freefall Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Special Operations Diver Badge",
      image: "images/awards/Diver.png",
      description:
        "Recognizes soldiers who complete the Combat Diver Qualification Course, certifying them to conduct Special Forces underwater operations.",
      requirements: [
        "Complete the Combat Diver Qualification Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Ranger Tab",
      image: "images/awards/RTab.png",
      description:
        "Authorized upon successful completion of U.S. Army Ranger School. Symbolizes exceptional leadership and endurance under extreme conditions.",
      requirements: [
        "Complete the Ranger School Course in the John F. Kennedy Special Warfare Center and School",
      ],
    },
    {
      name: "Army Instructor Identification Badge",
      image: "images/awards/AIIB.png",
      description:
        "Recognizes instructors who significantly contribute to training and professional development across the force. Displays dedication to advancing the Army’s mission.",
      requirements: [
        "Complete the Army Instructor Course in the Recruiting and Retention College",
        "This badge is only available to the 10th Special Forces Group",
      ],
    },
    {
      name: "Army Master Instructor Identification Badge",
      image: "images/awards/MAIB.png",
      description:
        "Recognizes senior instructors who demonstrate advanced instructional expertise and leadership in developing future soldiers.",
      requirements: [
        "Complete the Army Master Instructor Course in the Recruiting and Retention College",
        "This badge is only available to the 10th Special Forces Group",
      ],
    },
    {
      name: "Jungle Tab",
      image: "images/awards/JTab.png",
      description:
        "Awarded upon completion of the Jungle Operations Training Course, recognizing proficiency in operating in jungle and tropical environments.",
      requirements: [
        "Complete the Jungle Tab Course in the 1st Infantry Division",
      ],
    },
    {
      name: "Driver-W Clasp",
      image: "images/awards/Driver.png",
      description:
        "Part of the Driver and Mechanic Badge series, the Driver-W Clasp recognizes skill in the operation and maintenance of wheeled vehicles. Soldiers may earn additional clasps for other vehicle types but may display up to three.",
      requirements: [
        "Complete the Mechanic and Driver-W Course in the 1st Cavalry Division",
      ],
    },
    {
      name: "Army Parachutist Badge",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/46/US_Military_Basic_Military_Parachutist_Badge.png",
      description:
        "Awarded to soldiers who complete the U.S. Army Airborne School, signifying qualification to conduct military parachute operations.",
      requirements: [
        "Complete the Special Forces Qualification Course and serve for 2 consecutive weeks",
      ],
    },
    {
      name: "Army Air Assault Badge",
      image: "images/awards/AAB.png",
      description:
        "Recognizes soldiers who complete the Air Assault School, specializing in helicopter insertion, sling-load operations, and rappelling.",
      requirements: [
        "Complete the Air Assault Course in the 101st Airborne Division",
      ],
    },
    {
      name: "Combat Medical Badge",
      image: "images/awards/CMB.png",
      description:
        "Awarded to medical personnel who accompany combat units into battle and directly support soldiers under fire.",
      requirements: [
        "Be a medical operator satisfactorily performing medical duties",
        "Assigned to a medical unit engaged in active ground combat",
        "Actively participate in such ground combat acknowledged by QMC and approved by both Command and Army Staff",
        "This badge is only available to the 5th Special Forces Group",
      ],
    },
    {
      name: "Expert Field Medical Badge",
      image: "images/awards/EFMB.png",
      description:
        "The non-combat equivalent of the Combat Medical Badge. Awarded to medical personnel who pass demanding written and performance-based tests of field medical skills.",
      requirements: [
        "Complete the Expert Field Medical Badge Course in the John F. Kennedy Special Warfare Center and School",
        "This badge is only available to the 5th Special Forces Group",
      ],
    },
    {
      name: "ASF Combat Service Identification Badge",
      image: "images/awards/CSIB.png",
      description:
        "Deployment patches awarded to soldiers who serve in a combat area or mission with their unit. Each deployment earns a unique patch.",
      requirements: [
        "Attend a deployment against a foreign enemy. The soldier cannot earn the same deployment patch multiple times versus the same group",
      ],
    },
    {
      name: "Special Forces Tab",
      image: "images/awards/SFTab.png",
      description:
        "Awarded upon successful completion of the Special Forces Qualification Course, marking official entry into the U.S. Army Special Forces.",
      requirements: [
        "Complete the Special Forces Qualification Course in the Army Special Forces",
      ],
    },
    {
      name: "Arctic Tab",
      image: "images/awards/ATab.png",
      description:
        "Awarded to soldiers who complete the Cold Weather Leaders Course, demonstrating the ability to operate effectively in arctic conditions.",
      requirements: [
        "Complete the Cold Weather Leaders Course in the Army Special Forces",
      ],
    },
    {
      name: "Antarctica Service Medal",
      image: "images/awards/Antarctica.png",
      description:
        "Awarded to personnel who successfully complete an Antarctica expedition and return without casualty.",
      requirements: [
        "Attend a deployment to Antarctica and complete it without death",
      ],
    },
    {
      name: "Armed Forces Expeditionary Medal",
      image: "images/awards/AFExp.png",
      description:
        "Awarded for service in military operations against a foreign enemy. Automatically authorized for holders of the Combat Infantryman Badge or Combat Action Badge.",
      requirements: [
        "Obtain the Combat Action Badge or the Combat Infantryman Badge",
      ],
    },
    {
      name: "Global War on Terrorism Expeditionary Medal",
      image: "images/awards/GWTE.png",
      description:
        "Recognizes service members who deployed in support of the Global War on Terrorism against foreign enemies.",
      requirements: ["Attend a deployment against a foreign enemy"],
    },
    {
      name: "Armed Forces Service Medal",
      image: "images/awards/AFS.png",
      description:
        "Awarded for completing a deployment in an expeditionary zone without incurring casualty, in areas not covered by a specific medal.",
      requirements: ["Attend a deployment to Mt. Everest"],
    },
    {
      name: "Army Overseas Service Ribbon",
      image: "images/awards/AOS.png",
      description:
        "Recognizes soldiers who complete overseas deployments in support of U.S. Army operations.",
      requirements: ["Attend a deployment against a foreign enemy"],
    },
    {
      name: "Joint Service Achievement",
      image: "images/awards/JSA.png",
      description:
        "Awarded to soldiers who participate in at least fifteen joint events (deployments or operations) with allied forces after 9/10/2023.",
      requirements: [
        "Attend a joint event with an ally or against a foreign enemy",
      ],
    },
    {
    name: "Southwest Asia Service Medal",
    image: "images/awards/SWAsia.png",
    description:
      "Awarded to personnel who participated in operations or deployments during the Southwest Asia Campaign.",
    requirements: [
      "Complete four consecutive deployments not within the same calendar week",
    ],
  },
  {
    name: "Kosovo Campaign Medal",
    image: "images/awards/Kosovo.png",
    description:
      "Awarded to personnel who participated in operations or deployments during the Kosovo Campaign.",
    requirements: [
      "Complete three consecutive deployments not within the same calendar week",
    ],
  },
  {
    name: "Afghanistan Campaign Medal",
    image: "images/awards/Afghanistan.png",
    description:
      "Awarded to personnel who participated in operations or deployments during the Afghanistan Campaign.",
    requirements: [
      "Complete three consecutive deployments not within the same calendar week",
    ],
  },
  {
    name: "Iraq Campaign Medal",
    image: "images/awards/Iraq.png",
    description:
      "Awarded to personnel who participated in operations or deployments during the Iraq Campaign.",
    requirements: [
      "Complete four consecutive deployments not within the same calendar week",
    ],
  },
  {
    name: "Army Sea Duty Medal",
    image: "images/awards/SeaDuty.png",
    description:
      "Awarded to personnel who participated in operations or deployments during the Army Sea Duty Campaign.",
    requirements: [
      "Complete three consecutive deployments not within the same calendar week",
    ],
  },
  ],
};

export const NotFoundConfig = {};

export const FooterConfig = {
  brand: {
    logo: "images/logos/ASF.png",
    name: "Army Special Forces",
    motto: "De Oppresso Liber",
    subtitle: "To Free the Oppressed",
    description:
      "Elite warriors dedicated to unconventional warfare, special reconnaissance, and counter-terrorism operations worldwide.",
    websiteCredits: ["@getr1ghtdawg", "@notorioussoh"],
  },

  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/courses", label: "Courses" },
    { href: "/propaganda", label: "Propaganda" },
    { href: "/contact", label: "Contact" },
  ],

  externalLinks: [
    {
      href: "https://discord.com/invite/yQSFux5UGb",
      label: "Discord Server",
      external: true,
    },
    {
      href: "https://www.roblox.com/communities/3235972/Army-Special-Forces#!/affiliates",
      label: "ROBLOX Group",
      external: true,
    },
    {
      href: "https://github.com/getrightdawg/specialforces.ddns.net/tree/main",
      label: "Source Code",
      external: true,
    },
  ],

  connectBox: {
    title: "MISSION READY",
    description:
      "Serving with honor, courage, and unwavering commitment to excellence in every mission.",
  },

  footerBottom: {
    copyright: "© 2025 Army Special Forces. All rights reserved.",
    warning: "Unauthorized reproduction prohibited",
    motto: "Excellence • Honor • Courage",
    pulseDot: true,
  },
};

export const NavigationConfig = {
  logo: {
    src: "images/logos/Badge.png",
    alt: "ASF Logo",
    title: "ARMY SPECIAL FORCES",
    subtitle: "De Oppresso Liber",
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/courses", label: "Courses" },
    { href: "/propaganda", label: "Propaganda" },
    { href: "/contact", label: "Contact" },
  ],
  ctaButton: {
    href: "/recruitment",
    label: "JOIN NOW",
    primary: true,
  },
};

export const PropagandaConfig = {
  hero: {
    title: "ASF PROPAGANDA",
    accentWord: "PROPAGANDA",
    subtitle:
      "Showcasing ASF Excellence and Major Victories. Witness the elite operations and achievements of the Army Special Forces.",
    backgroundImage: "images/propaganda/image3.png",
  },

  stats: [
    { label: "Image Assets", icon: Image, valueKey: "galleryImages" },
    { label: "Video Assets", icon: Play, valueKey: "videos" },
  ],

  missionHighlights: [
    {
      videoSrc: "videos/highlight1.mp4",
      title: "Army Staff Wargames Clutch",
      description:
        "A video showcasing xRed_v getting flanked from both sides of a compound, then proceeding to clutch up and win the wargames match against the 101st Airborne Division.",
    },
  ],

  galleryImages: [
    { src: "images/propaganda/image1.png", credit: "Credits: Durrryz" },
    { src: "images/propaganda/image2.png", credit: "Credits: 616Mythic" },
    {
      src: "images/propaganda/image3.png",
      credit: "Credits: ReflectionsOfSilence",
    },
    { src: "images/propaganda/image4.png", credit: "Credits: CaptainZingers" },
    { src: "images/propaganda/image5.png", credit: "Credits: WillT1422" },
    {
      src: "images/propaganda/image6.png",
      credit: "Credits: spectreflame1, mintyfreshoreo",
    },
    { src: "images/propaganda/image7.png", credit: "Credits: @teleportedduck" },
    {
      src: "images/propaganda/image8.png",
      credit: "Credits: mpiskotogrooooo, ElijahIWilliams",
    },
    { src: "images/propaganda/image9.png", credit: "Credits: @lucifer712" },
    { src: "images/propaganda/image10.png", credit: "Credits: kpel1111" },
    { src: "images/propaganda/image11.png", credit: "Credits: N/A" },
  ],

  videos: [
    { src: "videos/asf1.mp4", credit: "mintyfreshoreo, C6mpact" },
    { src: "videos/asf2.mp4", credit: "C6mpact" },
    { src: "videos/asf3.mp4", credit: "mintyfreshoreo, C6mpact" },
    { src: "videos/asf4.mp4", credit: "@kaylenyy" },
    { src: "videos/asf5.mp4", credit: "mintyfreshoreo, C6mpact" },
  ],

  sections: {
    missionHighlights: {
      title: "MISSION HIGHLIGHTS",
      accentWord: "HIGHLIGHTS",
      subtitle:
        "Elite operations and achievements showcasing Special Forces excellence",
    },
    visualGallery: {
      title: "VISUAL GALLERY",
      accentWord: "GALLERY",
      subtitle:
        "Professional imagery capturing the essence of Army Special Forces operations and culture",
      decorativeBlur: {
        position: "top-right",
        size: "w-64 h-64",
        opacity: "bg-asf-accent/5",
      },
    },
    videoGallery: {
      title: "VIDEO GALLERY",
      accentWord: "GALLERY",
      subtitle:
        "Dynamic video content showcasing Special Forces training, operations, and capabilities",
    },
  },

  hallOfFame: {
    title: "HALL OF FAME",
    accentWord: "FAME",
    subtitle: "Celebrating the most outstanding members in ASF history",
    previewLength: 100,
    fame: [
      {
        username: "MichaelMightBite",
        robloxId: 1242059834,
        expanded: false,
        description:
          "was a highly respected commander of ASF. He was a good leader who interacted regularly with members and listened to them and acted on their advice and problems wisely. Following his leadership, ASF was kept on its feet without dissolving and it was also well organized. ",
      },
      {
        username: "Tvctical",
        robloxId: 88803732,
        expanded: false,
        description:
          "was one of the best Sergeant Majors of ASF. Renowned to be a leader and a person people trust in terms of reliability, he accomplished duties quite fast and efficiently, thus reaching his rapid rise in terms of promotion. Being ASOC HICOM, he did an amazing job at making ASOC alive by constantly organizing events as well as significant changes to keep the community entertained. He further made the group very stable and safe to follow his leadership. ",
      },
      {
        username: "xRed_v",
        robloxId: 772617327,
        expanded: false,
        description:
          "was known among the best Sergeant Majors of ASF. He was a good listener, leader who held high attention and was able to act appropriately no matter the consequences. His learning and qualities as an officer were excellent, as in many cases he renewed groups that were low activity and got them to peak. He came up with new things all the time to improve ASF, and truly cared his low ranks. ",
      },
      {
        username: "NasDaily_Alpha",
        robloxId: 553357381,
        expanded: false,
        description:
          "was considered as the one of the best Commanders of ASF. He was an excellent leader in that the group was organized, active and stable. His leadership and motivation skills made a legacy and during his tenure. ",
      },
    ],
  },
};

export const RecruitmentConfig = {
  hero: {
    title: "JOIN THE ELITE",
    accentWord: "ELITE",
    subtitle:
      "Thinking about joining? Here's what you need to know to become part of the Army Special Forces.",
    backgroundImage: "images/propaganda/image11.png",
    readySection: {
      title: "YOUR JOURNEY STARTS HERE",
      subtitle: "Show true dedication and become an elite warrior",
      motto: "DE OPPRESSO LIBER",
    },
  },

  requirements: [
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
  ],

  processSteps: [
    {
      step: "1",
      title: "Selection/Application Process",
      text: "Attend an ASF (group-restricted) selection or apply through applications in the #open-positions forum within the USAR community server.",
    },
    {
      step: "2",
      title: "Phase Role Request",
      text: "Once you pass your selection or application, you will need to file a phase role request to be enrolled in SFQC within the ASF server.",
    },
    {
      step: "3",
      title: "SFQC Training",
      text: "After you receive your roles, you will be placed in SFQC. You will need to complete all 3 phases designed for your specified group to graduate and become a Special Forces member.",
    },
  ],

  faqs: [
    {
      question: "How long does SFQC take?",
      answer:
        "The Special Forces Qualification Course is divided into 3 phases for each group. You are required to complete the pipeline under a week. Failure to do so, without notice, will result in a removal from the course.",
    },
    {
      question: "Is SFQC hard?",
      answer:
        "As long as you follow simple instructions and have a decent level of combat skill, you will pass it with flying colors.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Prior MILSIM or combat experience is required. While ASF will train you from the ground up through SFQC, you will be evaluated on combat multiple times. Dedication and discipline are expected.",
    },
    {
      question: "What are the reasons to be removed from SFQC?",
      answer:
        "1. Failing one of the courses\n2. Failing to complete the course within 7 days after passing a selection/application.\n3. Caught cheating in one of the courses, resulting in a blacklist.\n4. Begging or direct messaging any staff to host a course.",
    },
    {
      question: "Can I attempt to join ASF while being in another unit?",
      answer:
        "If you are in a unit, you are able to attend any ASF selections or apply through applications and pass them, however, you must discharge once you graduate in SFQC.",
    },
    {
      question: "What if I don't have time to complete SFQC?",
      answer:
        "If you are in SFQC and you don't have time to complete it, you can contact any available Company Staff for an extension (Leave of Absence) or for a formal removal from the course.",
    },
    {
      question: "What does each phase in SFQC have?",
      answer:
        "It depends on the group you're joining.\n1st SFG:\n- Course I: Tournament Grounds Combat Evaluation\n- Course II: Classroom, Airborne Assessment, and Practice Inspection\n5th SFG:\n- Course I: Breach Assessment and Marksmanship Test\n- Course II: Land Navigation, Recon and Compound Clearance\n- Course III: Classroom, Airborne Assessment, and Practice Inspection\n10th SFG:\n- Course I: Tournament Grounds Combat Evaluation\n- Course II: Map Introduction and Quiz\n- Course III: Classroom, Airborne Assessment, and Practice Inspection",
    },
  ],
};

export default {
  AboutConfig,
  ContactConfig,
  CoursesConfig,
  HomeConfig,
  NotFoundConfig,
  FooterConfig,
  NavigationConfig,
  PropagandaConfig,
  RecruitmentConfig,
};
