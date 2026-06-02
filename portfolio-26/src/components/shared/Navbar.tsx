import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile navigation menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  // Motion design definitions for the mobile container list variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 260, damping: 25 } 
    },
    exit: { 
      opacity: 0, 
      y: 15, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? "bg-background/40 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent z-50">
            Paras.dev
          </a>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          {/* Interactive Menu Action Switch */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-50 p-2 -mr-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle structural menu view"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Immersive Mobile Menu View Layer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between px-8 pt-32 pb-12"
          >
            {/* Nav Links List Wrapper */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase font-semibold block mb-2">
                Navigation Directory
              </span>
              {navItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-zinc-300 hover:text-white active:text-brand-primary transition-colors block tracking-tight"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Brand Utility Details */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.2 }}
              className="pt-8 border-t border-white/5 space-y-6"
            >
              <div className="flex justify-between items-center text-xs font-mono text-zinc-600">
                <span>ALWAR, IN</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};