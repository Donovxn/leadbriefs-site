"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/copy";
import { LINKEDIN_PROFILE_URL, STRIPE_DEMO_URL } from "@/lib/constants";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="hero"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={reduceMotion ? undefined : { duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-7 shadow-sm backdrop-blur sm:p-10"
    >
      <div className="max-w-3xl space-y-6">
        <Badge variant="secondary">{HERO.eyebrow}</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {HERO.title}
        </h1>
        <p className="max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {HERO.subtitle}
        </p>
        <p className="text-sm text-muted-foreground">{HERO.icpLine}</p>
        <ul className="space-y-2 text-sm text-foreground sm:text-base">
          {HERO.bullets.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">{HERO.disclaimer}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" className="h-11 rounded-full px-6">
            <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer noopener">
              {HERO.primaryCta}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 rounded-full px-6">
            <a href={STRIPE_DEMO_URL} target="_blank" rel="noreferrer noopener">
              {HERO.secondaryCta}
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
