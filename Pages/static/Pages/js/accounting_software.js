/**
 * Accounting Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    // Hero
    gsap.from('.ap-hero .hero-content', {
        scrollTrigger: { trigger: '.ap-hero', start: 'top 85%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ap-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.ap-hero', start: 'top 85%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.2, ease: 'power3.out',
    });

    // What Is section
    gsap.from('.ap-what-section .section-heading', {
        scrollTrigger: { trigger: '.ap-what-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-what-content', {
        scrollTrigger: { trigger: '.ap-what-section', start: 'top 70%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ap-what-image', {
        scrollTrigger: { trigger: '.ap-what-section', start: 'top 70%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.ap-check-list li', {
        scrollTrigger: { trigger: '.ap-check-list', start: 'top 80%' },
        opacity: 0, x: -30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Advantages Grid
    gsap.from('.ap-advantages-header', {
        scrollTrigger: { trigger: '.ap-advantages-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-advantage-card', {
        scrollTrigger: { trigger: '.ap-advantages-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: 'power3.out',
    });

    // Features Grid
    gsap.from('.ap-features-header', {
        scrollTrigger: { trigger: '.ap-features-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-feature-card', {
        scrollTrigger: { trigger: '.ap-features-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: 'power3.out',
    });

    // Tax / Compliance Section
    gsap.from('.ap-tax-content .section-heading', {
        scrollTrigger: { trigger: '.ap-tax-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-tax-text', {
        scrollTrigger: { trigger: '.ap-tax-section', start: 'top 70%' },
        opacity: 0, x: -40, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-tax-image', {
        scrollTrigger: { trigger: '.ap-tax-section', start: 'top 70%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.ap-tax-list li', {
        scrollTrigger: { trigger: '.ap-tax-list', start: 'top 80%' },
        opacity: 0, x: -30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Trust section
    gsap.from('.ap-trust-header', {
        scrollTrigger: { trigger: '.ap-trust-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-trust-item', {
        scrollTrigger: { trigger: '.ap-trust-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    });

    // Info Section
    gsap.from('.ap-info-block', {
        scrollTrigger: { trigger: '.ap-info-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    });

    gsap.from('.ap-info-image', {
        scrollTrigger: { trigger: '.ap-info-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    // Guide Section
    gsap.from('.ap-guide-content .section-heading', {
        scrollTrigger: { trigger: '.ap-guide-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-guide-intro', {
        scrollTrigger: { trigger: '.ap-guide-section', start: 'top 70%' },
        opacity: 0, x: 40, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ap-guide-image', {
        scrollTrigger: { trigger: '.ap-guide-section', start: 'top 70%' },
        opacity: 0, x: -50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.ap-guide-block', {
        scrollTrigger: { trigger: '.ap-guide-list', start: 'top 80%' },
        opacity: 0, x: 50, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    });

    // CTA Section
    gsap.from('.ap-cta-content', {
        scrollTrigger: { trigger: '.ap-cta-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ap-cta-visual', {
        scrollTrigger: { trigger: '.ap-cta-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
});
