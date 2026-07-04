"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  copy?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, eyebrow, title, copy, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("section-pad scroll-mt-28", className)}>
      {(eyebrow || title || copy) && (
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
        >
          {eyebrow ? <p className="eyebrow mx-auto mb-4 justify-center">{eyebrow}</p> : null}
          {title ? <h2 className="heading-2">{title}</h2> : null}
          {copy ? <p className="mt-5 text-balance text-base leading-8 text-slate-600">{copy}</p> : null}
        </motion.div>
      )}
      {children}
    </section>
  );
}
