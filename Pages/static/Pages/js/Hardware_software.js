/**
 * Hardware & Tiles Shop POS Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.hp-hero .hero-content', {
        scrollTrigger: { trigger: '.hp-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.hp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.hp-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // Features Grid
    gsap.from('.hp-features-header', {
        scrollTrigger: { trigger: '.hp-features-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.hp-feature-card', {
        scrollTrigger: { trigger: '.hp-features-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Why Choose section
    gsap.from('.hp-why-content', {
        scrollTrigger: { trigger: '.hp-why-section', start: 'top 70%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.hp-why-image', {
        scrollTrigger: { trigger: '.hp-why-section', start: 'top 70%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.hp-check-list li', {
        scrollTrigger: { trigger: '.hp-check-list', start: 'top 80%' },
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power3.out',
    });

    // Benefits
    gsap.from('.hp-benefits-header', {
        scrollTrigger: { trigger: '.hp-benefits-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.hp-benefit-card', {
        scrollTrigger: { trigger: '.hp-benefits-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Growth section
    gsap.from('.hp-growth-content', {
        scrollTrigger: { trigger: '.hp-growth-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.hp-growth-image', {
        scrollTrigger: { trigger: '.hp-growth-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.hp-growth-list li', {
        scrollTrigger: { trigger: '.hp-growth-list', start: 'top 80%' },
        opacity: 0,
        x: -25,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // CTA
    gsap.from('.hp-cta-content', {
        scrollTrigger: { trigger: '.hp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.hp-cta-visual', {
        scrollTrigger: { trigger: '.hp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });
});
