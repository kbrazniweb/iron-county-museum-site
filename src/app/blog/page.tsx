import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-chrome";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Iron County Museum",
  description:
    "Stories, exhibit notes, and visitor guides from the Iron County Museum in Caspian, Michigan.",
};

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

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efe5d2] text-[#201a13]">
      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.08] [background-image:radial-gradient(#3d2f23_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
      <SiteHeader />

      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:px-10">
        <div className="animate-rise max-w-4xl">
          <Label>Museum blog</Label>
          <h1 className="mt-6 text-balance font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Notes from the grounds, galleries, and archives.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            Exhibit stories, visit planning, and local history notes from the
            Iron County Museum.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {blogPosts.map((post, index) => (
            <Frame
              key={post.slug}
              className={`animate-rise ${index === 0 ? "lg:col-span-6" : "lg:col-span-3"}`}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-0.375rem)]">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2 text-sm font-semibold text-stone-500">
                    <span>{post.category}</span>
                    <span aria-hidden="true">/</span>
                    <time>{post.date}</time>
                  </div>
                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#8a5a2d]"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 leading-7 text-stone-700">{post.dek}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group mt-7 inline-flex w-max items-center gap-3 rounded-full bg-[#201a13] py-2 pl-5 pr-1.5 text-sm font-bold text-[#fffaf0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#3a2d20] active:scale-[0.98]"
                  >
                    Read article
                    <span className="grid size-8 place-items-center rounded-full bg-white/12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:bg-[#fffaf0] group-hover:text-[#201a13]">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </Frame>
          ))}
        </div>
      </section>
    </main>
  );
}
