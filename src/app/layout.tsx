import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron County Museum | Caspian, Michigan",
  description:
    "Plan a visit to the Iron County Museum in Caspian, Michigan: 25 buildings, 100+ exhibits, art galleries, events, membership, and visitor information.",
  openGraph: {
    title: "Iron County Museum | Caspian, Michigan",
    description:
      "Explore one of the Upper Peninsula's largest outdoor museum complexes.",
    images: [
      "https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/Log-Cabin.jpeg?w=1200&ssl=1",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
