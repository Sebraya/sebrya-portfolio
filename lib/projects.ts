export type Project = {
  slug: string;
  title: string;
  status: "underway" | "in-progress" | "complete";
  excerpt: string;
  updates?: { date: string; contentHtml: string }[];
};

export const projects: Project[] = [
  {
    slug: "platform-modernization",
    title: "Platform Modernization",
    status: "underway",
    excerpt: "Replatforming legacy services to a cloud-native architecture with incremental migration.",
    updates: [
      { date: "2026-05-01", contentHtml: `<p>Scoping completed; pilot infra provisioned in dev account.</p>` },
    ],
  },
  {
    slug: "observability-rollout",
    title: "Observability Rollout",
    status: "in-progress",
    excerpt: "Organization-wide rollout of tracing, metrics, and dashboards for critical services.",
    updates: [
      { date: "2026-05-20", contentHtml: `<p>Initial dashboards published for payments and orders services.</p>` },
      { date: "2026-06-05", contentHtml: `<p>Trace sampling tuned; alerting thresholds adjusted after runbook review.</p>` },
    ],
  },
  {
    slug: "website-creation",
    title: "Website Creation & Management",
    status: "in-progress",
    excerpt: "Designing, building and managing the public website including content workflows and hosting.",
    updates: [
      { date: "2026-06-08", contentHtml: `<p>Initial design prototypes completed; CMS and hosting choices shortlisted.</p>` },
    ],
  },
  {
    slug: "mobile-app-creation",
    title: "Mobile App Creation",
    status: "in-progress",
    excerpt: "Building a cross-platform mobile application to extend platform capabilities to iOS and Android.",
    updates: [
      { date: "2026-06-08", contentHtml: `<p>MVP scope defined; cross-platform framework prototyped and validated.</p>` },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) || null;
}
