document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.wd-hero .hero-content', {
        scrollTrigger: { trigger: '.wd-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.wd-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    gsap.from('.wd-what-content', {
        scrollTrigger: { trigger: '.wd-what-section', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-what-image', {
        scrollTrigger: { trigger: '.wd-what-section', start: 'top 75%' },
        opacity: 0,
        x: -45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('.wd-services-header', {
        scrollTrigger: { trigger: '.wd-services-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.wd-service-card', {
        scrollTrigger: { trigger: '.wd-services-grid', start: 'top 80%' },
        opacity: 0,
        y: 28,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('.wd-features-content', {
        scrollTrigger: { trigger: '.wd-features-section', start: 'top 75%' },
        opacity: 0,
        x: -45,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-features-image', {
        scrollTrigger: { trigger: '.wd-features-section', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('.wd-feature-list li', {
        scrollTrigger: { trigger: '.wd-feature-list', start: 'top 82%' },
        opacity: 0,
        x: -20,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('.wd-best-content', {
        scrollTrigger: { trigger: '.wd-best-section', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-best-image', {
        scrollTrigger: { trigger: '.wd-best-section', start: 'top 75%' },
        opacity: 0,
        x: -45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('.wd-choose-header', {
        scrollTrigger: { trigger: '.wd-choose-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.wd-choose-card', {
        scrollTrigger: { trigger: '.wd-choose-grid', start: 'top 80%' },
        opacity: 0,
        y: 26,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('.wd-benefits-content', {
        scrollTrigger: { trigger: '.wd-benefits-section', start: 'top 75%' },
        opacity: 0,
        x: -45,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-benefits-image', {
        scrollTrigger: { trigger: '.wd-benefits-section', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('.wd-benefits-list li', {
        scrollTrigger: { trigger: '.wd-benefits-list', start: 'top 82%' },
        opacity: 0,
        x: -20,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('.wd-seo-content', {
        scrollTrigger: { trigger: '.wd-seo-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: 'power3.out',
    });

    gsap.from('.wd-ecom-content', {
        scrollTrigger: { trigger: '.wd-ecom-section', start: 'top 75%' },
        opacity: 0,
        x: -45,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-ecom-image', {
        scrollTrigger: { trigger: '.wd-ecom-section', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('.wd-seo-pillar-content', {
        scrollTrigger: { trigger: '.wd-seo-pillar-section', start: 'top 80%' },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-seo-metric-card', {
        scrollTrigger: { trigger: '.wd-seo-pillar-section', start: 'top 80%' },
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('.wd-gradient-banner', {
        scrollTrigger: { trigger: '.wd-banner-section', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.wd-faq-item', {
        scrollTrigger: { trigger: '.wd-faq-section', start: 'top 75%' },
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('.wd-cta-content', {
        scrollTrigger: { trigger: '.wd-cta-section', start: 'top 75%' },
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: 'power3.out',
    });

    gsap.from('.wd-cta-visual', {
        scrollTrigger: { trigger: '.wd-cta-section', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    const faqItems = document.querySelectorAll('.wd-faq-item');
    faqItems.forEach((item) => {
        const question = item.querySelector('.wd-faq-question');
        const answer = item.querySelector('.wd-faq-answer');
        if (!question || !answer) {
            return;
        }

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            faqItems.forEach((other) => {
                other.classList.remove('is-open');
                const otherQuestion = other.querySelector('.wd-faq-question');
                const otherAnswer = other.querySelector('.wd-faq-answer');
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
        const firstQuestion = firstItem.querySelector('.wd-faq-question');
        const firstAnswer = firstItem.querySelector('.wd-faq-answer');
        firstItem.classList.add('is-open');
        if (firstQuestion) {
            firstQuestion.setAttribute('aria-expanded', 'true');
        }
        if (firstAnswer) {
            firstAnswer.style.maxHeight = `${firstAnswer.scrollHeight}px`;
        }
    }
});
