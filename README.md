# Alvin's Haven Wellness & Recovery Centre

## Student / Module
- **Student:** Pfano Dzivhani
- **Module:** WEDE5020 - Web Development (Introduction)
- **Year:** 2026
- **Project type:** Fictional academic wellness-centre website prototype

## Project Overview
Alvin's Haven Wellness & Recovery Centre is a fictional website concept created for the WEDE5020 Portfolio of Evidence. The website presents information about wellness and recovery services, memberships, frequently asked questions, and contact/enquiry options.

The concept is an academic prototype and does not represent a real healthcare or wellness business.

## Goals and Objectives
- Present service and membership information clearly.
- Provide a simple enquiry/contact pathway.
- Build a consistent and welcoming visual identity.
- Make the website easy to navigate across different screen sizes.
- Demonstrate CSS styling and responsive design techniques required for Part 2.

## Target Audience
The intended audience is people researching general wellness and recovery services. The site content is presented as fictional academic material rather than medical advice.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Google Fonts (DM Sans and Playfair Display)
- Local image assets

## Pages
1. `index.html` - Home page
2. `about.html` - About the fictional centre
3. `services.html` - Wellness services
4. `memberships.html` - Membership packages
5. `enquiry.html` - Service enquiry form
6. `faq.html` - Frequently asked questions
7. `contact.html` - Contact details and form

## Folder Structure
```text
Alvins-Haven/
|-- index.html
|-- about.html
|-- services.html
|-- memberships.html
|-- enquiry.html
|-- faq.html
|-- contact.html
|-- css/
|   |-- style.css
|-- js/
|   |-- script.js
|-- images/
|   |-- hero-banner.avif
|   |-- wellness-service.jpg
|   |-- wellness-service-720.jpg
|   |-- wellness-service-1200.jpg
|   |-- spa-interior.jpg
|   |-- spa-interior-720.jpg
|   |-- spa-interior-1200.jpg
|   |-- spa-banner.avif
|   |-- spa-banner-720.jpg
|   |-- spa-banner-1200.jpg
|-- README.md
```

## Part 2 CSS Implementation
The shared `css/style.css` file is linked to all seven pages. The stylesheet includes:
- CSS reset and default browser-normalising rules.
- A defined colour palette using CSS custom properties.
- Typography using `rem` and `clamp()` for scalable headings.
- CSS Grid and Flexbox for hero, content, cards, forms and footer layouts.
- Borders, shadows, spacing and rounded surfaces for visual hierarchy.
- `:hover`, `:focus-visible` and `:active` states for interactive elements.
- Tablet and mobile media queries.
- A responsive navigation menu.
- Responsive images using local `srcset` and `sizes` image variants, flexible widths and `height: auto`.

## Responsive Breakpoints
- **Desktop:** default layout for larger screens.
- **Tablet:** `max-width: 900px` changes the hero/content layout and reduces card columns.
- **Mobile:** `max-width: 680px` switches cards/forms/footer to single-column layouts and opens navigation through the menu button.

## JavaScript Prototype Features
`js/script.js` provides lightweight prototype interactions:
- Mobile navigation toggle.
- FAQ accordion behaviour.
- Demo form submission feedback.

The forms are demonstration forms and do not send real appointments or healthcare information.

## Testing Plan / Evidence
Test the website using browser developer tools at the following viewport categories:
- **Desktop:** 1920 × 1080 (or another large desktop viewport).
- **Tablet:** 768 × 1024.
- **Mobile:** 390 × 844.

Check navigation, card/form layout, typography, images and horizontal scrolling at each size. The final PoE should include screenshots of all three viewport categories with short notes describing the responsive changes observed.

### Part 2 implementation notes
- All seven pages use the same external stylesheet and the same DM Sans + Playfair Display typography system.
- Internal pages use one clear `<h1>` page title followed by lower-level headings.
- Local image variants use `srcset` and `sizes` where matching 720px and 1200px assets are available.
- The mobile navigation uses the menu button and JavaScript to show/hide the navigation links.
- The website remains a fictional academic prototype and does not process real bookings or healthcare information.

## Part 1 Feedback Implemented
The project notes recorded Part 1 improvement areas including research/content detail, semantic HTML structure and comments, README completeness, descriptive commits and changelog detail. The Part 2 update keeps those improvements while adding the required visual and responsive styling.

