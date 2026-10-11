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
