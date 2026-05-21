import Image from "next/image";
import Link from "next/link";
import { logoUrl, mainNav } from "@/lib/site-pages";

export function SiteHeader() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 px-4 pt-5 sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-[#fffaf0]/90 p-2 shadow-[0_16px_50px_rgba(32,26,19,0.18)] ring-1 ring-stone-950/10">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
          aria-label="Iron County Museum home"
        >
          <Image
            src={logoUrl}
            alt="Iron County Historical Museum logo"
            width={132}
            height={39}
            className="h-9 w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-1 text-sm font-medium text-stone-600 lg:flex">
          {mainNav.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="rounded-full px-4 py-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-stone-950/5 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-stone-950/5 hover:text-stone-950"
          >
            Blog
          </Link>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-[#2f4a32] py-1.5 pl-4 pr-1.5 text-sm font-bold text-[#fffaf0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#243a27] active:scale-[0.98]"
        >
          Contact
          <span className="grid size-8 place-items-center rounded-full bg-white/12 text-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:bg-[#fffaf0] group-hover:text-[#243a27]">
            →
          </span>
        </Link>
      </nav>
    </header>
  );
}

export function PageHero({
  title,
  kicker,
  dek,
  image,
}: {
  title: string;
  kicker: string;
  dek: string;
  image: string;
}) {
  return (
    <section className="relative isolate flex min-h-[100dvh] items-end overflow-hidden px-4 pb-16 pt-36 text-[#fffaf0] sm:px-8 sm:pb-24 lg:px-10">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(32,26,19,0.18)_0%,rgba(32,26,19,0.52)_45%,rgba(32,26,19,0.92)_100%)]" />
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#d5a35f]">
          {kicker}
        </p>
        <h1 className="mt-6 max-w-5xl text-balance font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#eadfce] sm:text-xl">
          {dek}
        </p>
      </div>
    </section>
  );
}

export function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[2rem] bg-stone-950/[0.055] p-1.5 ${className}`}>
      <div className="h-full rounded-[calc(2rem-0.375rem)] bg-[#fffaf0] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_24px_80px_rgba(67,48,31,0.12)]">
        {children}
      </div>
    </div>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#8a5a2d]">
      {children}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-stone-950/10 px-4 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
        <p>Iron County Historical Museum Society</p>
        <p>100 Brady Ave, Caspian, MI 49915 · (906) 265-2617</p>
      </div>
    </footer>
  );
}
