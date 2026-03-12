export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 dark:border-white/10 border-ink-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-700 dark:text-white/60">
          © 2026 Arshith Raj. Full Stack Developer.
        </p>
        <div className="flex gap-4 text-sm">
          <a className="hover:text-accent" href="#home">Home</a>
          <a className="hover:text-accent" href="#projects">Work</a>
          <a className="hover:text-accent" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

