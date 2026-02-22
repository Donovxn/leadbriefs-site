import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEMO_PRICE, STRIPE_DEMO_URL, STRIPE_WEEK_URL, WEEK_PRICE } from "@/lib/constants";
import { PRICING } from "@/lib/copy";

export function PricingSection() {
  return (
    <section id="pricing" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pricing</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/70">
          <CardHeader className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              {PRICING.demoLabel}
            </Badge>
            <CardTitle>{DEMO_PRICE}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              Includes 10 leads, source-grounded triggers, 2 openers + 2 follow-ups each, QA micro-report, and send order.
            </p>
            <Button asChild className="mt-4 w-full rounded-full">
              <a href={STRIPE_DEMO_URL} target="_blank" rel="noreferrer noopener">
                {PRICING.demoCta}
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardHeader className="space-y-3">
            <Badge variant="secondary" className="w-fit">
              {PRICING.weekLabel}
            </Badge>
            <CardTitle>{WEEK_PRICE}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Includes 5 daily packs (Mon–Fri), 25–50 leads/day, and a weekly calibration note.</p>
            <Button asChild variant="outline" className="mt-4 w-full rounded-full">
              <a href={STRIPE_WEEK_URL} target="_blank" rel="noreferrer noopener">
                {PRICING.weekCta}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">{PRICING.disclaimer}</p>
    </section>
  );
}
