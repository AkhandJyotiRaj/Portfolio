import { useEffect, useRef, useState } from 'react';

const skills = [
  { title: 'JavaScript', desc: 'Modern ES6+ development with async patterns, DOM interactions, and clean architecture.' },
  { title: 'React', desc: 'Component-driven UI with hooks, state management, context, and responsive layouts.' },
  { title: 'TypeScript', desc: 'Strong typing, safer refactors, and scalable code for modern frontend applications.' },
  { title: 'Tailwind CSS', desc: 'Utility-first styling, responsive grids, and polished animations with fast iteration.' },
  { title: 'Node.js', desc: 'Backend APIs, tooling automation, and full-stack JavaScript workflows.' },
  { title: 'Git & GitHub', desc: 'Version control, pull requests, workflow collaboration, and release-ready branches.' },
  { title: 'Performance', desc: 'Optimized loading, smooth interactions, and lightweight page delivery.' },
  { title: 'UI/UX Design', desc: 'Accessible interfaces, deliberate spacing, and modern visual systems.' },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative w-full bg-white text-black py-24 px-4 md:px-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className={`mb-12 text-center ${visible ? 'animate-skill-heading opacity-100' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          <p className="text-sm uppercase tracking-[0.4em] text-[#facc15] mb-4">Developer Skills</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Skills that power modern web portfolios</h2>
          <p className="max-w-2xl mx-auto mt-4 text-zinc-600 text-sm md:text-base leading-relaxed">
            A curated skillset focused on frontend architecture, polished interfaces, and fast user experiences.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, idx) => (
            <article
              key={skill.title}
              className={`group transform-gpu will-change-transform rounded-[32px] bg-zinc-950 text-white border border-white/10 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_32px_120px_rgba(15,23,42,0.18)] ${visible ? 'animate-skill-card opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${160 + idx * 80}ms` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#facc15]/15 text-[#facc15] text-lg font-black">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{skill.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
