'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import PostCard from '@/components/PostCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from JSON
    fetch('/data/posts.json')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 3)); // Show latest 3 posts
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">Selamat Datang</span>
            </motion.div>

            {/* Main heading with floating animation */}
            <motion.h1
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 leading-tight"
            >
              Hai, saya Fahmi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Ini ruang pribadi saya di web.{' '}
              <span className="text-cyan-400 font-semibold">
                Selamat datang di dunia saya 🔥
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#feed"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Jelajahi Konten
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/20"
              >
                Tentang Saya
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-sm">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feed Section */}
      <section id="feed" className="relative py-20 px-4">
        <div className="container mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              Latest Updates
            </h2>
            <p className="text-gray-400 text-lg">
              Artikel, proyek, dan pemikiran terbaru
            </p>
          </motion.div>

          {/* Posts grid */}
          {loading ? (
            <div className="text-center text-gray-400">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}

          {/* View all button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-semibold rounded-lg transition-all border border-cyan-500/30 hover:border-cyan-500/50"
            >
              Lihat Semua Artikel
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects', value: '15+' },
              { label: 'Articles', value: '30+' },
              { label: 'Years Coding', value: '5+' },
              { label: 'Coffee Cups', value: '∞' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
