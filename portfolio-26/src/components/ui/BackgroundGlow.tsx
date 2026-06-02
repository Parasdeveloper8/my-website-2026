export const BackgroundGlow = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] rounded-full bg-brand-primary/5 blur-[130px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] rounded-full bg-brand-secondary/5 blur-[120px]" />
  </div>
);