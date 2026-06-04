'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import type { Project } from '@/types';

function ProjectGallery({ media, mounted }: { media: Project['media']; mounted: boolean }) {
  const hasMedia = media && media.length > 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {hasMedia
        ? media.map((item) => (
            <div
              key={item.src}
              className="group/media relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10"
            >
              {/* Only render once the panel has been opened, so heavy GIFs
                  aren't fetched for collapsed projects. */}
              {mounted && (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized={item.type === 'gif'}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover/media:scale-105"
                />
              )}
            </div>
          ))
        : Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-xl bg-white/[0.03] border border-dashed border-white/10 flex items-center justify-center"
            >
              <span className="text-[11px] uppercase tracking-widest text-white/20">
                Preview soon
              </span>
            </div>
          ))}
    </div>
  );
}

export default function Projects() {
  const firstId = projects[0]?.id ?? null;
  const [openId, setOpenId] = useState<string | null>(firstId);
  // Track panels that have been opened so their media mounts lazily and stays
  // mounted afterwards (needed for the smooth collapse animation to play).
  const [opened, setOpened] = useState<Set<string>>(
    () => new Set(firstId ? [firstId] : []),
  );

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
    setOpened((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
  }

  return (
    <section id="projects" className="py-28 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
          <span className="text-[#2ecc8a]">My </span>
          <span className="text-white">Projects</span>
        </h2>

        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
          {projects.map((project) => {
            const isOpen = openId === project.id;
            return (
              <div key={project.id}>
                {/* Row header */}
                <button
                  type="button"
                  onClick={() => toggle(project.id)}
                  aria-expanded={isOpen ? 'true' : 'false'}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                >
                  <div>
                    <h3 className="font-mono font-bold text-lg sm:text-xl text-white group-hover:text-[#2ecc8a] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40 mt-1">
                      <span className="font-semibold text-white/60">Languages: </span>
                      {project.tags.join(', ')}
                    </p>
                  </div>
                  <span
                    className={`mt-1 flex-shrink-0 w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {/* Smoothly-animated panel: grid-rows 0fr -> 1fr animates height
                    without a fixed pixel value. */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-6 pb-8 border-t border-[#2ecc8a]/30 flex flex-col gap-6">
                      {/* Description + links */}
                      <div className="flex flex-col gap-4">
                        <div className="w-8 h-0.5 bg-[#2ecc8a]" />
                        <p className="text-white/60 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-6">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:text-[#2ecc8a] transition-colors"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 flex-shrink-0"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                              GitHub repo
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#2ecc8a] hover:text-white transition-colors"
                            >
                              Live demo →
                            </a>
                          )}
                        </div>
                      </div>

                      {/* 3-piece media gallery */}
                      <ProjectGallery
                        media={project.media}
                        mounted={opened.has(project.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
