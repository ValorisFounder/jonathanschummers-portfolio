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
  { num: "01", title: "Product Discovery", desc: "Recherche utilisateur, interviews, analyse de donnees." },
  { num: "02", title: "UX/UI Design", desc: "Interfaces centrées sur la retention et l'adoption." },
  { num: "03", title: "Prototypage & Test", desc: "Prototypes haute fidelite, tests utilisateurs." },
  { num: "04", title: "Design System", desc: "Systemes de design scalables." },
  { num: "05", title: "Co-conception MVP", desc: "Alignement design et tech." },
  { num: "06", title: "Strategie Produit", desc: "Priorisation data-driven." },
];

const metrics = [
  { value: "+23%", label: "kWh / utilisateur" },
  { value: "<45min", label: "resolution alertes" },
  { value: "90min", label: "gagnes / jour" },
  { value: "-6%", label: "fuites type 2" },
  { value: "500", label: "utilisateurs" },
  { value: "82%", label: "DAU inspecteurs" },
];

/* ─── Reveal ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Grid line styling ─── */
const gridBorder = "border-zinc-200";
const accent = "#2563EB";

export default function V15Page() {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <main className="bg-white text-zinc-900 overflow-x-hidden" style={{ fontFamily: "'Satoshi', sans-serif" }}>
        {/* ─── Grid Overlay (decorative) ─── */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          <div className="absolute top-0 bottom-0 left-[8.33%] w-px bg-zinc-200" />
          <div className="absolute top-0 bottom-0 left-[25%] w-px bg-zinc-200" />
          <div className="absolute top-0 bottom-0 left-[50%] w-px bg-zinc-200" />
          <div className="absolute top-0 bottom-0 left-[75%] w-px bg-zinc-200" />
          <div className="absolute top-0 bottom-0 right-[8.33%] w-px bg-zinc-200" />
        </div>

        <div className="relative z-10">
          {/* ─── Nav ─── */}
          <nav className={`flex items-center justify-between px-6 md:px-12 py-6 border-b ${gridBorder}`}>
            <span
              className="text-xs tracking-[0.3em] uppercase text-zinc-500"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              J. Schummers
            </span>
            <div className="flex gap-8">
              <span className="text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Travaux
              </span>
              <span className="text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Contact
              </span>
            </div>
          </nav>

          {/* ─── Hero ─── */}
          <section className={`min-h-[100dvh] flex flex-col justify-between px-6 md:px-12 border-b ${gridBorder}`}>
            <div className="pt-16 md:pt-24">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <h1 className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase">
                  Product
                  <br />
                  <span style={{ WebkitTextStroke: "2px currentColor", color: "transparent" }}>
                    Designer
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="h-px w-full mt-8 origin-left"
                style={{ backgroundColor: accent }}
              />
            </div>

            <div className="pb-16 md:pb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-zinc-500 max-w-sm text-sm leading-relaxed"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                5 ans de conception produit. Recherche, design, stratégie.
                Je transforme la complexité en interfaces qui fonctionnent.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs text-zinc-600 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Paris, FR
                </span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: accent }} />
              </motion.div>
            </div>
          </section>

          {/* ─── Case Studies — Raw List ─── */}
          <section className={`border-b ${gridBorder}`}>
            <div className={`px-6 md:px-12 py-8 border-b ${gridBorder}`}>
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Projets selectionnés
              </span>
            </div>

            {caseStudies.map((study, i) => (
              <Reveal key={study.num}>
                <div
                  className={`group flex flex-col md:flex-row items-start md:items-center px-6 md:px-12 py-8 md:py-12 border-b ${gridBorder} hover:bg-zinc-100/50 transition-colors cursor-pointer`}
                >
                  {/* Number */}
                  <span
                    className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black leading-none tracking-tighter mr-8 md:mr-16"
                    style={{ color: "rgba(37, 99, 235, 0.08)", fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {study.num}
                  </span>

                  {/* Name */}
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight group-hover:tracking-normal transition-all">
                      {study.name}
                    </h2>
                  </div>

                  {/* Meta */}
                  <div className="flex gap-8 mt-4 md:mt-0">
                    <div>
                      <span className="text-[0.65rem] text-zinc-600 uppercase tracking-widest block mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Domaine
                      </span>
                      <span className="text-sm text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {study.tag}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.65rem] text-zinc-600 uppercase tracking-widest block mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Durée
                      </span>
                      <span className="text-sm text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {study.duration}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="ml-8 hidden md:block">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-zinc-400 group-hover:text-zinc-900 transition-colors group-hover:translate-x-1 transition-transform">
                      <path d="M8 16h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </section>

          {/* ─── Metrics — Giant Numbers ─── */}
          <section className={`px-6 md:px-12 py-24 md:py-32 border-b ${gridBorder}`}>
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-600 block mb-16" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Impact
              </span>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
              {metrics.map((m, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div>
                    <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter block" style={{ color: accent }}>
                      {m.value}
                    </span>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {m.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ─── One small image accent ─── */}
          <section className={`border-b ${gridBorder}`}>
            <div className="grid md:grid-cols-2">
              <div className={`px-6 md:px-12 py-24 flex flex-col justify-center border-b md:border-b-0 md:border-r ${gridBorder}`}>
                <Reveal>
                  <span className="text-xs tracking-[0.3em] uppercase text-zinc-600 block mb-8" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    A propos
                  </span>
                  <p className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight">
                    Penseur
                    <br />
                    systémique,
                    <br />
                    <span style={{ color: accent }}>exécution</span>
                    <br />
                    chirurgicale.
                  </p>
                  <p className="text-zinc-500 text-sm mt-8 max-w-sm leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Je travaille à l'intersection du design, de la donnée et du produit.
                    Chaque décision est argumentée, chaque pixel est intentionnel.
                  </p>
                </Reveal>
              </div>
              <div className="relative min-h-[400px] md:min-h-0">
                <Image
                  src="/images/Hero/Moi.webp"
                  alt="Jonathan Schummers"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: "rgba(37, 99, 235, 0.08)" }} />
              </div>
            </div>
          </section>

          {/* ─── Services — Raw Table ─── */}
          <section className={`px-6 md:px-12 py-24 md:py-32 border-b ${gridBorder}`}>
            <Reveal>
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-600 block mb-16" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Services
              </span>
            </Reveal>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className={`border-b ${gridBorder}`}>
                    <th className="pb-4 text-[0.65rem] text-zinc-600 uppercase tracking-widest font-normal w-16" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      #
                    </th>
                    <th className="pb-4 text-[0.65rem] text-zinc-600 uppercase tracking-widest font-normal" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Service
                    </th>
                    <th className="pb-4 text-[0.65rem] text-zinc-600 uppercase tracking-widest font-normal hidden md:table-cell" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s, i) => (
                    <Reveal key={i}>
                      <tr className={`border-b ${gridBorder} hover:bg-zinc-100 transition-colors`}>
                        <td className="py-6 text-sm text-zinc-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {s.num}
                        </td>
                        <td className="py-6 text-xl md:text-2xl font-black uppercase tracking-tight">
                          {s.title}
                        </td>
                        <td className="py-6 text-sm text-zinc-500 hidden md:table-cell max-w-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {s.desc}
                        </td>
                      </tr>
                    </Reveal>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── Contact ─── */}
          <section className="px-6 md:px-12 py-24 md:py-32">
            <Reveal>
              <h2 className="text-[3rem] md:text-[6rem] lg:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase">
                Travaillons
                <br />
                <span style={{ WebkitTextStroke: `2px ${accent}`, color: "transparent" }}>
                  ensemble
                </span>
              </h2>
              <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
                <a
                  href="mailto:jonathan@schummers.fr"
                  className="text-sm hover:text-zinc-900 transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: accent }}
                >
                  jonathan@schummers.fr
                </a>
                <span className="w-8 h-px bg-zinc-200 hidden md:block" />
                <span className="text-xs text-zinc-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Disponible pour missions freelance
                </span>
              </div>
            </Reveal>
          </section>

          {/* ─── Footer ─── */}
          <footer className={`px-6 md:px-12 py-6 border-t ${gridBorder} flex items-center justify-between`}>
            <span className="text-[0.65rem] text-zinc-400 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              © 2026
            </span>
            <span className="text-[0.65rem] text-zinc-400 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Raw by design
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
