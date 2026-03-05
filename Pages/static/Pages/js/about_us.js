/**
 * About Us Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 * (both are loaded via base.html)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Reveal Animations ─── */

    // Hero section elements
    gsap.from('.au-hero .hero-content', {
        scrollTrigger: {
            trigger: '.au-hero',
            start: 'top 85%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.au-hero .hero-image-wrapper', {
        scrollTrigger: {
            trigger: '.au-hero',
            start: 'top 85%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // About DreamSoft section
    gsap.from('.au-about-image', {
        scrollTrigger: {
            trigger: '.au-about-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.au-about-content', {
        scrollTrigger: {
            trigger: '.au-about-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // Software Solutions header
    gsap.from('.au-solutions-header', {
        scrollTrigger: {
            trigger: '.au-solutions-section',
            start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
    });

    // Solution cards staggered
    gsap.from('.au-solution-card', {
        scrollTrigger: {
            trigger: '.au-solutions-grid',
            start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // POS Section
    gsap.from('.au-pos-image', {
        scrollTrigger: {
            trigger: '.au-pos-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.au-pos-content', {
        scrollTrigger: {
            trigger: '.au-pos-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.au-pos-feature-item', {
        scrollTrigger: {
            trigger: '.au-pos-features',
            start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // ERP Section
    gsap.from('.au-erp-content', {
        scrollTrigger: {
            trigger: '.au-erp-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.au-erp-image', {
        scrollTrigger: {
            trigger: '.au-erp-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // ISP Section
    gsap.from('.au-isp-image', {
        scrollTrigger: {
            trigger: '.au-isp-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.au-isp-content', {
        scrollTrigger: {
            trigger: '.au-isp-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // Industries grid
    gsap.from('.au-industries-header', {
        scrollTrigger: {
            trigger: '.au-industries-section',
            start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.au-industry-card', {
        scrollTrigger: {
            trigger: '.au-industries-grid',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Why Choose section
    gsap.from('.au-why-visual', {
        scrollTrigger: {
            trigger: '.au-why-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.au-why-content', {
        scrollTrigger: {
            trigger: '.au-why-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // Why points staggered
    gsap.from('.au-why-point', {
        scrollTrigger: {
            trigger: '.au-why-points',
            start: 'top 80%',
        },
        opacity: 0,
        x: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // Mission & Vision cards
    gsap.from('.au-mv-card', {
        scrollTrigger: {
            trigger: '.au-mv-section',
            start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Contact section
    gsap.from('.au-contact-image', {
        scrollTrigger: {
            trigger: '.au-contact-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.au-contact-content', {
        scrollTrigger: {
            trigger: '.au-contact-section',
            start: 'top 75%',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });


    /* ─── Counter Animation for Stats (if any numeric values) ─── */

    const animateCounter = (el, target, suffix = '') => {
        const obj = { val: 0 };
        gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
            },
            onUpdate: () => {
                el.textContent = Math.floor(obj.val) + suffix;
            },
        });
    };

    // Animate numeric badges if found
    document.querySelectorAll('[data-counter]').forEach((el) => {
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.counterSuffix || '';
        animateCounter(el, target, suffix);
    });
});
