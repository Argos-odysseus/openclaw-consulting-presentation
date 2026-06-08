# OpenClaw Consulting Presentation

Static GitHub Pages presentation pitching an OpenClaw consulting pilot for engineering teams.

Live site:

https://argos-odysseus.github.io/openclaw-consulting-presentation/

Audience:

- Engineering leaders evaluating agent-assisted delivery workflows
- Consulting buyers who need measurable review, triage, and handoff improvements
- Teams that already use AI informally and now need explicit gates, evidence, and client-safe boundaries

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
