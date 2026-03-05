/**
 * Restaurant POS Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.rp-hero .hero-content', {
        scrollTrigger: { trigger: '.rp-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.rp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.rp-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // Why Choose section
    gsap.from('.rp-why-section .section-heading', {
        scrollTrigger: { trigger: '.rp-why-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.rp-why-content', {
        scrollTrigger: { trigger: '.rp-why-section', start: 'top 70%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.rp-why-image', {
        scrollTrigger: { trigger: '.rp-why-section', start: 'top 70%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // Check list items
    gsap.from('.rp-check-list li', {
        scrollTrigger: { trigger: '.rp-check-list', start: 'top 80%' },
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Ideal For cards
    gsap.from('.rp-ideal-header', {
        scrollTrigger: { trigger: '.rp-ideal-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.rp-ideal-card', {
        scrollTrigger: { trigger: '.rp-ideal-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Core Functions
    gsap.from('.rp-core-content', {
        scrollTrigger: { trigger: '.rp-core-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.rp-core-image', {
        scrollTrigger: { trigger: '.rp-core-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.rp-core-feature', {
        scrollTrigger: { trigger: '.rp-core-features', start: 'top 80%' },
        opacity: 0,
        x: -25,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // Benefits
    gsap.from('.rp-benefits-header', {
        scrollTrigger: { trigger: '.rp-benefits-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.rp-benefit-card', {
        scrollTrigger: { trigger: '.rp-benefits-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Growth
    gsap.from('.rp-growth-content', {
        scrollTrigger: { trigger: '.rp-growth-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.rp-growth-image', {
        scrollTrigger: { trigger: '.rp-growth-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.rp-growth-list li', {
        scrollTrigger: { trigger: '.rp-growth-list', start: 'top 80%' },
        opacity: 0,
        x: -25,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Features
    gsap.from('.rp-features-header', {
        scrollTrigger: { trigger: '.rp-features-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.rp-feature-card', {
        scrollTrigger: { trigger: '.rp-features-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // Local Solutions
    gsap.from('.rp-local-image', {
        scrollTrigger: { trigger: '.rp-local-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.rp-local-content', {
        scrollTrigger: { trigger: '.rp-local-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // CTA
    gsap.from('.rp-cta-content', {
        scrollTrigger: { trigger: '.rp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.rp-cta-visual', {
        scrollTrigger: { trigger: '.rp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });
});
