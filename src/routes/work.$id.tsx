import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/data/content";

export const Route = createFileRoute("/work/$id")({
  component: WorkPage,
});

function WorkPage() {
  const { id } = Route.useParams();
  const index = projects.findIndex((item) => item.id === id);
  const project = index >= 0 ? projects[index] : undefined;
  const next = project ? projects[(index + 1) % projects.length] : undefined;

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — ${profile.name}`;
  }, [project]);

  if (!project || !next) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-24 md:px-10">
        <h1 className="lead">This study is not on the shelf.</h1>
        <Link to="/" hash="work" className="mt-6 inline-flex min-h-11 items-center underline underline-offset-4">
          All work
        </Link>
      </main>
    );
  }

  const paragraphs = project.body.split(/\n\n+/);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
      <Link to="/" hash="work" className="inline-flex min-h-11 items-center gap-2 text-sm">
        <ArrowLeft className="size-4" aria-hidden="true" />
        All work
      </Link>
      <p className="mt-8 text-xs uppercase tracking-widest text-muted">
        {project.kind} · {project.year}
      </p>
      <h1 className="display mt-4 max-w-4xl text-balance">{project.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>

      {project.stats.length > 0 ? (
        <div className="mt-10 grid gap-8 border-y border-line py-8 sm:grid-cols-2">
          {project.stats.map((stat) => (
            <p key={stat.label}>
              <span className="font-display text-5xl tabular-nums">{stat.value}</span>
              <span className="mt-2 block text-sm text-muted">{stat.label}</span>
            </p>
          ))}
        </div>
      ) : null}

      <div className="mt-10 max-w-2xl space-y-5">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex} className="text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <h2 className="mt-12 text-xs uppercase tracking-widest text-muted">What I did</h2>
      <ul className="mt-4 max-w-2xl space-y-3">
        {project.highlights.map((item) => (
          <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 leading-relaxed">
            <span className="mt-3 h-px bg-saffron" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-xs uppercase tracking-widest text-muted">Stack</h2>
      <p className="mt-3 max-w-2xl text-lg">{project.stack.join(" · ")}</p>

      <a
        href={project.href}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-10 inline-flex min-h-11 items-center gap-2 bg-fg px-5 font-medium text-bg"
      >
        Source on GitHub
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>

      {next.id !== project.id ? (
        <div className="mt-16 border-t border-line pt-8">
          <p className="text-xs uppercase tracking-widest text-muted">Next</p>
          <Link
            to="/work/$id"
            params={{ id: next.id }}
            className="mt-3 inline-flex min-h-11 items-center font-display text-3xl italic underline-offset-4 hover:underline"
          >
            {next.title}
          </Link>
        </div>
      ) : null}
    </main>
  );
}
