import { GraduationCap } from 'lucide-react';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education" className="section-py border-t border-border dark:border-dark-border">
      <div className="site-container">

        <div className="flex items-end justify-between mb-14 pb-8 border-b border-border dark:border-dark-border">
          <div>
            <p className="s-eyebrow">Academic Background</p>
            <h2 className="s-title">Education</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 divide-x divide-y divide-border dark:divide-dark-border border border-border dark:border-dark-border">
          {education.map((edu, i) => (
            <article
              key={i}
              className={`p-8 lg:p-10 bg-surface dark:bg-dark-surface flex flex-col gap-3 card-hover relative ${
                edu.current ? 'border-l-[3px] border-l-accent dark:border-l-dark-accent' : ''
              }`}
            >
              {edu.current && (
                <span className="absolute top-5 right-5 flex items-center gap-1.5 text-[11px] text-emerald-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                  Current
                </span>
              )}
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                edu.current
                  ? 'bg-accent-lo dark:bg-[rgba(79,70,229,0.15)] text-accent dark:text-dark-accent'
                  : 'bg-border/60 dark:bg-dark-border/60 text-ink3 dark:text-dark-ink3'
              }`}>
                <GraduationCap size={16} />
              </div>
              <h3 className="text-[14px] font-semibold text-ink dark:text-dark-ink leading-snug">{edu.degree}</h3>
              <p className="text-[13.5px] font-medium text-accent dark:text-dark-accent">{edu.school}</p>
              <div className="flex items-center gap-3 text-[12px] text-ink3 dark:text-dark-ink3 mt-auto pt-2">
                <span>{edu.location}</span>
                <span className="w-1 h-1 rounded-full bg-border dark:bg-dark-border" />
                <span>{edu.period}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
