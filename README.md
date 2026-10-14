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


## Source context and interpretation boundaries

For a reading exercise, separate the analytical job, the page's stated scope and the author's interpretation. These concise references belong to the three projects I maintain; they are not evidence that this sample code is integrated into those sites. AI assisted this navigation update.

### Analytical roles and saved configuration

- [Position size versus indicator score](https://www.agprolabs.com/insights/position-size-vs-indicator-score/)
- [TradingView indicator versus strategy](https://www.agprolabs.com/insights/tradingview-indicator-vs-strategy/)
- [Crypto Setup Planner versus Trading Suite](https://www.agprolabs.com/insights/crypto-setup-planner-vs-trading-suite/)
- [Alerts after a script update](https://www.agprolabs.com/insights/tradingview-alerts-after-script-update/)

### Health-publication scope

Read the publisher's stated boundaries before treating educational text as a personal assessment.

- [Editorial principles](https://www.aligurtuna.com/editoryal-ilkeler/)
- [Medical content boundaries](https://www.aligurtuna.com/tibbi-icerik-sinirlari/)

### Literary archive format

A collection of stories or essays is a navigation route; retain the specific work title separately in your own record.

- [Story archive](https://www.babaminsiirdefteri.com/sair/hikayelerim/)
- [Essay archive](https://www.babaminsiirdefteri.com/sair/makalelerim/)


## Focused reference routes

A concise map of the author's own resources; choose the original page that matches your reading question.

### Channel structure and access

- [Access and activation](https://www.agprolabs.com/how-access-works/)
- [Projected channel rails](https://www.agprolabs.com/insights/projected-channel-rails/)
- [Major and minor price channels](https://www.agprolabs.com/insights/major-minor-price-channels/)
- [Internal and external price channels](https://www.agprolabs.com/insights/internal-external-price-channels/)
- [Channel rails and ATR distance](https://www.agprolabs.com/insights/channel-support-resistance-atr-distance/)
- [Channel quality-score interpretation](https://www.agprolabs.com/insights/channel-quality-score-explained/)

### Health-tool inputs and topic context

- [HOMA-IR calculator — inputs and limits](https://www.aligurtuna.com/homa-ir-hesaplama-insulin-direnci/)
- [Ovulation calendar — explanation and limits](https://www.aligurtuna.com/ovulasyon-hesaplama-dogurganlik-takibi/)
- [Radiology topic archive](https://www.aligurtuna.com/radyoloji/)

### Three author archives

- [Ahmed Arif archive](https://www.babaminsiirdefteri.com/sair/ahmed-arif/)
- [Ahmet Hamdi Tanpınar archive](https://www.babaminsiirdefteri.com/sair/ahmet-hamdi-tanpinar/)
- [Ahmet Haşim archive](https://www.babaminsiirdefteri.com/sair/ahmet-hasim/)


## Additional source routes

### Market breadth and preparation

- [Market breadth and watchlist context](https://www.agprolabs.com/insights/market-breadth-watchlist-context/)
- [Pre-market stock review checklist](https://www.agprolabs.com/insights/pre-market-stock-screening-checklist/)

### Measurement-tool explanations

- [Waist-to-hip ratio tool explanation](https://www.aligurtuna.com/bel-kalca-orani-hesaplama/)
- [Body-fat estimate tool explanation](https://www.aligurtuna.com/vucut-yag-orani-hesaplama-formulu/)

### Further author archives

- [Birhan Keskin archive](https://www.babaminsiirdefteri.com/sair/birhan-keskin/)
- [Gonca Özmen archive](https://www.babaminsiirdefteri.com/sair/gonca-ozmen/)
- [Hilmi Yavuz archive](https://www.babaminsiirdefteri.com/sair/hilmi-yavuz/)
- [Neyzen Tevfik archive](https://www.babaminsiirdefteri.com/sair/neyzen-tevfik/)
- [Nilgün Marmara archive](https://www.babaminsiirdefteri.com/sair/nilgun-marmara/)
- [Pir Sultan Abdal archive](https://www.babaminsiirdefteri.com/sair/pir-sultan-abdal/)
- [Şeyh Galip archive](https://www.babaminsiirdefteri.com/sair/seyh-galip/)

- [Nâbî archive](https://www.babaminsiirdefteri.com/sair/nabi/)
- [Nedîm archive](https://www.babaminsiirdefteri.com/sair/nedim/)
- [Nef’î archive](https://www.babaminsiirdefteri.com/sair/nefi/)

- [Kaygusuz Abdal archive](https://www.babaminsiirdefteri.com/sair/kaygusuz-abdal/)
- [Köroğlu archive](https://www.babaminsiirdefteri.com/sair/koroglu/)
- [Lale Müldür archive](https://www.babaminsiirdefteri.com/sair/lale-muldur/)

- [Bâkî archive](https://www.babaminsiirdefteri.com/sair/baki/)
- [Haydar Ergülen archive](https://www.babaminsiirdefteri.com/sair/haydar-ergulen/)
- [İlhan Berk archive](https://www.babaminsiirdefteri.com/sair/ilhan-berk/)

- [A. Kadir archive](https://www.babaminsiirdefteri.com/sair/a-kadir/)
- [Abbas Sayar archive](https://www.babaminsiirdefteri.com/sair/abbas-sayar/)
- [Abdülhak Hâmit Tarhan archive](https://www.babaminsiirdefteri.com/sair/abdulhak-hamit-tarhan/)


## Screening, input assumptions and author selection

Short routes to original resources from the projects I maintain. Keep the chosen page title and source with your review record.

### Screening and channel interpretation

- [TradingView Screener vs Chart Indicator](https://www.agprolabs.com/insights/tradingview-screener-vs-chart-indicator/)
- [Technical Analysis Tool Buying Checklist](https://www.agprolabs.com/insights/technical-analysis-tool-buying-checklist/)
- [Choosing a TradingView Indicator for Swing Trading](https://www.agprolabs.com/insights/tradingview-indicator-for-swing-trading/)
- [TradingView Tools for Traders with Limited Time](https://www.agprolabs.com/insights/tradingview-tools-for-busy-traders/)
- [TradingView Indicator Costs: What to Check](https://www.agprolabs.com/insights/tradingview-indicator-setup-costs/)
- [Build a TradingView Analysis Workspace](https://www.agprolabs.com/insights/build-tradingview-analysis-workspace/)
- [Build a Crypto Watchlist for Meaningful Screening](https://www.agprolabs.com/insights/build-crypto-watchlist-tradingview/)
- [Build a Stock Sector Watchlist in TradingView](https://www.agprolabs.com/insights/stock-sector-watchlist-tradingview/)
- [Crypto Spot vs Perpetual Screening](https://www.agprolabs.com/insights/crypto-spot-vs-perpetual-screening/)
- [A Weekend Crypto Watchlist Review](https://www.agprolabs.com/insights/weekend-crypto-watchlist-review/)
- [Turnover Thresholds and TradingView Volume Units](https://www.agprolabs.com/insights/turnover-thresholds-volume-units/)
- [VWAP vs Moving Average for Chart Context](https://www.agprolabs.com/insights/vwap-vs-moving-average/)
- [Risk Reward After Fees and Slippage](https://www.agprolabs.com/insights/risk-reward-after-fees/)
- [Portfolio Rotation and Relative Strength](https://www.agprolabs.com/insights/portfolio-rotation-relative-strength/)
- [Correlated Trades and Portfolio Risk](https://www.agprolabs.com/insights/correlated-trades-portfolio-risk/)
- [A Trading Journal Template for Screened Setups](https://www.agprolabs.com/insights/trading-journal-screening-template/)

- [Indicator overfitting warning signs](https://www.agprolabs.com/insights/indicator-overfitting-warning-signs/)
- [Win rate and expectancy](https://www.agprolabs.com/insights/win-rate-vs-expectancy/)
- [Maximum drawdown in trading review](https://www.agprolabs.com/insights/maximum-drawdown-trading-review/)
- [Heikin Ashi and standard candles](https://www.agprolabs.com/insights/heikin-ashi-vs-standard-candles/)
- [Liquidity sweeps and breakouts](https://www.agprolabs.com/insights/liquidity-sweep-vs-breakout/)
- [Fair value gap context](https://www.agprolabs.com/insights/fair-value-gap-context/)

- [High-score candidates that remain blocked](https://www.agprolabs.com/insights/high-score-blocked-screener/)
- [Conflicting timeframes in chart analysis](https://www.agprolabs.com/insights/multi-timeframe-analysis-conflict/)
- [Pivot confirmation and channel timing](https://www.agprolabs.com/insights/pivot-confirmation-channel-timing/)
- [Smart Swap HOLD and portfolio coverage](https://www.agprolabs.com/insights/read-smart-swap-hold-portfolio/)
- [Relative volume and liquidity](https://www.agprolabs.com/insights/relative-volume-vs-liquidity/)
- [Stale setups in screening](https://www.agprolabs.com/insights/stale-setup-screening/)

- [Compare ETFs in a TradingView watchlist](https://www.agprolabs.com/insights/compare-etfs-tradingview-watchlist/)
- [Breakout, continuation and recovery](https://www.agprolabs.com/insights/breakout-vs-continuation-vs-recovery/)
- [Channel follow rate and sample size](https://www.agprolabs.com/insights/channel-follow-rate-sample-size/)
- [Choose a paid TradingView indicator](https://www.agprolabs.com/insights/choose-paid-tradingview-indicator/)
- [Invalidation and stop-loss references](https://www.agprolabs.com/insights/invalidation-vs-stop-loss/)

- [Indicator disagreement checklist](https://www.agprolabs.com/insights/indicator-disagreement-checklist/)
- [Confirmed candles and repainting](https://www.agprolabs.com/insights/confirmed-candles-repainting-tradingview/)
- [Forward testing a TradingView indicator](https://www.agprolabs.com/insights/forward-test-tradingview-indicator/)
- [Weekly trading-process review](https://www.agprolabs.com/insights/weekly-trading-process-review/)
- [Read dynamic channels as support and resistance](https://www.agprolabs.com/insights/read-dynamic-channels-support-resistance/)
- [Dynamic channels and manual trendlines](https://www.agprolabs.com/insights/dynamic-channels-vs-manual-trendlines/)
- [Trend and range analysis workflows](https://www.agprolabs.com/insights/trend-vs-range-trading-workflow/)
- [Trading Suite — connected chart-analysis workspace](https://www.agprolabs.com/product/trading-suite-agpro-series/)
- [Dynamic Channels Elite — channel-structure product guide](https://www.agprolabs.com/product/dynamic-channels-elite/)
- [Trade Outcome Simulator — conditional analytical models](https://www.agprolabs.com/product/trade-outcome-simulator/)
- [AGPro Complete Platform — product collection](https://www.agprolabs.com/product/agpro-complete-platform/)
- [Screen stocks and ETFs in TradingView](https://www.agprolabs.com/insights/screen-stocks-etfs-tradingview/)
- [Screen commodities in TradingView](https://www.agprolabs.com/insights/screen-commodities-tradingview/)
- [Long and short score conflicts](https://www.agprolabs.com/insights/long-short-score-conflict/)
- [Qualified candidates near resistance](https://www.agprolabs.com/insights/near-resistance-qualified-candidate/)
- [Channel-position percentages](https://www.agprolabs.com/insights/channel-position-percent/)
- [Broken-channel support and resistance](https://www.agprolabs.com/insights/broken-channel-support-resistance/)
- [Channel breakout and retest checklist](https://www.agprolabs.com/insights/channel-breakout-retest-checklist/)
- [Look-ahead bias in chart replay](https://www.agprolabs.com/insights/look-ahead-bias-chart-replay/)

### Health-topic archives

- [Age calculator: years, months and days](https://www.aligurtuna.com/yas-hesaplama-programi-gun-ay-ve-yil-olarak/)
- [Daily water needs calculator](https://www.aligurtuna.com/gunluk-su-ihtiyaci-hesaplama-programi/)
- [Waist-to-height ratio calculator](https://www.aligurtuna.com/bel-boy-orani-hesaplama-abdominal-yaglanma-ve-metabolik-risk/)

- [Nefroloji ve Böbrek Sağlığı Rehberi](https://www.aligurtuna.com/nefroloji-ve-bobrek-sagligi/)
- [Üroloji ve Erkek Sağlığı Rehberi](https://www.aligurtuna.com/erkek-sagligi-ve-uroloji/)

- [Göğüs Cerrahisi Rehberi](https://www.aligurtuna.com/gogus-cerrahisi/)
- [Romatoloji Rehberi](https://www.aligurtuna.com/romatoloji/)

- [Diyet ve beslenme konu arşivi](https://www.aligurtuna.com/diyet-beslenme/)
- [Uyku sağlığı konu arşivi](https://www.aligurtuna.com/uyku-sagligi/)

- [Ağız ve Diş Sağlığı Rehberi](https://www.aligurtuna.com/agiz-dis-sagligi/)
- [Alerji ve İmmünoloji Rehberi](https://www.aligurtuna.com/alerji-ve-immunoloji/)
- [Çocuk Cerrahisi Rehberi](https://www.aligurtuna.com/cocuk-cerrahisi/)
- [Çocuk Sağlığı ve Hastalıkları Rehberi](https://www.aligurtuna.com/cocuk-sagligi-ve-hastaliklari/)
- [Dermatoloji, Cilt Bakımı ve Estetik Rehberi](https://www.aligurtuna.com/dermatoloji/)
- [Fizik Tedavi ve Rehabilitasyon Rehberi](https://www.aligurtuna.com/fizik-tedavi-ve-rehabilitasyon/)

### Calculator inputs and assumptions

- [Göz sağlığı — konu arşivi](https://www.aligurtuna.com/goz-hastaliklari-ve-sagligi/)
- [Basal metabolic rate calculator — explanation and limits](https://www.aligurtuna.com/bazal-metabolizma-hizi-hesaplama/)
- [Calorie-deficit calculator — inputs and assumptions](https://www.aligurtuna.com/kalori-acigi-hesaplama-kilo-verme-hizi/)
- [Macronutrient calculator — educational reference](https://www.aligurtuna.com/makro-besin-hesaplama-gunluk-makro-dagilimi/)

### Poet archive selection

- [Şaban Gürtuna](https://www.babaminsiirdefteri.com/sair/saban-gurtuna/)
- [Turgut Uyar archive](https://www.babaminsiirdefteri.com/sair/turgut-uyar/)
- [Edip Cansever archive](https://www.babaminsiirdefteri.com/sair/edip-cansever/)
- [Can Yücel archive](https://www.babaminsiirdefteri.com/sair/can-yucel/)
