# 🖥️ FoxCAD Studio

> **Free browser-based OpenSCAD IDE** with AI assistance, 30+ printer profiles, real-time STL preview and one-click export.  
> No install. No subscription. Runs entirely in your browser.

[![Live Demo](https://img.shields.io/badge/Live_Demo-hub.foxmakers.it-orange?style=for-the-badge)](https://hub.foxmakers.it/en/tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![FoxMakers](https://img.shields.io/badge/FoxMakers-EU_Maker_Network-orange?style=flat-square)](https://www.foxmakers.it)
[![Wikidata](https://img.shields.io/badge/Wikidata-Q142094985-blue?style=flat-square)](https://www.wikidata.org/wiki/Q142094985)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔧 OpenSCAD Editor | Full syntax highlighting, parameter sliders, real-time compile |
| 🤖 AI Assistant | AI-powered DfAM suggestions and code generation |
| 🖨️ 30+ Printer Profiles | Bambu, Prusa, Creality, Elegoo, Voron, Anycubic... |
| ⏱ Print Time Estimation | Auto-calculated based on printer profile + layer height |
| 💰 Material Cost | Filament cost estimator (€/kg configurable) |
| ↩↪ Undo/Redo | Full history (Ctrl+Z / Ctrl+Y, up to 20 steps) |
| 📸 PNG Screenshot | High-res export of the 3D viewport |
| 🏠 Camera Reset | F key or button to fit model to screen |
| 📦 STL Export | One-click STL download (Pro: STEP, 3MF) |
| 🔗 Embed Widget | Embed FoxCAD in your own site via iframe |
| 🌍 IT / EN | Full Italian and English interface |

## 🎯 Preset Library (12 ready-to-print designs)

| Category | Presets |
|----------|---------|
| ⚙️ Meccanica | Bracket, Hinge, Threaded Insert, Cable Clamp |
| 🔌 Elettronica | Raspberry Pi Case, Arduino Enclosure |
| 🏠 Casa/Industria | Shelf Hook, Pegboard Hook, Parametric Box |
| 🎨 Design | Vase, Ring, Artistic Stand |

## 🚀 Try It Now

👉 **[hub.foxmakers.it/en/tools](https://hub.foxmakers.it/en/tools)**

Embed in your own website:
```html
<iframe 
  src="https://hub.foxmakers.it/embed/tools/stl-repair" 
  width="100%" height="600" 
  frameborder="0">
</iframe>
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **3D Engine**: Three.js + React Three Fiber
- **OpenSCAD**: WASM build running client-side
- **AI**: Gemini 1.5 Flash (DfAM suggestions)
- **Mesh processing**: Manifold3D (via our [foxmakers-open-cad-kit](https://github.com/FoxMaker-s/foxmakers-open-cad-kit))
- **Deploy**: VPS + Next.js standalone + Plesk

## 📦 Related Repositories

- 🔩 [foxmakers-open-cad-kit](https://github.com/FoxMaker-s/foxmakers-open-cad-kit) — Python STL/STEP library
- 🖨️ [foxmakers-slicer-profiles](https://github.com/FoxMaker-s/foxmakers-slicer-profiles) — Optimized slicer profiles
- 🧵 [foxmakers-filament-db](https://github.com/FoxMaker-s/foxmakers-filament-db) — Filament settings database
- 📚 [foxmakers-print-guides](https://github.com/FoxMaker-s/foxmakers-print-guides) — 3D printing guides

## 🌍 FoxMakers Network

European distributed 3D printing network connecting 1,200+ makers across 15 countries.

- 🌐 [www.foxmakers.it](https://www.foxmakers.it)
- 🛒 [shop](https://www.foxmakers.it/shop)
- 📧 [info@foxmakers.it](mailto:info@foxmakers.it)

## 📄 License

MIT © 2024-2026 FoxMakers. Free to use, fork, and build upon.