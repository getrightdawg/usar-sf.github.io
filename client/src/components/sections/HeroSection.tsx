import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

const particles = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
  driftX: (Math.random() - 0.5) * 20,
  bobY: 15 + Math.random() * 10,
}));

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.discordapp.net/attachments/692044595793756284/1202014447225540668/v2.png?ex=689f08f0&is=689db770&hm=ac065fef653fab4ba956303788786629aaf5a48e6d275e7f7bacbd73b703d9fb&=&format=webp&quality=lossless&width=1232&height=587')",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute inset-0 professional-gradient opacity-80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-asf-black via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((p) => (
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
  );
}
