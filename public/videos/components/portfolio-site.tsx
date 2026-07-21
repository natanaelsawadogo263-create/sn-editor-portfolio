"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, Play, X } from "lucide-react";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#060607] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#accueil" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black">
              <Image
                src="/logo/sn-editor-logo.png"
                alt="Logo SN Editor"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-lg font-black uppercase tracking-tight">
                <span className="text-red-500">SN</span> Editor
              </p>

              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                Video Editing Studio
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold transition hover:bg-red-500 sm:inline-flex"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#09090b] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-300 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-bold"
              >
                Demander un devis
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="accueil"
        className="relative flex min-h-screen items-center pt-28"
      >
        <div className="absolute left-10 top-40 h-80 w-80 rounded-full bg-red-600/20 blur-[130px]" />

        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-red-950/30 blur-[150px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                Disponible pour de nouveaux projets
              </span>
            </div>

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-red-500">
              Monteur vidéo créatif
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
              Votre contenu mérite
              <span className="mt-2 block bg-gradient-to-r from-white via-red-300 to-red-600 bg-clip-text text-transparent">
                mieux qu’un simple montage.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              SN Editor transforme vos rushs en vidéos modernes, dynamiques
              et conçues pour retenir l’attention de votre audience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#realisations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-red-500"
              >
                Voir mes réalisations
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#showreel"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold transition hover:border-red-500/50 hover:bg-red-500/10"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                </span>

                Regarder le showreel
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "TikTok",
                "Instagram Reels",
                "YouTube",
                "Publicités",
                "Podcasts",
                "Vidéos faceless",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[3rem] bg-red-600/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#17171b] to-[#09090b] p-4 shadow-2xl">
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  SN Editor Studio
                </span>
              </div>

              <div
                id="showreel"
                className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black"
              >
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/myuMYxDp1yI?rel=0"
                  title="Showreel officiel SN Editor"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="p-3 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                  Showreel officiel
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Découvrez mon univers créatif.
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Montage, transitions, sous-titres, effets sonores,
                  colorimétrie et storytelling visuel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-white/10 bg-[#0b0b0d] px-5 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Mes services
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
            Des montages adaptés à vos objectifs.
          </h2>
        </div>
      </section>

      <section
        id="realisations"
        className="min-h-[400px] px-5 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Réalisations
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
            Mes projets avant et après.
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[#0b0b0d] px-5 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Contact
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">
            Parlons de votre prochain projet.
          </h2>
        </div>
      </section>
    </main>
  );
}