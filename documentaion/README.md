# Alberto Clocks — Complete eProject

## Overview
Responsive single-page website created from the supplied Alberto Clocks eProject specification.

## Included
- Responsive Bootstrap navigation
- Home/hero section
- Product categories: Vintage, Luxury, Smart Watches, Technology and Modern
- Product cards and popup detail windows
- Prices and specifications loaded from `data/products.json`
- Technology section
- Gallery
- Store locator
- Support
- About Us
- Contact form
- Site map
- Local visitor counter using browser localStorage
- Continuous bottom ticker with date/time and HTML5 geolocation
- Responsive layout and hover/animation effects

## How to run
1. Extract the ZIP.
2. Open the folder in VS Code or another editor.
3. Run a local web server because the product JSON is loaded with `fetch()`.
   - VS Code: install/use Live Server and open `index.html`.
   - Python: from the project directory run `python -m http.server 8000`.
4. Open `http://localhost:8000` in a browser.

## Notes
The contact details and store addresses are clearly marked as demo/sample data and should be replaced with the organization's real details before deployment. Product imagery uses remote Unsplash URLs, so an internet connection is required for those images.

## Technologies
HTML5, CSS3, Bootstrap 5, JavaScript, JSON, HTML5 Geolocation and localStorage.
