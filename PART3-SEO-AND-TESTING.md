# Part 3: SEO, testing and deployment checklist

## SEO improvements included
- Added unique page titles and meta descriptions to each HTML page.
- Added Open Graph title/description metadata for social sharing.
- Checked that existing image elements have `alt` attributes; review each description manually for accuracy.
- Added `robots.txt` and `sitemap.xml`. Both contain `YOUR-DEPLOYED-DOMAIN` placeholders because the final hosting URL is not known yet.

## Required before submission
1. Deploy the website to GitHub Pages or Netlify.
2. Replace every `https://YOUR-DEPLOYED-DOMAIN/` in `sitemap.xml` with the actual live site URL.
3. Replace the placeholder Sitemap URL in `robots.txt` with the real live sitemap URL.
4. Test `https://YOUR-DEPLOYED-DOMAIN/robots.txt` and `/sitemap.xml` after deployment.
5. Check page titles, descriptions, mobile layout, links, and image loading in a browser.
6. Verify the Google newsletter form loads and submits; it requires an internet connection.
7. Test the Contact and Service Enquiry forms. They prepare an email draft and do not send automatically.
8. Replace any remaining project-specific details in README if necessary and ensure references match resources actually used.
9. Commit changes with descriptive messages and push the final version to your GitHub remote.

## Manual testing record
Record your actual test results before submission; do not mark tests passed until you have tested them.
- [ ] Home page and all navigation links
- [ ] Responsive/mobile navigation
- [ ] FAQ accordion
- [ ] Service search/filter
- [ ] Image lightbox and Escape key
- [ ] Newsletter Google Form submission
- [ ] Contact form validation and email draft
- [ ] Service enquiry form validation and email draft
- [ ] All images load; alt text is accurate
- [ ] Mobile/tablet/desktop layouts
- [ ] `robots.txt` and `sitemap.xml` use live domain
- [ ] Final GitHub push and live deployment

## Important notes
- This is an academic prototype. Form actions are not a backend and do not automatically send or store contact/enquiry submissions.
- No live domain was supplied, so canonical URLs and sitemap hostnames have not been guessed.
- Existing original image assets were preserved; this update does not replace photos.
