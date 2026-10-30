import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: Missing,
});

function Missing() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-10">
      <h1 className="lead">This page is not in the index.</h1>
      <Link to="/" className="mt-6 inline-flex min-h-11 items-center underline underline-offset-4">
        Home
      </Link>
    </main>
  );
}
