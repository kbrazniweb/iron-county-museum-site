export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "log-cabin-capital",
    title: "Why Iron County is Michigan's Log Cabin Capital",
    dek: "A short guide to the historic buildings that make the museum grounds feel like a walk through settlement history.",
    date: "May 12, 2026",
    category: "Exhibits",
    readTime: "4 min read",
    image:
      "https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/Log-Cabin.jpeg?w=1400&ssl=1",
    imageAlt: "Historic log cabin on the Iron County Museum grounds",
    body: [
      "The Iron County Museum is known as the Log Cabin Capital of Michigan because the grounds preserve a rare collection of historic log structures in one walkable place. Visitors can move from domestic spaces to work settings and see how architecture, tools, and daily routines fit together.",
      "The strongest way to experience the cabins is slowly. Look for the differences between a family home, a logging camp, a barn, and a sauna. Each structure tells a different part of the county's story, from settlement to labor to community life.",
      "For first-time visitors, the cabins are also a practical starting point. They set the tone for the rest of the museum: local, tactile, and built around objects that still feel close to the people who used them.",
    ],
  },
  {
    slug: "planning-a-summer-visit",
    title: "How to plan a summer visit to the museum",
    dek: "Hours, timing, accessibility notes, and a simple route for making the most of the grounds.",
    date: "April 28, 2026",
    category: "Visit",
    readTime: "3 min read",
    image:
      "https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/Museum-Map.jpeg?w=1400&ssl=1",
    imageAlt: "Map of the Iron County Museum campus",
    body: [
      "The exhibit season runs June through September, with weekday hours from 9am to 3pm. During June, July, and August, the museum also opens on Saturdays from 10am to 2pm.",
      "Most visitors should plan for at least two to three hours. If you like reading labels, browsing galleries, or spending time with archival material, a half day is more realistic.",
      "Groups and special tours are welcome by advanced arrangement. Visitors with limited mobility should call ahead to ask about building access and golf cart availability, since the museum includes outdoor paths and historic structures.",
    ],
  },
  {
    slug: "lee-leblanc-gallery",
    title: "Inside the Lee LeBlanc Memorial Art Gallery",
    dek: "A look at the Iron County artist whose work moved through animation, film production, and wildlife painting.",
    date: "March 19, 2026",
    category: "Art",
    readTime: "4 min read",
    image:
      "https://i0.wp.com/ironcountymuseum.org/wp-content/uploads/2022/06/Lee-LaBlanc.jpeg?w=1400&ssl=1",
    imageAlt: "Lee LeBlanc Memorial Art Gallery exhibit",
    body: [
      "The Lee LeBlanc Memorial Art Gallery adds a different rhythm to the museum visit. After moving through outdoor structures and local history exhibits, the gallery shifts attention toward image-making, observation, and craft.",
      "LeBlanc's career connected Iron County to broader creative industries, including animation and film production. The gallery preserves that range while keeping the work rooted in the place that shaped him.",
      "It is worth visiting the gallery before leaving the grounds, even on a short trip. The paintings offer a quieter ending and a reminder that local history includes artists as much as miners, loggers, merchants, and families.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
