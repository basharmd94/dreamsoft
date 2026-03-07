document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') {
        return;
    }

    gsap.from('#ec-hero .hero-content', {
        scrollTrigger: { trigger: '#ec-hero', start: 'top 85%' },
        opacity: 0,
        x: -45,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#ec-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '#ec-hero', start: 'top 85%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#ec-what .wd-what-image', {
        scrollTrigger: { trigger: '#ec-what', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#ec-what .wd-what-content', {
        scrollTrigger: { trigger: '#ec-what', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#ec-services .wd-services-header', {
        scrollTrigger: { trigger: '#ec-services', start: 'top 80%' },
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('#ec-services .wd-service-card', {
        scrollTrigger: { trigger: '#ec-services .wd-services-grid', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#ec-marketplace .wd-features-content', {
        scrollTrigger: { trigger: '#ec-marketplace', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#ec-marketplace .wd-features-image', {
        scrollTrigger: { trigger: '#ec-marketplace', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#ec-marketplace .wd-feature-list li', {
        scrollTrigger: { trigger: '#ec-marketplace .wd-feature-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#ec-speed .wd-benefits-image', {
        scrollTrigger: { trigger: '#ec-speed', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#ec-speed .wd-benefits-content', {
        scrollTrigger: { trigger: '#ec-speed', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#ec-speed .wd-benefits-list li', {
        scrollTrigger: { trigger: '#ec-speed .wd-benefits-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#ec-features .wd-choose-header', {
        scrollTrigger: { trigger: '#ec-features', start: 'top 80%' },
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('#ec-features .wd-choose-card', {
        scrollTrigger: { trigger: '#ec-features .wd-choose-grid', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#ec-seo-company .wd-features-content', {
        scrollTrigger: { trigger: '#ec-seo-company', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#ec-seo-company .wd-features-image', {
        scrollTrigger: { trigger: '#ec-seo-company', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#ec-seo-company .wd-feature-list li', {
        scrollTrigger: { trigger: '#ec-seo-company .wd-feature-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#ec-seo-store .wd-features-content', {
        scrollTrigger: { trigger: '#ec-seo-store', start: 'top 78%' },
        opacity: 0,
        x: -42,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#ec-seo-store .wd-features-image', {
        scrollTrigger: { trigger: '#ec-seo-store', start: 'top 78%' },
        opacity: 0,
        x: 42,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    gsap.from('#ec-seo-store .wd-ecom-list li', {
        scrollTrigger: { trigger: '#ec-seo-store .wd-ecom-list', start: 'top 82%' },
        opacity: 0,
        x: -18,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power3.out',
    });

    gsap.from('#ec-growth-cta .wd-gradient-banner', {
        scrollTrigger: { trigger: '#ec-growth-cta', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('#ec-faq .wd-faq-item', {
        scrollTrigger: { trigger: '#ec-faq', start: 'top 75%' },
        opacity: 0,
        y: 24,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('#ec-contact-cta .wd-cta-content', {
        scrollTrigger: { trigger: '#ec-contact-cta', start: 'top 75%' },
        opacity: 0,
        y: 24,
        duration: 0.75,
        ease: 'power3.out',
    });

    gsap.from('#ec-contact-cta .wd-cta-visual', {
        scrollTrigger: { trigger: '#ec-contact-cta', start: 'top 75%' },
        opacity: 0,
        x: 45,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
    });

    const faqItems = document.querySelectorAll('#ec-faq .wd-faq-item');
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
