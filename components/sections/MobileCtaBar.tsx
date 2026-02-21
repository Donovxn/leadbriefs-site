import { Button } from "@/components/ui/button";
import { LINKEDIN_PROFILE_URL, STRIPE_DEMO_URL } from "@/lib/constants";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <Button asChild className="h-10 flex-1 rounded-full">
          <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer noopener">
            DM ‘DEMO’
          </a>
        </Button>
        <Button asChild variant="outline" className="h-10 flex-1 rounded-full">
          <a href={STRIPE_DEMO_URL} target="_blank" rel="noreferrer noopener">
            48h demo
          </a>
        </Button>
      </div>
    </div>
  );
}
