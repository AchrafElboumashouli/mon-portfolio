import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="section-py border-t border-border dark:border-dark-border">
      <div className="site-container">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <p className="s-eyebrow">Get in Touch</p>
            <h2 className="s-title mb-6">Let's work together</h2>
            <p className="text-[15px] leading-[1.8] text-ink2 dark:text-dark-ink2 mb-10 max-w-[480px]">
              I'm currently looking for internship and junior opportunities in Data Engineering,
              Machine Learning, Data Analytics, or Cloud Computing. If you have a project or
              position that fits, I'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="border border-border dark:border-dark-border rounded-xl overflow-hidden mb-8">
              {[
                { Icon: Mail,    label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
                { Icon: Phone,   label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone.replace(/\s/g,'')}` },
                { Icon: MapPin,  label: 'Location', value: personal.location, href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 px-6 py-4 border-b border-border dark:border-dark-border last:border-b-0">
                  <div className="w-9 h-9 rounded-lg bg-accent-lo dark:bg-[rgba(79,70,229,0.15)] flex items-center justify-center text-accent dark:text-dark-accent shrink-0">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-[10.5px] font-medium tracking-widest uppercase text-ink3 dark:text-dark-ink3 mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-[13.5px] text-ink dark:text-dark-ink hover:text-accent dark:hover:text-dark-accent transition-colors">{value}</a>
                      : <p className="text-[13.5px] text-ink dark:text-dark-ink">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Github size={14} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right — email CTA */}
          <div className="border border-border dark:border-dark-border bg-surface dark:bg-dark-surface rounded-xl p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent-lo dark:bg-[rgba(79,70,229,0.15)] flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-accent dark:text-dark-accent" />
            </div>
            <h3 className="font-display text-[20px] font-bold text-ink dark:text-dark-ink mb-2">Send me an email</h3>
            <p className="text-[14px] text-ink2 dark:text-dark-ink2 mb-8 max-w-[280px] mx-auto leading-relaxed">
              The fastest way to reach me. I reply within 48 hours.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary w-full justify-center text-[13px]"
            >
              <Mail size={15} />
              {personal.email}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
