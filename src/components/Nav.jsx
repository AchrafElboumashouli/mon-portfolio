import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { personal } from '../data';

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
];
const sectionIds = links.map(l => l.href.slice(1));

export default function Nav({ dark, setDark }) {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId              = useScrollSpy(sectionIds);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const goto = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-ground/92 dark:bg-dark-ground/92 backdrop-blur-md border-b border-border dark:border-dark-border'
        : 'bg-transparent'
    }`}>
      <nav className="site-container h-16 flex items-center justify-between">

        {/* Wordmark */}
        <button
          onClick={() => goto('#hero')}
          aria-label="Go to top"
          className="font-display font-bold text-[15px] tracking-[-0.3px] text-ink dark:text-dark-ink hover:text-accent dark:hover:text-dark-accent transition-colors"
        >
          Portfolio<span className="text-accent dark:text-dark-accent">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => goto(l.href)}
              className={`px-3 py-1.5 text-[13.5px] transition-colors rounded-md ${
                activeId === l.href.slice(1)
                  ? 'text-ink dark:text-dark-ink font-medium'
                  : 'text-ink2 dark:text-dark-ink2 hover:text-ink dark:hover:text-dark-ink'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${personal.email}`}
            className="hidden md:inline-flex btn-primary h-9 px-4 text-[12.5px]"
          >
            Contact
          </a>
          <button
            onClick={() => setDark(d => !d)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 flex items-center justify-center border border-border dark:border-dark-border rounded-lg text-ink2 dark:text-dark-ink2 hover:border-ink2 dark:hover:border-dark-ink2 hover:text-ink dark:hover:text-dark-ink transition-all"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center border border-border dark:border-dark-border rounded-lg text-ink2 dark:text-dark-ink2 transition-all"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-ground/98 dark:bg-dark-ground/98 backdrop-blur-lg border-b border-border dark:border-dark-border px-6 pt-2 pb-6">
          <div className="flex flex-col gap-1">
            {links.map(l => (
              <button
                key={l.href}
                onClick={() => goto(l.href)}
                className={`text-left px-3 py-3 rounded-lg text-sm transition-colors ${
                  activeId === l.href.slice(1)
                    ? 'text-ink dark:text-dark-ink font-medium bg-border/40 dark:bg-dark-border/40'
                    : 'text-ink2 dark:text-dark-ink2 hover:text-ink dark:hover:text-dark-ink'
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary mt-2 justify-center h-11"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
