'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import { Github, Linkedin, Mail, Twitter, Code2, Palette, Rocket } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'Three.js & 3D', level: 85 },
    { name: 'Node.js & APIs', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'MongoDB & Databases', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-cyan-400' },
    { icon: Mail, label: 'Email', href: 'mailto:fahmi@example.com', color: 'hover:text-red-400' },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      <div className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-5xl font-bold text-white"
            >
              F
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              About Me
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Developer, Designer, and Digital Creator
            </p>
          </motion.div>

          {/* Bio section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Hi, I'm Fahmi 👋</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  Saya adalah seorang full-stack developer dengan passion di bidang web development,
                  3D graphics, dan UI/UX design. Saya senang membuat pengalaman digital yang
                  immersive dan memorable.
                </p>
                <p>
                  Dengan pengalaman lebih dari 5 tahun, saya telah mengerjakan berbagai proyek -
                  dari startup hingga enterprise applications. Fokus saya adalah menciptakan
                  solutions yang tidak hanya functional, tapi juga beautiful dan performant.
                </p>
                <p>
                  Ketika tidak coding, saya suka explore teknologi baru, design trends, dan
                  berbagi knowledge melalui artikel dan tutorial.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* What I do cards */}
              {[
                {
                  icon: Code2,
                  title: 'Development',
                  desc: 'Building modern web applications with cutting-edge technologies',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: Palette,
                  title: 'Design',
                  desc: 'Creating beautiful, intuitive interfaces that users love',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: Rocket,
                  title: 'Innovation',
                  desc: 'Exploring new technologies and pushing boundaries',
                  color: 'from-orange-500 to-red-500',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Skills section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-cyan-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all hover:border-cyan-500/50`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12"
            >
              <a
                href="mailto:fahmi@example.com"
                className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
