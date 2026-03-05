/**
 * Tailor Shop Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    // Hero
    gsap.from('.tp-hero .hero-content', {
        scrollTrigger: { trigger: '.tp-hero', start: 'top 85%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.tp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.tp-hero', start: 'top 85%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.2, ease: 'power3.out',
    });

    // What Is section
    gsap.from('.tp-what-section .section-heading', {
        scrollTrigger: { trigger: '.tp-what-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.tp-what-content', {
        scrollTrigger: { trigger: '.tp-what-section', start: 'top 70%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.tp-what-image', {
        scrollTrigger: { trigger: '.tp-what-section', start: 'top 70%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.tp-check-list li', {
        scrollTrigger: { trigger: '.tp-check-list', start: 'top 80%' },
        opacity: 0, x: -30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Advantages Grid
    gsap.from('.tp-advantages-header', {
        scrollTrigger: { trigger: '.tp-advantages-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.tp-advantage-card', {
        scrollTrigger: { trigger: '.tp-advantages-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: 'power3.out',
    });

    // Features Grid
    gsap.from('.tp-features-header', {
        scrollTrigger: { trigger: '.tp-features-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.tp-feature-card', {
        scrollTrigger: { trigger: '.tp-features-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: 'power3.out',
    });

    // Trust section
    gsap.from('.tp-trust-header', {
        scrollTrigger: { trigger: '.tp-trust-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.tp-trust-block', {
        scrollTrigger: { trigger: '.tp-trust-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.6, stagger: 0.15, ease: 'power3.out',
    });

    // Growth section
    gsap.from('.tp-growth-content', {
        scrollTrigger: { trigger: '.tp-growth-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.tp-growth-image', {
        scrollTrigger: { trigger: '.tp-growth-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.tp-growth-list li', {
        scrollTrigger: { trigger: '.tp-growth-list', start: 'top 80%' },
        opacity: 0, x: -25, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // CTA
    gsap.from('.tp-cta-content', {
        scrollTrigger: { trigger: '.tp-cta-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.tp-cta-visual', {
        scrollTrigger: { trigger: '.tp-cta-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
});
