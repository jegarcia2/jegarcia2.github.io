import { certifications, education, experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto bg-[#0B0F19]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-4">
          Experience <span className="text-[#2ecc8a]">&amp;</span> Education
        </h2>
        <p className="text-center text-white/40 max-w-xl mx-auto mb-16 text-sm leading-relaxed">
          Two years building production React, Next.js, and Node.js applications
          for U.S. and international teams — alongside an engineering and software
          development background.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Work experience timeline */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#2ecc8a] mb-8">
              WORK EXPERIENCE
            </h3>

            <ol className="relative border-l border-white/10 ml-2">
              {experience.map((job) => (
                <li key={job.id} className="mb-10 ml-6 last:mb-0">
                  {/* Timeline dot */}
                  <span className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-[#2ecc8a] ring-4 ring-[#0B0F19]" />

                  <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                    {job.period}
                  </p>
                  <h4 className="mt-1 text-base font-bold text-white">
                    {job.role}{' '}
                    <span className="text-[#2ecc8a]">· {job.company}</span>
                  </h4>
                  {job.context && (
                    <p className="text-xs italic text-white/40 mt-0.5">
                      {job.context}
                    </p>
                  )}

                  <ul className="mt-3 flex flex-col gap-2">
                    {job.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-white/60 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/20"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          {/* Education + certifications */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-[#2ecc8a] mb-8">
                EDUCATION
              </h3>
              <div className="flex flex-col gap-5">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-white/20 transition-colors"
                  >
                    <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      {edu.period}
                    </p>
                    <h4 className="mt-1 text-sm font-bold text-white leading-snug">
                      {edu.title}
                    </h4>
                    <p className="text-xs text-white/50 mt-1">{edu.institution}</p>
                    {edu.note && (
                      <span className="inline-block mt-3 text-[10px] font-bold tracking-wider uppercase text-[#2ecc8a] border border-[#2ecc8a]/40 rounded-full px-2.5 py-1">
                        {edu.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-[#2ecc8a] mb-8">
                CERTIFICATIONS
              </h3>
              <ul className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.id}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{cert.name}</p>
                      <p className="text-xs text-white/40">{cert.issuer}</p>
                    </div>
                    {cert.hours && (
                      <span className="text-[10px] font-mono font-bold text-white/60 bg-white/10 rounded-md px-2 py-1">
                        {cert.hours}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
