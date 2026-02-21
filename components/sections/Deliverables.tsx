import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DELIVERABLES } from "@/lib/copy";

export function DeliverablesSection() {
  return (
    <section id="deliverables" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What you get</h2>
        <p className="text-muted-foreground">Clear scope by stage, with delivery-focused handoff.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {DELIVERABLES.map((item) => (
          <Card key={item.title} className="border-border/70">
            <CardHeader className="space-y-3">
              <Badge variant="secondary" className="w-fit">
                Package
              </Badge>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
