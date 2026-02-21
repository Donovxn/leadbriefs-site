import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEMO_PRICE, WEEK_PRICE } from "@/lib/constants";

export function PricingSection() {
  return (
    <section id="pricing" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pricing</h2>
        <p className="text-muted-foreground">Placeholder pricing is live. Replace constants when ready.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/70">
          <CardHeader className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              48h demo
            </Badge>
            <CardTitle>{DEMO_PRICE}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Includes 10 leads, source-grounded triggers, 2 openers + 2 follow-ups each, QA micro-report, and send order.
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardHeader className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              7-day sprint
            </Badge>
            <CardTitle>{WEEK_PRICE}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Includes 5 daily packs (Mon–Fri), 25–50 leads/day, and a weekly calibration note.
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">
        Delivery guarantee only: make-up pack or pro-rated refund for missed SLA.
      </p>
    </section>
  );
}
