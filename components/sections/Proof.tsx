"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PROOF_ITEMS } from "@/lib/copy";

export function ProofSection() {
  const reduceMotion = useReducedMotion();
  const [brokenIds, setBrokenIds] = useState<string[]>([]);

  const brokenSet = useMemo(() => new Set(brokenIds), [brokenIds]);

  const markBroken = (id: string) => {
    setBrokenIds((current) => (current.includes(id) ? current : [...current, id]));
  };

  return (
    <section id="proof" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Proof</h2>
        <p className="text-muted-foreground">Real output only: spreadsheets + QA report.</p>
      </div>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={
          reduceMotion
            ? undefined
            : {
                hidden: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.08, duration: 0.35 },
                },
              }
        }
        className="grid gap-4 sm:grid-cols-2"
      >
        {PROOF_ITEMS.map((item) => {
          const isMissing = brokenSet.has(item.id);

          return (
            <motion.div
              key={item.id}
              variants={
                reduceMotion ? undefined : { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }
              }
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-zoom-in overflow-hidden border-border/70 transition hover:-translate-y-0.5 hover:shadow-md">
                    <CardContent className="space-y-3 p-3">
                      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-muted/40">
                        {isMissing ? (
                          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-muted-foreground">
                            Add image: {item.src}
                          </div>
                        ) : (
                          <Image
                            src={item.src}
                            alt={item.caption}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            onError={() => markBroken(item.id)}
                          />
                        )}
                      </div>
                      <p className="text-sm font-medium">{item.caption}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-5xl border-border/70 p-3 sm:p-4">
                  <DialogHeader>
                    <DialogTitle>{item.caption}</DialogTitle>
                    <DialogDescription>Click or tap outside to close.</DialogDescription>
                  </DialogHeader>
                  <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-muted/40">
                    {isMissing ? (
                      <div className="flex h-full items-center justify-center px-4 text-center text-sm text-muted-foreground">
                        Add image: {item.src}
                      </div>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className="object-contain"
                        onError={() => markBroken(item.id)}
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
