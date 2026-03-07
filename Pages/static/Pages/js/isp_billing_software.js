
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

    gsap.from('.ibp-gradient-banner', {
        scrollTrigger: { trigger: '.ibp-banner-section', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ibp-faq-item', {
        scrollTrigger: { trigger: '.ibp-faq-section', start: 'top 75%' },
        opacity: 0, y: 24, duration: 0.55, stagger: 0.08, ease: 'power3.out',
    });

    const faqItems = document.querySelectorAll('.ibp-faq-item');
    faqItems.forEach((item) => {
        const question = item.querySelector('.ibp-faq-question');
        const answer = item.querySelector('.ibp-faq-answer');
        if (!question || !answer) {
            return;
        }
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            faqItems.forEach((other) => {
                other.classList.remove('is-open');
                const otherQuestion = other.querySelector('.ibp-faq-question');
                const otherAnswer = other.querySelector('.ibp-faq-answer');
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
        const firstQuestion = firstItem.querySelector('.ibp-faq-question');
        const firstAnswer = firstItem.querySelector('.ibp-faq-answer');
        firstItem.classList.add('is-open');
        if (firstQuestion) {
            firstQuestion.setAttribute('aria-expanded', 'true');
        }
        if (firstAnswer) {
            firstAnswer.style.maxHeight = `${firstAnswer.scrollHeight}px`;
        }
    }

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