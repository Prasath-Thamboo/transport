export default function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="rounded-xl bg-gold text-black p-2 shrink-0 shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            {icon}
          </div>
        ) : null}

        <div>
          <h3 className="text-base font-semibold text-text">{title}</h3>
          <div className="mt-2 text-sm leading-6 text-text-muted">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
