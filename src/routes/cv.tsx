import { createFileRoute } from "@tanstack/react-router";
import {
  certifications,
  education,
  profile,
  projects,
  roles,
  shortUrl,
  skills,
  workshops,
} from "@/data/content";

export const Route = createFileRoute("/cv")({
  component: CvPage,
  head: () => ({
    meta: [{ title: "CV — Amit Singh" }],
  }),
});

function CvPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:px-10 md:py-16">
      <div className="no-print flex justify-end">
        <button
          type="button"
          onClick={() => window.print()}
          className="min-h-11 bg-fg px-5 font-medium text-bg"
        >
          Print / Save PDF
        </button>
      </div>
      <p className="text-xs uppercase tracking-widest text-muted">Curriculum vitae</p>
      <h1 className="display mt-4">{profile.name}</h1>
      <p className="lead mt-3">{profile.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {profile.location}
        {" · "}
        <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        {" · "}
        <a className="underline underline-offset-4" href={profile.phoneHref}>
          {profile.phone}
        </a>
        {" · "}
        <a className="underline underline-offset-4" href={profile.github}>
          {shortUrl(profile.github)}
        </a>
        {" · "}
        <a className="underline underline-offset-4" href={profile.linkedin}>
          LinkedIn
        </a>
      </p>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed">{profile.lede}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{profile.bio}</p>

      <h2 className="mt-12 font-display text-3xl">Experience</h2>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {roles.map((role) => (
          <article key={role.id} className="py-5">
            <p className="text-sm tabular-nums text-muted">{role.when}</p>
            <h3 className="mt-1 text-lg font-medium">
              {role.title}, {role.org}
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="mt-12 font-display text-3xl">Selected work</h2>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <article key={project.id} className="py-5">
            <p className="text-sm tabular-nums text-muted">
              {project.year} · {project.kind}
            </p>
            <h3 className="mt-1 text-lg font-medium">{project.title}</h3>
            <p className="mt-2 leading-relaxed">{project.summary}</p>
            <p className="mt-2 text-sm text-muted">{project.stack.join(" · ")}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-12 font-display text-3xl">Skills</h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.group}>
            <dt className="text-sm text-muted">{skill.group}</dt>
            <dd>{skill.items}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-12 font-display text-3xl">Education</h2>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {education.map((item) => (
          <li key={item.id} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
            <span className="text-sm tabular-nums text-muted">{item.when}</span>
            <span>
              <span className="block font-medium">{item.credential}</span>
              <span className="text-muted">{item.school}</span>
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-3xl">Certifications</h2>
      <ul className="mt-4 space-y-3">
        {certifications.map((item) => (
          <li key={item.id}>
            <span className="font-medium">{item.title}</span>
            <span className="text-muted"> — {item.org}, {item.when}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-3xl">Workshops and conferences</h2>
      <ul className="mt-4 space-y-3">
        {workshops.map((item) => (
          <li key={item.id}>
            <span className="font-medium">{item.title}</span>
            <span className="text-muted"> — {item.org}, {item.when}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
