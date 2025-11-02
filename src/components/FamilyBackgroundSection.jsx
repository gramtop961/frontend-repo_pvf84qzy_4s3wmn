import React from 'react';

export default function FamilyBackgroundSection() {
  return (
    <section className="bg-zinc-50 text-zinc-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Family Background</h2>
            <p className="mt-4 text-zinc-700">
              Beyond the battles and quests, Sung Jinwoo’s heart remains grounded in family. Their struggles
              and resilience shape his resolve just as much as the System does.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="p-4 rounded-xl bg-white ring-1 ring-zinc-200">
                <p className="text-sm text-zinc-500">Mother</p>
                <p className="font-semibold">Park Kyung-Hye</p>
                <p className="text-sm text-zinc-700 mt-1">
                  Afflicted by the mysterious “Eternal Slumber,” she remains hospitalized until Jinwoo’s growth
                  provides a path to a cure.
                </p>
              </li>
              <li className="p-4 rounded-xl bg-white ring-1 ring-zinc-200">
                <p className="text-sm text-zinc-500">Father</p>
                <p className="font-semibold">Sung Il-Hwan</p>
                <p className="text-sm text-zinc-700 mt-1">
                  A hunter who vanished during a dungeon incident and later returns changed by otherworldly powers,
                  holding crucial knowledge about looming threats.
                </p>
              </li>
              <li className="p-4 rounded-xl bg-white ring-1 ring-zinc-200">
                <p className="text-sm text-zinc-500">Sister</p>
                <p className="font-semibold">Sung Jinah</p>
                <p className="text-sm text-zinc-700 mt-1">
                  Jinwoo’s younger sister — studious, caring, and a reminder of the normal life he strives to protect.
                </p>
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop"
              alt="Warm light through window symbolizing family and hope"
              className="w-full h-[420px] object-cover rounded-xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
