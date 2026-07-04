import {
  Activity,
  BadgeDollarSign,
  Bone,
  CalendarClock,
  Camera,
  HeartPulse,
  LucideIcon,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  WandSparkles,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const imageLibrary = {
  hero:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85",
  studio:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
  diagnostics:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
  doctorOne:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  doctorTwo:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
  doctorThree:
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=85"
};

export const trustStats = [
  { value: 5, suffix: ".0", label: "Google Rating" },
  { value: 1000, suffix: "+", label: "Happy Patients" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" }
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  accent: string;
};

export const services: Service[] = [
  {
    title: "General Dentistry",
    description: "Preventive exams, cleanings, fillings, and everyday care designed around long-term oral health.",
    icon: Smile,
    image: imageLibrary.studio,
    accent: "bg-blue-50 text-blue-600"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Natural veneers, bonding, and smile design with a refined, face-led aesthetic.",
    icon: Sparkles,
    image: imageLibrary.hero,
    accent: "bg-sky-50 text-sky-600"
  },
  {
    title: "Dental Implants",
    description: "Digitally planned implant dentistry for confident function and lifelike replacement teeth.",
    icon: Bone,
    image: imageLibrary.diagnostics,
    accent: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Root Canal",
    description: "Precise endodontic treatment with calming protocols and modern magnification.",
    icon: Microscope,
    image: imageLibrary.diagnostics,
    accent: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Orthodontics",
    description: "Clear aligner and bite correction plans that fit your schedule and smile goals.",
    icon: Activity,
    image: imageLibrary.hero,
    accent: "bg-violet-50 text-violet-600"
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle, confidence-building visits for children with preventive guidance for parents.",
    icon: HeartPulse,
    image: imageLibrary.studio,
    accent: "bg-rose-50 text-rose-600"
  },
  {
    title: "Emergency Care",
    description: "Same-day support for tooth pain, broken restorations, swelling, and dental trauma.",
    icon: Zap,
    image: imageLibrary.hero,
    accent: "bg-amber-50 text-amber-600"
  },
  {
    title: "Teeth Whitening",
    description: "Clinician-supervised whitening for a brighter smile without unnecessary sensitivity.",
    icon: WandSparkles,
    image: imageLibrary.studio,
    accent: "bg-teal-50 text-teal-600"
  }
];

export const whyChoose = [
  {
    title: "Experienced Doctors",
    body: "Board-certified clinicians with advanced training in restorative, cosmetic, and surgical dentistry.",
    icon: Stethoscope,
    className: "lg:col-span-2"
  },
  {
    title: "Latest Technology",
    body: "Digital imaging, intraoral scanning, and guided planning keep every appointment precise.",
    icon: Microscope,
    className: ""
  },
  {
    title: "Pain-Free Treatment",
    body: "Comfort-first anesthesia, calm pacing, and clear communication from start to finish.",
    icon: ShieldCheck,
    className: ""
  },
  {
    title: "Affordable Pricing",
    body: "Transparent estimates, flexible plans, and no surprise treatment fees.",
    icon: BadgeDollarSign,
    className: ""
  },
  {
    title: "Emergency Care",
    body: "Dedicated urgent care windows for sudden pain, trauma, and unexpected dental needs.",
    icon: CalendarClock,
    className: ""
  },
  {
    title: "Digital Dentistry",
    body: "A modern restorative workflow that reduces guesswork and improves fit, finish, and speed.",
    icon: Camera,
    className: "lg:col-span-2"
  }
];

export const doctors = [
  {
    name: "Dr. Sofia Bennett",
    role: "Cosmetic & Restorative Dentist",
    experience: "14 years",
    image: imageLibrary.doctorOne
  },
  {
    name: "Dr. Elias Morgan",
    role: "Implant Dentist",
    experience: "16 years",
    image: imageLibrary.doctorTwo
  },
  {
    name: "Dr. Maya Chen",
    role: "Orthodontics & Family Care",
    experience: "11 years",
    image: imageLibrary.doctorThree
  }
];

export const testimonials = [
  {
    name: "Amira Collins",
    review:
      "The studio feels calm and exacting. Every step was explained clearly, and my veneer result looks completely natural.",
    image: imageLibrary.doctorOne
  },
  {
    name: "Noah Ellison",
    review:
      "I came in with severe tooth pain and left with a same-day plan, real relief, and no pressure. Exceptional care.",
    image: imageLibrary.doctorTwo
  },
  {
    name: "Priya Shah",
    review:
      "The digital scan, whitening, and follow-up were seamless. It felt like dentistry finally caught up with modern service.",
    image: imageLibrary.doctorThree
  }
];

export const faqs = [
  {
    question: "Do you accept emergency dental appointments?",
    answer:
      "Yes. We reserve same-day windows for urgent pain, swelling, broken teeth, and dental trauma. Call the emergency line for the fastest scheduling."
  },
  {
    question: "Can I book a consultation before choosing a treatment?",
    answer:
      "Absolutely. Consultations include a focused exam, digital imaging when needed, and a clear treatment roadmap with pricing before you decide."
  },
  {
    question: "Do you offer cosmetic smile design?",
    answer:
      "Yes. We use facial analysis, shade planning, photography, and trial design options to keep cosmetic dentistry natural and personal."
  },
  {
    question: "Is the clinic suitable for children?",
    answer:
      "Lumine welcomes families and children. Our pediatric appointments are gentle, educational, and paced to build confidence."
  },
  {
    question: "What payment options are available?",
    answer:
      "We provide transparent estimates and staged treatment options. Our care team can review flexible payment pathways during your visit."
  }
];

export const gallery = [
  { src: imageLibrary.studio, alt: "Bright dental treatment suite", span: "md:row-span-2" },
  { src: imageLibrary.hero, alt: "Dentist reviewing a digital scan with a patient", span: "" },
  { src: imageLibrary.diagnostics, alt: "Dental imaging and diagnostics review", span: "" },
  { src: imageLibrary.studio, alt: "Minimal clinical workspace", span: "" },
  { src: imageLibrary.hero, alt: "Modern consultation room", span: "md:col-span-2" }
];

export const timeline = [
  "Digital smile assessment",
  "Comfort-led treatment planning",
  "Precision care appointment",
  "Guided recovery and follow-up"
];
