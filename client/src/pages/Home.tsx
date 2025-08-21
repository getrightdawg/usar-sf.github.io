import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Modal } from "@/components/ui/modal";
import { HomeConfig } from "../../../config/index";

export default function Home() {
  const heroParticles = Array.from({
    length: HomeConfig.hero.particles.amount,
  }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * HomeConfig.hero.particles.delay,
    driftX: (Math.random() - 0.5) * HomeConfig.hero.particles.driftX,
    bobY: 15 + Math.random() * HomeConfig.hero.particles.driftY,
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
          1
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

  const stats = HomeConfig.stats;
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
      { threshold: 0.3 }
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

  const WargamesIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-sf-gray"
    >
      <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="34" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 18L30 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0 0L6 3L0 6V0Z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  );

  const ScrimmagesIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-sf-gray"
    >
      <path
        d="M10 24H22L18 20M22 24L18 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M38 24H26L30 20M26 24L30 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

  const BreachingIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-sf-gray"
    >
      <rect
        x="14"
        y="8"
        width="20"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 8 L26 16 L22 24 L26 32 L24 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="40" r="2" fill="currentColor" />
    </svg>
  );

  const iconsMap = {
    deployments: DeploymentIcon,
    "mock-operations": OperationsIcon,
    "joint-events": JointExerciseIcon,
    "breach-trainings": BreachingIcon,
    wargames: WargamesIcon,
    scrimmages: ScrimmagesIcon
  };
  const events = HomeConfig.events.map((event) => ({
    ...event,
    icon: iconsMap[event.id],
  }));

  const eventDetails: Record<string, EventDetail> = HomeConfig.eventDetails;

  const handleEventClick = (eventId: string) =>
    setSelectedEvent(eventDetails[eventId]);
  const [selectedAward, setSelectedAward] = useState<{
    name: string;
    image: string;
    description: string;
    requirements: string[];
  } | null>(null);

  const awards = HomeConfig.awards;

  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HomeConfig.hero.backgroundImage})` }}
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
                {HomeConfig.hero.title.line1}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-asf-accent transform scale-x-0 animate-pulse"></div>
              </span>
              <br />
              <span className="text-asf-gray-light relative">
                {HomeConfig.hero.title.line2}
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
                {HomeConfig.hero.motto.latin}
              </p>
              <p className="text-lg md:text-xl text-asf-gray-light max-w-2xl mx-auto">
                {HomeConfig.hero.motto.english}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {HomeConfig.hero.ctaButtons.map((cta, index) => (
                <Link key={index} href={cta.link}>
                  <Button
                    size="lg"
                    className={
                      cta.primary
                        ? "glow-border bg-asf-accent text-asf-black px-10 py-5 font-rajdhani font-black text-lg hover:bg-asf-accent-dark hover:scale-105 transition-all duration-300 shadow-lg"
                        : "border-2 border-white px-10 py-5 font-rajdhani font-bold text-lg hover:bg-white hover:text-asf-black hover:scale-105 transition-all duration-300"
                    }
                  >
                    {cta.label}
                  </Button>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 inset-x-0 flex flex-col items-center z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-asf-gray-light mb-2 font-rajdhani">
            {HomeConfig.hero.scrollText}
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
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...HomeConfig.marqueeTexts, ...HomeConfig.marqueeTexts].map(
                (text, i) => (
                  <span
                    key={i}
                    className="font-rajdhani font-bold text-xl mx-12 text-asf-accent"
                  >
                    {text}
                  </span>
                )
              )}
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
