'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import ProjectCard from '@/components/ProjectCard';
import { useEffect, useState } from 'react';
import { Briefcase, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      <div className="relative py-20 px-4">
        <div className="container mx-auto">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              My Projects
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Koleksi proyek yang telah saya kerjakan - dari web apps hingga tools automation
            </p>
          </motion.div>

          {/* Projects grid */}
          {loading ? (
            <div className="text-center text-gray-400 py-20">Loading projects...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Tertarik Berkolaborasi?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Saya selalu terbuka untuk proyek menarik dan kolaborasi. Mari wujudkan ide Anda!
            </p>
            <a
              href="/about"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
