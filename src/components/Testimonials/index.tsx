import Image from 'next/image';
import { testimonials } from '@/data/portfolio';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-gray-400 text-center mb-16">What people say about working with me</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4"
            >
              <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
