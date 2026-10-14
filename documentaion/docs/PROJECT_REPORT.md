# Alberto Clocks — Project Report

## 1. Problem Definition
Alberto Watch Company is presented as a full-service watch repair, appraisal and retail store offering luxury timepieces and a selection of new watches. The project requires a responsive single-page website with attractive visual elements and functional product browsing.

## 2. Objectives
The project demonstrates practical implementation of a real-life web application using HTML5, CSS, Bootstrap, JavaScript and JSON. It provides categorized products, details, pricing, navigation, gallery, support and contact information.

## 3. Functional Requirements Implemented
1. Suitable logo and consistent colour scheme.
2. Menu options for Products, Technology, Store Locator, Support and related sections.
3. Watch/clock information and technology section.
4. Product categories.
5. Complete product lists by selected category.
6. Product details in popup modal windows.
7. Price list for watches.
8. Image gallery.
9. Site map, Gallery, About Us and Contact Us.
10. Contact information section.
11. Bottom scrolling ticker with date/time and browser geolocation.
12. Visitor counter near the logo/navigation area.
13. Menu hover and active states.
14. Fade/transition/hover effects and responsive layout.

## 4. Design Specification
The design uses a dark luxury navigation and hero area, warm gold accent, off-white content backgrounds, large serif headings and responsive Bootstrap grid components.

## 5. Data Flow
User -> Single Page Interface -> Category Selection -> JSON Product Data -> Product Cards -> Product Modal.

Visitor Flow:
User -> Browser -> localStorage visitor counter -> displayed count.

Location Flow:
User -> Browser Geolocation API -> coordinates -> bottom ticker.

## 6. Test Data
Sample products are stored in `data/products.json`. Test categories include Vintage, Luxury, Technology, Smart Watches and Modern.

## 7. Installation
Use a local HTTP server. Example:
`python -m http.server 8000`
Then browse to `http://localhost:8000`.

## 8. Assumptions
- Contact details and store addresses are demo values.
- Product images are remote demonstration images.
- Prices are sample project data.
- Geolocation depends on browser permission and HTTPS/local browser support.
- The visitor counter is browser-local and is not a server-side analytics counter.

## 9. Deliverables
Source code, JSON data, README and project report are included in this package.
