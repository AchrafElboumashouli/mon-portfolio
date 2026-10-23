import { Github, Linkedin, Mail, ChevronDown, Monitor } from 'lucide-react';
import { personal } from '../data';

export default function Hero() {
  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col pt-16"
      aria-label="Introduction"
    >
      {/* Two-column hero body */}
      <div className="site-container flex-1 flex flex-col lg:flex-row">

        {/* ── LEFT ── */}
        <div className="flex-1 flex flex-col justify-center py-20 lg:py-28 lg:pr-20 lg:border-r border-border dark:border-dark-border">

          {/* Availability */}
          <div className="flex items-center gap-2 mb-10 text-[11.5px] font-medium tracking-widest uppercase text-ink2 dark:text-dark-ink2">
            <span className="w-[7px] h-[7px] rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
            Available for internships
          </div>

          {/* Name */}
          <h1 className="font-display font-extrabold leading-[1.02] tracking-[-2.5px] text-ink dark:text-dark-ink mb-2"
              style={{ fontSize: 'clamp(44px,5.5vw,72px)' }}>
            Achraf
            <span className="block text-accent dark:text-dark-accent">El Boumashouli</span>
          </h1>

          {/* Role */}
          <p className="font-display text-[17px] font-light tracking-[-0.2px] text-ink2 dark:text-dark-ink2 mb-7">
            AI &amp; Data Science Engineer
          </p>

          {/* Tagline */}
          <p className="text-[15px] leading-[1.75] text-ink2 dark:text-dark-ink2 max-w-[500px] mb-11
                        border-l-2 border-border dark:border-dark-border pl-[18px]">
            Building end-to-end data pipelines, predictive models, and full-stack
            AI applications — from raw data ingestion to production deployment.
            Currently pursuing M2 in AI &amp; Data Science at FSTT.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-14">
            <button onClick={() => goto('projects')} className="btn-primary">
              <Monitor size={15} />
              View Projects
            </button>
            <a href={`mailto:${personal.email}`} className="btn-outline">
              <Mail size={15} />
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2 pt-8 border-t border-border dark:border-dark-border">
            <span className="text-[11px] font-medium tracking-widest uppercase text-ink3 dark:text-dark-ink3 mr-2">
              Find me
            </span>
            <a
              href={personal.github}
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center border border-border dark:border-dark-border rounded-lg
                         text-ink2 dark:text-dark-ink2 hover:border-ink dark:hover:border-dark-ink
                         hover:text-ink dark:hover:text-dark-ink transition-all"
            >
              <Github size={15} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center border border-border dark:border-dark-border rounded-lg
                         text-ink2 dark:text-dark-ink2 hover:border-ink dark:hover:border-dark-ink
                         hover:text-ink dark:hover:text-dark-ink transition-all"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center border border-border dark:border-dark-border rounded-lg
                         text-ink2 dark:text-dark-ink2 hover:border-ink dark:hover:border-dark-ink
                         hover:text-ink dark:hover:text-dark-ink transition-all"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-8 pl-16 py-28 w-[420px] shrink-0">

          {/* Photo frame */}
          <div className="relative">
            {/* Outer decorative ring */}
            <div className="absolute inset-[-14px] rounded-full border border-accent-lo dark:border-[rgba(79,70,229,0.2)]" />
            {/* Inner ring */}
            <div className="absolute inset-[-8px] rounded-full border border-border dark:border-dark-border" />
            {/* Circle */}
            <div className="w-[280px] h-[280px] rounded-full overflow-hidden bg-accent-lo dark:bg-[rgba(79,70,229,0.15)]
                            border-2 border-surface dark:border-dark-surface
                            shadow-[0_24px_64px_rgba(79,70,229,0.14),0_4px_16px_rgba(15,23,42,0.06)]
                            dark:shadow-[0_24px_64px_rgba(79,70,229,0.25),0_4px_16px_rgba(0,0,0,0.3)]
                            flex items-center justify-center">
              
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Achraf El Boumashouli"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />

              {/* Placeholder shown if image missing */}
              <div className="hidden flex-col items-center gap-2 text-center p-4">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-[10px] font-medium tracking-widest uppercase text-ink3 dark:text-dark-ink3 leading-snug">
                  Add photo at<br/>public/images/profile.jpg
                </span>
              </div>
            </div>
          </div>

          {/* Meta card */}
          <div className="w-full border border-border dark:border-dark-border bg-surface dark:bg-dark-surface rounded-xl overflow-hidden">
            {[
              { k: 'Degree',     v: 'M2 — AI & Data Science' },
              { k: 'University', v: 'FSTT, Morocco'           },
              { k: 'Focus',      v: 'ML · Data Eng. · Cloud'  },
              { k: 'Status',     v: 'Open to opportunities', hi: true },
            ].map(({ k, v, hi }) => (
              <div key={k} className="flex justify-between items-center px-5 py-3.5 border-b border-border dark:border-dark-border last:border-b-0">
                <span className="text-[10.5px] font-medium tracking-widest uppercase text-ink3 dark:text-dark-ink3">{k}</span>
                <span className={`text-[12.5px] font-medium text-right ${hi ? 'text-accent dark:text-dark-accent' : 'text-ink2 dark:text-dark-ink2'}`}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="site-container pb-6 pt-2 flex items-center gap-4 border-t border-border dark:border-dark-border">
        <div className="h-px flex-1 bg-border dark:bg-dark-border" />
        <button
          onClick={() => goto('about')}
          aria-label="Scroll down"
          className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-ink3 dark:text-dark-ink3 hover:text-ink2 dark:hover:text-dark-ink2 transition-colors"
        >
          scroll to explore
          <ChevronDown size={14} />
        </button>
      </div>
    </section>
  );
}
