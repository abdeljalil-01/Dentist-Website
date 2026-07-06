import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { navItems, services } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-border bg-brand-ink text-white">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute left-10 top-24 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="container-page relative py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="#home" className="inline-flex items-center gap-4" aria-label="Lumine Dental Studio home">
              <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-black shadow-gold ring-1 ring-brand-gold/20">
                <Image src="/favicon.png" alt="" width={64} height={64} className="h-full w-full object-cover" />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-2xl font-semibold">Lumine</span>
                <span className="block text-xs font-bold uppercase tracking-[0.28em] text-slate-300">Dental Studio</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm leading-7 text-slate-300">
              Healthy Smiles. Exceptional Care. A boutique dental studio blending clinical precision, quiet luxury, and human-centered care.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon) => (
                <a
                  key={Icon.displayName}
                  href="#contact"
                  aria-label="Social profile"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white hover:text-brand-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">Navigation</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">Services</h3>
            <div className="mt-5 grid gap-3">
              {services.slice(0, 6).map((service) => (
                <Link key={service.title} href="#services" className="text-sm text-slate-300 transition hover:text-white">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">Newsletter</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Seasonal oral health notes, whitening guidance, and appointment availability.
            </p>
            <form className="mt-5 flex rounded-full border border-white/10 bg-white/5 p-1">
              <label className="sr-only" htmlFor="newsletter">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <Button type="submit" className="h-11 min-h-11 w-11 px-0" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <a href="mailto:hello@luminedental.studio" className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300">
              <Mail className="h-4 w-4" />
              hello@luminedental.studio
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Lumine Dental Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#home">Privacy</Link>
            <Link href="#home">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
