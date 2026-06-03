import { motion } from "framer-motion";
import { Code2, Globe } from "lucide-react";
import { SERVICES } from "../data/portfolio";

export const Services = () => {
  return (
    <section className="section-container border-t border-white/5" id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Competencies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SERVICES.map((srv, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group transition-all duration-300 hover:border-brand-primary/30"
          >
            <div>
              <div className="p-4 rounded-2xl bg-white/5 w-fit border border-white/5 text-brand-primary mb-6 group-hover:scale-105 transition-transform">
                {srv.iconName === 'web-app' ? <Code2 size={28} /> : <Globe size={28} />}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{srv.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{srv.description}</p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-widest text-brand-secondary uppercase">
                {srv.pricing}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};