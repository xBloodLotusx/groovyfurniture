
## Central Virginia Office Furniture — Landing Page

A single-page, modern landing site built to feel trustworthy, local, and value-focused. Clean typography, warm professional palette (deep navy + warm neutrals + a confident accent), generous spacing, and showroom-style imagery throughout.

### Design direction
- **Palette:** Deep navy primary, warm off-white background, charcoal text, muted gold/amber accent for CTAs and trust highlights.
- **Type:** Strong sans-serif headlines (tight tracking), readable body sans. Clear hierarchy.
- **Feel:** Professional but approachable — local business confidence, not corporate sterile.
- **Imagery:** Showroom/warehouse-style photos of desks, chairs, cubicles, filing cabinets.

### Sections (top to bottom)

1. **Sticky Header**
   - Logo wordmark "Central Virginia Office Furniture"
   - Nav: Inventory · About · Why Us · Reviews · Visit
   - Phone number (434) 845-9211 prominent on the right + "Call Now" button

2. **Hero**
   - Full-width showroom hero image with subtle dark overlay
   - Headline: *"Quality Office Furniture for Every Workspace in Central Virginia"*
   - Subheadline: *"Affordable, durable, and ready for your business—right here in Lynchburg."*
   - Two CTAs: **Browse Inventory** (primary) · **Call (434) 845-9211** (outline)
   - Trust badge row below: 🏠 Locally Owned · ⚡ Fast Pickup · 💰 Budget-Friendly Options

3. **About**
   - Two-column: copy on left, image collage on right
   - Decades serving Lynchburg, expertise in office setups, space planning, furniture selection
   - Small stats strip: Years serving · Businesses helped · Items in stock

4. **Product Categories** (6-card grid)
   - Office Chairs · Desks & Workstations · Cubicles & Partitions · Filing & Storage · Conference Room · Used & Discount
   - Each card: image, title, short blurb, "View Options" button

5. **Why Choose Us**
   - 6 feature tiles with icons covering all bullets (affordable, quality new/used, local pickup, personalized, weekly inventory, trusted)

6. **Customer Reviews**
   - 3 testimonial cards, Yelp-style: 5 stars, quote, name + initial avatar, location

7. **Photo Gallery**
   - Responsive masonry/grid of 6–8 showroom & warehouse images with hover zoom

8. **Big CTA Band**
   - Dark navy background, large headline *"Ready to Upgrade Your Office?"*
   - Three buttons: Call (434) 845-9211 · Get a Quote · Visit Our Showroom

9. **Location & Hours**
   - Two-column: embedded Google Map (iframe) of 198 Oakley Ave, Lynchburg, VA
   - Right column: address, hours (placeholder Mon–Fri 9–5, Sat 10–2, closed Sun), free on-site parking note

10. **Footer**
    - Business name, phone, address, simple social icon row (placeholder), copyright

### Technical notes
- Single page at `/` (update `src/pages/Index.tsx`)
- Smooth-scroll anchor navigation between sections
- Add semantic design tokens to `index.css` + `tailwind.config.ts` (navy, warm bg, gold accent) — no hardcoded colors in components
- Responsive: mobile-first, hamburger menu on small screens
- Generated showroom-style images for hero, gallery, and category cards
- Lucide icons for trust badges, features, and category tiles
- "Get a Quote" opens a simple dialog with name/email/message form (front-end only, shows success toast)
- SEO: update `index.html` title/description for local search ("Office Furniture Lynchburg VA")
