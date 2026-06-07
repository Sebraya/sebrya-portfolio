export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string;
};

export const posts: Post[] = [
  {
    slug: 'architecture-is-shared-understanding',
    title: 'Architecture is Not Just Design — It is Shared Understanding Across Teams',
    date: '2026-06-07',
    excerpt: 'Architecture is about creating clarity and alignment across teams, not just diagrams.',
    contentHtml: `
      <p>In large-scale enterprise environments, architecture failures rarely come from technology itself. More often, they come from a lack of shared understanding across teams.</p>

      <p>I experienced this firsthand during the implementation of a solution I had designed. A critical blocker emerged during delivery that had the potential to significantly delay the project timeline.</p>

      <p>At first, the natural reaction was frustration — and the instinct to identify the cause or point of failure. But stepping back revealed a deeper issue.</p>

      <p>The real challenge was not a technical mistake. It was a gap in shared understanding across different teams involved in the delivery.</p>

      <p>In complex organizations, every role views the system differently:</p>
      <ul>
        <li>A Data Engineer focuses on data pipelines and databases</li>
        <li>A DevOps Engineer focuses on infrastructure and deployment</li>
        <li>A Program Manager focuses on business processes and delivery timelines</li>
      </ul>

      <p>Each perspective is valid — but incomplete on its own.</p>

      <p>This is where architecture plays a critical role.</p>

      <p>Architecture is not just about designing systems — it is about creating clarity across teams.</p>

      <p>Without a shared blueprint, assumptions begin to diverge. These gaps eventually surface during implementation and become costly blockers in delivery.</p>

      <p>This experience reinforced the importance of structured architecture practices.</p>

      <p>Frameworks such as TOGAF and the Zachman Framework help define multiple architectural viewpoints, ensuring that business, application, data, and infrastructure perspectives are aligned.</p>

      <p>In addition, tools like LeanIX, Ardoq, Confluence, and Jira help teams document decisions and maintain alignment throughout the delivery lifecycle.</p>

      <p>However, tools alone are not enough.</p>

      <p>The most important factor is mindset.</p>

      <p>Architects must ensure that:</p>
      <ul>
        <li>Architecture is clearly communicated</li>
        <li>Assumptions are validated early</li>
        <li>Workshops are structured and outcome-driven</li>
        <li>Shared understanding is continuously reinforced</li>
      </ul>

      <p>Without this discipline, even well-designed systems can fail during execution.</p>

      <p>This experience taught me a simple but powerful lesson:</p>

      <p>Architecture is not about having all the answers. It is about enabling teams to find the right answers together.</p>
    `,
  },
  {
    slug: 'why-storytelling-is-critical',
    title: 'Why Storytelling is a Critical Skill for Solution Architects',
    date: '2026-06-07',
    excerpt: 'Storytelling makes architecture accessible and drives engagement across stakeholders.',
    contentHtml: `
      <p>One of the most overlooked skills in architecture is communication — specifically, the ability to explain complex systems in a simple and engaging way.</p>

      <p>I recently experienced this while preparing for a short architecture presentation.</p>

      <p>Like many technical professionals, I initially focused on depth and accuracy:</p>
      <ul>
        <li>API gateways</li>
        <li>Autoscaling strategies</li>
        <li>Multi-tenancy design</li>
        <li>Security layers</li>
        <li>Distributed system patterns</li>
      </ul>

      <p>Everything I said was technically correct. But when I reviewed the recording, something stood out immediately.</p>

      <p>It was not engaging.</p>

      <p>Even I found it difficult to stay connected to my own explanation.</p>

      <p>That’s when I realized something important:</p>

      <p>If I am not engaged, the audience definitely won’t be.</p>

      <p>So I changed my approach.</p>

      <p>Instead of leading with technical terminology, I reframed the entire explanation into a story:</p>
      <ol>
        <li>A user opens a webpage</li>
        <li>The system validates the request</li>
        <li>Authentication is processed</li>
        <li>The backend handles the business logic</li>
        <li>A response is returned to the user</li>
      </ol>

      <p>Suddenly, the architecture became understandable — not just correct.</p>

      <p>The next day, I delivered the same presentation again.</p>

      <p>The difference was immediate.</p>

      <p>People were engaged. They asked questions. They wanted to understand more.</p>

      <p>Previously, the response had been silence and a polite “thank you.”</p>

      <p>This time, it became a discussion.</p>

      <p>That experience reinforced a key principle:</p>
      <ul>
        <li>Clarity is more powerful than complexity</li>
        <li>Connection matters more than correctness</li>
        <li>Storytelling makes architecture accessible</li>
      </ul>

      <p>As architects, our responsibility is not only to design systems.</p>

      <p>It is also to ensure that those systems can be understood by everyone involved — from engineers to business stakeholders.</p>

      <p>Since then, I always ask myself a simple question:</p>

      <p>Would someone outside my domain understand this?</p>

      <p>Because when people understand, they engage.</p>

      <p>And when they engage, better decisions are made.</p>
    `,
  },
  {
    slug: 'difficult-lesson-better-architect',
    title: 'A Difficult Lesson That Made Me a Better Architect',
    date: '2026-06-07',
    excerpt: 'Difficult project lessons that reshape how you approach architecture and alignment.',
    contentHtml: `
      <p>Early in my career, I faced one of the most uncomfortable situations in a project I was responsible for.</p>

      <p>During the implementation phase of a solution I had designed, we encountered a major blocker. The issue was significant enough to potentially delay the entire project delivery.</p>

      <p>At first, my reaction was emotional. I was frustrated, and my instinct was to determine what went wrong and who was responsible.</p>

      <p>But in critical roles, blame rarely solves problems.</p>

      <p>Taking responsibility does.</p>

      <p>After a few difficult days, I stepped back and re-evaluated the situation from a broader perspective.</p>

      <p>What I discovered was not a single technical mistake, but a gap in shared understanding across teams.</p>

      <p>In large enterprise environments, every team interacts with the system differently:</p>
      <ul>
        <li>Some view it through data</li>
        <li>Some through infrastructure</li>
        <li>Some through business processes</li>
      </ul>

      <p>All perspectives are valid, but without alignment, gaps are inevitable.</p>

      <p>This realization changed how I approach architecture.</p>

      <p>Architecture is not just about designing systems — it is about creating alignment across people, processes, and technology.</p>

      <p>Since then, I have placed greater emphasis on:</p>
      <ul>
        <li>Early discovery workshops</li>
        <li>Clear architectural documentation</li>
        <li>Shared system models</li>
        <li>Cross-team alignment sessions</li>
        <li>Continuous validation of assumptions</li>
      </ul>

      <p>Because without alignment, even well-designed systems fail during execution.</p>

      <p>That experience taught me something fundamental:</p>

      <p>A strong architecture is not defined by its design alone — but by how clearly it is understood by everyone who builds it.</p>

      <p>And sometimes, the most difficult experiences become the most valuable lessons in our growth as architects.</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}
