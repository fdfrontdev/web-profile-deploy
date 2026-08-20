<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **web-profile-deploy** (23 symbols, 19 relationships, 0 execution flows).

> Run `gitnexus analyze .` when the index is stale. Inspect generated files afterward; GitNexus can create temporary stubs that are not the Firdaus Engineering Standard.

## Always Do

- Run impact analysis before changing a named function, script, shared asset, or public contract.
- Run change detection before committing.
- Warn before proceeding if the affected surface has high or critical blast radius.
- Use the vault and Second Brain when the task depends on prior decisions, brand rules, or public claims.
- Verify changed links and live deployment results instead of trusting local files alone.

## Never Do

- Never invent public facts, metrics, testimonials, client names, or release claims.
- Never expose private employer/client identities or internal URLs in public pages.
- Never commit credentials, tokens, personal financial information, or private demo data.
- Never replace a targeted edit with a broad search-and-replace.
- Never deploy code or content that has not been reviewed and understood.

<!-- gitnexus:end -->

# Firdaus Engineering Standards — Static Web Profile Variant

This repository follows the Firdaus Engineering Standards v5. The site is a static public-facing product and portfolio surface. The standards below are mandatory for every code, copy, asset, link, and deployment change.

## Provider-agnostic rules

| # | Rule | Required behavior |
|---:|---|---|
| 1 | Understand before editing | Read the relevant source, vault context, and existing patterns first. |
| 2 | Contract first | Define the user-facing link, text, asset, and acceptance criteria before editing. |
| 3 | Smallest change | Prefer one targeted source change over a rewrite of the page. |
| 4 | Evidence before claims | Every public claim maps to a repository artifact, vault record, release, or live verification. |
| 5 | IP safety | Use public-safe project language; never expose private client or employer identities. |
| 6 | No secrets | Keep credentials, tokens, private URLs, financial details, and recovery data out of the repository. |
| 7 | Accessibility | Use semantic headings, meaningful link text, keyboard access, visible focus, and useful alt text. |
| 8 | Responsive behavior | Test narrow mobile, tablet, and desktop widths after visual changes. |
| 9 | Link integrity | Every changed internal and external link must be checked for status and destination. |
| 10 | Performance | Avoid unnecessary dependencies, oversized assets, blocking scripts, and duplicate media. |
| 11 | Honest content | Do not fabricate metrics, testimonials, experience, client names, or outcomes. |
| 12 | Traceable branding | Keep FIRDAUS BUILDS, CHRONO, profile, GitHub, Patreon, Gumroad, and YouTube references consistent. |
| 13 | Public copy is product behavior | Treat text, CTA labels, metadata, and previews as testable user-facing behavior. |
| 14 | Zero unexplained warnings | Resolve HTML, link, accessibility, and deployment warnings or document the reason. |
| 15 | Understand before ship | The author must be able to explain every changed line and every public destination. |

## Golden sequence for every change

```text
1. VALUE — Why does this change help a visitor or business goal?
2. CONTRACT — Define the exact text, destination, and acceptance criteria.
3. CONTEXT — Read vault, SB, current page, and neighboring markup.
4. IMPACT — Run GitNexus analysis and inspect affected surfaces.
5. RED — Add or define a failing check where practical.
6. GREEN — Make the smallest source edit.
7. VERIFY — Run static, link, accessibility, responsive, and browser checks.
8. DOCUMENT — Record decision, evidence, and UAT in the vault/SB/HQ.
9. SHIP — Deploy only after verification, then recheck the live bytes.
```

## Architecture

```text
Static source
  ├── index.html       profile, services, project cards, contact
  ├── chrono.html      CHRONO product landing page
  ├── media/assets     screenshots, preview images, SVG evidence
  └── repository docs  README, AGENTS, CLAUDE, task evidence

Public delivery
  └── GitHub Pages at fdfrontdev.github.io/web-profile-deploy
```

There is no framework, build server, API, database, or runtime service. The HTML documents are the application. The browser is the integration environment. GitHub Pages is the deployment boundary.

## Page responsibilities

### `index.html`

- Presents Mohamad Firdaus and the FIRDAUS BUILDS identity.
- Explains services and selected work.
- Links visitors to verified project pages, GitHub, professional contact, and income channels.
- Must keep the first-screen value proposition direct and honest.

### `chrono.html`

- Presents CHRONO as a free GTA V product.
- Explains the justice-first product concept and real project evidence.
- Links to the current GitHub release, downloads, Patreon, YouTube, and the parent profile.
- Must not imply that support tiers restrict the free artifact.

### Media and assets

- Use real screenshots or deterministic SVG assets.
- Keep filenames descriptive and stable.
- Check dimensions, file size, alt text, and contrast.
- Do not add an asset that cannot be traced to the project or its approved visual system.

## Content and brand rules

1. Use `FIRDAUS BUILDS` as the maker/studio identity.
2. Use `CHRONO` as the flagship product identity.
3. Keep public wording natural, modest, specific, and proof-led.
4. Avoid private client/employer names and internal URLs.
5. Avoid tenure boasting in public marketing copy.
6. State free products as free when that is the actual offer.
7. Support links may sell knowledge, access, community, or support; never falsely paywall the free artifact.
8. Use `insya-Allah` for future plans and avoid guaranteed outcomes.
9. Give credit to Allah for wins with appropriate adab; receipts are evidence, not trophies.
10. Every CTA must tell the visitor what they will see after clicking.

## Link contract

Every link added or changed must define:

