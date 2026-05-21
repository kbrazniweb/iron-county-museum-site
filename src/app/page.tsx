import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-chrome";
import { blogPosts } from "@/lib/blog";

const exhibits = [
  {
    title: "Log Cabin Capital of Michigan",
    body: "Historic log structures across the grounds, including homestead, cabin, barn, sauna, playhouse, and logging camp settings.",
    image:
      "https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/Log-Cabin.jpeg?w=1200&ssl=1",
  },
  {
    title: "Lee LeBlanc Memorial Art Gallery",
    body: "More than 200 works from the Iron County artist whose career included animation, film production, and award-winning wildlife painting.",
    image:
      "https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/Lee-LaBlanc.jpeg?w=1200&ssl=1",
  },
  {
    title: "Carrie Jacobs-Bond House",
    body: "A restored 1890-1910 period home honoring the composer who remembered her Iron River years as among her happiest.",
    image:
      "https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/House.jpeg?w=1200&ssl=1",
  },
];

const visitDetails = [
  ["Exhibits", "June-September", "Monday-Friday, 9am-3pm"],
  ["Summer Saturdays", "June-August", "10am-2pm"],
  ["Office, shop, archives", "Year-round", "Monday-Friday, 9am-3pm"],
];

const admissions = [
  ["Adults", "$15"],
  ["Students", "$10"],
  ["Children 5 and under", "Free"],
  ["Group of 5-7", "$50"],
  ["Group of 8-10", "$75"],
  ["Military and seniors", "10% off"],
];

const events = [
  {
    date: "June 19, 2026",
    title: "History Happy Hour",
    meta: "6-8pm at Toti's Tavern",
  },
  {
    date: "July 17, 2026",
    title: "History Happy Hour",
    meta: "Town hall-style county history conversation",
  },
  {
    date: "August 21, 2026",
    title: "History Happy Hour",
    meta: "Refreshments, memories, neighbors",
  },
  {
    date: "October 3, 2026",
    title: "A Night at the Races",
    meta: "Fundraising evening, 5-9pm",
  },
];

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="grid size-8 place-items-center rounded-full bg-stone-950/10 text-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:bg-stone-950 group-hover:text-[#f6efe3]"
    >
      ↗
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#8a5a2d]">
      {children}
    </p>
  );
}

