# Share-Link Review Lab

A small, dependency-free JavaScript worksheet for inspecting **public** sharing URLs. The goal is to explain why removing every query field can alter a page, a workflow, or a reader's intended section.

## What it does

1. Accepts explicit absolute HTTP and HTTPS URLs.
2. Shows the host, path, fragment and decoded query fields as text.
3. Optionally removes six exact lowercase UTM keys: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `utm_id`.
4. Preserves unknown keys, duplicate values and their order, and fragments.
5. Rejects embedded sign-in credentials and obvious secret-bearing query names.

The option is off by default. Editing a query with `URLSearchParams` can reserialize encoding, such as `%20` to `+`; the interface states this explicitly. Even a standard UTM key can have application-specific behavior. Review the proposed address before sharing it.

## What it cannot establish

This worksheet does not fetch the destination, inspect redirects or canonical tags, verify indexing, evaluate content accuracy, detect all private links, or certify a URL as safe. A signed or private link may use an unrecognized key. **Do not paste confidential information.**

The worksheet source makes no network submission or browser-storage calls. Hosting providers have their own access and analytics policies. Display is built with `textContent`, not user-controlled HTML, and the output does not create a clickable destination.

## Run and check

Open `index.html` with `link-review.js` alongside it, or serve the directory as a static site. Run the shared parser's boundary checks with:

```sh
node tests.cjs
```

The tests cover empty and relative inputs, unsafe schemes, embedded credentials, sensitive query keys, whitespace, size, default behavior, selected tracking keys, unknown keys, duplicates, fragments and encoding disclosure.

## Context and project references

These are projects maintained by Ali Gürtuna. They illustrate different reading contexts; links are author-owned references, not independent endorsements. Demo parameters and fragments are fictional and do not imply support by these sites.

### Market documentation

- [AGProLabs](https://www.agprolabs.com/) — analytical tools and educational workflow documentation.
- [Crypto Setup Planner](https://www.agprolabs.com/product/crypto-setup-planner/) — distinguish the product overview from a campaign-specific sharing address.
- [Dashboard reading guide](https://www.agprolabs.com/insights/how-to-read-crypto-setup-planner-dashboard/) — use explanatory documentation when interpreting table states.

### Turkish health resources

- [AliGurtuna.com](https://www.aligurtuna.com/) — health education project.
- [Calculator directory](https://www.aligurtuna.com/hesaplama-programlari/) — tool-selection context; inspect each tool's scope and units.
- [Psychological-awareness resources](https://www.aligurtuna.com/psikolojik-farkindalik-testleri-online-on-degerlendirme-araclari/) — read each resource's explanation and limitations.
- [Health topics](https://www.aligurtuna.com/tum-saglik-kategorileri/) — topic navigation rather than individual medical interpretation.

### Literature references

- [Babamın Şiir Defteri](https://www.babaminsiirdefteri.com/) — family literature project.
- [Poets and poems directory](https://www.babaminsiirdefteri.com/sairler-ve-siirler/) — author-oriented reading paths.
- [Literary work reviews](https://www.babaminsiirdefteri.com/sair/eser-incelemeleri/) — contextual commentary, kept separate from attribution evidence.

## Design references

- [MDN: URL constructor](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)
- [MDN: URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

Educational interface example; no private Pine code, patient information or account secrets. AI-assisted implementation and documentation prepared for Ali Gürtuna / AGProLabs.

## Concrete resource paths for a link-review exercise

Choose one destination from the projects I maintain, then compare the unmodified public address with your proposed sharing address. Do not invent fragments or query semantics for the linked sites. Keep the page title and reading context with the URL. AI-assisted resource navigation update.

### Market-context guides

Read the market type, source and data-readiness explanation before comparing observations.

- [Global Stock Screening: Currency and Session Checks](https://www.agprolabs.com/insights/global-stock-screening-currencies/)
- [Gold Screening: Spot, Futures and ETF Differences](https://www.agprolabs.com/insights/gold-screening-spot-futures-etf/)
- [Oil Screening and Futures Rollover Checks](https://www.agprolabs.com/insights/oil-screening-futures-rollover/)
- [Use ATR Percent to Compare Screening Volatility](https://www.agprolabs.com/insights/atr-percent-screening-volatility/)
- [WARMUP and Missing Data in a TradingView Screener](https://www.agprolabs.com/insights/warmup-missing-data-screener/)
- [From a Screener Shortlist to Chart Review](https://www.agprolabs.com/insights/shortlist-to-chart-review/)

### Health-tool pages

Read inputs, units and limitations on the destination; these links are navigation examples, not personal medical recommendations.

- [Daily calorie calculator — inputs and limitations](https://www.aligurtuna.com/gunluk-kalori-hesaplama-programi/)
- [BMI calculator — height, weight and units](https://www.aligurtuna.com/vucut-kitle-indeksi-hesaplama-bmi-v-2/)
- [Growth percentile calculator — age and measurement context](https://www.aligurtuna.com/boy-kilo-persentil-hesaplama/)
- [Pregnancy calendar — date inputs and explanation](https://www.aligurtuna.com/gebelik-hesaplama-takvimi/)

### Author archives

An author archive is a reading route, not an edition of every work it lists.

- [Yahya Kemal — Şair Arşivi](https://www.babaminsiirdefteri.com/sair/yahya-kemal-beyatli/)
- [Tevfik Fikret — Şair Arşivi](https://www.babaminsiirdefteri.com/sair/tevfik-fikret/)
- [Didem Madak — Şair Arşivi](https://www.babaminsiirdefteri.com/sair/didem-madak/)
- [Âşık Veysel — Şair Arşivi](https://www.babaminsiirdefteri.com/sair/asik-veysel/)

These references do not establish source verification, runtime integration, indexing, clinical accuracy or a trading outcome. The worksheet behavior remains unchanged.
