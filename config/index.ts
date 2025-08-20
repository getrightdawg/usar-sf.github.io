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

export const HomeConfig = {};

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

  styles: {
    footerGradient: "professional-gradient",
    border: "border-t border-asf-accent/20",
    sectionSpacing: "py-16",
    grid: "grid md:grid-cols-4 gap-12 mb-12 items-start",
    heading: "font-rajdhani font-black text-xl mb-6 text-asf-accent",
    headingUnderline: "w-12 h-1 bg-asf-accent mb-4",
    link: "text-asf-gray-light hover:text-asf-accent transition-all duration-300 text-sm font-medium group flex items-center",
    linkBullet:
      "w-2 h-2 bg-asf-gray-dark rounded-full mr-3 group-hover:bg-asf-accent transition-colors duration-300",
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
    { label: "Major Victories", icon: Award, value: "Classified" },
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
        description: "was a highly respected commander of ASF. He was a good leader who interacted regularly with members and listened to them and acted on their advice and problems wisely. Following his leadership, ASF was kept on its feet without dissolving and it was also well organized. ",
      },
      {
        username: "Tvctical",
        robloxId: 88803732,
        expanded: false,
        description: "was one of the best Sergeant Majors of ASF. Renowned to be a leader and a person people trust in terms of reliability, he accomplished duties quite fast and efficiently, thus reaching his rapid rise in terms of promotion. Being ASOC HICOM, he did an amazing job at making ASOC alive by constantly organizing events as well as significant changes to keep the community entertained. He further made the group very stable and safe to follow his leadership. ",
      },
      {
        username: "xRed_v",
        robloxId: 772617327,
        expanded: false,
        description: "was known among the best Sergeant Majors of ASF. He was a good listener, leader who held high attention and was able to act appropriately no matter the consequences. His learning and qualities as an officer were excellent, as in many cases he renewed groups that were low activity and got them to peak. He came up with new things all the time to improve ASF, and truly cared his low ranks. ",
      },
      {
        username: "NasDaily_Alpha",
        robloxId: 553357381,
        expanded: false,
        description: "was considered as the one of the best Commanders of ASF. He was an excellent leader in that the group was organized, active and stable. His leadership and motivation skills made a legacy and during his tenure. ",
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
      title: "READY TO SERVE?",
      subtitle: "Begin your journey to becoming an elite warrior",
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
      text: "Attend an ASF (group-restricted) selection event or apply through applications in the #open-positions forum within the USAR community server.",
    },
    {
      step: "2",
      title: "Phase Role Request",
      text: "Once you pass your selection or application, you will need to file a phase role request to be enrolled in SFQC within the ASF server.",
    },
    {
      step: "3",
      title: "SFQC Training",
      text: "After you receive your roles, you will be placed in SFQC. You will need to complete all 5 phases designed for your specified group to graduate and become a Special Forces member.",
    },
  ],

  faqs: [
    {
      question: "How do I join ASF?",
      answer:
        "You can join by attending a group-restricted selection event or applying through the #open-positions forum in the USAR community server. Once accepted, you'll enter SFQC training.",
    },
    {
      question: "How long does SFQC take?",
      answer:
        "The Special Forces Qualification Course is divided into 5 phases. You are required to complete the pipeline under a week. Failure to do so, without notice, will result in a removal from the course.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Prior MILSIM or combat experience is required. While ASF will train you from the ground up through SFQC, you will be evaluated on combat multiple times. Dedication and discipline are expected.",
    },
    {
      question: "What does each phase in SFQC have?",
      answer:
        "It depends on the group you're joining. For 1st SFG, it has a Combat Evaluation, Raid Grounds Evaluation and a Classroom Session phase. For 5th SFG, it has a CQB Assessment, Land Navigation and Roles and Tactics phase. Lastly, for 10th SFG, it has a Combat Evaluation, Map Introduction and a Classroom Session phase. The last two phases are universal for all groups, which includes an Airborne Qualification and a Practice Inspection phase.",
    },
  ],
};

export default {
  AboutConfig,
  ContactConfig,
  CoursesConfig,
  HomeConfig,
  NotFoundConfig,
  PropagandaConfig,
  RecruitmentConfig,
};
