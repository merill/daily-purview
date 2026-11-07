# daily-purview

[daily.purview.admin.news](https://daily.purview.admin.news): a readable daily
record of what changed across Microsoft Purview documentation.

This repository holds the product: its configuration, its assets, and its
generated site. The generator, the workflows' steps and the test suite live in
[merill/dailynews-engine](https://github.com/merill/dailynews-engine).

## What it tracks

[`merill/purview-docs-mirror`](https://github.com/merill/purview-docs-mirror):
every Purview page on Microsoft Learn, rebuilt as Markdown by
[learn-mirror](https://github.com/merill/learn-mirror) four times a day. Purview
publishes from `MicrosoftDocs/Purview-pr`, which is not public, so the mirror's
history is the only change history there is. It begins on 4 November 2026; the
first commit is the initial import, and the archive starts the day after.

Every page publishes at `purview/<file name>`. The test suite checks that route
against every URL the crawl fetched, so a page Learn moves shows up as a failure
rather than a dead link. One page is known to publish under a different slug
(`dlp-policy-design`); Learn redirects its file-name URL.

Purview's articles sit flat in one folder, so solutions are classified from file
names (`dlp-*`, `insider-risk-*`, `edisc-*`, `unified-catalog-*`, ...), not
folders. Pages about the portal, billing and roles stay under Microsoft Purview.

## v1 has no email

`email: { enabled: false }`. The site is the whole product for now.

## Working on it

```bash
npm run engine:link     # links ../dailynews-engine into node_modules
npm run docs:clone      # clones the mirror into purview-docs/
npm test
TZ=UTC npm run build:site
npm run dev
```

`TZ=UTC` matters: without it every date bucket shifts.

## Deploying

Cloudflare Pages, connected to this repository: production branch `main`, no
build command, output directory `website`. Repository secrets: `OPENAI_API_KEY`
(summaries); optionally `DISCORD_WEBHOOK_URL` and `HEALTHCHECKS_PING_URL`.
