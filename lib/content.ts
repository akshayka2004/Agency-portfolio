/**
 * Single source of truth for marketing copy.
 * Sections render from these arrays so the wording is edited in one place.
 */

export const SERVICES = [
  {
    id: "01",
    category: "WEB",
    title: "Web design & development",
    desc: "Strategy-first websites and web applications — from a brand site that wins trust to a customer portal that runs your business. Designed in-house, built on modern stacks, and maintained after launch.",
    tags: ["Next.js", "React", "Node.js", "Headless CMS"],
    bullets: [
      "UX research, wireframes & UI design",
      "Marketing sites, e-commerce & portals",
      "SEO, performance & accessibility",
      "Hosting, security & care plans",
    ],
  },
  {
    id: "02",
    category: "MOBILE",
    title: "Mobile app development",
    desc: "Cross-platform apps that feel native — including offline-first field apps for teams that work where the network doesn't. One codebase, both stores, real support after release.",
    tags: ["Flutter", "React Native", "Push & sync"],
    bullets: [
      "iOS & Android from one codebase",
      "Offline-first apps for field teams",
      "Payments, notifications & analytics",
      "Play Store / App Store deployment",
    ],
  },
  {
    id: "03",
    category: "SAAS",
    title: "SaaS product engineering",
    desc: "Building a product is different from building a website. We take you from idea to a running, multi-tenant product — architecture, roles and permissions, billing, dashboards and deployment — and stay for the iterations that follow.",
    tags: ["Multi-tenant", "Role-based access", "PostgreSQL", "CI/CD"],
    bullets: [
      "MVP scoping & rapid first version",
      "Auth, roles & department workflows",
      "Subscription billing & admin panels",
      "Cloud deployment & monitoring",
    ],
  },
  {
    id: "04",
    category: "AI",
    title: "AI & automation",
    desc: "Practical intelligence built around real workflows — support bots your customers actually use on WhatsApp, document AI that runs on your own infrastructure, and automation that removes repetitive work without removing human control.",
    tags: ["LLM + RAG", "WhatsApp Business API", "Computer vision", "Local / private AI"],
    bullets: [
      "WhatsApp & voice support bots",
      "Private, on-premise document AI",
      "Workflow & back-office automation",
      "Vision pipelines for inspection",
    ],
  },
  {
    id: "05",
    category: "R&D",
    title: "Firmware & embedded systems",
    desc: "The discipline most software agencies can't offer. We work close to the metal — firmware analysis, protocol reverse engineering, embedded IoT — and connect it all the way up to cloud dashboards. If your product runs code on a device, we speak its language.",
    tags: ["JTAG", "CAN bus", "DSP firmware", "Embedded C"],
    bullets: [
      "Firmware extraction & analysis",
      "Protocol reverse engineering",
      "Sensor networks & edge devices",
      "Technical feasibility studies",
    ],
  },
] as const;

export const AUDIENCES = [
  {
    role: "Founders & startups",
    quote: "I have a product idea. I need it real, fast.",
    desc: "We scope ruthlessly, build the smallest version that proves the idea, and iterate with you weekly. You get a working product and a team that thinks about your business, not just your backlog.",
    linkLabel: "SaaS product engineering",
    href: "/#services",
  },
  {
    role: "Distributors & manufacturers",
    quote: "My operations run on spreadsheets, calls and WhatsApp forwards.",
    desc: "We've lived this world. Order-tracking systems, service workflows and AI support desks that replace the daily chaos with one source of truth — built for teams across departments and districts.",
    linkLabel: "Order-tracking & support bot case studies",
    href: "/#work",
  },
  {
    role: "Growing businesses",
    quote: "We're serious now. Our website should say so.",
    desc: "A digital presence that earns trust — brand site, e-commerce, customer portal or mobile app — designed properly, launched on time, and looked after long after go-live.",
    linkLabel: "Web design & mobile apps",
    href: "/#services",
  },
  {
    role: "Enterprise & industrial",
    quote: "We need proof before we commit to production.",
    desc: "Feasibility studies and working prototypes for hard problems — firmware, protocols, IoT pilots, private AI deployments. We turn uncertainty into an engineering decision you can defend.",
    linkLabel: "Firmware & embedded research",
    href: "/research",
  },
] as const;

