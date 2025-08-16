import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}

function Counter({ end, suffix = "", duration = 2, start }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

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

export function StatsSection() {
  const stats = [
    {
      value: 100,
      label: "Active Personnel",
      suffix: "+",
    },
    {
      value: 80,
      label: "Deployments/Operations Hosted",
      suffix: "+",
    },
    {
      value: 98,
      label: "Success Rate",
      suffix: "%",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 professional-gradient">
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
            <p className="font-rajdhani font-bold">MISSION-READY EXCELLENCE</p>
            <div className="w-8 h-px bg-asf-accent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