```text
Source surface: page and section containing the link
Label: visible text shown to the visitor
Destination: exact URL
Purpose: traffic, download, support, contact, or navigation
Expected status: normally HTTP 200
Expected destination: final URL and page title
Fallback: what the visitor sees if the service is unavailable
```

For the Craftlancer storefront change:

```text
Source: index.html, Craftlancer — Digital Products card
Label: Visit the Craftlancer storefront
Destination: https://craftlancer.gumroad.com
Purpose: move profile visitors into the owned digital-product storefront
Expected status: HTTP 200
Expected destination: Craftlancer Gumroad profile with product cards
```

Do not use a placeholder root such as `https://gumroad.com` when the owned storefront URL is known.

## HTML and CSS rules

- Use valid HTML5 structure and one logical `h1` per page.
- Preserve existing semantic sections and heading order.
- Use meaningful link text; do not use bare `click here`.
- External links must use the existing security convention, normally `rel="noopener noreferrer"` when opening a new tab.
- Keep CSS consistent with the existing design tokens and spacing system.
- Do not introduce a CSS framework or JavaScript dependency for a one-link change.
- Do not duplicate a CTA in multiple places without a clear conversion reason.
- Keep inline scripts small and side-effect boundaries obvious.
- Do not hide essential content behind hover-only behavior.
- Respect `prefers-reduced-motion` when adding animation.

## Function and script rules

The current site is mostly declarative HTML/CSS. If JavaScript is added:

- Name functions with verb + noun: `toggleDemoCredentials`, `openProjectLink`.
- Keep functions small and single-purpose.
- Keep business/content decisions outside DOM plumbing where possible.
- Pass dependencies and selected elements into helpers instead of reaching through global state.
- Keep pure formatting/derivation separate from DOM mutation.
- Use explicit error handling for failed network or DOM operations.
- Do not add JavaScript to solve a problem that a normal anchor can solve.

## Accessibility acceptance criteria

- Keyboard users can reach every interactive control.
- Focus is visible and not hidden behind fixed navigation.
- Headings follow a logical hierarchy.
- Images have useful alt text; decorative images use empty alt text.
- Links describe their destination.
- Color is not the only way information is conveyed.
- Text contrast remains readable in dark mode.
- Mobile controls remain usable at narrow widths.

## Testing strategy

### Static checks

Run the available repository checks before deployment:

```bash
git status --short --branch
python - <<'PY'
# Use a real script or equivalent local checker to parse changed URLs.
PY
```

Do not invent a package script if the repository does not have a package manager. For a static site, direct HTTP and browser checks are valid integration tests.

### Link and destination checks

For every changed URL, verify:

- HTTP status
- Final URL after redirects
- Page title or visible destination identity
- No accidental login wall, placeholder, or unrelated redirect
- Link appears in the deployed public HTML, not only local source

### Browser smoke checks

At minimum:

1. Open the public profile page.
2. Locate the changed card and link.
3. Activate the link.
4. Confirm the destination page and storefront identity.
5. Return to the profile page.
6. Check the page at a narrow mobile viewport and desktop viewport.

### UAT format

Every user-visible change must record:

- Business scenario
- Test data or URL
- User steps
- Expected result
- Pass/fail decision
- Notes and follow-up actions

## Git workflow

- Work on a feature, fix, or chore branch.
- Never push directly to `master`.
- Keep commits narrow and reviewable.
- Use conventional commit messages:

```text
docs(web-profile): bootstrap repository standards
fix(web-profile): add Craftlancer storefront CTA
```

- Run GitNexus change detection before committing.
- Do not commit `.gitnexus/` or generated `.claude/` artifacts.
- Commit the intentional `AGENTS.md` and `CLAUDE.md` standards files.

## Deployment and rollback

- Inspect the diff before deployment.
- Confirm the branch and remote target.
- Deploy only the intended source files.
- Verify the live URL after GitHub Pages updates.
- If the live page is wrong, revert the smallest commit or restore the previous source, then re-verify.
- Never report success from a local file alone.

## Vault and Second Brain

Project docs live at:

`C:\obsidian\openclaw\1 Projects\Personal\Web Profile\`

Relevant documents:

- `1 - Requirements/00 - Value Analysis - Web Profile.md`
- `1 - Requirements/01 - SRS - Web Profile.md`
- `1 - Requirements/02 - UAT Review - Web Profile.md`
- `2 - Architecture & Design/01 - HLD - Web Profile.md`
- `2026-08-17 - Brand Audit - Resume Web Profile GitHub.md`
- `C:\obsidian\openclaw\1 Projects\Personal\Business\03 - Social Session - 2026-08-19 - Threads CHRONO Funnel.md`

If it is not in the vault, it did not happen. After a meaningful implementation or deployment:

1. Update or create the implementation/UAT note.
2. Reload the vault index after note creation.
3. Add the result and lesson to Second Brain.
4. Update `C:\obsidian\openclaw\00 - HQ Dashboard.md` with status, links, and the last-updated line.

## Review checklist

Before saying the change is complete:

- [ ] SB and vault were consulted.
- [ ] AGENTS and CLAUDE were read.
- [ ] GitNexus index is current and unintended stubs are absent.
- [ ] Diff contains only intended changes.
- [ ] Public copy is traceable and IP-safe.
- [ ] Changed URLs resolve and land on the intended pages.
- [ ] Desktop and mobile rendering checked.
- [ ] Accessibility basics checked.
- [ ] UAT evidence recorded.
- [ ] SB and HQ synced.
- [ ] Repository status and deployment result verified.
