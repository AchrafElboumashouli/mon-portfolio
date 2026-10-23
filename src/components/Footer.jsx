import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-dark-border">
      <div className="site-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-ink3 dark:text-dark-ink3">
          © {year} Achraf El Boumashouli
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: personal.github,            Icon: Github,   label: 'GitHub'  },
            { href: personal.linkedin,           Icon: Linkedin, label: 'LinkedIn'},
            { href: `mailto:${personal.email}`,  Icon: Mail,     label: 'Email'   },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center border border-border dark:border-dark-border rounded-lg
                         text-ink3 dark:text-dark-ink3 hover:text-ink dark:hover:text-dark-ink
                         hover:border-ink2 dark:hover:border-dark-ink2 transition-all"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
