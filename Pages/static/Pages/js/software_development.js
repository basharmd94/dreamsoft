document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.from('.wd-hero .hero-content', {
            scrollTrigger: { trigger: '.sd-hero', start: 'top 85%' },
            opacity: 0,
            x: -45,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('.wd-hero .hero-image-wrapper', {
            scrollTrigger: { trigger: '.sd-hero', start: 'top 85%' },
            opacity: 0,
            x: 45,
            duration: 0.8,
            delay: 0.15,
            ease: 'power3.out',
        });

        gsap.from('#sd-services .wd-features-content', {
            scrollTrigger: { trigger: '#sd-services', start: 'top 80%' },
            opacity: 0,
            x: -45,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#sd-services .wd-features-image', {
            scrollTrigger: { trigger: '#sd-services', start: 'top 80%' },
            opacity: 0,
            x: 45,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#sd-services .wd-feature-list li', {
            scrollTrigger: { trigger: '#sd-services .wd-feature-list', start: 'top 82%' },
            opacity: 0,
            x: -20,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power3.out',
        });

        gsap.from('#sd-what .wd-benefits-content', {
            scrollTrigger: { trigger: '#sd-what', start: 'top 78%' },
            opacity: 0,
            x: -42,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#sd-what .wd-benefits-image', {
            scrollTrigger: { trigger: '#sd-what', start: 'top 78%' },
            opacity: 0,
            x: 42,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#sd-what .wd-benefits-list li', {
            scrollTrigger: { trigger: '#sd-what .wd-benefits-list', start: 'top 82%' },
            opacity: 0,
            x: -20,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power3.out',
        });

        gsap.from('#sd-lifecycle .wd-services-header', {
            scrollTrigger: { trigger: '#sd-lifecycle', start: 'top 80%' },
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power3.out',
        });

        gsap.from('#sd-lifecycle .wd-service-card', {
            scrollTrigger: { trigger: '#sd-lifecycle .wd-services-grid', start: 'top 80%' },
            opacity: 0,
            y: 24,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
        });

        gsap.from('#sd-technologies .wd-features-content', {
            scrollTrigger: { trigger: '#sd-technologies', start: 'top 78%' },
            opacity: 0,
            x: -42,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#sd-technologies .wd-features-image', {
            scrollTrigger: { trigger: '#sd-technologies', start: 'top 78%' },
            opacity: 0,
            x: 42,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#sd-technologies .wd-feature-list li', {
            scrollTrigger: { trigger: '#sd-technologies .wd-feature-list', start: 'top 82%' },
            opacity: 0,
            x: -20,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power3.out',
        });

        gsap.from('#sd-features .wd-services-header', {
            scrollTrigger: { trigger: '#sd-features', start: 'top 78%' },
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power3.out',
        });

        gsap.from('#sd-features .wd-service-card', {
            scrollTrigger: { trigger: '#sd-features .wd-services-grid', start: 'top 78%' },
            opacity: 0,
            y: 24,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
        });

        gsap.from('#sd-industries .wd-choose-header', {
            scrollTrigger: { trigger: '#sd-industries', start: 'top 80%' },
            opacity: 0,
            y: 24,
            duration: 0.7,
            ease: 'power3.out',
        });

        gsap.from('#sd-industries .wd-choose-card', {
            scrollTrigger: { trigger: '#sd-industries .wd-choose-grid', start: 'top 80%' },
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power3.out',
        });

        gsap.from('#sd-growth-cta .wd-gradient-banner', {
            scrollTrigger: { trigger: '#sd-growth-cta', start: 'top 80%' },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#sd-faq .wd-faq-item', {
            scrollTrigger: { trigger: '#sd-faq', start: 'top 75%' },
            opacity: 0,
            y: 24,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
        });

        gsap.from('#sd-contact-cta .wd-cta-content', {
            scrollTrigger: { trigger: '#sd-contact-cta', start: 'top 75%' },
            opacity: 0,
            y: 24,
            duration: 0.75,
            ease: 'power3.out',
        });

        gsap.from('#sd-contact-cta .wd-cta-visual', {
            scrollTrigger: { trigger: '#sd-contact-cta', start: 'top 75%' },
            opacity: 0,
            x: 45,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });
    }

    const faqItems = document.querySelectorAll('#sd-faq .wd-faq-item');
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
