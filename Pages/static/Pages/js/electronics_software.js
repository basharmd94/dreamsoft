/**
 * Electronics POS Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.ep-hero .hero-content', {
        scrollTrigger: { trigger: '.ep-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.ep-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.ep-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // Why POS section
    gsap.from('.ep-why-section .section-heading', {
        scrollTrigger: { trigger: '.ep-why-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.ep-why-content', {
        scrollTrigger: { trigger: '.ep-why-section', start: 'top 70%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.ep-why-image', {
        scrollTrigger: { trigger: '.ep-why-section', start: 'top 70%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // Check list items
    gsap.from('.ep-check-list li', {
        scrollTrigger: { trigger: '.ep-check-list', start: 'top 80%' },
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Features Grid
    gsap.from('.ep-features-header', {
        scrollTrigger: { trigger: '.ep-features-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.ep-feature-card', {
        scrollTrigger: { trigger: '.ep-features-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Benefits
    gsap.from('.ep-benefits-header', {
        scrollTrigger: { trigger: '.ep-benefits-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.ep-benefit-card', {
        scrollTrigger: { trigger: '.ep-benefits-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Trust section (Pre-sale / Post-sale blocks)
    gsap.from('.ep-trust-header', {
        scrollTrigger: { trigger: '.ep-trust-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.ep-trust-block', {
        scrollTrigger: { trigger: '.ep-trust-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Growth section
    gsap.from('.ep-growth-content', {
        scrollTrigger: { trigger: '.ep-growth-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.ep-growth-image', {
        scrollTrigger: { trigger: '.ep-growth-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.ep-growth-list li', {
        scrollTrigger: { trigger: '.ep-growth-list', start: 'top 80%' },
        opacity: 0,
        x: -25,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('.ep-gradient-banner', {
        scrollTrigger: { trigger: '.ep-banner-section', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.ep-faq-item', {
        scrollTrigger: { trigger: '.ep-faq-section', start: 'top 75%' },
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
    });

    const faqItems = document.querySelectorAll('.ep-faq-item');
    faqItems.forEach((item) => {
        const question = item.querySelector('.ep-faq-question');
        const answer = item.querySelector('.ep-faq-answer');
        if (!question || !answer) {
            return;
        }

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            faqItems.forEach((other) => {
                other.classList.remove('is-open');
                const otherQuestion = other.querySelector('.ep-faq-question');
                const otherAnswer = other.querySelector('.ep-faq-answer');
                if (otherQuestion) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = '';
                }
            });

            if (isOpen) {
                return;
            }

            item.classList.add('is-open');
            question.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = `${answer.scrollHeight}px`;
        });
    });

    if (faqItems.length) {
        const firstItem = faqItems[0];
        const firstQuestion = firstItem.querySelector('.ep-faq-question');
        const firstAnswer = firstItem.querySelector('.ep-faq-answer');
        firstItem.classList.add('is-open');
        if (firstQuestion) {
            firstQuestion.setAttribute('aria-expanded', 'true');
        }
        if (firstAnswer) {
            firstAnswer.style.maxHeight = `${firstAnswer.scrollHeight}px`;
        }
    }

    // CTA
    gsap.from('.ep-cta-content', {
        scrollTrigger: { trigger: '.ep-cta-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.ep-cta-visual', {
        scrollTrigger: { trigger: '.ep-cta-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });
});
