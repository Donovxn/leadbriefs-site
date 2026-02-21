import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HOW_IT_WORKS } from "@/lib/copy";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
        <p className="text-muted-foreground">Three steps from first DM to your first delivery.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {HOW_IT_WORKS.map((item) => (
          <Card key={item.step} className="border-border/70">
            <CardHeader>
              <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground">{item.step}</p>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
