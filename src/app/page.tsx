import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0F19] text-white overflow-hidden">

      {/* --- THE ANIMATED DEGRADADOS (BACKGROUND GLOWS) --- */}
      {/* pointer-events-none ensures you can't accidentally click them. z-0 keeps them in the back. */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
        {/* Top Left — primary accent glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#2ecc8a] rounded-full blur-[128px] opacity-30 animate-blob will-change-transform" />

        {/* Top Right — offset glow, slightly muted */}
        <div className="absolute top-[10%] right-[-5%] w-[35rem] h-[35rem] bg-[#2ecc8a] rounded-full blur-[128px] opacity-20 animate-blob animation-delay-2000 will-change-transform" />

        {/* Bottom Center — deep anchor glow */}
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-[#1a7a44] rounded-full blur-[128px] opacity-25 animate-blob animation-delay-4000 will-change-transform" />
      </div>
      {/* ------------------------------------------------ */}

      {/* Wrapping your actual content in a z-10 relative container so it sits ON TOP of the glows */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />

        <Experience />
        <Contact />
      </div>
    </main>
  );
}