'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import { useEffect, useState } from 'react';
import { Calendar, Tag, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ArticleDetailPage({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/posts.json')
      .then((res) => res.json())
      .then((data) => {
        const foundPost = data.find(p => p.id === params.id);
        setPost(foundPost);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading post:', error);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ParticleBackground />
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ParticleBackground />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/articles" className="text-cyan-400 hover:underline">
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      <div className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                {post.type}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-cyan-500" />
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-invert prose-cyan max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </motion.div>

          {/* Share/navigation footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-cyan-500/20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-gray-400">
                Enjoy this article? Share with your friends!
              </div>
              <Link
                href="/articles"
                className="px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-semibold rounded-lg transition-all border border-cyan-500/30 hover:border-cyan-500/50"
              >
                Read More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
