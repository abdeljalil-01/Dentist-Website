"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm as useFormspreeForm } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Award,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Gem,
  HeartHandshake,
  LoaderCircle,
  Navigation,
  PanelTopOpen,
  ExternalLink,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  X
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useForm as useHookForm } from "react-hook-form";
import { z } from "zod";
import { fadeUp, scaleIn, staggerContainer } from "@/animations/variants";
import {
  doctors,
  faqs,
  gallery,
  imageLibrary,
  services,
  testimonials,
  timeline,
  trustStats,
  whyChoose
} from "@/data/site";
import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { FieldShell, fieldClassName } from "@/components/ui/form-field";

const bookingSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(8, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  service: z.string().min(1, "Choose a service"),
  doctor: z.string().min(1, "Choose a doctor"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  message: z.string().max(500, "Message must be under 500 characters").optional()
});

type BookingValues = z.infer<typeof bookingSchema>;
type BookingSubmission = BookingValues & {
  _subject: string;
};

const inputMotion = {
  whileFocus: { scale: 1.01 },
  transition: { type: "spring", stiffness: 260, damping: 22 }
};

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-amber-400" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </span>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="pointer-events-none absolute left-[10%] top-44 hidden h-40 w-px bg-gradient-to-b from-transparent via-brand-gold/45 to-transparent lg:block" />
      <div className="container-page relative grid items-center gap-12 pb-20 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p className="eyebrow mb-6" variants={fadeUp}>
            Boutique dental studio
          </motion.p>
          <motion.h1 className="heading-1" variants={fadeUp}>
            Healthy Smiles.
            <span className="block text-brand-blue">Exceptional Care.</span>
          </motion.h1>
          <motion.p className="mt-7 max-w-xl text-lg leading-8 text-slate-600" variants={fadeUp}>
            Lumine Dental Studio pairs refined hospitality with precise digital dentistry, creating visits that feel calm,
            personal, and beautifully considered from the first conversation.
          </motion.p>

          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
            <Button onClick={() => document.getElementById("appointment")?.scrollIntoView()}>
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById("services")?.scrollIntoView()}>
              Explore Services
            </Button>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
            {["Same-day emergencies", "Digital smile planning", "Comfort-first care"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm"
              >
                <BadgeCheck className="h-4 w-4 text-brand-blue" />
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-[1.75rem] border border-brand-border bg-white/85 shadow-soft backdrop-blur" variants={fadeUp}>
            {trustStats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="border-r border-brand-border p-5 last:border-r-0">
                <p className="font-serif text-3xl font-semibold text-brand-ink">
                  <CountUp end={stat.value} duration={2.4} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div className="mt-8 flex items-center gap-4" variants={fadeUp}>
            <div className="flex -space-x-3">
              {[imageLibrary.doctorOne, imageLibrary.doctorTwo, imageLibrary.doctorThree].map((src) => (
                <span key={src} className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-white shadow-sm">
                  <Image src={src} alt="" fill sizes="44px" className="object-cover" />
                </span>
              ))}
            </div>
            <div>
              <Stars />
              <p className="mt-1 text-sm font-bold text-slate-600">Google reviews from 1,000+ patients</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="relative min-h-[580px]" initial="hidden" animate="visible" variants={scaleIn}>
          {[
            "left-[16%] top-[10%]",
            "left-[28%] top-[24%]",
            "left-[42%] top-[12%]",
            "left-[58%] top-[30%]",
            "left-[74%] top-[18%]",
            "left-[22%] top-[62%]",
            "left-[46%] top-[78%]",
            "left-[68%] top-[66%]",
            "left-[82%] top-[48%]"
          ].map((position, index) => (
            <motion.span
              key={position}
              className={cn("absolute z-0 h-1.5 w-1.5 rounded-full bg-brand-blue/25", position)}
              animate={{ y: [0, -14, 0], opacity: [0.25, 0.8, 0.25] }}
              transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          <motion.div
            className="absolute -left-2 top-12 z-20 rounded-3xl border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur-xl sm:left-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-brand-blue">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black text-brand-ink">Next opening</p>
                <p className="text-xs font-semibold text-slate-500">Today, 2:30 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-2 bottom-24 z-20 rounded-3xl border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur-xl sm:right-6"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Stars />
            <p className="mt-2 text-sm font-black text-brand-ink">5.0 Google Rating</p>
            <p className="text-xs font-semibold text-slate-500">From 1,000+ patients</p>
          </motion.div>

          <motion.div
            className="absolute bottom-7 left-8 z-20 hidden rounded-3xl border border-white/70 bg-brand-ink/90 p-5 text-white shadow-soft backdrop-blur-xl sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <Gem className="h-5 w-5 text-brand-gold" />
              <div>
                <p className="text-sm font-black">15+ years</p>
                <p className="text-xs text-slate-300">Boutique clinical care</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute inset-x-8 top-10 h-[520px] rounded-[3rem] border border-brand-blue/10 bg-brand-blue/10 blur-2xl" />
          <div className="relative mx-auto h-[560px] max-w-[540px] overflow-hidden rounded-[3rem] border border-white bg-white p-3 shadow-glow">
            <Image
              src={imageLibrary.hero}
              alt="Dentist reviewing a digital scan with a patient"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="rounded-[2.35rem] object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-[2rem] border border-white/60 bg-white/85 p-5 shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-black text-brand-ink">Patient satisfaction</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">Measured after every visit</p>
                </div>
                <p className="text-3xl font-black text-brand-blue">98%</p>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-brand-blue"
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1.3, delay: 0.5 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TrustedSection() {
  return (
    <SectionShell id="trusted" className="py-10 sm:py-12">
      <motion.div
        className="container-page grid gap-4 rounded-[2rem] border border-brand-border bg-white p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {trustStats.map((stat) => (
          <motion.div key={stat.label} className="rounded-[1.5rem] bg-brand-page p-6 text-center" variants={fadeUp}>
            <p className="text-4xl font-black text-brand-ink">
              <CountUp end={stat.value} duration={2.1} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm font-bold text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export function ServicesSection() {
  const serviceLayouts = [
    "md:col-span-4 lg:col-span-3 md:row-span-2",
    "md:col-span-4 lg:col-span-3",
    "md:col-span-3 lg:col-span-2",
    "md:col-span-5 lg:col-span-4",
    "md:col-span-4 lg:col-span-4",
    "md:col-span-4 lg:col-span-2",
    "md:col-span-3 lg:col-span-3",
    "md:col-span-5 lg:col-span-3"
  ];

  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Precision dentistry, designed for the way modern patients live."
      copy="From preventive care to complex smile restoration, each service is delivered with digital planning, quiet comfort, and a refined clinical standard."
    >
      <motion.div
        className="container-page grid auto-rows-[minmax(260px,auto)] gap-5 md:grid-cols-8 lg:grid-cols-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const featured = index === 0 || index === 3 || index === 4;
          return (
            <motion.article
              key={service.title}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-glow",
                serviceLayouts[index]
              )}
              variants={fadeUp}
            >
              <div className={cn("relative overflow-hidden", featured ? "h-72 md:h-full" : "h-56")}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/78 via-brand-ink/22 to-transparent" />
              </div>
              <div className={cn("absolute inset-x-0 bottom-0 p-5 text-white sm:p-6", featured && "sm:p-8")}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-soft backdrop-blur-xl">
                  <Icon className="h-5 w-5" />
                </span>
                <div className={cn("mt-5", featured && "max-w-lg")}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Lumine care {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight sm:text-3xl">{service.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-100">{service.description}</p>
                </div>
                <Link href="#appointment" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white hover:text-brand-blue">
                  Plan visit
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                Digital-first
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}

export function AboutSection() {
  return (
    <SectionShell id="about" className="bg-white/70">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={scaleIn}
        >
          <div className="relative h-[560px] overflow-hidden rounded-[3rem] border border-brand-border bg-white p-3 shadow-soft">
            <Image
              src={imageLibrary.studio}
              alt="Bright modern dental studio"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-[2.35rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-glow backdrop-blur-xl">
            <p className="text-4xl font-black text-brand-blue">15+</p>
            <p className="mt-1 text-sm font-bold text-slate-500">Years of refined care</p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer}>
          <motion.p className="eyebrow mb-5" variants={fadeUp}>
            About Lumine
          </motion.p>
          <motion.h2 className="heading-2" variants={fadeUp}>
            Clinical excellence with the calm of a private studio.
          </motion.h2>
          <motion.p className="mt-6 text-lg leading-8 text-slate-600" variants={fadeUp}>
            Lumine was created for patients who want clarity, comfort, and meticulous outcomes. Every visit blends
            advanced diagnostics, measured pacing, and a hospitality mindset that respects your time.
          </motion.p>
          <motion.div className="mt-8 grid gap-4" variants={staggerContainer}>
            {timeline.map((item, index) => (
              <motion.div key={item} className="flex gap-4 rounded-[1.5rem] border border-brand-border bg-white p-5 shadow-sm" variants={fadeUp}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-blue text-sm font-black text-white">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-black text-brand-ink">{item}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    A thoughtful step in a treatment journey built around trust, precision, and visible progress.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}

export function WhyChooseSection() {
  return (
    <SectionShell
      id="why"
      eyebrow="Why choose us"
      title="A bento of details that make the experience feel easier."
      copy="The best dental visit is not just technically strong. It is predictable, transparent, and calm at every touchpoint."
    >
      <motion.div
        className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {whyChoose.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              className={cn(
                "group min-h-60 rounded-[1.75rem] border border-brand-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200",
                feature.className
              )}
              variants={fadeUp}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-8 text-xl font-black text-brand-ink">{feature.title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">{feature.body}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}

export function DoctorsSection() {
  return (
    <SectionShell
      id="doctors"
      eyebrow="Doctors"
      title="Specialists with a quiet obsession for detail."
      copy="Our clinicians coordinate across cosmetic, restorative, implant, orthodontic, and family care."
    >
      <motion.div
        className="container-page grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {doctors.map((doctor) => (
          <motion.article key={doctor.name} className="group rounded-[2rem] border border-brand-border bg-white p-3 shadow-soft" variants={fadeUp}>
            <div className="relative h-96 overflow-hidden rounded-[1.55rem] bg-brand-page">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-4 bottom-4 flex justify-end gap-2 opacity-0 transition group-hover:opacity-100">
                {[Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#contact"
                    aria-label={`${doctor.name} social link`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-blue shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-black text-brand-ink">{doctor.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-blue">{doctor.role}</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-page px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                <Award className="h-4 w-4" />
                {doctor.experience}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export function AppointmentSection() {
  return (
    <SectionShell id="appointment" className="bg-brand-ink text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.p className="eyebrow mb-5 border-white/10 bg-white/10 text-sky-200" variants={fadeUp}>
            Book appointment
          </motion.p>
          <motion.h2 className="text-balance text-4xl font-black leading-tight sm:text-5xl" variants={fadeUp}>
            A beautiful booking experience for a calmer first visit.
          </motion.h2>
          <motion.p className="mt-6 text-lg leading-8 text-slate-300" variants={fadeUp}>
            Share a few details and our concierge team will confirm availability, preparation notes, and expected visit length.
          </motion.p>
          <motion.div className="mt-8 grid gap-4" variants={staggerContainer}>
            {[
              { icon: PanelTopOpen, label: "Flexible appointment windows" },
              { icon: HeartHandshake, label: "Transparent treatment guidance" },
              { icon: ShieldCheck, label: "Urgent care availability" }
            ].map((benefit) => {
              const Icon = benefit.icon;
              return (
              <motion.div key={benefit.label} className="flex items-center gap-3" variants={fadeUp}>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-sky-200">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-semibold text-slate-200">{benefit.label}</span>
              </motion.div>
              );
            })}
          </motion.div>
          <motion.div className="mt-10 grid gap-4 sm:grid-cols-2" variants={fadeUp}>
            <a href="tel:+14155550198" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <Phone className="h-5 w-5 text-sky-200" />
              <p className="mt-4 text-sm text-slate-400">Phone</p>
              <p className="mt-1 font-black">+1 415 555 0198</p>
            </a>
            <a href="tel:+14155550111" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="h-5 w-5 text-sky-200" />
              <p className="mt-4 text-sm text-slate-400">Emergency</p>
              <p className="mt-1 font-black">+1 415 555 0111</p>
            </a>
          </motion.div>
        </motion.div>

        <BookingForm />
      </div>
    </SectionShell>
  );
}

function BookingForm() {
  const [formspreeState, submitToFormspree, resetFormspree] = useFormspreeForm<BookingSubmission>("mjgjregz");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useHookForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      doctor: "",
      date: "",
      time: "",
      message: ""
    }
  });

  useEffect(() => {
    if (formspreeState.succeeded) {
      reset();
      const timeout = window.setTimeout(() => resetFormspree(), 5200);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [formspreeState.succeeded, reset, resetFormspree]);

  async function onSubmit(values: BookingValues) {
    await submitToFormspree({
      ...values,
      _subject: "New Lumine Dental Studio appointment request"
    });
  }

  const submitting = isSubmitting || formspreeState.submitting;

  return (
    <motion.div
      className="rounded-[2rem] border border-white/10 bg-white p-4 text-brand-text shadow-glow sm:p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <AnimatePresence>
        {formspreeState.succeeded ? (
          <motion.div
            className="mb-5 flex items-center gap-4 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-ink">
              <Image src="/favicon.png" alt="" width={48} height={48} className="h-full w-full object-cover" />
            </span>
            <span className="grid min-w-0 gap-1">
              <span className="block text-brand-ink">Your request was received.</span>
              <span className="inline-flex items-center gap-2 font-semibold text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                Our concierge team will confirm your appointment shortly.
              </span>
            </span>
          </motion.div>
        ) : null}
        {formspreeState.errors ? (
          <motion.div
            className="mb-5 flex items-center gap-3 rounded-[1.5rem] border border-rose-200 bg-rose-50 p-4 text-sm font-bold text-rose-700"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="alert"
          >
            <AlertCircle className="h-5 w-5" />
            We could not send your request. Please check your details or call the studio.
          </motion.div>
        ) : null}
      </AnimatePresence>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
        <FieldShell label="Full Name" error={errors.name}>
          <motion.input {...inputMotion} className={fieldClassName} placeholder="Your full name" autoComplete="name" aria-invalid={Boolean(errors.name)} {...register("name")} />
        </FieldShell>
        <FieldShell label="Phone" error={errors.phone}>
          <motion.input {...inputMotion} className={fieldClassName} placeholder="+1 415 555 0198" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...register("phone")} />
        </FieldShell>
        <FieldShell label="Email" error={errors.email}>
          <motion.input {...inputMotion} className={fieldClassName} placeholder="you@example.com" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email")} />
        </FieldShell>
        <FieldShell label="Service" error={errors.service}>
          <select className={fieldClassName} aria-invalid={Boolean(errors.service)} {...register("service")}>
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </FieldShell>
        <FieldShell label="Preferred Doctor" error={errors.doctor}>
          <select className={fieldClassName} aria-invalid={Boolean(errors.doctor)} {...register("doctor")}>
            <option value="">Select doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.name} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </FieldShell>
        <FieldShell label="Date" error={errors.date}>
          <input type="date" className={fieldClassName} aria-invalid={Boolean(errors.date)} {...register("date")} />
        </FieldShell>
        <FieldShell label="Time" error={errors.time}>
          <input type="time" className={fieldClassName} aria-invalid={Boolean(errors.time)} {...register("time")} />
        </FieldShell>
        <FieldShell label="Message" error={errors.message}>
          <textarea className={cn(fieldClassName, "min-h-32 resize-none py-3 sm:min-h-full")} placeholder="Tell us what you need" aria-invalid={Boolean(errors.message)} {...register("message")} />
        </FieldShell>
        <div className="sm:col-span-2">
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Sending request
              </>
            ) : (
              <>
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="Patients notice the difference before treatment even begins."
    >
      <div className="container-page">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="min-w-0 flex-[0_0_100%] rounded-[2rem] border border-brand-border bg-white p-7 shadow-soft md:flex-[0_0_50%] lg:flex-[0_0_38%]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-brand-page">
                    <Image src={testimonial.image} alt={testimonial.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <Stars />
                    <h3 className="mt-2 font-black text-brand-ink">{testimonial.name}</h3>
                  </div>
                  </div>
                  <Quote className="h-8 w-8 shrink-0 text-brand-blue/20" />
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-600">&ldquo;{testimonial.review}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={scrollPrev}
            className="grid h-12 w-12 place-items-center rounded-full border border-brand-border bg-white shadow-sm transition hover:text-brand-blue"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={scrollNext}
            className="grid h-12 w-12 place-items-center rounded-full border border-brand-border bg-white shadow-sm transition hover:text-brand-blue"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<(typeof gallery)[number] | null>(null);

  return (
    <SectionShell
      id="gallery"
      eyebrow="Gallery"
      title="A studio built to feel bright, exact, and deeply calm."
      copy="Explore moments from our clinical rooms, diagnostics workflow, and patient consultation experience."
    >
      <div className="container-page">
        <motion.div
          className="grid auto-rows-[260px] gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {gallery.map((item) => (
            <motion.button
              key={`${item.alt}-${item.span}`}
              type="button"
              className={cn("group relative overflow-hidden rounded-[2rem] border border-brand-border bg-white shadow-soft", item.span)}
              onClick={() => setActiveImage(item)}
              variants={fadeUp}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-brand-ink/0 transition group-hover:bg-brand-ink/30" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-brand-ink opacity-0 shadow-soft transition group-hover:opacity-100">
                View
                <ExternalLink className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-brand-ink/80 p-5 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              aria-label="Close gallery image"
              onClick={() => setActiveImage(null)}
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-brand-ink"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
            >
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" className="object-cover" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell id="faq" eyebrow="FAQ" title="Clear answers before you sit in the chair.">
      <div className="container-page max-w-4xl">
        <div className="grid gap-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-[1.5rem] border border-brand-border bg-white shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-black text-brand-ink"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  {faq.question}
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-brand-blue transition", open && "rotate-180")} />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 leading-7 text-slate-600">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

export function ContactSection() {
  return (
    <SectionShell id="contact" className="bg-white/70">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.86fr]">
        <div className="min-h-[460px] overflow-hidden rounded-[2rem] border border-brand-border bg-white shadow-soft">
          <iframe
            title="Lumine Dental Studio map"
            src="https://www.google.com/maps?q=San%20Francisco%20CA&output=embed"
            className="h-full min-h-[460px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="heading-2">Visit a studio designed around clarity.</h2>
          <div className="mt-8 grid gap-4">
            {[
              { icon: Navigation, label: "Address", value: "1288 Meridian Avenue, San Francisco, CA 94109" },
              { icon: Phone, label: "Phone", value: "+1 415 555 0198" },
              { icon: Mail, label: "Email", value: "hello@luminedental.studio" },
              { icon: Clock3, label: "Hours", value: "Mon-Fri 8:00-18:00, Sat 9:00-14:00" },
              { icon: ShieldCheck, label: "Emergency hotline", value: "+1 415 555 0111" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 rounded-[1.5rem] border border-brand-border bg-white p-5 shadow-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                    <p className="mt-1 font-bold text-brand-ink">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function FinalCtaSection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-blue px-6 py-14 text-center text-white shadow-glow sm:px-10">
          <Sparkles className="mx-auto h-8 w-8" />
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-black leading-tight sm:text-5xl">
            Your next dental visit can feel simpler, calmer, and beautifully planned.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#appointment"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-black text-brand-blue transition hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="tel:+14155550198"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-black text-white transition hover:bg-white/10"
            >
              Call the studio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