function Frame({
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efe5d2] text-[#201a13]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-20 focus:rounded-full focus:bg-[#201a13] focus:px-5 focus:py-3 focus:text-[#fffaf0]"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.08] [background-image:radial-gradient(#3d2f23_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_20%_12%,rgba(138,90,45,0.22),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(63,88,66,0.2),transparent_30%)]" />

      <SiteHeader />

      <section
        id="top"
        className="relative mx-auto grid min-h-[100dvh] max-w-7xl gap-10 px-4 py-20 sm:px-8 sm:py-28 md:grid-cols-[0.95fr_1.05fr] md:items-center lg:px-10"
      >
        <div className="animate-rise">
          <Label>Caspian, Michigan</Label>
          <h1 className="mt-6 max-w-4xl text-balance font-serif text-6xl leading-[0.9] tracking-[-0.04em] text-[#201a13] sm:text-7xl lg:text-8xl">
            A full day with Iron County&apos;s past.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            Explore one of the Upper Peninsula&apos;s largest outdoor museum
            complexes: 25 buildings, 100+ exhibits, two art galleries, and the
            state-designated Log Cabin Capital of Michigan.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#visit"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#201a13] py-2 pl-6 pr-2 text-base font-bold text-[#fffaf0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#3a2d20] active:scale-[0.98]"
            >
              Plan your visit
              <span className="grid size-8 place-items-center rounded-full bg-white/12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:bg-[#fffaf0] group-hover:text-[#201a13]">
                ↓
              </span>
            </a>
            <a
              href="#exhibits"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#fffaf0] py-2 pl-6 pr-2 text-base font-bold text-[#201a13] shadow-[0_14px_40px_rgba(67,48,31,0.1)] ring-1 ring-stone-950/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white active:scale-[0.98]"
            >
              See exhibits
              <Arrow />
            </a>
          </div>
        </div>

        <Frame className="animate-rise animation-delay-150">
          <div className="relative min-h-[560px] overflow-hidden rounded-[calc(2rem-0.375rem)]">
            <Image
              src="https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/Log-Cabin.jpeg?w=1600&ssl=1"
              alt="Historic log cabin exhibit at the Iron County Museum"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,26,19,0.05),rgba(32,26,19,0.62))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-md rounded-[1.5rem] bg-[#fffaf0]/92 p-5 shadow-[0_18px_60px_rgba(32,26,19,0.22)]">
                <p className="text-sm font-semibold text-[#8a5a2d]">
                  Open season
                </p>
                <p className="mt-2 text-3xl font-black tracking-[-0.03em]">
                  June through September
                </p>
                <p className="mt-3 leading-7 text-stone-700">
                  Office, gift shop, and archives are open year-round on
                  weekdays.
                </p>
              </div>
            </div>
          </div>
        </Frame>
      </section>

      <section
        id="content"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="grid gap-6 md:grid-cols-12">
          <Frame className="animate-rise md:col-span-7">
            <div id="visit" className="p-6 sm:p-9 lg:p-12">
              <Label>Visit</Label>
              <h2 className="mt-5 max-w-3xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Give yourself time to wander.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700">
                Most groups spend 2-3 hours on the grounds, and some visitors
                need 4+ hours to explore the buildings, galleries, archives, and
                outdoor exhibits.
              </p>
            </div>
          </Frame>

          <div className="grid gap-4 md:col-span-5">
            {visitDetails.map(([title, season, hours], index) => (
              <Frame
                key={title}
                className={`animate-rise ${index === 1 ? "md:-translate-x-5" : ""}`}
              >
                <article className="p-5">
                  <p className="text-sm font-semibold text-[#8a5a2d]">
                    {season}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-stone-700">{hours}</p>
                </article>
              </Frame>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="animate-rise">
            <Label>Admission</Label>
            <h2 className="mt-5 max-w-2xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Suggested donations, clear before you arrive.
            </h2>
          </div>
          <p className="animate-rise max-w-2xl text-lg leading-8 text-stone-700">
            Groups and guided tours are welcome by advanced arrangement. For
            limited mobility, call ahead to ask about complimentary golf cart
            availability and building access.
          </p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {admissions.map(([label, value]) => (
            <div
              key={label}
              className="animate-rise rounded-[1.5rem] bg-[#fffaf0] p-5 shadow-[0_18px_50px_rgba(67,48,31,0.1)] ring-1 ring-stone-950/8"
            >
              <p className="text-sm text-stone-600">{label}</p>
              <p className="mt-2 font-mono text-3xl font-black tabular-nums tracking-[-0.04em]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="exhibits"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="animate-rise max-w-3xl">
          <Label>Exhibits</Label>
          <h2 className="mt-5 text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            Buildings, galleries, and rooms with local memory still inside.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {exhibits.map((exhibit, index) => (
            <Frame
              key={exhibit.title}
              className={`animate-rise ${index === 0 ? "lg:col-span-6" : "lg:col-span-3"}`}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-0.375rem)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={exhibit.image}
                    alt={exhibit.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-black tracking-[-0.03em]">
                    {exhibit.title}
                  </h3>
                  <p className="mt-4 leading-7 text-stone-700">
                    {exhibit.body}
                  </p>
                </div>
              </article>
            </Frame>
          ))}
        </div>
      </section>

      <section
        id="events"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <Frame className="animate-rise">
          <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <div>
              <Label>2026 events</Label>
              <h2 className="mt-5 max-w-2xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Reasons to come back after your first visit.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-700">
                History Happy Hour returns on summer Fridays, followed by
                community fundraisers and seasonal programs.
              </p>
            </div>
            <div className="grid gap-3">
              {events.map((event) => (
                <article
                  key={`${event.date}-${event.title}`}
                  className="rounded-[1.25rem] bg-[#efe5d2] p-5"
                >
                  <p className="font-mono text-sm font-bold tabular-nums text-[#8a5a2d]">
                    {event.date}
                  </p>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="text-2xl font-black tracking-[-0.03em]">
                      {event.title}
                    </h3>
                    <p className="text-stone-700">{event.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Frame>
      </section>

      <section
        id="blog"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="animate-rise">
            <Label>Blog</Label>
            <h2 className="mt-5 max-w-2xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Stories from the grounds and galleries.
            </h2>
          </div>
          <div className="animate-rise max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-stone-700">
              Short exhibit notes, visitor guides, and local history pieces for
              people planning a trip or revisiting a favorite room.
            </p>
            <Link
              href="/blog"
              className="group mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#201a13] py-2 pl-6 pr-2 text-base font-bold text-[#fffaf0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#3a2d20] active:scale-[0.98]"
            >
              View all stories
              <span className="grid size-8 place-items-center rounded-full bg-white/12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:bg-[#fffaf0] group-hover:text-[#201a13]">
                →
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Frame key={post.slug} className="animate-rise">
              <article className="flex h-full flex-col p-6">
                <p className="text-sm font-semibold text-[#8a5a2d]">
                  {post.category} / {post.readTime}
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#8a5a2d]"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 flex-1 leading-7 text-stone-700">
                  {post.dek}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-7 text-sm font-black text-[#201a13] underline decoration-[#8a5a2d]/40 underline-offset-4 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#8a5a2d]"
                >
                  Read article
                </Link>
              </article>
            </Frame>
          ))}
        </div>
      </section>

      <section
        id="support"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_0.82fr] md:items-center">
          <div className="animate-rise">
            <Label>Membership, donations, volunteering</Label>
            <h2 className="mt-5 max-w-3xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Help preserve the past and keep the grounds active.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700">
              Members receive free admission and added perks. Volunteers and
              donors support exhibits, programs, archives, and special events
              across the museum complex.
            </p>
          </div>
          <Frame className="animate-rise animation-delay-150">
            <div className="p-6 sm:p-8">
              <Label>Contact</Label>
              <div className="mt-6 space-y-5 text-lg">
                <p>
                  <span className="block text-sm font-semibold text-stone-500">
                    Visit
                  </span>
                  100 Brady Ave, Caspian, MI 49915
                </p>
                <p>
                  <span className="block text-sm font-semibold text-stone-500">
                    Call
                  </span>
                  <a className="font-black" href="tel:+19062652617">
                    (906) 265-2617
                  </a>
                </p>
                <p>
                  <span className="block text-sm font-semibold text-stone-500">
                    Email
                  </span>
                  <a
                    className="font-black"
                    href="mailto:info@IronCountyMuseum.org"
                  >
                    info@IronCountyMuseum.org
                  </a>
                </p>
              </div>
              <a
                href="mailto:info@IronCountyMuseum.org"
                className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#2f4a32] py-2 pl-6 pr-2 font-bold text-[#fffaf0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#243a27] active:scale-[0.98]"
              >
                Ask about tours
                <span className="grid size-8 place-items-center rounded-full bg-white/12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:bg-[#fffaf0] group-hover:text-[#243a27]">
                  →
                </span>
              </a>
            </div>
          </Frame>
        </div>
      </section>

      <footer className="relative border-t border-stone-950/10 px-4 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>Iron County Historical Museum Society</p>
          <p>100 Brady Ave, Caspian, MI 49915 · (906) 265-2617</p>
        </div>
      </footer>
    </main>
  );
}
