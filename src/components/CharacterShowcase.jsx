import React from 'react';

const characters = [
  {
    name: 'Sung Jinwoo',
    role: 'Protagonist • Shadow Monarch'
    ,
    img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1974&auto=format&fit=crop',
    desc: 'Starts as the weakest E-rank hunter and, after a near-death experience, awakens a unique “System” that lets him level up without limit.'
  },
  {
    name: 'Cha Hae-In',
    role: 'S-Rank Hunter',
    img: 'https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=1974&auto=format&fit=crop',
    desc: 'An elite swordswoman with a rare sense that lets her perceive mana scents. Strong, principled, and a key ally to Jinwoo.'
  },
  {
    name: 'Go Gun-Hee',
    role: 'Hunter Association Chairman',
    img: 'https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=1974&auto=format&fit=crop',
    desc: 'A veteran leader who shoulders the safety of the nation. He recognizes Jinwoo’s potential and supports him.'
  },
  {
    name: 'Igris',
    role: 'Shadow Soldier • Knight Commander',
    img: 'https://images.unsplash.com/photo-1624870117961-c1b5032e4658?q=80&w=1974&auto=format&fit=crop',
    desc: 'A stoic red-armored knight resurrected as a shadow. Loyal, disciplined, and one of Jinwoo’s earliest elite soldiers.'
  },
  {
    name: 'Beru',
    role: 'Shadow Soldier • Ant King',
    img: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1974&auto=format&fit=crop',
    desc: 'Former Ant King turned into a terrifyingly strong shadow. Fiercely devoted to Jinwoo and comically earnest.'
  }
];

export default function CharacterShowcase() {
  return (
    <section className="bg-zinc-950 text-zinc-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Characters</h2>
            <p className="text-zinc-400 mt-2 max-w-2xl">
              Meet pivotal figures from the story — from hunters who protect humanity to shadows who
              answer the call of their monarch.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((c) => (
            <article key={c.name} className="group bg-zinc-900/60 rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-indigo-400/40 transition">
              <div className="relative">
                <img src={c.img} alt={c.name} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <p className="text-indigo-300 text-sm font-medium">{c.role}</p>
                <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600/10 via-violet-600/10 to-fuchsia-600/10 ring-1 ring-white/10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">Shadow Army Soldiers</h3>
              <p className="mt-3 text-zinc-300">
                Jinwoo commands a legion forged from fallen foes. Notable elites include Igris (Knight Commander),
                Beru (Ant King), Iron (Armored Tank), and Tank (Shadow Beast). Each retains a fragment of their
                former prowess, enhanced by shadow power and absolute loyalty.
              </p>
              <ul className="mt-4 space-y-2 text-zinc-300 list-disc pl-6">
                <li><span className="font-medium text-zinc-100">Igris</span> — disciplined duelist with unmatched blade control.</li>
                <li><span className="font-medium text-zinc-100">Beru</span> — hyper-fast aerial predator with lethal claws.</li>
                <li><span className="font-medium text-zinc-100">Iron</span> — stalwart vanguard clad in heavy armor.</li>
                <li><span className="font-medium text-zinc-100">Tank</span> — massive beast that crashes through enemy lines.</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop"
                alt="Shadow army aesthetic"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
