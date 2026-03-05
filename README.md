# SOLUM: The Ground Everything Runs On

> *A fictional AI chip company landing page. Built with pure HTML, CSS, and vanilla JavaScript. Ocean / teal color theme.*

---

## 🌊 About This Project

**SOLUM** is a fictional futuristic tech company landing page centered around its flagship product, **SOLUM CORE™**, the world's first photonic AI chip. The site is designed with a sleek, corporate personality inspired by brands like Apple and Linear, using a deep ocean color palette of teals, aquas, and dark navy.

This project was built as a frontend showcase using only HTML, CSS, and a tiny bit of vanilla JavaScript. No frameworks, no build tools, no dependencies.

---

## 🧠 The Story Behind SOLUM

### The Origin

In 2021, two engineering graduates were working out of a rented garage, armed with a thermal camera, salvaged circuit boards, and absolutely zero funding. They were trying to fix a failing GPU when they stumbled onto something the entire semiconductor industry had missed for decades.

They discovered a method of routing neural computations through **photonic circuits**, using *light* instead of *electricity*. The result was processing speeds that defied everything on the market: 40 times the raw compute of the best silicon chips, at 94% less power consumption.

They didn't plan to build a company. They planned to publish a paper.

But when they realized what they had, the paper became a prototype. The prototype became **SOLUM CORE™**. And SOLUM CORE changed everything.

---

### The Three Milestones

**01: The Discovery**
Photonic neural routing: the idea that light-based circuits could carry AI computations at a fraction of the energy cost of silicon. This was the accidental breakthrough that started it all. No lab. No funding. Just curiosity and a broken GPU.

**02: The Prototype**
Eighteen months of nights and weekends. A chip the size of a thumbnail that outperformed data center-grade hardware in every benchmark they ran. When they showed the results to three different professors, all three told them the numbers were impossible. They were right, by the old rules.

**03: The Company**
SOLUM was incorporated with one mission: build the last AI chip the world will ever need. Everything else is noise. The name SOLUM comes from Latin, meaning *ground* or *foundation*, because that is exactly what this chip is meant to be. The ground that everything else runs on.

---

### The Mission

**Dominate AI. Period.**

SOLUM exists for every developer, every startup, every enterprise, and every research lab that has ever been held back by hardware. The company's north star is simple: make the most powerful AI chip on the planet accessible to everyone who needs it, from a solo builder on a laptop to a Fortune 500 running hyperscale inference.

---

## 🔩 The Product: SOLUM CORE™

SOLUM CORE™ is a physical AI chip unlike anything the semiconductor industry has produced. It is the world's first chip to use **photonic neural routing** as its core compute architecture.

### Key Specifications

| Specification         | Value                          |
|-----------------------|--------------------------------|
| Compute               | 40x over silicon (sustained)   |
| Power Consumption     | 94% less than silicon chips    |
| Throughput            | 1.2 Petaflops sustained        |
| Node Process          | 3nm Photonic                   |
| Inference Latency     | < 1ms                          |
| Form Factor           | Standard PCIe (drop-in)        |

### Why SOLUM CORE Wins

- **Photonic Neural Routing:** Light-based computation eliminates resistive heat, slashing energy use while multiplying throughput beyond any silicon architecture.
- **Sub-Millisecond Inference:** Run the largest AI models on edge devices that used to require an entire data center.
- **Near-Zero Thermal Output:** Photonic circuits generate a fraction of the heat of transistor-based chips. No special cooling infrastructure required.
- **Universal Drop-In Form Factor:** Fits standard PCIe slots. No custom infrastructure. Plug it in and your stack transforms overnight.
- **Hardware-Level Security:** On-chip encryption and secure enclave processing. Model weights and inference data never leave the chip unprotected.
- **Edge-to-Cloud Native:** The same chip architecture runs in hyperscale cloud deployments and palm-sized edge devices. One chip. Every scale.

---

## 🎨 Design & Color Palette

The site uses a deep **ocean / teal** color theme, chosen to reflect the depth, mystery, and raw power behind the product's story.

