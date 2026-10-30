import { i as __toESM } from "../_runtime.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as require_react, v as createRootRoute, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Sun, r as Moon, t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ChtzzfPM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-saffron",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var profile = {
	name: "Amit Singh",
	role: "Software developer",
	location: "Greater Noida, India",
	availability: "Open to internships and junior software roles",
	email: "amitsingh.115up@gmail.com",
	phone: "+91 94151 64489",
	phoneHref: "tel:+919415164489",
	github: "https://github.com/Amit769",
	linkedin: "https://www.linkedin.com/in/amit-singh-a472632ba/",
	lede: "Final-year B.Tech student in computer science at IILM University. I build REST APIs, data pipelines, and machine-learning services in Python — and I care that they can be run, not only demoed.",
	bio: "A crack-detection model served with FastAPI, financial analytics from a Bluestock Fintech internship, and web pages I started building at YBI Foundation. I want software with a clear data path, logs when a pipeline fails, and a model you can call."
};
var projects = [
	{
		id: "crack-detection",
		title: "Crack detection in mines and tunnels",
		year: "Mar 2026",
		kind: "Academic project",
		summary: "A CNN that classifies structural cracks, served with FastAPI so an upload comes back as a prediction.",
		body: "I trained a convolutional network on images of cracks in mines and tunnels, then wrapped the TensorFlow model in FastAPI. An upload is classified as Crack or No Crack with a confidence score, and the crack is drawn on the output image so a person can check the call.\n\nOn the project dataset the model reached 99.45% validation accuracy and 99.54% training accuracy. The aim is early risk identification: see the fracture before it is obvious on a walk-through.",
		highlights: [
			"CNN image classifier built and trained with TensorFlow",
			"FastAPI endpoint for real-time predictions, with Swagger docs",
			"OpenCV highlights the detected crack on the output image",
			"Built for structural images from mines and tunnels"
		],
		stack: [
			"Python",
			"TensorFlow",
			"CNN",
			"FastAPI",
			"OpenCV"
		],
		tags: ["Machine learning", "FastAPI"],
		href: "https://github.com/Amit769/Crack-Detection-CNN",
		stats: [{
			value: "99.45%",
			label: "Validation accuracy"
		}, {
			value: "99.54%",
			label: "Training accuracy"
		}]
	},
	{
		id: "mutual-fund",
		title: "Mutual fund analytics",
		year: "Jun 2026",
		kind: "Bluestock Fintech internship",
		summary: "An end-to-end pipeline from fund data to SQL analysis, risk reports, and a Power BI dashboard.",
		body: "Built during a data analyst internship at Bluestock Fintech. The pipeline ingests mutual-fund data, cleans and validates it, answers questions in SQL, then studies performance in Python. Notebooks produce the risk reports. Power BI is the interactive view, and a Streamlit app sits beside them for a lighter share.\n\nThe reports cover CAGR, Sharpe, Sortino, alpha and beta, maximum drawdown, tracking error, and a fund scorecard.",
		highlights: [
			"ETL, cleaning, and exploratory analysis on mutual fund data",
			"Automated NAV ingestion from public APIs, with logging and scheduling",
			"Risk and performance reports, plus portfolio-level views",
			"Interactive Power BI dashboard and HTML summaries"
		],
		stack: [
			"Python",
			"Pandas",
			"NumPy",
			"SQL",
			"Power BI",
			"Streamlit",
			"Plotly",
			"Matplotlib",
			"SciPy"
		],
		tags: ["Data"],
		href: "https://github.com/Amit769/mutual-fund-analytics",
		stats: []
	},
	{
		id: "smart-cctv",
		title: "Smart CCTV analytics",
		year: "2026",
		kind: "Independent",
		summary: "Fire and smoke detection on a live camera feed, held for five frames so a flicker does not raise an alarm.",
		body: "A video analytics project for hazard detection, after the still-image crack model. A YOLOv8 model fine-tuned for fire and smoke watches the feed. A detection has to persist for five consecutive frames before it counts, which is there to cut false alarms. The monitoring view is a web dashboard with the live stream and boxes on the frame.",
		highlights: [
			"Custom YOLOv8 model for fire and smoke",
			"Multi-frame verification before an alert",
			"Live monitoring dashboard around the camera stream",
			"Python service using OpenCV and FastAPI"
		],
		stack: [
			"Python",
			"YOLOv8",
			"OpenCV",
			"FastAPI"
		],
		tags: ["Machine learning", "FastAPI"],
		href: "https://github.com/Amit769/AI-Smart-CCTV-Analytics",
		stats: []
	},
	{
		id: "nifty-100",
		title: "Nifty 100 intelligence",
		year: "2026",
		kind: "Independent",
		summary: "Financial statements for Nifty 100 companies, turned into ratios, a screener, and a FastAPI layer.",
		body: "Separate from the mutual-fund internship. This one loads company statements into SQLite, checks the data, and computes a wide set of ratios and KPIs — the project notes account for more than fifty. Streamlit handles screening and peer comparison. FastAPI exposes the same figures, and the reporting path writes PDF summaries. Scikit-learn clusters companies.",
		highlights: [
			"ETL and validation into a SQLite warehouse",
			"Financial ratios, a stock screener, and peer comparison",
			"FastAPI service plus Streamlit dashboards",
			"PDF reports and a scikit-learn clustering pass"
		],
		stack: [
			"Python",
			"Pandas",
			"SQL",
			"SQLite",
			"FastAPI",
			"Streamlit",
			"Plotly",
			"scikit-learn"
		],
		tags: ["Data", "FastAPI"],
		href: "https://github.com/Amit769/Nifty100-Financial-Intelligence-Platform",
		stats: [{
			value: "50+",
			label: "Financial KPIs"
		}]
	},
	{
		id: "library",
		title: "Library management",
		year: "2026",
		kind: "Web application",
		summary: "Catalog, members, loans, returns, and fines, with access split by role.",
		body: "A library desk written down as software: books, members, issue and return, fine calculation, and notices. Access is role-based, so a member and a librarian do not see the same controls. It is the web-application piece beside the Python and model work.",
		highlights: [
			"Book and member records in one place",
			"Issue, return, and fine tracking",
			"Role-based access for staff and members"
		],
		stack: ["HTML", "CSS"],
		tags: ["Web"],
		href: "https://github.com/Amit769/Library-management-system-",
		stats: []
	}
];
var roles = [{
	id: "bluestock",
	title: "Data analyst intern",
	org: "Bluestock Fintech",
	when: "June 2026",
	projectId: "mutual-fund",
	points: [
		"Developed an end-to-end analytics platform in Python, SQL, and Power BI for financial data.",
		"Ran ETL, cleaning, exploratory analysis, and an interactive dashboard.",
		"Automated NAV ingestion from public APIs, with logging, error handling, and scheduling.",
		"Wrote interactive reports, HTML summaries, and portfolio notes for investment analysis."
	]
}, {
	id: "ybi",
	title: "Web developer intern",
	org: "YBI Foundation",
	when: "June 2023 – July 2023",
	points: [
		"Built and maintained web pages and application components.",
		"Worked with front-end developers on API consumption and data flow.",
		"Hands-on practice with React and the surrounding web toolchain."
	]
}];
var education = [
	{
		id: "btech",
		credential: "B.Tech, Computer Science & Engineering",
		school: "IILM University, Greater Noida",
		when: "2023 – 2027"
	},
	{
		id: "twelfth",
		credential: "12th class",
		school: "J.B. Academy, Faizabad",
		when: "2022 – 2023"
	},
	{
		id: "tenth",
		credential: "10th class",
		school: "J.B. Academy, Faizabad",
		when: "2020 – 2021"
	}
];
var certifications = [
	{
		id: "coursera-etl",
		title: "Data Science and ETL Tools",
		org: "Coursera",
		when: "Dec 2025"
	},
	{
		id: "infosys-python",
		title: "Python Fundamentals",
		org: "Infosys",
		when: "Mar 2025"
	},
	{
		id: "internshala-ds",
		title: "Data Science",
		org: "Internshala",
		when: "Jan 2025"
	},
	{
		id: "coursera-java",
		title: "Java Certification",
		org: "Coursera",
		when: "Sep 2024"
	}
];
var workshops = [
	{
		id: "cyber",
		title: "Cyber Security Workshop",
		org: "IILM University",
		when: "Oct 2024"
	},
	{
		id: "cloud",
		title: "Cloud Computing Workshop",
		org: "IEEE Conference",
		when: "Sep 2025"
	},
	{
		id: "ieee-ai",
		title: "IEEE International Conference on AI and Cyber Security",
		org: "IEEE",
		when: "Apr 2026"
	}
];
var skills = [
	{
		group: "Programming",
		items: "Python, Java, SQL"
	},
	{
		group: "Data and analytics",
		items: "Pandas, NumPy, Power BI, Excel, Matplotlib, Plotly"
	},
	{
		group: "Machine learning",
		items: "TensorFlow, CNN, deep learning"
	},
	{
		group: "Web",
		items: "HTML, CSS, React"
	},
	{
		group: "Databases",
		items: "PostgreSQL, Apache Hadoop"
	},
	{
		group: "APIs",
		items: "REST, FastAPI"
	},
	{
		group: "Tools",
		items: "Git, GitHub, data structures and algorithms"
	}
];
var filters = [
	"All",
	"Machine learning",
	"Data",
	"FastAPI",
	"Web"
];
function shortUrl(value) {
	return value.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
var nav = [
	{
		hash: "work",
		label: "Work"
	},
	{
		hash: "experience",
		label: "Experience"
	},
	{
		hash: "skills",
		label: "Skills"
	},
	{
		hash: "contact",
		label: "Contact"
	}
];
function SiteChrome({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("paper");
	(0, import_react.useEffect)(() => {
		const next = localStorage.getItem("amit-theme") === "night" ? "night" : "paper";
		setTheme(next);
		document.documentElement.dataset.theme = next;
		const meta = document.querySelector("meta[name=\"theme-color\"]");
		if (meta) meta.setAttribute("content", next === "night" ? "#141210" : "#f3eee6");
	}, []);
	function toggleTheme() {
		const next = theme === "paper" ? "night" : "paper";
		setTheme(next);
		localStorage.setItem("amit-theme", next);
		document.documentElement.dataset.theme = next;
		const meta = document.querySelector("meta[name=\"theme-color\"]");
		if (meta) meta.setAttribute("content", next === "night" ? "#141210" : "#f3eee6");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1 bg-saffron",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#work",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-4 focus:py-3 focus:text-bg",
			children: "Skip to work"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "no-print sticky top-0 z-30 border-b border-line bg-bg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-1 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-display text-xl italic",
						children: profile.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center md:flex",
						"aria-label": "Sections",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: item.hash,
							className: "inline-flex min-h-11 items-center px-3 text-sm",
							children: item.label
						}, item.hash))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center",
						"aria-label": theme === "paper" ? "Switch to night" : "Switch to paper",
						onClick: toggleTheme,
						children: theme === "paper" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
							className: "size-5",
							strokeWidth: 1.5
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
							className: "size-5",
							strokeWidth: 1.5
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex gap-1 overflow-x-auto px-4 pb-1 md:hidden",
				"aria-label": "Sections",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: item.hash,
					className: "inline-flex min-h-11 shrink-0 items-center px-3 text-sm",
					children: item.label
				}, item.hash))
			})]
		}),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.name,
					". ",
					profile.location,
					"."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-x-5 gap-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cv",
							className: "inline-flex min-h-11 items-center underline-offset-4 hover:underline",
							children: "CV"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.github,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "inline-flex min-h-11 items-center underline-offset-4 hover:underline",
							children: shortUrl(profile.github)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.linkedin,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "inline-flex min-h-11 items-center underline-offset-4 hover:underline",
							children: "LinkedIn"
						})
					]
				})]
			})
		})
	] });
}
var styles_default = "/assets/styles-C_dY7jHg.css";
var themeScript = `try{var t=localStorage.getItem("amit-theme");if(t==="night"||t==="paper")document.documentElement.dataset.theme=t;}catch(e){}`;
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Amit Singh — Software developer" },
			{
				name: "description",
				content: "Portfolio of Amit Singh, final-year computer science student at IILM University, Greater Noida. Python, FastAPI, machine learning, and data systems."
			},
			{
				name: "theme-color",
				content: "#f3eee6"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Outfit:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-bg font-sans text-fg antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeScript } }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$3 = () => import("./routes-b_xU6V-g.mjs");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("../_-pgkRKzOL.mjs");
var Route$2 = createFileRoute("/$")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./cv-BFI45Y8U.mjs");
var Route$1 = createFileRoute("/cv")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "CV — Amit Singh" }] })
});
var $$splitComponentImporter = () => import("./work._id-BpbxjnHF.mjs");
var Route = createFileRoute("/work/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	SplatRoute: Route$2.update({
		id: "/$",
		path: "/$",
		getParentRoute: () => Route$4
	}),
	CvRoute: Route$1.update({
		id: "/cv",
		path: "/cv",
		getParentRoute: () => Route$4
	}),
	WorkIdRoute: Route.update({
		id: "/work/$id",
		path: "/work/$id",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { filters as a, roles as c, workshops as d, education as i, shortUrl as l, Route as n, profile as o, certifications as r, projects as s, router_exports as t, skills as u };
