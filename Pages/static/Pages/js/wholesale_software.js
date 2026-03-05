/**
 * Wholesale POS Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.wp-hero .hero-content', {
        scrollTrigger: { trigger: '.wp-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.wp-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // Infrastructure section
    gsap.from('.wp-infra-section .section-heading', {
        scrollTrigger: { trigger: '.wp-infra-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.wp-infra-content', {
        scrollTrigger: { trigger: '.wp-infra-section', start: 'top 70%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wp-infra-image', {
        scrollTrigger: { trigger: '.wp-infra-section', start: 'top 70%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.wp-check-list li', {
        scrollTrigger: { trigger: '.wp-check-list', start: 'top 80%' },
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Advantages section
    gsap.from('.wp-advantages-header', {
        scrollTrigger: { trigger: '.wp-advantages-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.wp-advantage-card', {
        scrollTrigger: { trigger: '.wp-advantages-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Process steps
    gsap.from('.wp-process-header', {
        scrollTrigger: { trigger: '.wp-process-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.wp-process-step', {
        scrollTrigger: { trigger: '.wp-process-steps', start: 'top 80%' },
        opacity: 0,
        x: -40,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // Features Grid
    gsap.from('.wp-features-header', {
        scrollTrigger: { trigger: '.wp-features-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.wp-feature-card', {
        scrollTrigger: { trigger: '.wp-features-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
    });

    // CTA
    gsap.from('.wp-cta-content', {
        scrollTrigger: { trigger: '.wp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wp-cta-visual', {
        scrollTrigger: { trigger: '.wp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });
});
