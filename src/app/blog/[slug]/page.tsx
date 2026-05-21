import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPost } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Article not found | Iron County Museum",
    };
  }

  return {
    title: `${post.title} | Iron County Museum`,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      images: [post.image],
    },
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#8a5a2d]">
      {children}
    </p>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#efe5d2] text-[#201a13]">
      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.08] [background-image:radial-gradient(#3d2f23_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
      <header className="relative z-20 mx-auto max-w-7xl px-4 pt-5 sm:px-8 lg:px-10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-[#fffaf0]/86 p-2 shadow-[0_16px_50px_rgba(67,48,31,0.12)] ring-1 ring-stone-950/10">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-black tracking-[-0.01em]"
          >
            Iron County Museum
          </Link>
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-stone-950/5 hover:text-stone-950"
          >
            Blog
          </Link>
        </nav>
      </header>

      <article className="relative mx-auto max-w-5xl px-4 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="animate-rise">
          <Label>{post.category}</Label>
          <h1 className="mt-6 max-w-4xl text-balance font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            {post.title}
          </h1>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-stone-600">
            <time>{post.date}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readTime}</span>
          </div>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-stone-700">
            {post.dek}
          </p>
        </div>

        <div className="animate-rise animation-delay-150 mt-12 rounded-[2rem] bg-stone-950/[0.055] p-1.5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(2rem-0.375rem)]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="animate-rise mx-auto mt-14 max-w-3xl rounded-[2rem] bg-[#fffaf0] p-6 shadow-[0_24px_80px_rgba(67,48,31,0.12)] ring-1 ring-stone-950/8 sm:p-10">
          <div className="space-y-7 text-lg leading-8 text-stone-700">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/blog"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#201a13] py-2 pl-5 pr-1.5 text-sm font-bold text-[#fffaf0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#3a2d20] active:scale-[0.98]"
          >
            Back to blog
            <span className="grid size-8 place-items-center rounded-full bg-white/12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1 group-hover:bg-[#fffaf0] group-hover:text-[#201a13]">
              ←
            </span>
          </Link>
        </div>
      </article>
    </main>
  );
}
