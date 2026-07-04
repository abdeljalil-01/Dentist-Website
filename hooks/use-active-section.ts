"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
      .map((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
        );

        observer.observe(section);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [ids]);

  return activeSection;
}
