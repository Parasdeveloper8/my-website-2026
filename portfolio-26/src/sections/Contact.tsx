import { motion } from "framer-motion";
import { SOCIAL_LINKS, BRAND_ICONS } from "../data/portfolio";

export const Contact = () => {
  return (
    <section className="section-container border-t border-white/5" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Open For Work Status Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-brand-primary/20 bg-gradient-to-r from-brand-primary/5 to-purple-500/5 shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)] mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">Currently Open for Engineering Roles</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Available for freelance technical pipelines, ecosystem collaborations, and innovative product development modules.
          </p>
        </motion.div>

        {/* Minimal Channel Hub */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold mb-2 text-white">Let's Build Together</h3>
          <p className="text-zinc-400 text-sm mb-8 max-w-md">
            Skip the forms. Reach out directly through my primary developer nodes to discuss systems architecture or project timelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            {/* LinkedIn Connect Node */}
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 p-4 rounded-xl bg-surface border border-white/5 text-zinc-300 hover:text-white hover:border-brand-primary/50 transition-all flex items-center justify-center gap-3 font-semibold text-sm group"
            >
              <svg className="w-5 h-5 fill-current text-zinc-400 group-hover:text-brand-primary transition-colors" viewBox="0 0 24 24">
                <path d={BRAND_ICONS.linkedin} />
              </svg>
              Paras Prajapat
            </a>

            {/* GitHub Connect Node */}
            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 p-4 rounded-xl bg-surface border border-white/5 text-zinc-300 hover:text-white hover:border-brand-primary/50 transition-all flex items-center justify-center gap-3 font-semibold text-sm group"
            >
              <svg className="w-5 h-5 fill-current text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d={BRAND_ICONS.github} />
              </svg>
              paras-prajapat
            </a>
          </div>
          
          <div className="font-mono text-[10px] text-zinc-600 tracking-wider uppercase mt-12">
            HQ: Alwar, Rajasthan, India
          </div>
        </motion.div>
      </div>
    </section>
  );
};