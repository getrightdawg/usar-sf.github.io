import { useState } from "react";
import { motion } from "framer-motion";
import { Image, Play, Award } from "lucide-react";
import { ImageModal } from "@/components/ui/modal";

export default function Propaganda() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    credit: string;
  } | null>(null);

  const galleryImages = [
    {
      src: "images/image1.png",
      credit: "Credits: Durrryz",
    },
    {
      src: "images/image2.png",
      credit: "Credits: 616Mythic",
    },
    {
      src: "images/image3.png",
      credit: "Credits: ReflectionsOfSilence",
    },
    {
      src: "images/image4.png",
      credit: "Credits: CaptainZingers",
    },
    {
      src: "images/image5.png",
      credit: "Credits: WillT1422",
    },
    {
      src: "images/image6.png",
      credit: "Credits: spectreflame1, mintyfreshoreo",
    },
    {
      src: "images/image7.png",
      credit: "Credits: @teleportedduck",
    },
    {
      src: "images/image8.png",
      credit: "Credits: mpiskotogrooooo, ElijahIWilliams",
    },
    {
      src: "images/image9.png",
      credit: "Credits: @lucifer712",
    },
    {
      src: "images/image10.png",
      credit: "Credits: kpel1111",
    },
    {
      src: "images/image11.png",
      credit: "Credits: N/A",
    },
  ];

  const videos = [
    {
      src: "videos/asf1.mp4",
      credit: "mintyfreshoreo, C6mpact",
    },
    {
      src: "videos/asf2.mp4",
      credit: "C6mpact",
    },
    {
      src: "videos/asf3.mp4",
      credit: "mintyfreshoreo, C6mpact",
    },
    {
      src: "videos/asf4.mp4",
      credit: "@kaylenyy",
    },
    {
      src: "videos/asf5.mp4",
      credit: "mintyfreshoreo, C6mpact",
    },
  ];

  const stats = [
    { label: "Image Assets", value: galleryImages.length, icon: Image },
    { label: "Video Assets", value: videos.length, icon: Play },
    { label: "Major Victories", value: "Classified", icon: Award },
  ];

  return (
    <div className="pt-20 min-h-screen bg-asf-black text-white">
      <section className="py-24 bg-asf-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1152681587922702517/1276379178178183168/image.png?ex=689f4efe&is=689dfd7e&hm=77e9fd4e116b8cef56313ccb263b7387137cdb74952b1f50f9df3e804d585495&=&format=webp&quality=lossless')] bg-cover bg-center bg-no-repeat"
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
              ASF <span className="text-asf-accent">PROPAGANDA</span>
            </h1>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-asf-gray-light max-w-4xl mx-auto leading-relaxed">
              Showcasing ASF Excellence and Major Victories. Witness the elite
              operations and achievements of the Army Special Forces.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="glow-border p-6 bg-asf-dark/60 backdrop-blur-sm rounded-xl">
                    <div className="w-16 h-16 mx-auto mb-4 p-3 bg-asf-accent/10 rounded-lg">
                      <IconComponent className="w-full h-full text-asf-accent" />
                    </div>
                    <h3 className="font-rajdhani font-bold text-lg text-asf-accent mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-3xl font-rajdhani font-black text-white">
                      {stat.value}
                    </p>
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
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              MISSION <span className="text-asf-accent">HIGHLIGHTS</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Elite operations and achievements showcasing Special Forces
              excellence
            </p>
          </motion.div>

          <motion.div
            className="glow-border p-6 bg-asf-dark/60 backdrop-blur-sm rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-asf-dark">
              <video
                controls
                className="w-full h-full object-cover bg-asf-dark"
                preload="metadata"
              >
                <source src="videos/highlight1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h3 className="text-2xl font-rajdhani font-bold text-asf-accent mb-2">
              Army Staff Wargames Clutch
            </h3>
            <p className="text-lg text-asf-gray-light max-w-2xl mx-auto">
              A video showcasing xRed_v getting flanked from both sides of a
              compound, then proceeding to clutch up and win the wargames match
              against the 101st Airborne Division.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-asf-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-asf-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              VISUAL <span className="text-asf-accent">GALLERY</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Professional imagery capturing the essence of Army Special Forces
              operations and culture
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-xl bg-asf-dark/40 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.05 }}
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
                    <p className="text-xs text-asf-gray-light font-medium">
                      {image.credit}
                    </p>
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

      <section className="py-24 professional-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-rajdhani font-black mb-6">
              VIDEO <span className="text-asf-accent">GALLERY</span>
            </h2>
            <div className="w-24 h-1 bg-asf-accent mx-auto mb-6"></div>
            <p className="text-xl text-asf-gray-light max-w-3xl mx-auto">
              Dynamic video content showcasing Special Forces training,
              operations, and capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="glow-border p-6 bg-asf-dark/60 backdrop-blur-sm rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <video
                    controls
                    className="w-full h-full object-cover bg-asf-gray-dark"
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 p-2 bg-asf-accent/10 rounded-lg">
                    <Play className="w-full h-full text-asf-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-asf-gray-light font-medium">
                      {video.credit}
                    </p>
                  </div>
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
