import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS, SOCIAL_LINKS, BRAND_ICONS } from "../data/portfolio";

export const ProjectGrid = () => {
  return (
    <section className="section-container border-t border-white/5" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Engineering</h2>
          <p className="text-zinc-400 text-sm max-w-md">A meticulous breakdown of production models and experimental core apps built with absolute focus.</p>
        </div>
        <a 
          href={SOCIAL_LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-white font-semibold text-sm hover:bg-zinc-900 hover:border-white/20 transition-all shrink-0 gap-2"
        >
          More on GitHub 
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d={BRAND_ICONS.github} />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video w-full bg-zinc-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-4">
                  <span className="font-mono text-xs text-zinc-600 select-none tracking-tight font-medium">[{proj.title}] Image Asset Layer</span>
                </div>
                <img 
                  loading="lazy" 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover relative z-10 opacity-0 group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-primary transition-colors">{proj.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6 line-clamp-3">{proj.description}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d={BRAND_ICONS.github} />
                  </svg> 
                  Code
                </a>
                <a href={proj.live} className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};