export const CASE_STUDIES = [
  {
    title: "AI support desk on WhatsApp",
    subtitle: "Solar equipment distributor · Live",
    problem:
      "Installers across multiple states flooded a single support line with the same questions — fault codes, warranty terms, commissioning steps. Engineers spent their day repeating answers instead of solving hard cases.",
    built:
      "A WhatsApp bot trained on the company's inverter documentation. It answers fault-code and product queries instantly, and hands complex cases to the right service engineer based on the customer's state.",
    result:
      "Customers get accurate answers in seconds, 24/7. The support team now handles only exceptions — and every conversation is logged, searchable and consistent.",
    tags: ["WhatsApp Business API", "LLM + RAG", "Node.js", "State-wise routing"],
  },
  {
    title: "Order-tracking platform",
    subtitle: "Distribution business · SaaS · Live",
    problem:
      "Every order — from proforma invoice to dispatch — lived in emails, calls and memory. Sales didn't know what accounts had approved; the warehouse didn't know what was cleared to ship.",
    built:
      "A role-based web application that tracks every order through its full lifecycle. Each department gets its own dashboard and approval step, with a complete audit trail on every document.",
    result:
      "One source of truth for the whole company. “Where is my order?” is now a glance at a screen, not a chain of phone calls between departments.",
    tags: ["React", "Node.js", "PostgreSQL", "Role-based dashboards"],
  },
  {
    title: "Solar fleet monitoring dashboard",
    subtitle: "Renewable energy · Web app",
    problem:
      "Installers managing distributed microinverter sites had no unified view — checking each site meant logging into separate tools and reading raw numbers.",
    built:
      "A React dashboard on top of the manufacturer's cloud API: live generation data, per-site drill-downs, device status and alerts in one clean interface built for non-technical users.",
    result:
      "A whole fleet, readable at a glance. Underperforming sites surface immediately instead of waiting for a customer complaint.",
    tags: ["React", "REST APIs", "Data visualization"],
  },
  {
    title: "Inverter firmware analysis",
    subtitle: "Power electronics · R&D",
    problem:
      "A deployed inverter platform needed to be understood from the inside — no source code, no schematics, no vendor documentation.",
    built:
      "A full firmware programme: image extraction over JTAG, disassembly of the control logic, and CAN bus traffic analysis — producing a complete technical dossier of how the platform actually behaves.",
    result:
      "Findings that now inform a made-in-India power electronics roadmap. The kind of work that requires a team fluent in embedded code, not just applications.",
    tags: ["JTAG", "CAN bus", "DSP firmware", "Protocol analysis"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    t: "T−5",
    title: "Discover",
    desc: "We understand the problem before choosing any technology. Interviews, workflows, constraints.",
  },
  {
    t: "T−4",
    title: "Define",
    desc: "Ruthless scoping. What ships first, what waits, what we'll measure to call it a success.",
  },
  {
    t: "T−3",
    title: "Design",
    desc: "Wireframes to polished UI — reviewed with you before a single line of production code.",
  },
  {
    t: "T−2",
    title: "Build",
    desc: "Short cycles, working software every week. You watch it grow instead of waiting for a reveal.",
  },
  {
    t: "T−1",
    title: "Test",
    desc: "Real devices, real data, real users. Holds happen here — never after launch.",
  },
  {
    t: "T−0",
    title: "Launch",
    desc: "Liftoff. Deployment, handover, training — the moment thinking becomes a running system.",
    isZero: true,
  },
] as const;

export const RESEARCH_TRACKS = [
  {
    kicker: "AI & ML",
    title: "Applied artificial intelligence",
    desc: "Local and private LLM deployments, retrieval-augmented generation on sensitive documents, and computer-vision pipelines — evaluated hands-on, not from press releases.",
    tags: ["Local LLMs", "RAG", "OpenCV"],
  },
  {
    kicker: "Firmware",
    title: "Embedded systems & IoT",
    desc: "Firmware for edge devices, sensor networks and microcontroller platforms — written and proven in our own lab, then connected to high-throughput cloud pipelines for industrial use.",
    tags: ["Microcontrollers", "Edge computing", "C / C++"],
  },
  {
    kicker: "Infrastructure",
    title: "Resilient cloud architecture",
    desc: "Serverless, containers and infrastructure-as-code — continuously audited so the systems we ship stay cheap to run and hard to break.",
    tags: ["Docker", "AWS", "Terraform"],
  },
] as const;

export const CAPABILITY_TICKER = [
  "Web platforms",
  "Mobile apps",
  "SaaS products",
  "AI & automation",
  "Embedded & IoT",
  "Firmware & R&D",
] as const;

/**
 * Founders.
 * `title` and `bio` are optional and currently unset — the sections render the
 * names alone until real roles and bios are supplied, rather than inventing them.
 */
export const FOUNDERS: { name: string; title?: string; bio?: string }[] = [
  { name: "Kevin Mathew" },
  { name: "Akshay K A" },
];

export const CONTACT = {
  email: "hello@t-0.dev",
  location: "Kerala, India — working worldwide",
  /** Populated once the real handles are supplied. */
  whatsapp: null as string | null,
  linkedin: null as string | null,
  github: null as string | null,
};
