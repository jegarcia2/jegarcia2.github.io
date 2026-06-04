import Image from 'next/image';

const langRow1 = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'];
const langRow2 = ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Git'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden"
    >
      {/* Circular portrait with rotating text ring */}
      <div className="relative w-60 h-60 mb-10 flex items-center justify-center">
        {/* Spinning text ring */}
        <svg
          className="animate-spin-slow absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            <path
              id="orbitPath"
              d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
            />
          </defs>
          <text
            fill="white"
            fontSize="10.5"
            fontWeight="800"
            letterSpacing="0.28em"
            fontFamily="var(--font-geist-sans), Arial, sans-serif"
          >
            <textPath href="#orbitPath">
              ABOUT ME ·&nbsp; ABOUT ME ·&nbsp; ABOUT ME ·&nbsp; ABOUT ME ·&nbsp;
            </textPath>
          </text>
        </svg>

        {/* Portrait circle — TODO: swap div for next/image once /public/images/profile.jpg exists */}
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white bg-white/10 flex items-center justify-center">
          <Image
            src="/profile.jpeg"
            alt="José Emilio García Villegas"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Name */}
      <p className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-white/80 mb-1">
        José Emilio García Villegas
      </p>

      {/* Divider line */}
      <div className="w-64 h-px bg-white/30 my-3" />

      {/* Title */}
      <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-6">
        Software Developer
      </h1>

      {/* Experience badge */}
      <div className="inline-flex items-center border border-[#2ecc8a] rounded-full px-6 py-2 mb-10">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#2ecc8a]">
          3 Years Experience
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10 z-20 relative">

        {/* Primary Download Button */}
        <a
          href="/Jose_Garcia_Villegas_CV.pdf"
          download="Jose_Garcia_Villegas_CV.pdf"
          className="group relative px-8 py-3 rounded-full bg-[#2ecc8a] text-[#0B0F19] font-black tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(46,204,138,0.4)] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            DOWNLOAD CV
            {/* A tiny downward arrow icon using standard text */}
            <span className="text-lg leading-none group-hover:translate-y-1 transition-transform duration-300">↓</span>
          </span>
        </a>

        {/* Secondary Contact Button */}
        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-white/20 bg-[#0B0F19]/50 backdrop-blur-md text-white font-bold tracking-widest text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
        >
          CONTACT ME
        </a>

      </div>

      {/* Language tags rows */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 max-w-lg text-sm text-white/50 mb-2">
        {langRow1.map((lang) => (
          <span key={lang} className="flex items-center gap-2">
            {lang}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 max-w-2xl text-sm text-white/50">
        {langRow2.map((lang) => (
          <span key={lang} className="flex items-center gap-2">
            · {lang}
          </span>
        ))}
      </div>
    </section>
  );
}
