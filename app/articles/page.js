'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import PostCard from '@/components/PostCard';
import { useEffect, useState } from 'react';
import { FileText, Search } from 'lucide-react';

export default function ArticlesPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('all');
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    fetch('/data/posts.json')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
        
        // Extract all unique tags
        const tags = [...new Set(data.flatMap(post => post.tags || []))];
        setAllTags(tags);
        
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading posts:', error);
        setLoading(false);
      });
  }, []);

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    if (tag === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.tags?.includes(tag)));
    }
  };

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
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">Blog</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              Articles
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Pemikiran, tutorial, dan insight tentang teknologi dan desain
            </p>
          </motion.div>

          {/* Filter tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <button
              onClick={() => handleTagFilter('all')}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                selectedTag === 'all'
                  ? 'bg-cyan-500 text-black'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedTag === tag
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                #{tag}
              </button>
            ))}
          </motion.div>

          {/* Articles grid */}
          {loading ? (
            <div className="text-center text-gray-400 py-20">Loading articles...</div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              No articles found for this tag.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
