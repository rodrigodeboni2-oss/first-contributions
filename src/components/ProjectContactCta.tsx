import Link from "next/link";
import Reveal from "@/components/Reveal";

type Props = {
  title: string;
  description: string;
  eyebrow?: string;
  variant?: "institutional" | "event" | "sport" | "portfolio";
  className?: string;
};

const accents = {
  institutional: "from-cyan-300/20 via-sky-300/5 to-transparent",
  event: "from-amber-300/20 via-orange-200/5 to-transparent",
  sport: "from-sky-300/20 via-amber-300/5 to-transparent",
  portfolio: "from-white/15 via-sky-200/5 to-transparent",
};

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
      <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4a8.4 8.4 0 1 1 15.6-4.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.1 7.8c.2-.5.4-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.6 2 2.8 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.5 0 .3-.2 1.5-1.1 2.1-.5.4-1.2.7-2.1.5-1.1-.2-2.8-.8-4.7-2.5-1.5-1.4-2.5-3.1-2.8-4.2-.3-1 0-1.8.3-2.4Z" fill="currentColor" />
    </svg>
  );
}

export default function ProjectContactCta({ title, description, eyebrow = "Conversa direta", variant = "institutional", className = "" }: Props) {
  return (
    <Reveal className={className}>
      <section className="group relative isolate overflow-hidden rounded-[2.75rem_2.75rem_0.75rem_2.75rem] bg-[linear-gradient(135deg,#082f55_0%,#0d4f86_48%,#1265ab_100%)] px-6 py-10 text-white shadow-[0_28px_80px_rgba(5,42,76,0.3)] ring-1 ring-white/10 md:px-10 md:py-12 lg:px-14 lg:py-14">
        <div aria-hidden="true" className={`absolute -right-24 -top-32 h-96 w-96 rounded-full bg-radial ${accents[variant]} blur-2xl`} />
        <svg aria-hidden="true" viewBox="0 0 500 220" className="pointer-events-none absolute -bottom-10 right-0 h-64 w-[34rem] max-w-none text-white/[0.08]" fill="none">
          <path d="M20 190 170 42l86 84L390 12l90 78" stroke="currentColor" strokeWidth="2" />
          <path d="M70 220 220 72l86 84L440 42" stroke="currentColor" strokeWidth="1" />
          <circle cx="170" cy="42" r="5" fill="#fcd34d" /><circle cx="256" cy="126" r="4" fill="currentColor" /><circle cx="390" cy="12" r="5" fill="#fcd34d" />
        </svg>
        <div className="relative grid items-end gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-300"><span aria-hidden="true" className="h-px w-10 bg-amber-300" />{eyebrow}</div>
            <h2 className="mt-5 font-display text-3xl leading-[1.08] text-white md:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky-100 md:text-lg">{description}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col lg:items-stretch">
            <a href="https://wa.me/5571999816999" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-amber-300 px-6 py-3.5 text-center font-bold text-[#082f55] shadow-[0_14px_35px_rgba(251,191,36,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-[0_18px_42px_rgba(251,191,36,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 motion-reduce:transform-none motion-reduce:transition-none"><WhatsAppIcon />Fale agora com o Ney Campello</a>
            <Link href="/contato" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/10 px-6 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-white/70 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60 motion-reduce:transition-none">Solicitar proposta <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
