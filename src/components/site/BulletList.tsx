import { cn } from "@/lib/utils";

type Tone = "dark" | "light";

interface BulletListProps {
  items: string[];
  tone?: Tone;
  className?: string;
}

/**
 * Reusable lightsaber-style bullet list.
 * A bright baby-blue glowing bar precedes each item to keep
 * alignment and accent treatment consistent across sections.
 */
export function BulletList({ items, tone = "dark", className }: BulletListProps) {
  const text = tone === "dark" ? "text-white/90" : "text-charcoal";
  return (
    <ul
      className={cn(
        "mx-auto flex w-full max-w-md flex-col gap-5",
        className,
      )}
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            "flex items-start gap-5 text-sm sm:text-base leading-relaxed",
            text,
          )}
        >
          <span aria-hidden className="saber-bar mt-[0.6rem]" />
          <span className="flex-1 text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}