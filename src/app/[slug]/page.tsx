import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Frame,
  Label,
  PageHero,
  SiteFooter,
  SiteHeader,
} from "@/components/site-chrome";
import { getSitePage, sitePages } from "@/lib/site-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    return {
      title: "Page not found | Iron County Museum",
    };
  }

  return {
    title: `${page.title} | Iron County Museum`,
    description: page.dek,
    openGraph: {
      title: page.title,
      description: page.dek,
      images: [page.heroImage],
    },
  };
}

export default async function SiteContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSitePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#efe5d2] text-[#201a13]">
      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.08] [background-image:radial-gradient(#3d2f23_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
      <SiteHeader />
      <PageHero
        title={page.title}
        kicker={page.kicker}
        dek={page.dek}
        image={page.heroImage}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-10">
          {page.sections.map((section, index) => (
            <section
              key={section.title}
              className={
                index % 2 === 0
                  ? "grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
                  : "grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-start"
              }
            >
              <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                <Label>{String(index + 1).padStart(2, "0")}</Label>
                <h2 className="mt-5 max-w-3xl text-balance font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                  {section.title}
                </h2>
              </div>

              <Frame>
                <div className="p-6 sm:p-8 lg:p-10">
                  {section.body ? (
                    <div className="space-y-5 text-lg leading-8 text-stone-700">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.cards ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      {section.cards.map((card) => (
                        <article
                          key={card.title}
                          className="rounded-[1.35rem] bg-[#efe5d2] p-5"
                        >
                          {card.eyebrow ? (
                            <p className="text-sm font-semibold text-[#8a5a2d]">
                              {card.eyebrow}
                            </p>
                          ) : null}
                          <h3 className="mt-2 text-2xl font-black tracking-[-0.03em]">
                            {card.title}
                          </h3>
                          <p className="mt-3 leading-7 text-stone-700">
                            {card.body}
                          </p>
                        </article>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets ? (
                    <div className="flex flex-wrap gap-3">
                      {section.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full bg-[#efe5d2] px-4 py-2 text-sm font-bold text-[#2f4a32]"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Frame>
            </section>
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
