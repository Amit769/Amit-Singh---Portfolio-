import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as filters, c as roles, d as workshops, i as education, l as shortUrl, o as profile, r as certifications, s as projects, u as skills } from "./router-ChtzzfPM.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-b_xU6V-g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2 bg-saffron",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.location }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IILM University · Class of 2027" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-6 text-balance",
					children: profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lead mt-4 text-balance",
					children: profile.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-xl text-lg leading-relaxed text-pretty",
					children: profile.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl leading-relaxed text-muted text-pretty",
					children: profile.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-x-6 gap-y-1 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4",
							href: `mailto:${profile.email}`,
							children: profile.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4",
							href: profile.phoneHref,
							children: profile.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4",
							href: profile.github,
							target: "_blank",
							rel: "noreferrer noopener",
							children: shortUrl(profile.github)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4",
							href: profile.linkedin,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "LinkedIn"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm",
					children: profile.availability
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "work",
			className: "scroll-mt-32 border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: "Selected work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead mt-3",
							children: "Models, pipelines, and web software."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-x-4",
							role: "group",
							"aria-label": "Filter projects",
							children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": filter === item,
								onClick: () => setFilter(item),
								className: clsx("min-h-11 border-b-2 text-sm", filter === item ? "border-saffron text-fg" : "border-transparent text-muted"),
								children: item
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm tabular-nums text-muted",
						children: [
							visible.length,
							" of ",
							projects.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 border-b border-line",
						children: visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "border-t border-line py-10 text-muted",
							children: [
								"Nothing filed under ",
								filter,
								"."
							]
						}) : visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, { project }, project.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "experience",
			className: "scroll-mt-32 border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: "Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-12 md:grid-cols-2",
					children: roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm tabular-nums text-muted",
							children: role.when
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl italic",
							children: role.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: role.org
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: role.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[1rem_1fr] gap-3 leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-3 h-px bg-saffron",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
							}, point))
						}),
						role.projectId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work/$id",
							params: { id: role.projectId },
							className: "mt-4 inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4",
							children: "Related project"
						}) : null
					] }, role.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "skills",
			className: "scroll-mt-32 border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-widest text-muted",
					children: "Skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2",
					children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: skill.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-lg",
							children: skill.items
						})]
					}, skill.group))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "background",
			className: "scroll-mt-32 border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-14 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Education"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 border-t border-line",
						children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-line py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums text-muted",
									children: item.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: item.credential
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: item.school
								})
							]
						}, item.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Certifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 border-t border-line",
						children: certifications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-line py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums text-muted",
									children: item.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: item.org
								})
							]
						}, item.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Workshops"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 border-t border-line",
						children: workshops.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-line py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums text-muted",
									children: item.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: item.org
								})
							]
						}, item.id))
					})] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
function ProjectRow({ project }) {
	const index = projects.findIndex((item) => item.id === project.id);
	const number = String(index + 1).padStart(2, "0");
	const stat = project.stats[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid gap-4 border-t border-line py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-widest text-muted tabular-nums",
					children: [
						number,
						" · ",
						project.kind,
						" · ",
						project.year
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-4xl italic",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work/$id",
						params: { id: project.id },
						className: "underline-offset-4 hover:underline",
						children: project.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl leading-relaxed text-muted",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm",
					children: project.stack.join(" · ")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 md:col-span-4 md:items-end md:text-right",
			children: [stat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-4xl tabular-nums",
				children: stat.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs uppercase tracking-widest text-muted",
				children: stat.label
			})] }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-5 text-sm md:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work/$id",
					params: { id: project.id },
					className: "inline-flex min-h-11 items-center underline decoration-saffron underline-offset-4",
					children: "Read"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.href,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "inline-flex min-h-11 items-center gap-1 underline decoration-saffron underline-offset-4",
					children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-4",
						"aria-hidden": "true"
					})]
				})]
			})]
		})]
	});
}
function Contact() {
	const [from, setFrom] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const ready = from.trim().length > 0 && message.trim().length > 0;
	function onSubmit(event) {
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
	const field = "mt-2 w-full border-b border-inverse-fg/40 bg-transparent py-3 text-inverse-fg outline-none placeholder:text-inverse-fg/50 focus:border-saffron";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-32 bg-inverse text-inverse-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-widest text-inverse-fg/70",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead mt-4",
						children: "Write."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-sm leading-relaxed text-inverse-fg/80",
						children: [
							profile.availability,
							". Based in ",
							profile.location,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${profile.email}`,
						className: "mt-8 block break-all font-display text-2xl underline decoration-saffron decoration-2 underline-offset-8 sm:text-4xl",
						children: profile.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: profile.phoneHref,
						className: "mt-4 inline-flex min-h-11 items-center text-inverse-fg/80",
						children: profile.phone
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "md:col-span-6 md:col-start-7",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						htmlFor: "from-name",
						children: ["Your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "from-name",
							name: "name",
							autoComplete: "name",
							value: from,
							onChange: (event) => setFrom(event.target.value),
							className: field
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm",
						htmlFor: "note",
						children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "note",
							name: "message",
							rows: 5,
							value: message,
							onChange: (event) => setMessage(event.target.value),
							className: field
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: !ready,
						className: "mt-8 min-h-11 bg-inverse-fg px-6 font-medium text-inverse disabled:opacity-40",
						children: "Email Amit"
					}),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-inverse-fg/80",
								children: "If your mail app did not open, the note is here."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								readOnly: true,
								value: note,
								rows: 6,
								className: `${field} mt-3`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void copyNote(),
								className: "mt-3 min-h-11 underline underline-offset-4",
								children: copied ? "Copied" : "Copy note"
							})
						]
					}) : null
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
