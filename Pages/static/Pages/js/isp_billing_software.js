/**
 * ISP Billing Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    // Hero Section
    gsap.from('.ibp-hero .hero-content', {
        scrollTrigger: { trigger: '.ibp-hero', start: 'top 85%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ibp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.ibp-hero', start: 'top 85%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.2, ease: 'power3.out',
    });

    // Info / BTRC Section
    gsap.from('.ibp-info-content .section-heading', {
        scrollTrigger: { trigger: '.ibp-info-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ibp-info-text', {
        scrollTrigger: { trigger: '.ibp-info-section', start: 'top 70%' },
        opacity: 0, x: -40, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ibp-info-image', {
        scrollTrigger: { trigger: '.ibp-info-section', start: 'top 70%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.ibp-check-list li', {
        scrollTrigger: { trigger: '.ibp-check-list', start: 'top 80%' },
        opacity: 0, x: -20, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Features Section Grid
    gsap.from('.ibp-features-header', {
        scrollTrigger: { trigger: '.ibp-features-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ibp-feature-card', {
        scrollTrigger: { trigger: '.ibp-features-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: 'power3.out',
    });

    // Trust / Why Choose Us Section
    gsap.from('.ibp-trust-header', {
        scrollTrigger: { trigger: '.ibp-trust-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ibp-trust-item', {
        scrollTrigger: { trigger: '.ibp-trust-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    });

    // System Overview Section
    gsap.from('.ibp-system-content', {
        scrollTrigger: { trigger: '.ibp-system-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ibp-system-image', {
        scrollTrigger: { trigger: '.ibp-system-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    // Final CTA Section
    gsap.from('.ibp-cta-content', {
        scrollTrigger: { trigger: '.ibp-cta-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ibp-cta-visual', {
        scrollTrigger: { trigger: '.ibp-cta-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
});
