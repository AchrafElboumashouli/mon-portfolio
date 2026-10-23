import { Github, ArrowUpRight } from 'lucide-react';
import { projects, personal } from '../data';

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-py border-t border-border dark:border-dark-border">
      <div className="site-container">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 pb-8 border-b border-border dark:border-dark-border">
          <div>
            <p className="s-eyebrow">Selected Work</p>
            <h2 className="s-title">Projects</h2>
          </div>
          <a
            href={personal.github}
            target="_blank" rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={14} />
            All on GitHub
          </a>
        </div>

        {/* Featured project */}
        <article className="border border-border dark:border-dark-border bg-surface dark:bg-dark-surface
                            grid lg:grid-cols-2 gap-0 mb-px card-hover group">
          <div className="p-10 lg:p-12 flex flex-col">
            <span
              aria-hidden="true"
              className="font-display text-[96px] font-extrabold tracking-[-5px] text-border dark:text-dark-border leading-none select-none mb-[-16px]"
            >
              01
            </span>
            <p className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-ink3 dark:text-dark-ink3 mb-2 mt-4">
              {featured.type} · {featured.subtitle}
            </p>
            <h3 className="font-display text-[26px] font-bold tracking-[-0.6px] text-ink dark:text-dark-ink leading-snug mb-1">
              {featured.title}
            </h3>
            <p className="text-[12px] text-ink3 dark:text-dark-ink3 mb-5">{featured.period}</p>
            <p className="text-[14px] leading-[1.75] text-ink2 dark:text-dark-ink2 flex-1 mb-6">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <div className="pt-5 border-t border-border dark:border-dark-border">
              <a
                href={personal.github}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent dark:text-dark-accent hover:gap-3 transition-all"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          {/* Placeholder panel */}
          <div className="hidden lg:flex items-center justify-center border-l border-border dark:border-dark-border bg-surface dark:bg-dark-surface p-8">
            <img
              src="/images/aws-data-lake.jpg"
              alt="AWS Data Lake Architecture"
              className="w-full max-w-[420px] h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </article>

        {/* Remaining projects — 2-col grid */}
        <div className="grid sm:grid-cols-2 divide-x divide-y divide-border dark:divide-dark-border border border-border dark:border-dark-border border-t-0">
          {rest.map((proj, idx) => (
            <article key={proj.title} className="p-8 lg:p-10 bg-surface dark:bg-dark-surface card-hover flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10.5px] font-semibold tracking-[0.08em] uppercase text-ink3 dark:text-dark-ink3 mb-1">
                    {proj.type} · {proj.subtitle}
                  </p>
                  <h3 className="font-display text-[18px] font-bold tracking-[-0.3px] text-ink dark:text-dark-ink leading-snug">
                    {proj.title}
                  </h3>
                </div>
                <span className="text-[12px] text-ink3 dark:text-dark-ink3 shrink-0 mt-1">{proj.period}</span>
              </div>
              <p className="text-[14px] leading-[1.75] text-ink2 dark:text-dark-ink2 flex-1">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="pt-4 border-t border-border dark:border-dark-border">
                <a
                  href={personal.github}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent dark:text-dark-accent hover:gap-3 transition-all"
                >
                  GitHub <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