| Token          | Color         | Usage                          |
|----------------|---------------|-------------------------------|
| `--bg`         | `#07161c`     | Page background (deep navy)   |
| `--teal`       | `#00c9b1`     | Primary accent                |
| `--aqua`       | `#00e5ff`     | Secondary accent / highlights |
| `--deep`       | `#005f7a`     | Dark gradient anchor          |
| `--mid`        | `#0097b2`     | Mid-tone accent               |
| `--text`       | `#b8dce8`     | Body text                     |
| `--muted`      | `#426e7d`     | Secondary / muted text        |
| `--white`      | `#eef8fc`     | Headings / high contrast text |

---

## 🗂️ Project Structure

```
solum/
├── index.html              # Main HTML, all sections
├── README.md               # You are here
│
├── css/
│   ├── reset.css           # Base reset, body, ambient background
│   ├── variables.css       # Design tokens (colors, fonts, spacing, borders)
│   ├── nav.css             # Navigation bar + shared buttons (btn-primary, btn-ghost)
│   ├── hero.css            # Hero section + animated CSS chip diagram
│   ├── specs.css           # Specs bar (5 key stats)
│   ├── story.css           # Origin story section + milestone cards
│   ├── features.css        # Technology feature cards grid
│   ├── quote.css           # Founder quote section
│   ├── footer.css          # Footer columns + bottom bar
│   ├── animations.css      # All keyframes + custom cursor styles
│   └── responsive.css      # Tablet and mobile breakpoints
│
└── js/
    ├── cursor.js           # Custom cursor + lag ring logic
    └── animations.js       # Scroll-triggered fade-up reveals
```

---

## ✨ Features

- **Custom animated cursor** with a smooth lagging ring effect
- **CSS-only chip diagram** with three spinning orbital rings and glowing dots
- **Scroll-triggered animations:** cards and stats fade up as they enter the viewport
- **Ambient background:** layered radial gradients that give atmospheric depth
- **Glassmorphism cards** with blur, gradient borders, and hover transitions
- **Fully responsive:** desktop grid, tablet 2-col, mobile single column
- **No frameworks. No dependencies.** Pure HTML + CSS + vanilla JS only

---

## 🛠️ Tech Stack

| Layer      | Technology                                             |
|------------|--------------------------------------------------------|
| Markup     | HTML5 (semantic)                                       |
| Styling    | CSS3 (custom properties, keyframes, grid, gradients)   |
| Logic      | Vanilla JavaScript (ES6+)                              |
| Fonts      | Google Fonts: Bebas Neue, Syne, DM Sans                |

---

## 🚀 How to Run Locally

No setup required. Just open the file:

```bash
# Clone the repo
git clone https://github.com/your-username/solum.git

# Open in browser
open index.html
```

Or simply drag `index.html` into any browser.

---

## 🌐 Deploy on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings > Pages**
3. Set source to `main` branch, `/ (root)`
4. Your live site will be at:

```
https://<your-username>.github.io/solum
```

---

## 📁 Sections Overview

| Section        | Description                                                        |
|----------------|--------------------------------------------------------------------|
| **Nav**        | Fixed navbar with blur backdrop, logo, links, CTA button           |
| **Hero**       | Full-viewport split layout with animated chip diagram              |
| **Specs Bar**  | 5 key technical stats: compute, power, petaflops, node, latency    |
| **Story**      | Origin narrative + 3 milestone cards (Discovery, Prototype, Company) |
| **Features**   | 6-card technology grid with icon, title, and description           |
| **Quote**      | Centered founder quote with atmospheric glow background            |
| **Footer**     | 4-column footer with product, developer, company links             |

---

## 💬 Founder Quote

> *"We didn't set out to disrupt the semiconductor industry. We just refused to accept that this was as fast as AI could get."*
>
> Founders, SOLUM Technologies

---

## 📄 License

This is a personal frontend project built for learning and portfolio purposes. All brand names, product names, and company details are entirely fictional.

---

*Built with HTML, CSS & JS. No build tools, no dependencies, no compromise.*
