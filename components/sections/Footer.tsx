import { SUPPORT_EMAIL } from "@/lib/constants";

export function FooterSection() {
  return (
    <footer className="border-t border-border/70 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          Support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
        <p>Triggers are based on visible sources.</p>
      </div>
    </footer>
  );
}
