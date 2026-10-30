import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import {
  certifications,
  education,
  filters,
  profile,
  projects,
  roles,
  shortUrl,
  skills,
  workshops,
  type Filter,
  type Project,
} from "@/data/content";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter));

  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-24">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="size-2 bg-saffron" aria-hidden="true" />
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span>IILM University · Class of 2027</span>
        </p>
        <h1 className="display mt-6 text-balance">{profile.name}</h1>
        <p className="lead mt-4 text-balance">{profile.role}</p>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty">{profile.lede}</p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted text-pretty">{profile.bio}</p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <a className="inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4" href={profile.phoneHref}>
            {profile.phone}
          </a>
          <a
            className="inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            {shortUrl(profile.github)}
          </a>
          <a
            className="inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-6 text-sm">{profile.availability}</p>
      </section>

      <section id="work" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted">Selected work</h2>
              <p className="lead mt-3">Models, pipelines, and web software.</p>
            </div>
            <div className="flex flex-wrap gap-x-4" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                  className={clsx(
                    "min-h-11 border-b-2 text-sm",
                    filter === item ? "border-saffron text-fg" : "border-transparent text-muted",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm tabular-nums text-muted">
            {visible.length} of {projects.length}
          </p>
          <div className="mt-2 border-b border-line">
            {visible.length === 0 ? (
              <p className="border-t border-line py-10 text-muted">Nothing filed under {filter}.</p>
            ) : (
              visible.map((project) => <ProjectRow key={project.id} project={project} />)
            )}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
          <h2 className="text-xs uppercase tracking-widest text-muted">Experience</h2>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            {roles.map((role) => (
              <article key={role.id}>
                <p className="text-sm tabular-nums text-muted">{role.when}</p>
                <h3 className="mt-2 font-display text-3xl italic">{role.title}</h3>
                <p className="mt-1">{role.org}</p>
                <ul className="mt-5 space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="grid grid-cols-[1rem_1fr] gap-3 leading-relaxed">
                      <span className="mt-3 h-px bg-saffron" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {role.projectId ? (
                  <Link
                    to="/work/$id"
                    params={{ id: role.projectId }}
                    className="mt-4 inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4"
                  >
                    Related project
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
          <h2 className="text-xs uppercase tracking-widest text-muted">Skills</h2>
          <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group} className="border-t border-line pt-4">
                <dt className="text-xs uppercase tracking-widest text-muted">{skill.group}</dt>
                <dd className="mt-2 text-lg">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="background" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted">Education</h2>
            <ol className="mt-4 border-t border-line">
              {education.map((item) => (
                <li key={item.id} className="border-b border-line py-4">
                  <p className="text-sm tabular-nums text-muted">{item.when}</p>
                  <p className="mt-1 font-medium">{item.credential}</p>
                  <p className="text-muted">{item.school}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted">Certifications</h2>
            <ol className="mt-4 border-t border-line">
              {certifications.map((item) => (
                <li key={item.id} className="border-b border-line py-4">
                  <p className="text-sm tabular-nums text-muted">{item.when}</p>
                  <p className="mt-1 font-medium">{item.title}</p>
                  <p className="text-muted">{item.org}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted">Workshops</h2>
            <ol className="mt-4 border-t border-line">
              {workshops.map((item) => (
                <li key={item.id} className="border-b border-line py-4">
                  <p className="text-sm tabular-nums text-muted">{item.when}</p>
                  <p className="mt-1 font-medium">{item.title}</p>
                  <p className="text-muted">{item.org}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.id === project.id);
  const number = String(index + 1).padStart(2, "0");
  const stat = project.stats[0];

  return (
    <article className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10">
      <div className="md:col-span-8">
        <p className="text-xs uppercase tracking-widest text-muted tabular-nums">
          {number} · {project.kind} · {project.year}
        </p>
        <h3 className="mt-3 font-display text-4xl italic">
          <Link
            to="/work/$id"
            params={{ id: project.id }}
            className="underline-offset-4 hover:underline"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-4 text-sm">{project.stack.join(" · ")}</p>
      </div>
      <div className="flex flex-col gap-4 md:col-span-4 md:items-end md:text-right">
        {stat ? (
          <p>
            <span className="font-display text-4xl tabular-nums">{stat.value}</span>
            <span className="mt-1 block text-xs uppercase tracking-widest text-muted">{stat.label}</span>
          </p>
        ) : null}
        <div className="flex gap-5 text-sm md:justify-end">
          <Link
            to="/work/$id"
            params={{ id: project.id }}
            className="inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4"
          >
            Read
          </Link>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-11 items-center gap-1 underline decoration-saffron underline-offset-4"
          >
            GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Contact() {
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const ready = from.trim().length > 0 && message.trim().length > 0;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!ready) return;
    const body = `Hello ${profile.name},\n\n${message.trim()}\n\n— ${from.trim()}`;
    setNote(body);
    setCopied(false);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio note from ${from.trim()}`)}&body=${encodeURIComponent(body)}`;
  }

  async function copyNote() {
    if (!note) return;
    try {
      await navigator.clipboard.writeText(note);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const field =
    "mt-2 w-full border-b border-inverse-fg/40 bg-transparent py-3 text-inverse-fg outline-none placeholder:text-inverse-fg/50 focus:border-saffron";

  return (
    <section id="contact" className="scroll-mt-32 bg-inverse text-inverse-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <h2 className="text-xs uppercase tracking-widest text-inverse-fg/70">Contact</h2>
          <p className="lead mt-4">Write.</p>
          <p className="mt-6 max-w-sm leading-relaxed text-inverse-fg/80">
            {profile.availability}. Based in {profile.location}.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 block break-all font-display text-2xl underline decoration-saffron decoration-2 underline-offset-8 sm:text-4xl"
          >
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="mt-4 inline-flex min-h-11 items-center text-inverse-fg/80">
            {profile.phone}
          </a>
        </div>
        <form className="md:col-span-6 md:col-start-7" onSubmit={onSubmit}>
          <label className="block text-sm" htmlFor="from-name">
            Your name
            <input
              id="from-name"
              name="name"
              autoComplete="name"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              className={field}
            />
          </label>
          <label className="mt-6 block text-sm" htmlFor="note">
            Note
            <textarea
              id="note"
              name="message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={field}
            />
          </label>
          <button
            type="submit"
            disabled={!ready}
            className="mt-8 min-h-11 bg-inverse-fg px-6 font-medium text-inverse disabled:opacity-40"
          >
            Email Amit
          </button>
          {note ? (
            <div className="mt-8">
              <p className="text-sm text-inverse-fg/80">
                If your mail app did not open, the note is here.
              </p>
              <textarea readOnly value={note} rows={6} className={`${field} mt-3`} />
              <button
                type="button"
                onClick={() => void copyNote()}
                className="mt-3 min-h-11 underline underline-offset-4"
              >
                {copied ? "Copied" : "Copy note"}
              </button>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
