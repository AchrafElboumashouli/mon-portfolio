import { personal, languages } from '../data';

export default function About() {
  return (
    <section id="about" className="section-py border-t border-border dark:border-dark-border">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Text */}
          <div>
            <p className="s-eyebrow">About</p>
            <h2 className="s-title mb-8">
              From raw data<br/>to deployed models
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.8] text-ink2 dark:text-dark-ink2">
              <p>
                I'm a Master's student in AI &amp; Data Science at FST Tanger, with a foundation
                in mathematics, computer science, and physics. My work sits at the intersection
                of data engineering, machine learning, and web development — building systems
                that take data from ingestion all the way to a usable interface.
              </p>
              <p>
                During internships at Yazaki Morocco and the PRIMA CIRQUA research project,
                I built production-grade systems: a mathematical validation engine comparing
                ML predictions to SAP MRP references, and a full-stack water quality monitoring
                application with anomaly detection and real-time alerts.
              </p>
              <p>
                Outside of those, I've worked on a Data Lake on AWS, an AI platform for
                automated ML experiments, and a deepfake detection system — all with an
                emphasis on clean code and real-world utility.
              </p>
            </div>
          </div>

          {/* Languages + contact sidebar */}
          <div className="space-y-10">
            {/* Languages */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink3 dark:text-dark-ink3 mb-5">Languages</p>
              <div className="space-y-4">
                {languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-[14px] font-medium text-ink dark:text-dark-ink">{lang.name}</span>
                      <span className="text-[12px] text-ink3 dark:text-dark-ink3">{lang.level}</span>
                    </div>
                    <div className="h-[3px] bg-border dark:bg-dark-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent dark:bg-dark-accent rounded-full"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact strip */}
            <div className="border border-border dark:border-dark-border rounded-xl overflow-hidden">
              {[
                { label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
                { label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone.replace(/\s/g,'')}` },
                { label: 'Location', value: personal.location, href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex justify-between items-center px-5 py-4 border-b border-border dark:border-dark-border last:border-b-0">
                  <span className="text-[10.5px] font-medium tracking-widest uppercase text-ink3 dark:text-dark-ink3">{label}</span>
                  {href
                    ? <a href={href} className="text-[13px] text-ink2 dark:text-dark-ink2 hover:text-accent dark:hover:text-dark-accent transition-colors text-right">{value}</a>
                    : <span className="text-[13px] text-ink2 dark:text-dark-ink2 text-right">{value}</span>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
