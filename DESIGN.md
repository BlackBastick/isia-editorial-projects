---
name: ISIA Urbino Editorial Projects
description: A rigorous image-led archive for ISIA Urbino student work.
colors:
  paper: "oklch(1 0 0)"
  ink: "oklch(0.08 0 0)"
  muted: "oklch(0.46 0 0)"
  line: "oklch(0.84 0 0)"
  surface: "oklch(0.93 0 0)"
typography:
  display:
    fontFamily: "halyard-display, Helvetica Neue, sans-serif"
    fontSize: "21px"
    fontWeight: 100
    lineHeight: "21px"
    letterSpacing: "normal"
  body:
    fontFamily: "halyard-display, Helvetica Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 100
    lineHeight: "18px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
components:
  filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "12px 16px"
  filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "12px 16px"
---

# Design System: ISIA Urbino Editorial Projects

## Overview

**Creative North Star: "The Academic Contact Sheet"**

The system combines an institutional archive grid with the directness of a contemporary production portfolio. A strict black-and-white palette, regular image proportions, lightweight typography, and compact filters directly above the project grid make the archive easy to scan. Project pages pair fixed information with a vertically scrolling image sequence.

**Key Characteristics:**

- Strict black rules and a visible grid
- Halyard Display Book at weight 100 throughout
- Regular three-column project grid
- Consistent 4:5 project images
- Minimal project pages with sticky metadata and scrolling images

## Colors

Pure white and near-black carry the entire structure.

### Neutral

- **Paper** (`oklch(1 0 0)`): page background.
- **Ink** (`oklch(0.08 0 0)`): text and structural rules.
- **Muted** (`oklch(0.46 0 0)`): secondary information when required.
- **Surface** (`oklch(0.93 0 0)`): image placeholder while media loads.

## Typography

**Display Font:** Halyard Display Book
**Body Font:** Halyard Display Book

**Character:** Compressed, direct, academic, and image-conscious. Hierarchy comes from scale and weight rather than multiple families.

### Hierarchy

- **Display** (100, 21px, 21px): page and project titles.
- **Body** (100, 16px, 18px): descriptions, metadata, and interface copy.
- **Label** (100, 16px, 18px): filters and metadata terms.

## Elevation

The interface is completely flat. Depth comes from image scale and white space; shadows and decorative divider rules are not used.

The single entrance animation first holds “ISIA URBINO EDITORIAL PROJECT” intact in a light treatment, then moves its letters clockwise in reading order strictly along the viewport perimeter, passing through the corners rather than crossing the page. The initial “I” remains in the top-left origin. The transparent header stays sticky above the content, and the animation is disabled for reduced-motion users.

## Components

### Chips

- **Style:** square filter buttons separated by black rules.
- **State:** white by default, black with white text when selected; `aria-pressed` communicates state.

### Cards / Containers

- **Corner Style:** square.
- **Background:** white information area below the image.
- **Shadow Strategy:** none.
- **Border:** none; the grid gap separates projects.
- **Internal Padding:** 12–16px.

### Project Detail

- **Layout:** one-third sticky project information and a restrained 480px-wide scrolling image gallery aligned to the shared second column.
- **Typography:** all labels, values, and descriptions use 16px / 18px.
- **Responsive:** information moves above the images on narrow screens.

### Navigation

The compact course filters and project count share one toolbar directly above the grid. On narrow screens the filters remain in one horizontally scrollable row, and the selected course reverses to white on black.

## Do's and Don'ts

### Do:

- **Do** let images dominate each project.
- **Do** use black rules and alignment to expose the grid.
- **Do** keep all interactive targets at least 44px high.
- **Do** preserve the full project metadata.

### Don't:

- **Don't** use generic portfolio cards, shadows, rounded corners, gradients, glass effects, or dark mode.
- **Don't** add decorative icons or motion that competes with the work.
- **Don't** introduce accent colors; the interface is black and white.
