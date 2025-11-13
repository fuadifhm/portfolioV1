'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useState } from 'react';

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="relative bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <Code className="w-16 h-16 text-cyan-400/50" />
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.demoLink}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all transform hover:scale-105"
              onClick={(e) => e.preventDefault()}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
            <a
              href={project.githubLink}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
              onClick={(e) => e.preventDefault()}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          </div>
        </div>

        {/* 3D effect layer */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
