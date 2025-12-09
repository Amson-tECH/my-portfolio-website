import React, { useState } from "react";
import { Send, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { assets, workData } from "@/assets/assets";

const Work = ({ isDarkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? workData : workData.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`text-center mb-2 text-lg font-Ovo ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`text-center text-5xl font-Ovo ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Explore a selection of projects that highlight my work in web
        development, mobile apps, and UI/UX design. Each project reflects my
        commitment to creating engaging and user-friendly digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 ${
          isDarkMode ? "dark:text-black" : ""
        }`}
      >
        {displayedProjects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={showAll && index >= 4 ? { opacity: 0, scale: 0.8 } : {}}
            animate={showAll && index >= 4 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: index >= 4 ? (index - 4) * 0.1 : 0,
            }}
            whileHover={{ scale: 1.05 }}
            className="aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Animated border on hover - blue/black */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg border-2 ${
                isDarkMode ? "border-blue-500" : "border-black"
              }`}
            />

            {/* Featured badge */}
            {project.featured && (
              <div
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                  isDarkMode
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-black/20 text-white border border-white/30"
                }`}
              >
                Featured
              </div>
            )}

            {/* Content card at bottom */}
            <div
              className={`w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg backdrop-blur-sm ${
                isDarkMode
                  ? "bg-slate-800/90 border border-slate-700"
                  : "bg-white/90 border border-gray-200"
              }`}
            >
              <div>
                <h2
                  className={`font-semibold text-sm ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {project.category}
                </p>
              </div>

              <div
                className={`border rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                  isDarkMode
                    ? "border-white bg-slate-700"
                    : "border-black bg-white"
                }`}
              >
                <Send className="w-4 h-4" />
              </div>
            </div>

            {/* Corner sparkle decoration */}
            <div
              className={`absolute top-3 right-3 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center ${
                isDarkMode ? "bg-white/10" : "bg-black/10"
              } backdrop-blur-sm`}
            >
              <div className="w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        onClick={() => setShowAll(!showAll)}
        className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 hover:-translate-y-1 duration-500 transition-all relative overflow-hidden group ${
          isDarkMode
            ? "text-white border-white hover:bg-slate-800 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]"
            : "text-gray-700 border-gray-700 hover:bg-gray-50 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
        }`}
      >
        {/* Button shine effect */}
        <div
          className={`absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ${
            isDarkMode
              ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"
          }`}
        />

        <span className="relative z-10">
          {showAll ? "Show less" : "Show more"}
        </span>
        {showAll ? (
          <X className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90 relative z-10" />
        ) : (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
        )}
      </motion.button>
    </motion.div>
  );
};

export default Work;
