# <a href="https://irosai.vercel.app" target="_blank">Irosai - A Digital Dictionary of Color Combinations</a>

**Irosai** is a high-fidelity digital archive of Wada Sanzō’s seminal 6-volume color study from the 1930s. Explore a curated collection of 162 traditional Japanese pigments, discover historical multi-color harmonies (Plates), and experience the intersection of early 20th-century color theory and modern web design.

Built for archival precision, monumental typography, and minimalist immersion — bringing a masterpiece of color history to the browser.

<p align="left">
<a href="https://github.com/byllzz/irosai/blob/main/LICENSE">
<img src="https://img.shields.io/badge/License-MIT-9B72FF.svg?style=flat" />
</a>
<img src="https://img.shields.io/badge/Repository%20Status-Maintained-9B72FF.svg?style=flat" />
<img src="https://img.shields.io/badge/Website%20Status-Online-9B72FF.svg?style=flat" />
<a href="https://github.com/byllzz">
<img src="https://img.shields.io/badge/Author-Bilal%20Malik-9B72FF.svg?style=flat" />
</a>
<a href="https://github.com/byllzz/irosai/releases">
<img src="https://img.shields.io/badge/Latest%20Release-April%202026-9B72FF.svg?style=flat" />
</a>
</p>
<br />

[![Visit Irosai](https://img.shields.io/badge/View-Irosai-9B72FF?style=flat)](https://irosai.vercel.app)

<img width="100%" alt="Irosai Preview" src="/public/preview.png" />

⭐ **Star the repo if you appreciate the aesthetic — it really helps!**

---

##  Key Features

| Category | Highlights |
| :--- | :--- |
| **Archival** | 162 Traditional Pigments • 2, 3, & 4-Color Plates • Proportional Weight Bars |
| **Engineering** | Real-time Hex Search • Auto RGB/CMYK Conversion • React Router Navigation |
| **Design** | Fluid Playfair Typography • Mix-Blend-Mode Readability • Japandi Aesthetic |
| **UX/DX** | Full-screen Color Immersion • Custom Ghost Scrollbar • Vercel Deployment |

---

###  Feature Breakdown

* **162 Individual Pigments**: A digital tribute to the traditional Japanese palette.
* **Historical Color Plates**: Authentic color harmonies mapped from the 1930s originals.
* **Context-Aware UI**: Uses `mix-blend-mode` to ensure navigation is visible against any pigment intensity.
* **Responsive Grid**: A fluid, editorial layout optimized for mobile and desktop viewing.

---

##  Technical Architecture

1. **Archival Logic: Historical Database**
    * **Dataset**: Utilizes a structured JSON database mapping **Wada Sanzō’s** original 1930s color indexes.
    * **Authenticity**: Preserves the exact hex values and nomenclature from the *Dictionary of Color Combinations*.

2. **Dynamic Theming: Reactive UI**
    * **Engine**: Employs **React state** and inline styles to render monumental color backgrounds.
    * **Efficiency**: Bypasses Tailwind’s JIT limitations by injecting variables directly into the DOM for real-time transitions.

3. **Harmony Engine: Proportional Analysis**
    * **Logic**: Analyzes color plates to display the precise **weight distribution** intended in the original print.
    * **Visuals**: Balances primary, secondary, and accent pigments based on historical color theory.

4. **Visual Contrast: Legibility Layer**
    * **Mechanism**: Leverages `CSS mix-blend-difference` to maintain navigation visibility.
    * **Outcome**: UI elements remain legible across any pigment intensity or brightness level automatically.

5. **Typography-First: Editorial Aesthetic**
    * **Styling**: Uses **CSS clamp** and serif italics to mimic the tactile feel of a premium physical art book.

---

##  Installation & Setup

### Requirements
* Node.js (v18+)

### Clone the Repository
```bash
git clone [https://github.com/byllzz/irosai.git](https://github.com/byllzz/irosai.git)
cd irosai
```

# License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

# Feedback / Suggestions

Reach out at bilalmlkdev@gmail.com. If you like this project, please ⭐ star the repo - it motivates future updates!

- *Note: This project is inspired from **Wada Sanzo" Book!**!*