## Changelog
| Date | Change | Reason / criterion addressed |
|---|---|---|
| 2026-07-28 | Initial folder structure and homepage created. | Part 1 project setup. |
| 2026-07-28 | Added all seven HTML pages and navigation. | Part 1 page and navigation requirements. |
| 2026-08-10 | Added semantic elements, forms, additional content and descriptive comments. | Part 1 feedback and HTML requirements. |
| 2026-09-13 | Reworked the shared stylesheet with a complete colour, typography, spacing and layout system. | Part 2: Default styling, typography, layout and decoration. |
| 2026-09-13 | Added consistent header/navigation styling and a mobile navigation menu. | Part 2: External stylesheet and responsive navigation. |
| 2026-09-13 | Added hover, focus-visible and active states for links, buttons and form controls. | Part 2: Pseudo-classes. |
| 2026-09-13 | Added responsive Grid/Flexbox adaptations for tablet and mobile screens. | Part 2: Breakpoints and responsive layout. |
| 2026-09-13 | Added flexible image rules and improved hero image presentation. | Part 2: Responsive images. |
| 2026-09-13 | Added demo JavaScript for mobile navigation, FAQ interaction and form feedback. | Supports the existing prototype while keeping later functionality separate. |
| 2026-09-13 | Updated README to document CSS implementation, breakpoints, testing plan, feedback and changelog. | Part 2: README and changelog. |

## References
- Google Fonts. (n.d.). *Poppins*. Available at: https://fonts.google.com/specimen/Poppins (Accessed 13 September 2026).
- Mozilla Developer Network. (n.d.). *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries (Accessed 13 September 2026).
- Mozilla Developer Network. (n.d.). *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed 13 September 2026).
- Mozilla Developer Network. (n.d.). *HTML forms*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms (Accessed 13 September 2026).
- W3Schools. (n.d.). *Responsive Web Design*. Available at: https://www.w3schools.com/css/css_rwd_intro.asp (Accessed 13 September 2026).

## Academic Notice
Alvin's Haven is a fictional academic project. The site should not be interpreted as a real healthcare facility, treatment provider, medical service or source of medical advice.

### Image sourcing update

The main wellness images were refreshed with free Pexels photographs to better match Alvin's Haven's spa and recovery theme. The page keeps responsive `picture`, `srcset`, and `sizes` markup. Pexels describes the selected photographs as free to use.

- Hero spa room — Max Vakhtbovych, Pexels: https://www.pexels.com/photo/interior-of-a-massage-room-7598366/
- Wellness treatment — KERO 97, Pexels: https://www.pexels.com/photo/professional-massage-therapy-session-in-spa-31914690/
- Spa interior — Tugce Erten Barrett, Pexels: https://www.pexels.com/photo/interior-design-of-a-massage-room-11774389/

These images are used as representative academic website photography and do not represent a real Alvin's Haven facility.


### 17 September 2026 — Welcoming visual redesign
- Reworked the Alvin's Haven homepage into a warmer, photo-led wellness design with sage green, cream and soft gold accents.
- Added a larger hero image, story photography, a small photo collage, service photography and a final booking banner.
- Corrected the founder story: Alvin's Haven is named in honour of the user's mother, who is a nurse with 21 years of service, and the concept was opened in 2021.
- Removed the previous incorrect references describing the founder story as being based on a doctor/physiotherapist.
- Added wording around affordable wellness and support for back pain, muscle tension, mobility and general wellbeing.
- The selected external photography is used as representative academic website imagery and does not represent a real Alvin's Haven facility.

### Image Sources
- Pexels — Max Vakhtbovych, “Interior of a Massage Room”: https://www.pexels.com/photo/interior-of-a-massage-room-7598366/
- Pexels — RDNE Stock project, “A Woman Having a Massage Therapy”: https://www.pexels.com/photo/a-woman-having-a-massage-therapy-8312850/
- Pexels — Tugce Erten Barrett, “Interior Design of a Massage Room”: https://www.pexels.com/photo/interior-design-of-a-massage-room-11774389/
- Unsplash — Engin Akyurt, “Hot stone massage in spa”: https://unsplash.com/photos/hot-stone-massage-in-spa-SMwCQZWayj0

The image pages above state that the selected Pexels photographs are free to use and the selected Unsplash photograph is free to use under the Unsplash License. Accessed 17 September 2026.

- Added photo-led care/team cards to the About page as representative CV-style profiles.
- Added welcoming photography to the Memberships page while keeping the existing membership content.
- Added responsive layouts for the new photo sections at tablet and mobile breakpoints.
- Added an academic note clarifying that representative staff imagery/profiles are not real Alvin's Haven employees.


## Part 2 image files
The same five supplied wellness photos are included locally in the `images` folder. Responsive JPG versions are included for the main photos so the website does not depend on external image hosting.


### Part 2 completion updates
| Date | Change | Reason / criterion addressed |
|---|---|---|
| 2026-09-18 | Standardised all seven pages on DM Sans and Playfair Display. | Part 2: Typography consistency. |
| 2026-09-18 | Added clear H1 page titles to About, Services, Enquiry, FAQ and Contact pages. | Part 1 feedback: HTML layout/content and semantic structure. |
| 2026-09-18 | Added explanatory section comments to the homepage. | Part 1 feedback: Code comments. |
| 2026-09-18 | Added local `srcset` and `sizes` attributes to content images with matching responsive assets. | Part 2: Responsive images. |
| 2026-09-18 | Updated README technology, responsive-image and testing documentation. | Part 2: README documentation and evidence preparation. |
