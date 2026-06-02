import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SOCIAL_LINKS, BRAND_ICONS } from "../data/portfolio";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-brand-primary text-xs font-semibold font-mono tracking-wide mb-8 uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
          </span>
          Coding since class 8th
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none"
        >
          Hi, I'm <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary bg-clip-text text-transparent">
            Paras Prajapat
          </span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-2xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
        >
          16-year-old Software Engineer, Freelancer & Future Entrepreneur. Creating clean code structures and high-performance applications.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
            Read Bio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-xl bg-surface border border-white/5 text-zinc-400 hover:text-white hover:border-brand-primary/50 transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d={BRAND_ICONS.github} />
              </svg>
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-xl bg-surface border border-white/5 text-zinc-400 hover:text-white hover:border-brand-primary/50 transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d={BRAND_ICONS.linkedin} />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};