import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="section-py border-t border-border dark:border-dark-border">
      <div className="site-container">

        <div className="flex items-end justify-between mb-14 pb-8 border-b border-border dark:border-dark-border">
          <div>
            <p className="s-eyebrow">Work History</p>
            <h2 className="s-title">Experience</h2>
          </div>
          <span
            aria-hidden="true"
            className="font-display text-[72px] font-extrabold tracking-[-3px] text-border dark:text-dark-border leading-none select-none"
          >
            {String(experiences.length).padStart(2, '0')}
          </span>
        </div>

        <div className="space-y-px">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="border border-border dark:border-dark-border bg-surface dark:bg-dark-surface
                         grid lg:grid-cols-[1fr_2fr] gap-0 card-hover"
            >
              {/* Left — meta */}
              <div className="p-8 lg:p-10 lg:border-r border-b lg:border-b-0 border-border dark:border-dark-border
                              flex flex-col gap-2">
                <span className="inline-flex items-center self-start px-2.5 py-0.5 text-[11px] font-semibold tracking-wide
                                 uppercase text-accent dark:text-dark-accent border border-accent/20 dark:border-dark-accent/20
                                 rounded bg-accent-lo dark:bg-[rgba(79,70,229,0.1)]">
                  {exp.type}
                </span>
                <p className="font-display text-[20px] font-bold tracking-[-0.3px] text-ink dark:text-dark-ink leading-snug mt-1">
                  {exp.role}
                </p>
                <p className="text-[14px] font-medium text-accent dark:text-dark-accent">{exp.project}</p>
                <p className="text-[13px] text-ink2 dark:text-dark-ink2">{exp.company}</p>
                <p className="text-[12px] text-ink3 dark:text-dark-ink3 mt-auto pt-3 font-medium">{exp.period}</p>
              </div>
              {/* Right — details */}
              <div className="p-8 lg:p-10 flex flex-col gap-5">
                <p className="text-[14px] leading-[1.8] text-ink2 dark:text-dark-ink2">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
