# PlanEasy Crowdsourcing Framework agent guide

Rules for every agent and LLM provider working in this repository. It holds
documentation, questionnaire schemas (`questionnaires/`) and the GitHub Pages site
(`docs/`). There is no build or test
tooling; verify changes by reading the diff and rendering the affected pages.

## Git and delivery

- Work on a task branch named `lory/<task>` created from the default branch
  (`origin/HEAD`, currently `main`). Never commit on, merge into, rebase, reset or
  push directly to `main`.
- Check root, branch and `git status` before editing. Preserve unrelated work;
  if the working tree is not clean for your task, stop and report.
- Never discard work, rewrite history or force-push. Destructive operations
  (deleting branches, files or data, history rewrites, forced updates) require
  Lory's explicit authorization for the action, target and scope.
- Commit messages and pull request text carry only the operator's own Git
  identity: no `Co-Authored-By`, `Generated-with` or other AI attribution lines.
- Push only when the user asks. GitHub is read-only for agents: no PR creation,
  comments, merges, issues or settings changes.

## Content rules

- No credentials, tokens, private infrastructure values or unnecessary personal
  data in tracked files. Questionnaire schemas and examples use no real responses.
- Privacy and consent texts are legal content: change them only on an explicit
  request, and keep every language version consistent.
- Translations are reviewed translations written for each language, never English
  copies. The questionnaires and privacy pages keep the same keys and structure in
  every language.
- Pages are accessible: WCAG 2.1 AA contrast (4.5:1 text, 3:1 large text and
  UI), alt text on every meaningful image, `lang` on the document and on each
  language block, `dir="rtl"` for Arabic and Persian, a skip link and landmarks.
- Keep the existing file names and URLs of published pages and schemas; external
  apps load them by raw GitHub URL.

## Brand

PlanEasy's brand source of truth is the CityMaaS repository
(`CityMaasRoot/WebsiteCreation/Configuration/planeasy_*.svg`, palette in
`CityMaasRoot/Projects/PlanEasy/Configuration/Styles.css`). Copy brand assets from
there; do not redraw or recolour them here.

- Assets in `docs/assets/PlanEasy/`: `planeasy_mark.svg` (favicon, adapts to dark
  schemes), `planeasy_logo.svg` (white, for a teal bar), `planeasy_splash.svg`
  (mark and wordmark on light, adapts to dark), PNG fallbacks
  `planeasy_favicon_32.png`, `planeasy_apple_touch_icon_180.png`,
  `planeasy_icon_512.png`. The old `plan_easy_image.jpg`, `planeasy_logo.jpg` and the
  GitHub organisation avatar are superseded.
- Palette: teal `#087083` (primary), dark teal `#065A69`, magenta `#D6206B`
  (active), yellow `#FFDA28` (accent only, never for text), ink `#0B1214`, light
  background `#F3F7F8`, dark-mode teal `#22B3C4`.
- Name: "PlanEasy" in prose; the wordmark is lowercase "planeasy" ("plan" bold ink,
  "easy" regular teal). Tagline: "Plan the city together" (translations under
  `#Plan the city together` in the CityMaaS `languages/*.json`).
- The Markdown pages of the Pages site get the favicon, `theme-color` and link
  colours from `docs/_includes/head-custom.html`.
- SmartUrbanity pages and questionnaires belong to the smarturbanity-configuration
  repository; do not add copies here.
