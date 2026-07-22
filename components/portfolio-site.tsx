"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Clapperboard,
  Mail,
  Menu,
  MessageCircle,
  Mic2,
  Palette,
  Play,
  Smartphone,
  Sparkles,
  Target,
  Video,
  X,
} from "lucide-react";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "RÃ©alisations", href: "#realisations" },
  { label: "Showreel", href: "#showreel" },
  { label: "Contact", href: "#contact" },
];
const projects = [
  {
    title: "Montage face camÃ©ra",
    category: "TikTok â€¢ Reels â€¢ Shorts",
    description:
      "Transformation dâ€™un rush face camÃ©ra en contenu dynamique avec recadrage, rythme, habillage graphique, musique et identitÃ© visuelle.",
    video: "/videos/face-camera-comparison.mp4",
    poster: "/videos/face-camera-thumbnail.webp",
    skills: ["Recadrage", "Rythme", "Habillage graphique"],
  },
  {
    title: "Montage podcast",
    category: "Podcast â€¢ RÃ©seaux sociaux",
    description:
      "Transformation dâ€™une sÃ©quence podcast en contenu court et adaptÃ© aux plateformes sociales.",
    video: "/videos/podcast-comparison.mp4",
    poster: "/videos/podcast-thumbnail.webp",
    skills: ["Format vertical", "Titres", "Sound design"],
  },
  {
    title: "PublicitÃ© cosmÃ©tique",
    category: "PublicitÃ© â€¢ Produit",
    description:
      "PublicitÃ© cosmÃ©tique montÃ©e et postproduite avec un travail sur le rythme, les couleurs, les textes et lâ€™ambiance visuelle.",
    video: "/videos/cosmetic-comparison.mp4",
    poster: "/videos/cosmetic-thumbnail.webp",
    skills: ["ColorimÃ©trie", "Storytelling", "Texte publicitaire"],
  },
];

const categories = [
  "TikTok",
  "Instagram Reels",
  "YouTube",
  "PublicitÃ©s",
  "Podcasts",
  "VidÃ©os faceless",
];

const services = [
  {
    icon: Smartphone,
    title: "TikTok, Reels et Shorts",
    description:
      "Des vidÃ©os verticales rythmÃ©es avec sous-titres, zooms, B-roll et sound design.",
  },
  {
    icon: Video,
    title: "Montage YouTube",
    description:
      "Des vidÃ©os structurÃ©es pour maintenir l'attention et amÃ©liorer l'expÃ©rience du spectateur.",
  },
  {
    icon: Target,
    title: "PublicitÃ©s vidÃ©o",
    description:
      "Des vidÃ©os destinÃ©es Ã  prÃ©senter et valoriser un produit, une offre ou un service.",
  },
  {
    icon: Mic2,
    title: "Podcasts et interviews",
    description:
      "Transformation de contenus longs en extraits courts adaptÃ©s aux rÃ©seaux sociaux.",
  },
  {
    icon: Clapperboard,
    title: "VidÃ©os faceless",
    description:
      "CrÃ©ation de vidÃ©os avec voix off, textes, images et sÃ©quences d'illustration.",
  },
  {
    icon: Palette,
    title: "Image et son",
    description:
      "Correction des couleurs, nettoyage de la voix, musique et effets sonores.",
  },
];

const skills = [
  "DÃ©coupage et rythme",
  "Sous-titres dynamiques",
  "Transitions",
  "Sound design",
  "ColorimÃ©trie",
  "Habillage graphique",
];

const contactOptions = [
  {
    label: "E-mail",
    value: "sn7editor@gmail.com",
    href: "mailto:sn7editor@gmail.com?subject=Demande%20de%20montage%20vid%C3%A9o",
    icon: Mail,
  },
  {
    label: "WhatsApp Burkina Faso",
    value: "+226 57 53 72 99",
    href: "https://wa.me/22657537299?text=Bonjour%20SN%20Editor%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20montage%20vid%C3%A9o.",
    icon: MessageCircle,
  },
  {
    label: "WhatsApp Maroc",
    value: "+212 688 065 639",
    href: "https://wa.me/212688065639?text=Bonjour%20SN%20Editor%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20montage%20vid%C3%A9o.",
    icon: MessageCircle,
  },
];

