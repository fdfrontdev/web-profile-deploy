<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **web-profile-deploy** (23 symbols, 19 relationships, 0 execution flows). Use GitNexus to understand the repository before making structural changes.

> If the index is stale, run `gitnexus analyze .` from the repository root. Inspect generated files afterward: GitNexus may create temporary root stubs or `.claude/` content; those are not the Firdaus Engineering Standard.

## Always Do

- Read this file and `CLAUDE.md` before editing.
- Run GitNexus impact analysis before changing a named function, script, component, or shared asset.
- Run GitNexus change detection before committing.
- Verify public URLs, link targets, asset paths, and rendered text after every deployment.
- Preserve the IP-safe public representation: describe real work without exposing private client or employer identities.
- Keep public copy traceable to a real artifact, release, screenshot, or verified result.
- Treat accessibility, mobile layout, performance, and link integrity as acceptance criteria.

## Never Do

- Never edit public claims from memory when the repository, vault, or release is available.
- Never add a link unless its destination has been live-verified.
- Never add fake metrics, testimonials, client names, or employment claims.
- Never commit passwords, tokens, private URLs, demo credentials, or payout information.
- Never edit generated deployment output instead of the source HTML.
- Never use a broad find-and-replace when a targeted edit is possible.

## MCP / Knowledge Selection

| Need | Source |
|---|---|
| Code graph, blast radius, change scope | GitNexus |
| Prior decisions and lessons | Second Brain |
| Requirements, ADRs, UAT, release evidence | Obsidian vault |
| External platform or browser facts | Live web / browser |
| Exact local file content | Read/search tools |

## Project context

| Field | Value |
|---|---|
| Repository | `web-profile-deploy` |
| Path | `C:\github\web-profile-deploy` |
| Purpose | Public personal web profile and FIRDAUS BUILDS project landing pages |
| Stack | Static HTML5, CSS3, vanilla JavaScript, GitHub Pages |
| Active branch | `fix/resume-story-lens` |
| Public URL | `https://fdfrontdev.github.io/web-profile-deploy/` |
| Vault path | `1 Projects/Personal/Web Profile/` |

## Architecture

```text
index.html
  ├── profile / services / project cards
  ├── direct contact and social links
  └── relative project landing-page links

chrono.html
  ├── CHRONO product story
  ├── download and GitHub release links
  └── Patreon / YouTube support and traffic links

assets and media
  └── images, screenshots, SVG evidence, and social preview assets
```

The site has no build framework or server-side runtime. HTML is the source of truth. CSS is embedded in the current pages unless a future task intentionally extracts it. Keep changes small and page-local.

## Delivery workflow

1. Read `CLAUDE.md`, the relevant vault docs, and Second Brain results.
2. Define the user-facing acceptance criteria and exact URLs.
3. Run `gitnexus analyze .` if the index is stale; inspect and remove unintended generated stubs.
4. Make the smallest source edit on a feature/fix branch.
5. Run static checks, HTML/link checks, and browser smoke tests.
6. Inspect the rendered page at desktop and narrow mobile widths.
7. Deploy through the approved Git workflow.
8. Verify the public URL and every changed link.
9. Record implementation/UAT evidence in the vault, Second Brain, and HQ Dashboard.

## Git standards

```text
type(scope): description

Examples:
  docs(web-profile): add Craftlancer storefront CTA
  fix(web-profile): repair broken project link
  feat(chrono): add verified release CTA
```

Use a feature or fix branch. Do not push directly to `master`. Keep `AGENTS.md` and `CLAUDE.md` versioned as repository operating instructions. Do not commit `.gitnexus/` or generated `.claude/` files unless explicitly required by the task.

## Vault references

- Requirements: `1 Projects/Personal/Web Profile/1 - Requirements/`
- Architecture: `1 Projects/Personal/Web Profile/2 - Architecture & Design/`
- UAT: `1 Projects/Personal/Web Profile/1 - Requirements/02 - UAT Review - Web Profile.md`
- Brand audit: `1 Projects/Personal/Web Profile/2026-08-17 - Brand Audit - Resume Web Profile GitHub.md`
- Business/social mandate: `1 Projects/Personal/Business/02 - Social Account Manager Operating Mandate.md`

<!-- gitnexus:end -->