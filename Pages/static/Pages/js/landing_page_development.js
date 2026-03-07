document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') {
        return;
    }

    gsap.from('#lp-hero .hero-content', {
        scrollTrigger: { trigger: '#lp-hero', start: 'top 85%' },
        opacity: 0,
        x: -45,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#lp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '#lp-hero', start: 'top 85%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#lp-what .wd-what-image', {
        scrollTrigger: { trigger: '#lp-what', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#lp-what .wd-what-content', {
        scrollTrigger: { trigger: '#lp-what', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#lp-services .wd-services-header', {
        scrollTrigger: { trigger: '#lp-services', start: 'top 80%' },
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('#lp-services .wd-service-card', {
        scrollTrigger: { trigger: '#lp-services .wd-services-grid', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#lp-strategy .wd-features-content', {
        scrollTrigger: { trigger: '#lp-strategy', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#lp-strategy .wd-features-image', {
        scrollTrigger: { trigger: '#lp-strategy', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#lp-strategy .wd-feature-list li', {
        scrollTrigger: { trigger: '#lp-strategy .wd-feature-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#lp-speed .wd-benefits-image', {
        scrollTrigger: { trigger: '#lp-speed', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#lp-speed .wd-benefits-content', {
        scrollTrigger: { trigger: '#lp-speed', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#lp-speed .wd-benefits-list li', {
        scrollTrigger: { trigger: '#lp-speed .wd-benefits-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#lp-features .wd-choose-header', {
        scrollTrigger: { trigger: '#lp-features', start: 'top 80%' },
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('#lp-features .wd-choose-card', {
        scrollTrigger: { trigger: '#lp-features .wd-choose-grid', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#lp-seo-company .wd-features-content', {
        scrollTrigger: { trigger: '#lp-seo-company', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#lp-seo-company .wd-features-image', {
        scrollTrigger: { trigger: '#lp-seo-company', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#lp-seo-company .wd-feature-list li', {
        scrollTrigger: { trigger: '#lp-seo-company .wd-feature-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#lp-seo-services .wd-features-content', {
        scrollTrigger: { trigger: '#lp-seo-services', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#lp-seo-services .wd-features-image', {
        scrollTrigger: { trigger: '#lp-seo-services', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#lp-seo-services .wd-ecom-list li', {
        scrollTrigger: { trigger: '#lp-seo-services .wd-ecom-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#lp-growth-cta .wd-gradient-banner', {
        scrollTrigger: { trigger: '#lp-growth-cta', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#lp-faq .wd-faq-item', {
        scrollTrigger: { trigger: '#lp-faq', start: 'top 75%' },
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('#lp-contact-cta .wd-cta-content', {
        scrollTrigger: { trigger: '#lp-contact-cta', start: 'top 75%' },
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: 'power3.out',
    });

    gsap.from('#lp-contact-cta .wd-cta-visual', {
        scrollTrigger: { trigger: '#lp-contact-cta', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    const faqItems = document.querySelectorAll('#lp-faq .wd-faq-item');
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
