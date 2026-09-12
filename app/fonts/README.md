# Fonts

Self-hosted webfonts, loaded through `next/font/local` in `app/layout.tsx`.

They are committed rather than fetched by `next/font/google` because that fetch
happens at build time and fails quietly: offline, behind a proxy, or replaying a
cached failure, the whole site drops to system fonts — which for Thai means an
arbitrary substitute face. It happened during development.

| Family | Subset | Weights | Used for |
| --- | --- | --- | --- |
| IBM Plex Sans | latin | 400, 500, 600, 700 | Latin body text |
| IBM Plex Sans Thai | thai | 400, 500, 600, 700 | Thai body text and section titles |
| JetBrains Mono | latin | 400, 500, 600, 700 | Display, kickers, labels, code |

**Plex Thai carries the Thai subset only.** Latin characters inside a Thai line
fall through to Plex Sans — the same superfamily, so the metrics match — which
keeps the file at ~8 KB per weight instead of ~50 KB.

Total: ~312 KB, none of it preloaded; `display: swap` with next/font's adjusted
fallback metrics covers the gap without shifting layout.

## Licence

Both families are under the [SIL Open Font License 1.1](https://openfontlicense.org),
which permits bundling and redistribution with the site.

- IBM Plex — https://github.com/IBM/plex
- JetBrains Mono — https://github.com/JetBrains/JetBrainsMono

## Updating

Files came from the Google Fonts CSS API (woff2, per subset). To refresh, pull the
same `fonts.googleapis.com/css2` block for each family and replace the matching
`<Family>-<weight>.woff2` file; the names are what `layout.tsx` builds its `src`
array from.
