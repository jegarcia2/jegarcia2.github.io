'use client';

import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaRegCopy, FaCheck } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const EMAIL = 'joemgarc@espol.edu.ec';
const PHONE = '+593 99 650 7164';
const PHONE_HREF = '+593996507164';
const LINKEDIN = 'https://linkedin.com/in/josegarciavillegas';
const GITHUB = 'https://github.com/jegarcia2';
const LOCATION = 'Quito, Ecuador';

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Hello José — reaching out from your portfolio',
)}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (insecure context / older browser) — no-op,
      // the email stays visible on screen for manual copy.
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto bg-[#0B0F19]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Let&apos;s <span className="text-[#2ecc8a]">Talk</span>
        </h2>
        <p className="text-white/40 max-w-md mx-auto mb-10 text-sm leading-relaxed">
          Open to software development roles. The fastest way
          to reach me is email — drop a message and I&apos;ll get back to you.
        </p>

        {/* Primary email actions */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-md mx-auto mb-4">
          <a
            href={MAILTO}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2ecc8a] text-[#0B0F19] font-bold rounded-xl hover:bg-[#27b87b] transition-colors"
          >
            <FaEnvelope className="text-base" />
            Email Me
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address to clipboard"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
          >
            {copied ? (
              <>
                <FaCheck className="text-[#2ecc8a]" /> Copied!
              </>
            ) : (
              <>
                <FaRegCopy className="text-white/60" /> Copy Email Address
              </>
            )}
          </button>
        </div>

        {/* Visible address — the fallback if mailto: does nothing */}
        <p className="text-sm text-white/50 mb-12 select-all">{EMAIL}</p>

        {/* Other channels */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-[#2ecc8a]/40 hover:bg-white/[0.07] transition-colors"
          >
            <FaLinkedinIn className="text-xl text-white/60 group-hover:text-[#2ecc8a] transition-colors" />
            <span className="text-xs font-semibold tracking-wide text-white/70">
              LinkedIn
            </span>
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-[#2ecc8a]/40 hover:bg-white/[0.07] transition-colors"
          >
            <FaGithub className="text-xl text-white/60 group-hover:text-[#2ecc8a] transition-colors" />
            <span className="text-xs font-semibold tracking-wide text-white/70">
              GitHub
            </span>
          </a>

          <a
            href={`tel:${PHONE_HREF}`}
            className="group flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-[#2ecc8a]/40 hover:bg-white/[0.07] transition-colors"
          >
            <FaPhone className="text-xl text-white/60 group-hover:text-[#2ecc8a] transition-colors" />
            <span className="text-xs font-semibold tracking-wide text-white/70">
              {PHONE}
            </span>
          </a>

          <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 border border-white/10 p-5">
            <HiOutlineLocationMarker className="text-xl text-white/60" />
            <span className="text-xs font-semibold tracking-wide text-white/70">
              {LOCATION}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
