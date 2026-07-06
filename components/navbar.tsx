"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  CalendarDays,
  ChevronRight,
  Home,
  Images,
  Info,
  MapPin,
  Menu,
  MessagesSquare,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const activeSection = useActiveSection(sectionIds);
  const mobileIcons = [Home, Info, Sparkles, Users, Images, Quote, MessagesSquare, MapPin];

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 18));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "container-page flex min-h-16 items-center justify-between rounded-full border px-2 transition-all duration-300 sm:px-3",
          scrolled
            ? "border-white/70 bg-white/80 shadow-soft backdrop-blur-2xl"
            : "border-white/45 bg-white/48 backdrop-blur-xl"
        )}
      >
        <Link href="#home" className="flex items-center gap-3" aria-label="Lumine Dental Studio home">
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-brand-ink shadow-gold ring-1 ring-brand-gold/20">
            <Image src="/favicon.png" alt="" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-serif text-lg font-semibold leading-none text-brand-ink">Lumine</span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-slate-500">Dental Studio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative rounded-full px-3.5 py-2 text-sm font-semibold transition",
                  active ? "text-brand-blue" : "text-slate-600 hover:text-brand-ink"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-blue transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="tel:+14155550198" className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/80 px-3 py-2 text-sm font-bold text-brand-ink shadow-sm transition hover:border-blue-200 hover:text-brand-blue">
            <Phone className="h-4 w-4" />
            +1 415 555 0198
          </Link>
          <Button className="min-h-10 px-4" onClick={() => document.getElementById("appointment")?.scrollIntoView()}>
            <CalendarDays className="h-4 w-4" />
            Appointment
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-border bg-white text-brand-ink shadow-sm lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[-1] bg-slate-950/45 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-x-4 top-24 overflow-hidden rounded-[2rem] border border-white/70 bg-white/94 p-5 shadow-soft"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="mb-5 flex items-center justify-between border-b border-brand-border pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-brand-ink">
                    <Image src="/favicon.png" alt="" width={48} height={48} className="h-full w-full object-cover" />
                  </span>
                  <div>
                    <p className="font-serif text-xl font-semibold text-brand-ink">Lumine</p>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Dental Studio</p>
                  </div>
                </div>
                <ShieldCheck className="h-5 w-5 text-brand-blue" />
              </div>
              <div className="grid gap-2">
                {navItems.map((item, index) => {
                  const Icon = mobileIcons[index] ?? Home;
                  return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-black text-brand-ink transition hover:bg-blue-50"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-5 w-5 text-brand-blue" />
                      {item.label}
                    </span>
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </Link>
                  );
                })}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button onClick={() => {
                  setOpen(false);
                  document.getElementById("appointment")?.scrollIntoView();
                }}>
                  <CalendarDays className="h-4 w-4" />
                  Book Appointment
                </Button>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Emergency Line
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
