import { Brain, BarChart2, Cloud, Code2, Globe, Wrench } from 'lucide-react';
import { skills } from '../data';

const iconMap = { Brain, BarChart2, Cloud, Code2, Globe, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section-py border-t border-border dark:border-dark-border">
      <div className="site-container">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 pb-8 border-b border-border dark:border-dark-border">
          <div>
            <p className="s-eyebrow">What I Work With</p>
            <h2 className="s-title">Technical Skills</h2>
          </div>
          <span
            aria-hidden="true"
            className="font-display text-[72px] font-extrabold tracking-[-3px] text-border dark:text-dark-border leading-none select-none"
          >
            {String(skills.length).padStart(2, '0')}
          </span>
        </div>

        {/* Grid — 1px separator lines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-border dark:divide-dark-border border border-border dark:border-dark-border">
          {skills.map(({ category, icon, items }) => {
            const Icon = iconMap[icon];
            return (
              <div key={category} className="p-8 bg-ground dark:bg-dark-ground">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[34px] h-[34px] rounded-[8px] bg-accent-lo dark:bg-[rgba(79,70,229,0.15)] flex items-center justify-center text-accent dark:text-dark-accent shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="font-display text-[14px] font-bold text-ink dark:text-dark-ink">{category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
