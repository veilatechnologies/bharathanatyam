export default function Marquee() {
  const text = "SEMI KANCHIPURAM SILK • BESPOKE TAILORING • CLASSICAL ELEGANCE • HANDWOVEN TRADITION • ";
  return (
    <div className="w-full bg-foreground text-background overflow-hidden py-4 border-y border-foreground/20">
      <div className="whitespace-nowrap flex animate-marquee w-max">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mx-4">{text}</span>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mx-4">{text}</span>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mx-4">{text}</span>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mx-4">{text}</span>
      </div>
    </div>
  );
}
