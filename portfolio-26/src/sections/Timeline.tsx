import { motion } from "framer-motion";
import { EDUCATION } from "../data/portfolio";

export const Timeline = () => {
  return (
    <section className="section-container border-t border-white/5" id="education">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Academic Progress</h2>
        <p className="text-zinc-400 max-w-md mx-auto text-sm">Tracing educational paths while executing custom application code paths.</p>
      </div>

      <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-[0.5px] before:w-[1px] before:bg-zinc-800/80">
        {EDUCATION.map((edu, idx) => (
          <div key={edu.id} className="relative flex flex-col md:flex-row items-start md:justify-between mb-12 group">
            {/* Visual Timeline Node */}
            <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-brand-primary border border-background -translate-x-[6px] top-6 z-10" />

            {/* Left Box (Desktop Only Spacer/Content) */}
            <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? "md:order-1 text-left" : "md:order-3 md:text-right hidden md:block"}`}>
              {idx % 2 === 0 && <TimelineCard edu={edu} />}
            </div>

            {/* Empty Center Column Anchor */}
            <div className="w-0 md:w-[10%] md:order-2" />

            {/* Right Box (Desktop Only Spacer/Content) */}
            <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? "md:order-3 text-left hidden md:block" : "md:order-1 text-left"}`}>
              {idx % 2 !== 0 && <TimelineCard edu={edu} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TimelineCard = ({ edu }: { edu: typeof EDUCATION[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="glass-card p-6 rounded-2xl ml-10 md:ml-0"
  >
    <span className="font-mono text-xs text-brand-secondary font-bold tracking-wider uppercase block mb-1">
      {edu.duration}
    </span>
    <h3 className="text-lg font-bold text-white mb-0.5">{edu.level}</h3>
    <div className="text-sm text-zinc-400 font-medium mb-3">{edu.institute}</div>
    <p className="text-xs text-zinc-500 leading-relaxed mb-4">{edu.description}</p>
    <span className="inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-400">
      {edu.location}
    </span>
  </motion.div>
);