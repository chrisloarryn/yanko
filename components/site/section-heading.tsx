type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-construction-secondary/90">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-construction-neutral md:text-5xl md:leading-[1.06]">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-construction-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
