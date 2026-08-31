interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="w-full max-w-none">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0759E6]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold text-[#071B46] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#64748B]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
