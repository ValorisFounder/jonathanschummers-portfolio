"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/* ─── Data ─── */
const caseStudies = [
  { num: "01", name: "SmartIntegrity", duration: "18 mois", tag: "Monitoring", img: "/images/Hero/SMART.webp" },
  { num: "02", name: "BforBank", duration: "5 mois", tag: "Fintech", img: "/images/Hero/BFOR.webp" },
  { num: "03", name: "NOD", duration: "16 mois", tag: "PropTech", img: "/images/Hero/NOD.webp" },
  { num: "04", name: "Boosted", duration: "4 mois", tag: "EdTech", img: "/images/Hero/BOOSTED.webp" },
  { num: "05", name: "Spie Batignolles", duration: "9 mois", tag: "Industrie", img: "/images/Hero/SPIES.webp" },
];

const services = [
  { num: "01", title: "Product Discovery", desc: "Recherche utilisateur, interviews, analyse de donnees pour reduire les incertitudes produit." },
  { num: "02", title: "UX/UI Design", desc: "Conception d'interfaces centrées sur la retention et l'adoption des fonctionnalites cles." },
  { num: "03", title: "Prototypage & Test", desc: "Prototypes haute fidelite, tests utilisateurs, iterations rapides avec les equipes dev." },
  { num: "04", title: "Design System", desc: "Construction de systemes de design scalables pour accelerer le delivery produit." },
  { num: "05", title: "Co-conception MVP", desc: "Alignement equipes design et tech pour livrer des fonctionnalites a forte valeur ajoutee." },
  { num: "06", title: "Strategie Produit", desc: "Priorisation data-driven des fonctionnalites pour cibler acquisition ou retention." },
];

const metrics = [
  { value: "+23%", label: "kWh / utilisateur" },
  { value: "<45min", label: "resolution alertes" },
  { value: "90min", label: "gagnes / jour" },
  { value: "-6%", label: "fuites type 2" },
  { value: "500", label: "utilisateurs" },
  { value: "82%", label: "DAU inspecteurs" },
];

/* ─── Animated Grid Cell ─── */
function GridCell({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function V17Page() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Space Mono', monospace" }}>

        {/* ─── NAV ─── */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
              J. Schummers
            </span>
            <div className="flex items-center gap-8">
              <span className="hidden md:inline text-xs tracking-widest uppercase opacity-60">Product Designer</span>
              <a
                href="mailto:hello@jonathanschummers.com"
                className="text-xs tracking-widest uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em] uppercase mb-8"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Partenaire<br />
              des SaaS<br />
              Immo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs md:text-sm leading-relaxed max-w-xl opacity-70"
            >
              J&apos;aide les equipes produit dans l&apos;immobilier a prioriser, concevoir et tester
              les fonctionnalites cles qui favorisent la retention des early adopters ou ciblent
              l&apos;acquisition de nouveaux segments.
            </motion.p>
          </div>
        </section>

        {/* ─── SERVICES GRID ─── */}
        <section className="border-b border-black">
          <div className="max-w-[1440px] mx-auto">
            <div className="px-6 md:px-12 py-6 border-b border-black/20">
              <span className="text-xs tracking-[0.3em] uppercase opacity-50">Services</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <GridCell
                  key={s.num}
                  delay={i * 0.08}
                  className="border-b md:border-r border-black/10 p-6 md:p-10 group hover:bg-black hover:text-white transition-colors duration-500 cursor-default"
                >
                  <span
                    className="block text-[4rem] md:text-[5rem] leading-none tracking-[-0.04em] mb-6 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <h3
                    className="text-lg md:text-xl uppercase tracking-wide mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-60 group-hover:opacity-80">
                    {s.desc}
                  </p>
                </GridCell>
              ))}
            </div>
          </div>
        </section>

        {/* ─── METRICS STRIP ─── */}
        <section className="border-b border-black bg-black text-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {metrics.map((m, i) => (
                <GridCell
                  key={m.label}
                  delay={i * 0.06}
                  className="border-b lg:border-b-0 border-r border-white/10 p-6 md:p-8 text-center"
                >
                  <span
                    className="block text-2xl md:text-3xl tracking-tight mb-1"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {m.value}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase opacity-50">
                    {m.label}
                  </span>
                </GridCell>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CASE STUDIES ─── */}
        <section className="border-b border-black">
          <div className="max-w-[1440px] mx-auto">
            <div className="px-6 md:px-12 py-6 border-b border-black/20">
              <span className="text-xs tracking-[0.3em] uppercase opacity-50">Case Studies</span>
            </div>
            {caseStudies.map((cs, i) => (
              <GridCell
                key={cs.num}
                delay={i * 0.1}
                className="border-b border-black/10 group cursor-pointer"
              >
                <div className="grid grid-cols-12 items-center px-6 md:px-12 py-6 md:py-8 gap-4 hover:bg-neutral-50 transition-colors duration-300">
                  <span
                    className="col-span-2 md:col-span-1 text-3xl md:text-4xl opacity-15"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {cs.num}
                  </span>
                  <div className="col-span-3 md:col-span-2 relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                    <Image src={cs.img} alt={cs.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="200px" />
                  </div>
                  <h3
                    className="col-span-4 md:col-span-5 text-base md:text-xl uppercase tracking-wide"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    {cs.name}
                  </h3>
                  <span className="col-span-2 md:col-span-2 text-xs opacity-50 text-right">
                    {cs.duration}
                  </span>
                  <span className="col-span-1 md:col-span-2 text-right">
                    <span className="inline-block text-xs border border-black/20 px-3 py-1 tracking-widest uppercase hidden md:inline">
                      {cs.tag}
                    </span>
                  </span>
                </div>
              </GridCell>
            ))}
          </div>
        </section>

        {/* ─── DESCRIPTION ─── */}
        <section className="border-b border-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <GridCell>
              <span className="text-xs tracking-[0.3em] uppercase opacity-50 block mb-6">Approche</span>
              <p className="text-sm leading-relaxed opacity-70">
                J&apos;ai l&apos;habitude de co-concevoir des MVP avec les fondateurs et PM,
                en alignant les equipes design et tech pour livrer des fonctionnalites a forte
                valeur ajoutee, pas juste des maquettes.
              </p>
            </GridCell>
            <GridCell delay={0.15}>
              <span className="text-xs tracking-[0.3em] uppercase opacity-50 block mb-6">Pourquoi l&apos;immobilier</span>
              <p className="text-sm leading-relaxed opacity-70">
                Apres plusieurs annees a concevoir des SaaS pour l&apos;industrie, j&apos;ai choisi de me
                specialiser dans l&apos;immobilier &mdash; le secteur qui m&apos;attire le plus, et dans lequel
                j&apos;aimerais lancer ma propre boite un jour.
              </p>
            </GridCell>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 text-center">
            <GridCell>
              <h2
                className="text-[clamp(2rem,6vw,5rem)] leading-[0.95] uppercase tracking-[-0.02em] mb-8"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Discutons de<br />votre projet
              </h2>
              <a
                href="mailto:hello@jonathanschummers.com"
                className="inline-block text-xs tracking-[0.3em] uppercase border border-white px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
              >
                Prendre contact
              </a>
            </GridCell>
          </div>
        </section>

        {/* ─── SCROLL INDICATOR ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="fixed bottom-6 left-6 z-40 hidden lg:block"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-30 writing-mode-vertical"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </>
  );
}
