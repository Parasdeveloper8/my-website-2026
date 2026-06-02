import { motion } from "framer-motion";

export const About = () => {
  const stats = [
    { value: "4+ Yrs", label: "Years of Coding" },
    { value: "20+", label: "Projects Built" },
    { value: "5+", label: "Client Deliveries" }
  ];

  return (
    <section className="section-container border-t border-white/5" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Element Container */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative group"
        >
          <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-brand-primary/20 to-purple-500/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-zinc-900/60 mix-blend-multiply" />
            <span className="font-mono text-7xl select-none text-zinc-800 tracking-widest font-black">PP</span>
            {/* Minimalist framing detail to replace generic graphics */}
            <div className="absolute bottom-6 left-6 font-mono text-xs text-zinc-500">Alwar, RJ, IN</div>
          </div>
        </motion.div>

        {/* Narrative & Stats Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The Vision Behind The Code
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            I discovered my passion for computer logic in class 8th. What began as experimentation quickly accelerated into building complete infrastructure platforms and client-ready web systems.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-10">
            Currently deep in my 11th-grade academic commitments, I simultaneously operates as a freelance software engineer. My endgame points directly at building impactful technology products and founding resilient modern platforms.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};