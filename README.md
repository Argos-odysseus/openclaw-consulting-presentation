# OpenClaw Consulting Presentation

Static GitHub Pages presentation explaining OpenClaw as a practical operating layer for software engineering consulting.

Live site:

https://argos-odysseus.github.io/openclaw-consulting-presentation/

Audience:

- Software engineering consultants
- Consulting leaders evaluating agent-assisted delivery workflows
- Teams that need AI support with explicit human gates, audit trails, and client-safe boundaries

Scope:

- Static public deck only
- No backend, secrets, credentials, analytics, or live OpenClaw access
- Intended as a consulting conversation starter, not implementation documentation

Files:

- `index.html` - slide deck markup
- `styles.css` - presentation styling, responsive layout, print layout
- `app.js` - slide navigation and hash state

Verification baseline:

- `node --check app.js`
- `git diff --check`
- GitHub Pages build/deploy
- Live HTML/CSS/JS checks
- Browser desktop/mobile visual pass

Local preview:

```bash
cd /Users/argos/.openclaw/workspace/openclaw-consulting-presentation
python3 -m http.server 4318
```
