
# Carter's General Store & Deli — Full Website

## Brand & Design System
- **Color palette**: Cream (#FDF6E3), Deep Forest Green (#2D5016), Warm Brown (#8B6914), Burgundy (#722F37), Soft White (#FEFCF6)
- **Fonts**: Playfair Display for headings (rustic elegance), Inter for body (clean readability)
- **Aesthetic**: Wood textures, warm tones, vintage accents, subtle Christian elements (small cross icon, scripture in footer)
- **Footer scripture**: Rotating verse, e.g. *"And let us not grow weary of doing good" — Galatians 6:9*

## Pages

### 1. Homepage (`/`)
- **Hero section** with large background image area, welcoming message: *"Good food, good neighbors, and God's blessings — welcome to Carter's General Store & Deli."*
- **Quick info bar**: Address (6376 Bedford Hwy, Lynch Station, VA 24571), phone (434-309-1753), hours, "Call Now" button
- **Rotating specials banner** (seasonal items, daily specials)
- **Feature cards**: Deli, General Store, Sporting Goods, Antiques, Live Bluegrass
- **Short mission statement** about faith, family, and 145+ years of community service
- **Testimonials section** with customer quotes (sourced from the Grit article — Vince Martin's "five-star pancakes" quote, etc.)
- **Newsletter signup** with simple email form

### 2. Menu Page (`/menu`)
- Organized sections: **Breakfast** (served all day!), **Lunch Specials**, **Sandwiches**, **Sides**, **Drinks**, **Desserts**
- Highlighted signature items: Fried Bologna & Hoop Cheese Sandwich, Wagyu Beef offerings, Belgian Waffles (regular, blueberry, chocolate chip)
- Real menu items from research: The Flat Bottom ($7.75), The Overboard ($7.95), The Outpost ($8.15), Baby Carter's ($7.75), Patty Melt ($7.95)
- **Daily Specials** callout section
- **Customer Favorites** badges on popular items
- Easy-to-update data structure (menu items stored in a simple data file)

### 3. About Page (`/about`)
- **Store history** dating back to 1879 — Lewis "Big Daddy" Crawford Carter → C.L. Carter → C.P. Carter → Kyle & Cheri Goldsmith (2019)
- **Our Values section**: Honesty, kindness, service, gratitude — rooted in Christian faith
- **Kyle & Cheri's story**: Returning home to Campbell County to carry on the family legacy
- **What we offer**: Deli, antiques, sporting goods, bluegrass music, canoe/kayak livery
- Quote highlight: *"Eating at Carter's is like eating at a friend's house"*

### 4. Community & Events Page (`/community`)
- **Regular events calendar**: Second Saturday Bluegrass, First Saturdays Gospel, Third Saturdays Hot Rods, Fourth Saturday Concerts, Friday Night Fish Fry, Bluegrass Pickin' & Pancakes Brunch
- **Announcements section** for local events, charity drives
- **Church partnerships** area
- **Community photo gallery** placeholder section
- **Annual events** (November Jeep Rally, etc.)

### 5. Contact Page (`/contact`)
- Phone number, full address, embedded map placeholder
- **Contact form** (name, email, message)
- **Hours of operation** (Mon 8-2, Tue-Thu 8-6, Fri 8-7:30, Sat 8-6, Sun Closed)
- **Optional prayer request form** (separate, gentle section)

## Shared Components
- **Navigation**: Sticky top nav with store name/logo, links to all pages, mobile hamburger menu
- **Footer**: Address, phone, hours summary, Facebook link, scripture quote, "God Bless" closing message, newsletter signup
- **Social links**: Facebook (https://www.facebook.com/carters.storeva/)
- **Call-to-action button**: Persistent "Call Now" button on mobile

## Technical Approach
- React Router for multi-page navigation
- Menu data in a separate TypeScript file for easy updates
- Responsive mobile-first design
- Smooth scroll animations
- All content sourced from real store information
