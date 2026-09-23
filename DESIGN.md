---
name: Avocado Garden
colors:
  surface: '#f1fee3'
  surface-dim: '#d1dec5'
  surface-bright: '#f1fee3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ebf8de'
  surface-container: '#e5f2d8'
  surface-container-high: '#dfecd3'
  surface-container-highest: '#dae7cd'
  on-surface: '#141e0f'
  on-surface-variant: '#44483d'
  inverse-surface: '#293322'
  inverse-on-surface: '#e8f5db'
  outline: '#75796c'
  outline-variant: '#c4c8b9'
  surface-tint: '#4c662d'
  primary: '#4c662d'
  on-primary: '#ffffff'
  primary-container: '#94b16f'
  on-primary-container: '#2c430d'
  inverse-primary: '#b2d08b'
  secondary: '#4e6621'
  on-secondary: '#ffffff'
  secondary-container: '#cdea95'
  on-secondary-container: '#526a25'
  tertiary: '#4e6534'
  on-tertiary: '#ffffff'
  tertiary-container: '#95b077'
  on-tertiary-container: '#2d4315'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ceeda5'
  primary-fixed-dim: '#b2d08b'
  on-primary-fixed: '#102000'
  on-primary-fixed-variant: '#364e17'
  secondary-fixed: '#cfed98'
  secondary-fixed-dim: '#b4d17f'
  on-secondary-fixed: '#131f00'
  on-secondary-fixed-variant: '#374e09'
  tertiary-fixed: '#cfecad'
  tertiary-fixed-dim: '#b4d093'
  on-tertiary-fixed: '#0f2000'
  on-tertiary-fixed-variant: '#374d1f'
  background: '#f1fee3'
  on-background: '#141e0f'
  surface-variant: '#dae7cd'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
This design system is built on a foundation of organic vitality and botanical freshness. It targets lifestyle, culinary, and social wellness applications where a sense of growth and natural harmony is paramount. The aesthetic is "Organic Glassmorphism"—merging the technical precision of translucent interfaces with the soft, pulp-like tones of a ripening avocado.

The UI should evoke a sense of calm, freshness, and sophisticated modernism. It avoids sharp edges and stark contrasts in favor of tonal harmony and tactile depth. By leveraging layered translucency against a crisp white canvas, the system maintains a light, breathable feel that is both contemporary and approachable.

## Colors
The palette is derived from the lifecycle of greenery, focusing on the muted yet vibrant tones of avocado. 

- **Primary (#94B16F):** Used for primary actions, high-level headers, and active states. It provides enough contrast against the white background for legibility while maintaining an earthy feel.
- **Secondary (#B3D07E):** Used for secondary accents and decorative elements.
- **Tertiary (#BEDA9D):** Ideal for subtle backgrounds, progress bars, and soft highlights.
- **Neutral (#E4F1D7):** This ultra-light tint serves as the base for glass containers and background sections to differentiate them from the pure white page background.
- **White (#FFFFFF):** The primary canvas color, ensuring the green tones feel "fresh" rather than "heavy."

## Typography
Montserrat is utilized across all levels to provide a geometric, modern, and friendly voice. The typeface’s large x-height and open apertures ensure excellent legibility within glass containers.

Headlines should utilize tighter letter spacing and heavier weights to anchor the page. Body text maintains a generous line height to enhance the "airy" feel of the brand. Small labels and captions are given a slightly increased letter spacing and medium weights to ensure they remain distinct and professional without appearing clinical.

## Layout & Spacing
The layout follows a fluid-to-fixed transition. On desktop, content is contained within a 1280px max-width container with a 12-column grid. On mobile, a 4-column grid is used with 16px margins.

The spacing rhythm is based on an 8px baseline, prioritizing wide margins and significant vertical breathing room between sections to reinforce the sense of "garden" openness. Elements should never feel crowded; when in doubt, increase the `lg` or `xl` padding between major content blocks.

## Elevation & Depth
Depth is created through **Glassmorphism**. Instead of traditional grey shadows, this system uses "Botanical Blurs":

1.  **Surfaces:** Cards and modals use the Neutral (#E4F1D7) color at 40-60% opacity with a `20px` to `40px` backdrop-blur.
2.  **Borders:** A 1.5px semi-transparent white border (#FFFFFF 50%) is applied to glass elements to simulate a light-catching edge.
3.  **Shadows:** Shadows are rarely used. When necessary, they are highly diffused (30px+ blur), low opacity (10%), and tinted with the Primary (#94B16F) color rather than black, creating an ambient glow rather than a dark void.

## Shapes
The shape language is "Rounded," mimicking the smooth curves of organic forms. 

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Main content sections and large cards use 1rem (16px) or 1.5rem (24px) for a softer, friendlier silhouette.
- **Decorative:** Icons and specific decorative containers may use full "pill" rounding to echo the aesthetic of the reference imagery.

## Components
- **Buttons:** Primary buttons are solid #94B16F with white text. Secondary buttons use a glass effect with a #94B16F border and text. All buttons feature a subtle scale-up interaction (1.02x) on hover.
- **Chips:** Highly rounded (pill-shaped) with #E4F1D7 backgrounds and #94B16F text. Perfect for categories or tags.
- **Input Fields:** Semi-transparent white background with a 1px #BEDA9D border. On focus, the border transitions to #94B16F with a soft green outer glow.
- **Cards:** The signature component. These must use the glassmorphism effect (backdrop-blur) to sit atop the white background or subtle green gradients.
- **Checkboxes & Radios:** Softly rounded squares for checkboxes and circles for radios, using the Primary color for the checked state. Avoid harsh black outlines.
- **Lists:** Separated by thin #E4F1D7 horizontal lines, with generous vertical padding to maintain the airy aesthetic.