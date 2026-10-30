import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowLeft, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Route, o as profile, s as projects } from "./router-ChtzzfPM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._id-BpbxjnHF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	const { id } = Route.useParams();
	const index = projects.findIndex((item) => item.id === id);
	const project = index >= 0 ? projects[index] : void 0;
	const next = project ? projects[(index + 1) % projects.length] : void 0;
	(0, import_react.useEffect)(() => {
		if (!project) return;
		document.title = `${project.title} — ${profile.name}`;
	}, [project]);
	if (!project || !next) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-24 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "lead",
			children: "This study is not on the shelf."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			hash: "work",
			className: "mt-6 inline-flex min-h-11 items-center underline underline-offset-4",
			children: "All work"
		})]
	});
	const paragraphs = project.body.split(/\n\n+/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				hash: "work",
				className: "inline-flex min-h-11 items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "size-4",
					"aria-hidden": "true"
				}), "All work"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-xs uppercase tracking-widest text-muted",
				children: [
					project.kind,
					" · ",
					project.year
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-4 max-w-4xl text-balance",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
				children: project.summary
			}),
			project.stats.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8 border-y border-line py-8 sm:grid-cols-2",
				children: project.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-5xl tabular-nums",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block text-sm text-muted",
					children: stat.label
				})] }, stat.label))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 max-w-2xl space-y-5",
				children: paragraphs.map((paragraph, paragraphIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed",
					children: paragraph
				}, paragraphIndex))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-xs uppercase tracking-widest text-muted",
				children: "What I did"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 max-w-2xl space-y-3",
				children: project.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[1rem_1fr] gap-3 leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-3 h-px bg-saffron",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-xs uppercase tracking-widest text-muted",
				children: "Stack"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg",
				children: project.stack.join(" · ")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: project.href,
				target: "_blank",
				rel: "noreferrer noopener",
				className: "mt-10 inline-flex min-h-11 items-center gap-2 bg-fg px-5 font-medium text-bg",
				children: ["Source on GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					className: "size-4",
					"aria-hidden": "true"
				})]
			}),
			next.id !== project.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border-t border-line pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: "Next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work/$id",
					params: { id: next.id },
					className: "mt-3 inline-flex min-h-11 items-center font-display text-3xl italic underline-offset-4 hover:underline",
					children: next.title
				})]
			}) : null
		]
	});
}
//#endregion
export { WorkPage as component };
