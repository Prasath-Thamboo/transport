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
    <div className="card card-hover group">
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
            {icon}
          </div>
        ) : null}

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-text">{title}</h3>
          <div className="mt-2 text-sm leading-6 text-text-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}
