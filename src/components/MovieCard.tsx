import { motion } from "framer-motion";
import React from "react";

interface Movie {
  imageurl: string[];
  genre: string[];
  imdbid: string;
  title: string;
  imdbrating: number;
  released: number;
  synopsis?: string;
  type: string;
}

const MovieCard: React.FC<{ movie: Movie; index: number }> = ({
  movie,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 shadow-2xl backdrop-blur-2xl hover:shadow-purple-700/40 transition-all duration-500 group hover:border-purple-500/30 hover:translate-y-[-5px]"
    >
      {/* Image */}
      <div className="relative aspect-[2/3] overflow-hidden">
        {movie.imageurl[0] ? (
          <img
            src={movie.imageurl[0]}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
            <span className="text-white/50 text-lg">No Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
          <span className="text-yellow-400 text-xs font-bold">⭐</span>
          <span className="text-white text-xs ml-1 font-medium">
            {movie.imdbrating.toFixed(1)}
          </span>
        </div>

        {/* Watch Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-5 inset-x-0 flex justify-center transition-all duration-300"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-purple-600 to-fuchsia-500 hover:from-fuchsia-600 hover:to-purple-700 text-white text-xs px-5 py-2 rounded-full font-bold shadow-lg flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Watch Now
          </motion.button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-white font-semibold text-lg truncate group-hover:text-purple-400 transition-colors duration-300">
          {movie.title}
        </h3>
        <div className="text-white/60 text-xs flex justify-between items-center">
          <span>{movie.released}</span>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span>{movie.imdbrating.toFixed(1)}/10</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {movie.genre.slice(0, 3).map((g, idx) => (
            <motion.span
              key={idx}
              className="bg-gradient-to-r from-purple-700/20 to-pink-700/20 text-white/80 text-[10px] px-2 py-0.5 rounded-full shadow-inner hover:scale-105 transition-transform border border-white/10"
              whileHover={{ scale: 1.1 }}
            >
              {g}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Hover Details */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
        <p className="text-white/80 text-xs line-clamp-3 mb-2">
          {movie.synopsis || "No synopsis available"}
        </p>
        <button className="text-white text-xs font-medium bg-white/10 hover:bg-white/20 transition-colors rounded-full px-3 py-1 mt-2 backdrop-blur-sm">
          More Info
        </button>
      </div>
    </motion.div>
  );
};

export default MovieCard;
