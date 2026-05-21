export type InfoCard = {
  title: string;
  eyebrow?: string;
  body: string;
};

export type SitePage = {
  slug: string;
  navLabel: string;
  title: string;
  kicker: string;
  dek: string;
  heroImage: string;
  sections: Array<{
    title: string;
    body?: string[];
    cards?: InfoCard[];
    bullets?: string[];
  }>;
};

export const logoUrl =
  "https://ironcountymuseum.org/wp-content/uploads/2022/04/Swag-Logos-Final-3.png";

export const mainNav = [
  { label: "Visit", href: "/visit" },
  { label: "Exhibits", href: "/exhibits" },
  { label: "Events", href: "/eventspage" },
  { label: "Membership", href: "/membership" },
  { label: "Support", href: "/donations" },
  { label: "More", href: "/about" },
];

export const sitePages: SitePage[] = [
  {
    slug: "visit",
    navLabel: "Visit",
    title: "Plan your visit",
    kicker: "Hours, admission, accessibility",
    dek: "Exhibits are open June through September, with year-round access to the office, gift shop, and archives.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/nordwood-themes-KcsKWw77Ovw-unsplash.jpg",
    sections: [
      {
        title: "Hours of operation",
        cards: [
          {
            title: "Exhibits",
            eyebrow: "June-September",
            body: "Monday through Friday, 9am-3pm. During June, July, and August, exhibits are also open Saturdays from 10am-2pm.",
          },
          {
            title: "Office, gift shop, archives",
            eyebrow: "Year-round",
            body: "Open Monday through Friday, 9am-3pm.",
          },
          {
            title: "Groups and special tours",
            eyebrow: "By arrangement",
            body: "Tours are available by advanced arrangement. Call (906) 265-2617 or email info@IronCountyMuseum.org.",
          },
        ],
      },
      {
        title: "Admission",
        cards: [
          { title: "Adults", body: "$15 suggested donation" },
          { title: "Students", body: "$10 for ages 6-18 and college students" },
          { title: "Children", body: "Children 5 and under are free" },
          {
            title: "Groups",
            body: "5-7 people: $50. 8-10 people: $75. 11+ people should call for accommodations.",
          },
          {
            title: "Discounts",
            body: "10% discount for active duty military, veterans, and seniors.",
          },
          {
            title: "Payments",
            body: "Cash, checks, credit, and debit cards accepted. Credit card transactions include a 3% fee.",
          },
        ],
      },
      {
        title: "What to expect",
        body: [
          "Guests should check in at the admissions desk to receive materials for a self-guided tour.",
          "Most groups, including families, spend 2-3 hours at the museum. Some visitors need 4+ hours to explore the buildings and exhibits fully.",
          "Rain checks may be requested during bad weather or if you need to leave before finishing your tour.",
          "A complimentary golf cart is available for guests with limited mobility. Please call ahead to reserve it. Some historical buildings are not navigable by wheelchair.",
        ],
      },
      {
        title: "Museum background",
        body: [
          "The Iron County Museum opened in 1968 on the grounds of the former Caspian Mine, which closed in 1937.",
          "The tall headframe visible from the grounds stands over a flooded mine shaft that is 539 feet deep.",
          "Museum staff and volunteers maintain 25+ buildings, more than 100 exhibits, an extensive research center and archives, and two art galleries.",
          "The museum's mission is to preserve the past, inspire lifelong learning, and encourage cultural engagement.",
        ],
      },
    ],
  },
  {
    slug: "exhibits",
    navLabel: "Exhibits",
    title: "Explore our exhibits",
    kicker: "25 buildings, 100+ exhibits",
    dek: "A snapshot of some of the museum's most popular exhibits, from log buildings to galleries and historic homes.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/geran-de-klerk-qzgN45hseN0-unsplash.jpg",
    sections: [
      {
        title: "Popular exhibits",
        body: [
          "Below is a snapshot of some of the most popular exhibits. There are more than 20 buildings to explore on the museum grounds.",
        ],
        cards: [
          {
            title: "The Log Cabins Exhibit",
            body: "The Iron County Museum has been designated as the Historic Log Cabin Capital of Michigan. The exhibit features the Homestead Complex and Barn, the Peterson House, Beechwood Cabin, Kaleva Puotinen Barn, Koski Cabin, Playhouse, Maki Sauna, Logging Camp, and more.",
          },
          {
            title: "The Lee LeBlanc Art Gallery",
            body: "Lee LeBlanc (1913-1988), a 1931 Iron River High School graduate, began his Hollywood career as an animator for Looney Tunes and Merrie Melodies. More than 200 of his works are on display.",
          },
          {
            title: "Carrie Jacobs-Bond House",
            body: "The American singer, pianist, and songwriter composed nearly 177 popular songs and remembered Iron River fondly. Her home was moved to the museum in 1978 and restored to the 1890-1910 period.",
          },
          {
            title: "The Stager Depot",
            body: "Once a busy railroad station near Stager Lake in Crystal Falls, the depot was in operation into the 1960s and helped bring many immigrants into Iron County communities.",
          },
          {
            title: "Historic homes and community buildings",
            body: "The museum preserves domestic, civic, school, mining, farming, and logging spaces that tell the story of Iron County life.",
          },
        ],
      },
    ],
  },
  {
    slug: "eventspage",
    navLabel: "Events",
    title: "Events",
    kicker: "2026 museum programming",
    dek: "A Star Spangled year of raffles, doors, interactive games, History Happy Hour, and community gatherings.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/05/Wedding-Sparrman-11.jpg",
    sections: [
      {
        title: "A Star Spangled year",
        body: [
          "All year long the museum will celebrate the 250th Anniversary of the United States of America with 2026 events and programs.",
        ],
        cards: [
          {
            title: "Star Spangled 50/50 MEGA Raffle",
            body: "Tickets will be sold through September 15. The drawing will be held during A Night at the Races on October 3. Tickets are $5 each or $20 for five tickets. Raffle Lic#R85733.",
          },
          {
            title: "Star Spangled Doors",
            body: "Doors will be on display throughout Summer 2026 and auctioned during A Day on the Farm on September 5. Proceeds support the museum.",
          },
          {
            title: "Star Spangled Spot-It",
            body: "An interactive game with fun activities for families, groups of friends, or individuals.",
          },
          {
            title: "History Happy Hour",
            body: "Returns on the third Friday of June, July, and August with town hall-style conversations at Toti's Tavern, refreshments, memories, and neighbors.",
          },
          {
            title: "A Night at the Races",
            body: "A fundraising evening scheduled for October 3, 2026.",
          },
        ],
      },
    ],
  },
  {
    slug: "membership",
    navLabel: "Membership",
    title: "Memberships & projects",
    kicker: "Annual support",
    dek: "Memberships are valid January 1 through December 31 and include admission and museum perks.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/camp-gibbs.jpg",
    sections: [
      {
        title: "Three annual membership options",
        cards: [
          {
            title: "Individual Membership | $35",
            body: "Free admission for one adult every time you visit. Includes 10% off gift shop purchases and 10% off admission into museum special events and programs.",
          },
          {
            title: "Family Membership | $50",
            body: "Free admission for two adults and children ages 0-17 every time you visit. Includes 10% off gift shop purchases and special event admission.",
          },
          {
            title: "Benefactor Membership | $200",
            body: "Free admission for two adults and children ages 0-17, 10% off gift shop purchases, and two complimentary tickets to every museum special event and program.",
          },
        ],
      },
      {
        title: "Special projects and wish list",
        body: [
          "With 26 buildings to maintain, there is always a need for funding for special projects.",
          "Current fundraisers include the Heritage Hall rebuild, a new Mining Memorial roof, Pioneer School House scraping and painting, and Carrie Jacobs-Bond House roof repairs.",
          "Questions? Call (906) 265-2617.",
        ],
      },
    ],
  },
  {
    slug: "donations",
    navLabel: "Donations",
    title: "Donations",
    kicker: "Keep the museum open and operational",
    dek: "Make a donation toward museum operations, membership, building preservation, and special project needs.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/Coal.jpg",
    sections: [
      {
        title: "Help keep the museum open",
        body: [
          "You can make a donation for one of the museum's projects or make a donation for membership.",
          "Special project needs include the new Timeline, Heritage Hall rebuild, the Rock & Mineral Exhibit, and repairs and rebuild of the Mining Memorial.",
          "After spending $67,000 in 2022 on historic building preservation, donations also help refill preservation funds.",
          "Questions? Call (906) 265-2617.",
        ],
      },
      {
        title: "Membership donation levels",
        cards: [
          {
            title: "Individual | $35",
            body: "Free admission for one adult and 10% off gift shop items and special event admission.",
          },
          {
            title: "Family | $50",
            body: "Free admission for two adults and children ages 0-17 plus museum discounts.",
          },
          {
            title: "Benefactor | $200",
            body: "Admission benefits, gift shop discount, and two complimentary tickets to every museum special event and program.",
          },
        ],
      },
    ],
  },
  {
    slug: "volunteer",
    navLabel: "Volunteer",
    title: "Volunteer",
    kicker: "Bring history to life",
    dek: "There are many ways to help at the museum, whether you have a skill to share or want to learn a new one.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/Coal.jpg",
    sections: [
      {
        title: "Spring cleaning days",
        body: [
          "Wednesday, May 28 and Saturday, May 31, 9am-3pm.",
          "Create teams of 2 to 5 people. Indoor and outdoor teams are needed.",
          "Bring gloves, a broom and dustpan, mop and bucket, or rake depending on the type of work you want to do. The museum provides cleaning solutions, rags, dusters, towels, and garbage bags.",
          "Call ahead at 906-265-2617 and lunch will be provided.",
        ],
      },
      {
        title: "Ways to help",
        bullets: [
          "Maintenance",
          "Archives",
          "Exhibits",
          "Front desk and retail",
          "Cleaning",
          "Mowing lawns",
          "Research",
          "Digitizing materials",
          "Creating signs",
          "Restoring objects",
          "Welcoming visitors",
          "Bringing history to life",
        ],
      },
    ],
  },
  {
    slug: "endowment",
    navLabel: "Endowment",
    title: "Endowment",
    kicker: "Preserving Iron County history in perpetuity",
    dek: "The Endowment Fund helps ensure the continuation of the museum's historical and cultural services.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/markus-spiske-vrbZVyX2k4I-unsplash.jpg",
    sections: [
      {
        title: "A fund for long-term stability",
        body: [
          "The Museum Endowment Board was established in 1990 and manages a fund in perpetuity.",
          "The primary goal is covering annual staffing costs, including modest salaries for a full-time director, part-time office manager, two part-time archivists, and a part-time maintenance manager.",
          "The remainder of the museum's work is largely done by volunteers.",
          "The Endowment has its own management structure, distinct from the museum, and follows a strict investment funding policy.",
        ],
      },
      {
        title: "Ways to give",
        body: [
          "Please consider a gift to the Iron County Museum Endowment Fund to help preserve Iron County's rich history and ensure the museum's survival.",
          "Both the Endowment (38-2961583) and the Museum (38-1941922) are 501(c)(3) organizations. Contributions may be tax deductible; consult your tax professional.",
          "Special considerations include direct transfers of stock investments with unrealized capital gains and IRA/401K required minimum distributions.",
          "You may also consider the museum in your estate planning. Call (906) 265-2617 for assistance.",
        ],
      },
    ],
  },
  {
    slug: "rental",
    navLabel: "Rental",
    title: "Venue rental",
    kicker: "Your special day deserves a special venue",
    dek: "Host receptions, intimate gatherings, ceremonies, and photo sessions on the museum's 10-acre property.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/05/Wedding-Sparrman-11.jpg",
    sections: [
      {
        title: "Let us host your special event",
        body: [
          "Whether you need a reception venue for a crowd, want an intimate gathering in a vintage taproom, or have a ceremony in a historic church, the museum has accommodations for the occasion.",
          "The 10-acre property offers many unique photo opportunities to memorialize your special event.",
        ],
        cards: [
          {
            title: "Bernhardt Cultural Center",
            eyebrow: "300+ person capacity",
            body: "A large reception room with space for additional guests in the outdoor courtyard. Tables and chairs can be configured as needed, and the sound system and kitchen may be available.",
          },
          {
            title: "St. Mary's Church",
            eyebrow: "150 person capacity",
            body: "A historic church that can be decorated to fit your desired aesthetic. Restrooms are in the Cultural Center.",
          },
          {
            title: "Toti's Tavern",
            eyebrow: "50 person capacity",
            body: "A vintage taproom built in 1912 with two working taps, a spacious bar, original mahogany bar, tin walls and ceiling, and moody lighting.",
          },
        ],
      },
    ],
  },
  {
    slug: "about",
    navLabel: "About",
    title: "A little about the Iron County Museum",
    kicker: "Former Caspian Mine grounds",
    dek: "The museum complex preserves mining, logging, farming, domestic, and community history on the site of a former mine.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/page-148-Lindahl-trucks-scaled-1.jpeg",
    sections: [
      {
        title: "Museum history",
        body: [
          "The iron ore industry drove the area for nearly 100 years. At one time, 78 mines operated in Iron County, with the last, Sherwood Mine, closing in 1978.",
          "The museum complex, now with 25 buildings and more than 100 exhibits, was formerly the site of the Caspian Mine.",
          "Opened by the Verona Mining Company, the Caspian Mine shipped 6,623,320 tons of ore between 1903 and 1937.",
          "The headframe, now a landmark, stands over a flooded mine shaft 539 feet deep and is the oldest of its kind still standing in Michigan.",
          "In 1963, Iron County citizens began organizing to preserve the culture and heritage of a county changing rapidly as mines closed. Original exhibits opened in 1978.",
        ],
      },
      {
        title: "Organization",
        body: [
          "The museum is a 501(c)(3) nonprofit organization. It does not receive a tax base or millage.",
          "Funding comes from activities and fundraisers, occasional grants, and donations.",
          "As of January 2026, board officers are Denise Maloney, President; Jason Smedlund, VP; Barry Scalcucci, Treasurer; and Jocelyn Javoroski, Secretary. Members at large are Sharon Stocker-Ryden, Brenda Grubbs, Sandie Nies, Jeannie Holm, and Rylee Crevier.",
        ],
      },
    ],
  },
  {
    slug: "contact",
    navLabel: "Contact",
    title: "Contact us",
    kicker: "Research, visits, volunteering, events",
    dek: "Reach out for archives questions, patron and volunteer information, event rental inquiries, and general museum needs.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/page-149-Load-of-logs-scaled-1.jpeg",
    sections: [
      {
        title: "Get in touch",
        body: [
          "Are you looking for information on an Iron County person, place, or item? Maybe you want to become a patron or volunteer, or you are planning an event and looking for a venue.",
          "The museum will respond as quickly as possible. Most of the folks who help are volunteers and/or part-time workers, so responses may be delayed.",
          "The museum asks that you support archives expenses by making donations for research done for you.",
        ],
        cards: [
          {
            title: "Physical address",
            body: "100 Brady Ave, Caspian, MI 49915",
          },
          { title: "Mailing address", body: "PO Box 272, Caspian, MI 49915" },
          { title: "Phone", body: "(906) 265-2617" },
          { title: "Email", body: "info@IronCountyMuseum.org" },
          { title: "Archives", body: "archives@IronCountyMuseum.org" },
        ],
      },
    ],
  },
  {
    slug: "news",
    navLabel: "News",
    title: "In the news",
    kicker: "Articles, blogs, reels, and more",
    dek: "A sampling of online information about the museum, plus reminders to contact the museum directly for the latest details.",
    heroImage:
      "https://ironcountymuseum.org/wp-content/uploads/2022/06/nordwood-themes-KcsKWw77Ovw-unsplash.jpg",
    sections: [
      {
        title: "Online mentions",
        body: [
          "This page contains a random sampling of online information about the museum. Because most items are created by people not officially associated with the museum, the museum is not responsible for the accuracy of information supplied there.",
          "If you want the real scoop, or the latest information, contact the museum directly.",
          "Don't see something that should be included? Let the museum know.",
        ],
        bullets: [
          "WJMN Local 3: ICHMS Outside Tour and Inside Tour, 2024",
          "Upper Michigan Today: ICHMS Christmas Tree Galleria, 2024",
          "My UP Now: Holiday Fundraising Tradition Continues in Iron County, 2024",
          "WJMN Local 3: Tour the Iron County Historical Museum, 2024",
          "WJMN Local 3: Our Community Tour: History of Iron River, 2021",
          "TV6 & Fox UP Archive: ICHMS Gets Into the Holiday Spirit, 2015",
          "IMDailyNews: IR Senior Expo, 2014",
          "TV6 & Fox UP Archive: Point of Interest Museums, 2013",
        ],
      },
    ],
  },
];

export function getSitePage(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
