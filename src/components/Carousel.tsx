import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SlideItem {
  id: number;
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
}

interface SingleSlideCarouselProps {
  slides: SlideItem[];
}

const Carousel: React.FC<SingleSlideCarouselProps> = ({ slides }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-10 left-0 right-0 z-30">
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <motion.div
        className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
          i === currentSlide ? "bg-white" : "bg-white/20"
        }`}
        whileHover={{ scale: 1.3 }}
        animate={{
          backgroundColor:
            i === currentSlide ? "#ffffff" : "rgba(255,255,255,0.2)",
        }}
        transition={{ duration: 0.3 }}
      />
    ),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 14, stiffness: 120 },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Glassmorphic Sticky Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2 px-6 bg-black/30 backdrop-blur-xl border border-white/10 shadow-xl"
            : "py-5 px-6 bg-transparent"
        }`}
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(0,0,0,0.55), rgba(40,40,40,0.45))"
            : "transparent",
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 4px 12px rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px) saturate(150%)",
          WebkitBackdropFilter: "blur(12px) saturate(150%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <div className="container mx-auto flex justify-between items-center transition-all duration-300">
          <motion.div
            className={`font-extrabold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 ${
              isScrolled ? "text-2xl" : "text-3xl"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            StreamVista
          </motion.div>
          <nav className="hidden md:flex space-x-8 text-white/80 font-medium text-lg">
            {["Home", "Movies", "TV Shows", "My List"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.button
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </div>
      </motion.header>

      {/* Carousel */}
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen">
            <div className="absolute inset-0">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />
            </div>

            <motion.div
              className="absolute inset-0 flex items-end z-20 pb-28 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                className="max-w-2xl xl:max-w-3xl p-10 rounded-2xl backdrop-blur-[14px] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] relative overflow-hidden"
                style={{
                  backdropFilter: "blur(14px) saturate(160%)",
                  WebkitBackdropFilter: "blur(14px) saturate(160%)",
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.3), inset 0 0 0.5px rgba(255,255,255,0.1)",
                }}
                variants={itemVariants}
              >
                {/* Optional shimmer or inner-glow highlight */}
                <div className="absolute -inset-1 rounded-2xl border border-white/10 pointer-events-none" />

                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.6)] mb-6"
                  variants={itemVariants}
                >
                  {slide.title}
                </motion.h1>

                {slide.subtitle && (
                  <motion.p
                    className="text-xl sm:text-2xl text-white/80 mb-8 leading-relaxed tracking-wide"
                    variants={itemVariants}
                  >
                    {slide.subtitle}
                  </motion.p>
                )}

                {slide.ctaText && (
                  <motion.button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.07,
                      backgroundColor: "#7c3aed",
                      boxShadow: "0 10px 25px rgba(124, 58, 237, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.ctaText}
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
