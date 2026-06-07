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
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) || null;
}
