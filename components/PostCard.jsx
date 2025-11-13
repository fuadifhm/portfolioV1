'use client';

import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

export default function PostCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/articles/${post.id}`}>
        <div className="group relative bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/5 group-hover:to-teal-500/5 rounded-2xl transition-all duration-300" />
          
          <div className="relative z-10">
            {/* Type badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                {post.type}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-cyan-500" />
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Read more indicator */}
            <div className="mt-4 flex items-center text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Baca selengkapnya</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