function YouTubeEmbed({ title }: { title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
      <iframe
        className="absolute inset-0 h-full w-full"
        src="https://www.youtube-nocookie.com/embed/myuMYxDp1yI?rel=0&modestbranding=1"
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050506] text-[#f7f7f7]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050506]/80 backdrop-blur-md">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#accueil">
            <div className="relative h-20 w-64 shrink-0 overflow-hidden sm:w-72">
              <Image
                src="/logo/sn-editor-logo.png"
                alt="Logo SN Editor"
                width={500}
                height={200}
                priority
                className="h-full w-full scale-[2.3] object-contain sm:scale-[2.5]"
              />
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#a1a1aa] transition-colors hover:text-[#f7f7f7]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#e50914] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#ff3131] lg:inline-flex"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#121216] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/5 bg-[#0c0c0f] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[#a1a1aa] transition-colors hover:bg-white/5 hover:text-[#f7f7f7]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-[#e50914] px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#ff3131]"
              >
                Demander un devis
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="accueil"
          className="hero-grid relative pt-28 pb-20 lg:pt-36 lg:pb-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#e50914]">
                Monteur vidÃ©o crÃ©atif
              </p>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Votre contenu mÃ©rite{" "}
                <span className="bg-gradient-to-r from-[#f7f7f7] to-[#e50914] bg-clip-text text-transparent">
                  mieux qu&apos;un simple montage.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg">
                SN Editor transforme vos rushs en vidÃ©os modernes, dynamiques et
                conÃ§ues pour capter l&apos;attention, valoriser votre message et
                renforcer votre image.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e50914] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#ff3131]"
                >
                  Voir mes services
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#showreel"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#121216] px-6 py-3.5 text-sm font-bold text-[#f7f7f7] transition-colors hover:border-[#e50914]/50 hover:bg-[#121216]/80"
                >
                  <Play className="h-4 w-4 text-[#e50914]" />
                  Regarder mon showreel
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/10 bg-[#121216] px-3 py-1.5 text-xs font-medium text-[#a1a1aa]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#e50914]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121216] p-3 shadow-2xl shadow-black/50">
                <YouTubeEmbed title="Showreel officiel SN Editor" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-[#0c0c0f] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Des montages adaptÃ©s Ã  chaque objectif.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-white/5 bg-[#121216] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e50914]/30 hover:shadow-lg hover:shadow-[#e50914]/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e50914]/10">
                    <service.icon className="h-6 w-6 text-[#e50914]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#f7f7f7]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Showreel */}
        <section
  id="realisations"
  className="border-y border-white/10 bg-[#0b0b0d] px-5 py-24 sm:px-8 lg:px-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
        Avant / AprÃ¨s
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
        Des rushs simples transformÃ©s en contenus professionnels.
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        DÃ©couvrez comment SN Editor amÃ©liore le rythme, lâ€™image, le son
        et la prÃ©sentation dâ€™un contenu brut.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#121216] transition duration-300 hover:-translate-y-2 hover:border-red-500/40"
        >
          <div className="relative bg-black">
          <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden bg-black">
  <video
    controls
    preload="metadata"
    poster={project.poster}
    className="h-full w-full object-contain"
  >
    <source src={project.video} type="video/mp4" />
    Votre navigateur ne prend pas en charge la vidÃ©o.
  </video>
</div>

            <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-red-500/30 bg-black/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-red-400 backdrop-blur">
              Montage rÃ©alisÃ© par SN Editor
            </span>
          </div>

          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-black">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

    <p className="mt-8 max-w-4xl text-sm leading-6 text-zinc-500">
      Les rushs bruts utilisÃ©s dans ces dÃ©monstrations proviennent de
      banques de vidÃ©os libres de droits. Le montage, lâ€™habillage, la
      postproduction et les versions Avant / AprÃ¨s ont Ã©tÃ© rÃ©alisÃ©s par
      SN Editor.
    </p>
  </div>
</section>
<section id="showreel" className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <YouTubeEmbed title="Showreel officiel SN Editor" />
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#e50914]">
                Projet mis en avant
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Showreel officiel SN Editor
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#a1a1aa] sm:text-lg">
                Une prÃ©sentation de mon univers crÃ©atif et des techniques utilisÃ©es
                pour produire des vidÃ©os modernes, dynamiques et mÃ©morables.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-[#f7f7f7]"
                  >
                    <Sparkles className="h-4 w-4 shrink-0 text-[#e50914]" />
                    {skill}
                  </li>
                ))}
              </ul>

              <a
                href="https://youtu.be/myuMYxDp1yI"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121216] px-6 py-3.5 text-sm font-bold text-[#f7f7f7] transition-colors hover:border-[#e50914]/50"
              >
                <Video className="h-5 w-5 text-[#e50914]" />
                Voir sur YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[#0c0c0f] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                PrÃªt Ã  donner plus de force Ã  votre contenu ?
              </h2>
              <p className="mt-4 text-base text-[#a1a1aa] sm:text-lg">
                PrÃ©sentez votre projet et recevez une proposition adaptÃ©e Ã  vos
                besoins.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    option.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex flex-col items-center rounded-2xl border border-white/5 bg-[#121216] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#e50914]/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e50914]/10 transition-colors group-hover:bg-[#e50914]/20">
                    <option.icon className="h-6 w-6 text-[#e50914]" />
                  </div>
                  <p className="text-sm font-bold text-[#f7f7f7]">
                    {option.label}
                  </p>
                  <p className="mt-1 text-sm text-[#a1a1aa]">{option.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#050506] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <Image
            src="/logo/sn-editor-logo.png"
            alt="Logo SN Editor"
            width={190}
            height={70}
            className="h-10 w-auto object-contain"
          />
          <p className="text-sm text-[#a1a1aa]">Montage vidÃ©o professionnel</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://youtu.be/myuMYxDp1yI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-[#f7f7f7]"
            >
              <Video className="h-4 w-4 text-[#e50914]" />
              YouTube
            </a>
            <a
              href="mailto:sn7editor@gmail.com?subject=Demande%20de%20montage%20vid%C3%A9o"
              className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] transition-colors hover:text-[#f7f7f7]"
            >
              <Mail className="h-4 w-4 text-[#e50914]" />
              sn7editor@gmail.com
            </a>
          </div>

          <p className="text-xs text-[#a1a1aa]/70">
            Â© 2026 SN Editor. Tous droits rÃ©servÃ©s.
          </p>
        </div>
      </footer>
    </div>
  );
}

