// import WebDevelopmentImage from "../assets/Images/web-development.png";

export const blogPosts = [
//   {
//     slug: "write-code-that-is-easy-to-change",
//     title: "Write Code That Is Easy to Change",
//     excerpt:
//       "Good software is not only code that works today. It is code that can survive the next requirement without becoming harder to understand.",
//     category: "Software Engineering",
//     readTime: "5 min read",
//     date: "Apr 2026",
//     tags: ["Maintainability", "Architecture", "Refactoring"],
//     content: [
//       {
//         type: "paragraph",
//         text: "Most codebases do not become difficult because one large mistake was made. They become difficult through many small decisions that made sense in isolation. A shortcut here, a duplicated condition there, one unclear name, and eventually every change needs extra caution.",
//       },
//       {
//         type: "heading",
//         text: "Prefer readable flow over clever structure",
//       },
//       {
//         type: "paragraph",
//         text: "The first step is to make code obvious. A future developer should be able to understand the main path without reading every helper function. Clear names, small functions, and simple data flow usually beat clever abstractions.",
//       },
//       {
//         type: "code",
//         language: "js",
//         filename: "example.js",
//         code: `const getActiveProjects = (projects) =>
//   projects.filter((project) => project.status === "active");

// const activeProjects = getActiveProjects(projects);`,
//       },
//       {
//         type: "paragraph",
//         text: "The second step is to keep boundaries honest. UI code should not know too much about persistence. API handlers should not carry business rules that belong in services. When boundaries stay clear, changes tend to stay local.",
//       },
//       {
//         type: "paragraph",
//         text: "The third step is to refactor when context is fresh. Waiting for a perfect cleanup sprint rarely works. Small improvements made while shipping a related feature compound faster than large rewrites planned for later.",
//       },
//     ],
//   },
//   {
//     slug: "debugging-is-a-design-skill",
//     title: "Debugging Is a Design Skill",
//     excerpt:
//       "Debugging is not just fixing broken behavior. It is a way to learn where a system is unclear, fragile, or hiding important state.",
//     category: "Engineering Practice",
//     readTime: "4 min read",
//     date: "Mar 2026",
//     tags: ["Debugging", "Systems", "Observability"],
//     content: [
//       "A bug is often a design review arriving late. It shows that the system allowed an invalid state, hid an important assumption, or made the wrong path too easy to take.",
//       "Effective debugging starts with narrowing the problem. Reproduce the issue, identify the last known good state, and avoid changing many things at once. The goal is not to guess faster. The goal is to remove uncertainty.",
//       "Logs, errors, and UI states are part of the product experience for developers. If a system is painful to inspect, it will be painful to operate. Good engineering makes failure easier to understand.",
//       "Once the bug is fixed, the useful question is not only why it happened. Ask what would have made it impossible, easier to catch, or easier to diagnose.",
//     ],
//   },
//   {
//     slug: "small-teams-need-boring-systems",
//     title: "Small Teams Need Boring Systems",
//     excerpt:
//       "The best technical choice for a small team is often the one that reduces surprise, keeps operations simple, and lets people ship consistently.",
//     category: "Product Engineering",
//     readTime: "6 min read",
//     date: "Feb 2026",
//     tags: ["Teams", "Delivery", "Tradeoffs"],
//     content: [
//       "Small teams win by staying focused. Every extra framework, queue, service, and deployment path adds a maintenance cost that has to be paid by the same people building the product.",
//       "Boring does not mean low quality. It means choosing tools that are understood, documented, and predictable. A boring system gives the team more room to spend creativity on the product instead of infrastructure surprises.",
//       "This is especially important before product-market fit. Requirements change quickly, and a simple system is easier to reshape. Complexity should be earned by real pressure, not added because it feels more scalable.",
//       "A useful rule is to choose the simplest architecture that keeps the next few months safe. If the system can be monitored, tested, deployed, and changed without heroics, it is probably good enough.",
//     ],
//   },
//   {
//     slug: "frontend-polish-is-engineering",
//     title: "Frontend Polish Is Engineering",
//     excerpt:
//       "Strong interfaces come from engineering decisions: loading states, responsive behavior, accessibility, performance, and clear feedback loops.",
//     category: "Frontend",
//     readTime: "4 min read",
//     date: "Jan 2026",
//     tags: ["Frontend", "UX", "Performance"],
//     content: [
//       {
//         type: "paragraph",
//         text: "Polish is often treated like decoration, but most of it is engineering. A button that clearly shows progress, a form that preserves user input, and a layout that works on small screens are all reliability features.",
//       },
//       {
//         type: "image",
//         src: WebDevelopmentImage,
//         alt: "Illustration of web development tools",
//         caption: "Use image blocks when a visual helps explain the engineering decision.",
//       },
//       {
//         type: "paragraph",
//         text: "Good frontend work makes state visible. Users should understand what is happening, what changed, and what they can do next. Ambiguous interfaces create support cost and reduce trust.",
//       },
//       {
//         type: "paragraph",
//         text: "Performance also shapes quality. A beautiful page that shifts during load or blocks interaction feels broken. Smooth experiences are built through practical choices around assets, rendering, and layout stability.",
//       },
//       {
//         type: "paragraph",
//         text: "The details matter because they are where users meet the system. Frontend polish is not extra. It is how engineering quality becomes visible.",
//       },
//     ],
//   },
];

export const getBlogPostBySlug = (slug) =>
  blogPosts.find((post) => post.slug === slug);
