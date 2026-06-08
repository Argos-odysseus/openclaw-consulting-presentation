# OpenClaw Agent OS Showcase

Static GitHub Pages presentation showcasing OpenClaw as an agent runtime, harness model, and operating-system-style control plane.

Live site:

https://argos-odysseus.github.io/openclaw-consulting-presentation/

Audience:

- Agent builders, model engineers, and system architects
- Practitioners designing tool runtimes, harnesses, permission gates, memory systems, and distributed agent workflows
- Technical teams evaluating how to turn LLM calls into inspectable operating entities

Scope:

- Static public deck only
- No backend, secrets, credentials, analytics, external assets, or live OpenClaw access
- Inline SVG and HTML diagrams for models, flows, boundaries, and persistence layers
- Intended as a technical showcase, not a consulting pitch or buyer CTA

Files:

- `index.html` - slide deck markup and inline diagrams
- `styles.css` - presentation styling, responsive layout, print layout
- `app.js` - slide navigation and hash state

Verification baseline:

- `node --check app.js`
- `git diff --check`
- Static HTTP checks for `index.html`, `styles.css`, and `app.js`
- Desktop/mobile visual pass
- Hash navigation check for the final slide

Local preview:

```bash
cd /Users/argos/.openclaw/workspace/openclaw-consulting-presentation
python3 -m http.server 4318
```
