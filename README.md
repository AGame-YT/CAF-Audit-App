# CAF Audit Tracker

A mobile-friendly, installable checklist for running a self-assessment against the NCSC **Cyber Assessment Framework v4.0** (April 2024). Built to install straight to a phone home screen — no app store involved.

Everything (all 4 objectives, 14 principles, 41 contributing outcomes, and the full text of every "Indicators of Good Practice" table) is loaded into the app itself, so it works fully offline once installed. All your answers and notes stay on your device — nothing is sent anywhere.

## Getting it on your phone

You need the files hosted somewhere your phone can reach over HTTPS (required for it to install as a proper offline app). The easiest way, since this is already a git repo:

**Option A — GitHub Pages (recommended)**

```bash
git add -A
git commit -m "Initial CAF audit tracker"
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source → Deploy from branch → main → / (root)**. After a minute or two your app is live at `https://<your-username>.github.io/CAF-Audit-App/`. Open that link on your phone.

**Option B — quick local test on your home WiFi**

From this folder: `python -m http.server 8420`, then on your phone (same WiFi) visit `http://<your-PC's-LAN-IP>:8420`. Good for trying it out, but plain HTTP means Android Chrome won't offer a proper "Install app" prompt (iOS Safari's Add to Home Screen works regardless). Use Option A for the real thing.

**Installing once you have the link open on your phone:**
- **iPhone (Safari):** Share icon → *Add to Home Screen*.
- **Android (Chrome):** ⋮ menu → *Install app* (or *Add to Home screen*).

It'll then open full-screen like a normal app, with its own icon, and keep working with no signal.

## Using it

Each of the 41 contributing outcomes (e.g. *A1.a Board Direction*) gets a status — these are CAF's own achievement levels, colour-coded:

- 🔴 **Not achieved** · 🟡 **Partial** · 🟢 **Achieved** · ⚪ **To do** (not yet reviewed)

Tap **Show indicators of good practice** on any outcome to see NCSC's actual guidance text for what "achieved" vs "not achieved" looks like — that's what you're judging against. Use the **notes** box under each one to jot down evidence or gaps as you go.

Other bits:
- **Jump to next item to review** — jumps straight to the next unreviewed outcome, in order.
- **Search / filter chips** — filter down to just Red items, or search e.g. "backup" or "MFA" across every outcome's guidance text.
- **☰ menu** — set an organisation/system name (shown on reports), export a plain-text report or a JSON backup, restore from a backup, or reset everything.
- Since it's a week-long job, **export a JSON backup** occasionally from the menu — it's the only copy of your data outside this one device/browser.

## Source

Content is NCSC's Cyber Assessment Framework v4.0, published under the [Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). See [ncsc.gov.uk/collection/cyber-assessment-framework](https://www.ncsc.gov.uk/collection/cyber-assessment-framework) for the original guidance and full context — this app is a working checklist, not a replacement for reading it.
