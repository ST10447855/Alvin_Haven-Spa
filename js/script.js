// Part 3 JavaScript interactions for Alvin's Haven.
// This script keeps the existing local image files and page content.
document.addEventListener('DOMContentLoaded', () => {
  // Responsive navigation with accessible state.
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open navigation');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  // Turn the existing FAQ question/answer sections into keyboard-accessible accordions.
  if (location.pathname.toLowerCase().endsWith('faq.html')) {
    document.querySelectorAll('main .section .container.panel').forEach((panel, index) => {
      const heading = panel.querySelector('h3');
      const answer = heading && heading.nextElementSibling;
      if (!heading || !answer || answer.tagName !== 'P') return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'faq-toggle';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', `faq-answer-${index + 1}`);
      button.textContent = heading.textContent.trim();
      heading.replaceWith(button);
      answer.id = `faq-answer-${index + 1}`;
      answer.classList.add('faq-answer-js');
      answer.hidden = true;
      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') !== 'true';
        button.setAttribute('aria-expanded', String(open));
        answer.hidden = !open;
        button.classList.toggle('is-open', open);
      });
    });
  }

  // Add a service filter to the existing Services page, without replacing service content.
  if (location.pathname.toLowerCase().endsWith('services.html')) {
    const main = document.querySelector('main');
    const intro = main && main.querySelector('.service-intro');
    if (intro) {
      const wrapper = intro.closest('.container');
      const searchWrap = document.createElement('div');
      searchWrap.className = 'service-search';
      const label = document.createElement('label');
      label.htmlFor = 'service-search-input';
      label.textContent = 'Find a service';
      const input = document.createElement('input');
      input.type = 'search'; input.id = 'service-search-input';
      input.placeholder = 'Search massage, recovery, wellness…';
      input.setAttribute('aria-describedby', 'service-search-status');
      const status = document.createElement('p');
      status.id = 'service-search-status'; status.className = 'search-status';
      status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
      searchWrap.append(label, input, status);
      wrapper.insertAdjacentElement('afterend', searchWrap);
      const serviceSections = Array.from(main.querySelectorAll('.section')).filter(section => {
        const h = section.querySelector('h3');
        return h && !section.querySelector('.service-intro');
      });
      const filter = () => {
        const term = input.value.trim().toLocaleLowerCase();
        let count = 0;
        serviceSections.forEach(section => {
          const match = section.textContent.toLocaleLowerCase().includes(term);
          section.hidden = !match;
          if (match) count++;
        });
        status.textContent = term ? `${count} service${count === 1 ? '' : 's'} found.` : 'Showing all services.';
      };
      input.addEventListener('input', filter);
      filter();
    }
  }

  // Lightbox for existing content images (does not add or replace photos).
  const images = Array.from(document.querySelectorAll('main img')).filter(img => img.closest('a') === null);
  if (images.length) {
    const dialog = document.createElement('dialog');
    dialog.className = 'image-lightbox';
    dialog.setAttribute('aria-label', 'Enlarged image viewer');
    const close = document.createElement('button');
    close.type = 'button'; close.className = 'lightbox-close'; close.textContent = 'Close';
    close.setAttribute('aria-label', 'Close enlarged image');
    const large = document.createElement('img');
    large.alt = '';
    const caption = document.createElement('p'); caption.className = 'lightbox-caption';
    dialog.append(close, large, caption); document.body.append(dialog);
    const closeDialog = () => { if (dialog.open) dialog.close(); };
    close.addEventListener('click', closeDialog);
    dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
    dialog.addEventListener('close', () => { if (dialog.returnFocusTo) dialog.returnFocusTo.focus(); });
    images.forEach(img => {
      img.classList.add('lightbox-image');
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `Enlarge image: ${img.alt || 'photo'}`);
      const openImage = () => {
        large.src = img.currentSrc || img.src;
        large.alt = img.alt || 'Enlarged photo';
        caption.textContent = img.alt || '';
        dialog.returnFocusTo = img;
        if (typeof dialog.showModal === 'function') dialog.showModal();
      };
      img.addEventListener('click', openImage);
      img.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openImage(); }
      });
    });
    dialog.addEventListener('keydown', event => { if (event.key === 'Escape') closeDialog(); });
  }

  // Service enquiry: show listed price and prepare a pre-filled email for the visitor.
  const enquiryForm = document.querySelector('form[data-enquiry-form]');
  if (enquiryForm) {
    const service = enquiryForm.querySelector('#service');
    const response = enquiryForm.querySelector('#service-response');
    const prices = {
      massage: 'R450 per session', chiropractic: 'R550 per session',
      recovery: 'R500 per session', wellness: 'R400 per session',
      'wellness-package': 'R450 per month', 'premium-package': 'R850 per month'
    };
    const updateService = () => {
      if (!service || !response) return;
      const price = prices[service.value];
      response.textContent = price ? `Listed price: ${price}. This is not a live booking; the centre must confirm appointment availability.` : 'Choose a service to see its listed price. Appointment availability will need to be confirmed by the centre.';
    };
    if (service) service.addEventListener('change', updateService);
    enquiryForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!enquiryForm.reportValidity()) return;
      const data = new FormData(enquiryForm);
      const serviceLabel = service && service.selectedIndex >= 0 ? service.options[service.selectedIndex].text : '';
      const subject = encodeURIComponent('Alvin’s Haven service enquiry');
      const body = encodeURIComponent(
        `Name: ${data.get('full-name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nService: ${serviceLabel}\nPreferred date: ${data.get('preferred-date') || 'Not specified'}\nPreferred time: ${data.get('preferred-time') || 'Not specified'}\nAdditional information: ${data.get('message') || 'None'}\n\nPlease confirm price and appointment availability.`
      );
      const status = enquiryForm.querySelector('.form-success');
      if (status) status.style.display = 'block';
      window.location.href = `mailto:info@alvinshaven.co.za?subject=${subject}&body=${body}`;
    });
  }

  // Contact form: compile details into an email the visitor can review and send.
  const contactForm = document.querySelector('form[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(`Alvin’s Haven - ${data.get('message-type')}`);
      const body = encodeURIComponent(
        `Name: ${data.get('contact-name')}\nEmail: ${data.get('contact-email')}\nPhone: ${data.get('contact-phone') || 'Not provided'}\nMessage type: ${data.get('message-type')}\n\nMessage:\n${data.get('contact-message')}`
      );
      const status = contactForm.querySelector('.form-success');
      if (status) status.style.display = 'block';
      window.location.href = `mailto:info@alvinshaven.co.za?subject=${subject}&body=${body}`;
    });
  }

});
