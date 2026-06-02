import { SOCIAL_LINKS, BRAND_ICONS } from "../../data/portfolio";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-zinc-500 font-mono">
          &copy; {new Date().getFullYear()} Paras Prajapat. Built with absolute focus.
        </span>
        <div className="flex items-center gap-6 text-zinc-500">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d={BRAND_ICONS.github} />
            </svg>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d={BRAND_ICONS.linkedin} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};