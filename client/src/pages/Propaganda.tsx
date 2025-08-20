import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/modal";
import { Play } from "lucide-react";
import { PropagandaConfig } from "../../../config/index";

export default function Propaganda() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; credit: string } | null>(null);

  // Independent expand state per card (index -> boolean)
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PropagandaConfig.hero.backgroundImage})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90`}>
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
              {PropagandaConfig.hero.title.split(" ").map((word) =>
                word === PropagandaConfig.hero.accentWord ? (
                  <span key={word} className="text-asf-accent">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              {PropagandaConfig.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {PropagandaConfig.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const value =
                stat.valueKey === "galleryImages"
                  ? PropagandaConfig.galleryImages.length
                  : stat.valueKey === "videos"
                  ? PropagandaConfig.videos.length
                  : stat.value;
              return (
                <div key={index} className="text-center">
                  <div className="glow-border p-6 bg-asf-dark/60 backdrop-blur-sm rounded-xl">
                    <div className="w-16 h-16 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg">
                      <IconComponent className="w-full h-full text-asf-accent" />
                    </div>
                    <h3 className="font-rajdhani font-bold text-lg text-asf-accent mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-3xl font-rajdhani font-black text-white">{value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-16 professional-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              {PropagandaConfig.sections.missionHighlights.title
                .split(" ")
                .map((word) =>
                  word === PropagandaConfig.sections.missionHighlights.accentWord ? (
                    <span key={word} className="text-asf-accent">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              {PropagandaConfig.sections.missionHighlights.subtitle}
            </p>
          </motion.div>

          {PropagandaConfig.missionHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="glow-border p-6 bg-asf-dark/60 backdrop-blur-sm rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-asf-dark">
                <video controls className="w-full h-full object-cover bg-asf-dark" preload="metadata">
                  <source src={highlight.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <h3 className="text-2xl font-rajdhani font-bold text-asf-accent mb-2">{highlight.title}</h3>
              <p className="text-lg text-asf-gray-light max-w-2xl mx-auto">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-asf-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-right w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl`} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              {PropagandaConfig.sections.visualGallery.title
                .split(" ")
                .map((word) =>
                  word === PropagandaConfig.sections.visualGallery.accentWord ? (
                    <span key={word} className="text-asf-accent">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              {PropagandaConfig.sections.visualGallery.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PropagandaConfig.galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-xl bg-asf-dark/40 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={`Propaganda ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs text-asf-gray-light font-medium">{image.credit}</p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-asf-accent rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              {PropagandaConfig.sections.videoGallery.title
                .split(" ")
                .map((word) =>
                  word === PropagandaConfig.sections.videoGallery.accentWord ? (
                    <span key={word} className="text-asf-accent">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              {PropagandaConfig.sections.videoGallery.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PropagandaConfig.videos.map((video, index) => (
              <motion.div
                key={index}
                className="glow-border p-6 bg-asf-dark/60 backdrop-blur-sm rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <video controls className="w-full h-full object-cover bg-asf-gray-dark" preload="metadata">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 p-2 bg-asf-accent/10 rounded-lg">
                    <Play className="w-full h-full text-asf-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-asf-gray-light font-medium">{video.credit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section className="py-24 professional-gradient">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              {PropagandaConfig.hallOfFame.title.split(PropagandaConfig.hallOfFame.accentWord)[0]}
              <span className="text-asf-accent">{PropagandaConfig.hallOfFame.accentWord}</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">{PropagandaConfig.hallOfFame.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PropagandaConfig.hallOfFame.fame.map((member, index) => (
              <motion.div
                key={member.robloxId ?? index}
                className="relative glow-border p-8 bg-asf-dark/60 backdrop-blur-sm rounded-xl hover:bg-asf-dark/80 transition-all duration-300 pointer-events-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-asf-accent/5 via-transparent to-transparent pointer-events-none rounded-xl"></div>

                <div className="relative z-10 text-center">
                  <h3 className="font-rajdhani font-bold text-2xl text-asf-accent mb-2">{member.username}</h3>

                  <p className="text-asf-gray-light text-sm mb-4">
                    {expanded[index] || member.description.length <= PropagandaConfig.hallOfFame.previewLength
                      ? member.description
                      : member.description.slice(0, PropagandaConfig.hallOfFame.previewLength) + "... "}
                    {member.description.length > PropagandaConfig.hallOfFame.previewLength && (
                      <button
                        onClick={() =>
                          setExpanded((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                        className="text-asf-accent font-semibold hover:underline focus:outline-none"
                      >
                        {expanded[index] ? " Read less " : " Read more "}
                      </button>
                    )}
                  </p>

                  <a
                    href={`https://www.roblox.com/users/${member.robloxId}/profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-asf-accent text-black font-rajdhani font-bold rounded-lg hover:bg-asf-accent/80 transition-colors duration-300 pointer-events-auto"
                  >
                    ROBLOX PROFILE
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageId={selectedImage?.src || ""}
        title={selectedImage?.credit || ""}
      />
    </div>
  );
}
