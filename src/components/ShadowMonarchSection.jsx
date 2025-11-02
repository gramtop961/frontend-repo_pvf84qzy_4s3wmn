import React from 'react';

export default function ShadowMonarchSection() {
  return (
    <section className="relative bg-black text-zinc-100 py-16">
      <div className="absolute inset-0" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop"
          alt="Dark ethereal background"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold">The Shadow Monarch</h2>
            <p className="mt-4 text-zinc-300">
              The title “Shadow Monarch” originates from Ashborn, a sovereign who wielded dominion over
              death and shadows. Through a fateful encounter, Sung Jinwoo inherits this mantle, gaining the
              power to extract shadows from fallen enemies and command them as soldiers.
            </p>
            <p className="mt-4 text-zinc-300">
              This power is bound to a mysterious System that tracks quests, stats, and levels, allowing Jinwoo
              to evolve beyond normal hunter limits. As his army grows, so does his influence — but so do the
              threats that challenge humanity.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-zinc-900/60 ring-1 ring-white/10 p-4">
                <p className="text-sm text-zinc-400">Core Ability</p>
                <p className="font-semibold">Shadow Extraction</p>
              </div>
              <div className="rounded-xl bg-zinc-900/60 ring-1 ring-white/10 p-4">
                <p className="text-sm text-zinc-400">Command</p>
                <p className="font-semibold">Absolute Loyalty</p>
              </div>
              <div className="rounded-xl bg-zinc-900/60 ring-1 ring-white/10 p-4">
                <p className="text-sm text-zinc-400">Growth</p>
                <p className="font-semibold">Level Without Limit</p>
              </div>
              <div className="rounded-xl bg-zinc-900/60 ring-1 ring-white/10 p-4">
                <p className="text-sm text-zinc-400">Army</p>
                <p className="font-semibold">Igris, Beru, Iron, Tank & more</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop"
              alt="Shadowy crown and dark aura"
              className="w-full h-[420px] object-cover rounded-xl ring-1 ring-white/10 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
