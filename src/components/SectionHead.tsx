export function SectionHead({
  label,
  title,
  children,
  tone = "light",
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-stone/55" : "text-ink-3";
  const body = tone === "dark" ? "text-stone/75" : "text-ink-2";
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
      <p className={`eyebrow lg:col-span-3 lg:pt-3 ${muted}`}>{label}</p>
      <div className="lg:col-span-9">
        <h2 className="display max-w-4xl text-[clamp(2.3rem,5vw,4.4rem)]">{title}</h2>
        {children && <p className={`mt-6 max-w-2xl text-[1.05rem] leading-relaxed ${body}`}>{children}</p>}
      </div>
    </div>
  );
}
