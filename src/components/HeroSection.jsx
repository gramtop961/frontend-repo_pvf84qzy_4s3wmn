import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight">
              Solo Leveling
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
                Rise of the Shadow Monarch
              </span>
            </h1>
            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              Step into a world where dungeons appear, hunters awaken, and one underdog climbs from the
              weakest E-rank to a force that shakes the world. Explore the characters, the enigmatic
              Shadow Monarch, and the shadow army that follows his command.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549887534-1541e9323fde?q=80&w=1974&auto=format&fit=crop"
              alt="Moody fantasy silhouette with dramatic lighting"
              className="w-full h-[420px] object-cover rounded-xl ring-1 ring-white/10 shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
