/**
 * Fashion Shop Software Page — DreamSoft
 * Scroll-reveal animations (GSAP + ScrollTrigger)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.fs-hero .hero-content', {
        scrollTrigger: { trigger: '.fs-hero', start: 'top 85%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.fs-hero', start: 'top 85%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.2, ease: 'power3.out',
    });

    // Overview Section
    gsap.from('.fs-overview-section .fs-image-col', {
        scrollTrigger: { trigger: '.fs-overview-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-overview-section .fs-content-col', {
        scrollTrigger: { trigger: '.fs-overview-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    // Features Section (Grid)
    gsap.from('.fs-features-section .fs-section-header', {
        scrollTrigger: { trigger: '.fs-features-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.fs-features-section .fs-card', {
        scrollTrigger: { trigger: '.fs-grid-6', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Inventory Section
    gsap.from('.fs-inventory-section .fs-content-col', {
        scrollTrigger: { trigger: '.fs-inventory-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-inventory-section .fs-image-col', {
        scrollTrigger: { trigger: '.fs-inventory-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
    gsap.from('.fs-inventory-section .fs-feature-box', {
        scrollTrigger: { trigger: '.fs-inventory-section .fs-content-col', start: 'top 60%' },
        opacity: 0, x: -30, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'power3.out',
    });

    // Billing Section
    gsap.from('.fs-billing-section .fs-section-header', {
        scrollTrigger: { trigger: '.fs-billing-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.fs-billing-section .fs-image-col', {
        scrollTrigger: { trigger: '.fs-billing-section .fs-two-col-grid', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-billing-section .fs-content-col', {
        scrollTrigger: { trigger: '.fs-billing-section .fs-two-col-grid', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
    gsap.from('.fs-billing-section .fs-check-list li', {
        scrollTrigger: { trigger: '.fs-billing-section .fs-check-list', start: 'top 85%' },
        opacity: 0, x: -20, duration: 0.4, stagger: 0.06, delay: 0.3, ease: 'power3.out',
    });

    // Analytics Section
    gsap.from('.fs-analytics-section .fs-image-col', {
        scrollTrigger: { trigger: '.fs-analytics-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-analytics-section .fs-content-col', {
        scrollTrigger: { trigger: '.fs-analytics-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    // Retail ERP Section
    gsap.from('.fs-erp-section .fs-content-col', {
        scrollTrigger: { trigger: '.fs-erp-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-erp-section .fs-image-col', {
        scrollTrigger: { trigger: '.fs-erp-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
    gsap.from('.fs-erp-section .fs-check-list li', {
        scrollTrigger: { trigger: '.fs-erp-section .fs-check-list', start: 'top 85%' },
        opacity: 0, y: 20, duration: 0.4, stagger: 0.06, delay: 0.2, ease: 'power3.out',
    });

    // Boutique Section
    gsap.from('.fs-boutique-section .fs-content-col', {
        scrollTrigger: { trigger: '.fs-boutique-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-boutique-section .fs-image-col', {
        scrollTrigger: { trigger: '.fs-boutique-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
    
    // Local Market Section
    gsap.from('.fs-local-section .fs-image-col', {
        scrollTrigger: { trigger: '.fs-local-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-local-section .fs-content-col', {
        scrollTrigger: { trigger: '.fs-local-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    // FAQ
    gsap.from('.fs-faq-header', {
        scrollTrigger: { trigger: '.fs-faq-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.fs-faq-item', {
        scrollTrigger: { trigger: '.fs-faq-list', start: 'top 80%' },
        opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Final Thoughts
    gsap.from('.fs-thoughts-content', {
        scrollTrigger: { trigger: '.fs-thoughts-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.fs-thoughts-visual', {
        scrollTrigger: { trigger: '.fs-thoughts-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    /* ─── FAQ Accordion ─── */
    const faqItems = document.querySelectorAll('.fs-faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.fs-faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('is-open');
                    other.querySelector('.fs-faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('is-open');
            question.setAttribute('aria-expanded', !isOpen);
        });
    });

    // Final CTA
    gsap.from('.fs-final-cta', {
        scrollTrigger: { trigger: '.fs-cta-section', start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    });
});
