document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.from('.ma-hero .hero-content', {
            scrollTrigger: { trigger: '.ma-hero', start: 'top 85%' },
            opacity: 0,
            x: -45,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('.ma-hero .hero-image-wrapper', {
            scrollTrigger: { trigger: '.ma-hero', start: 'top 85%' },
            opacity: 0,
            x: 45,
            duration: 0.8,
            delay: 0.12,
            ease: 'power3.out',
        });

        gsap.from('#ma-what .wd-what-image', {
            scrollTrigger: { trigger: '#ma-what', start: 'top 78%' },
            opacity: 0,
            x: -42,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#ma-what .wd-what-content', {
            scrollTrigger: { trigger: '#ma-what', start: 'top 78%' },
            opacity: 0,
            x: 42,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#ma-services .wd-services-header', {
            scrollTrigger: { trigger: '#ma-services', start: 'top 80%' },
            opacity: 0,
            y: 26,
            duration: 0.7,
            ease: 'power3.out',
        });

        gsap.from('#ma-services .wd-service-card', {
            scrollTrigger: { trigger: '#ma-services .wd-services-grid', start: 'top 80%' },
            opacity: 0,
            y: 22,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
        });

        gsap.from('#ma-technologies .wd-features-content', {
            scrollTrigger: { trigger: '#ma-technologies', start: 'top 78%' },
            opacity: 0,
            x: -42,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#ma-technologies .ma-tech-visual', {
            scrollTrigger: { trigger: '#ma-technologies', start: 'top 78%' },
            opacity: 0,
            x: 42,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#ma-technologies .ma-tech-list li', {
            scrollTrigger: { trigger: '#ma-technologies .ma-tech-list', start: 'top 82%' },
            opacity: 0,
            x: -18,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power3.out',
        });

        gsap.from('#ma-technologies .ma-tech-logo-card', {
            scrollTrigger: { trigger: '#ma-technologies .ma-tech-logos', start: 'top 82%' },
            opacity: 0,
            y: 18,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power3.out',
        });

        gsap.from('#ma-features .wd-choose-header', {
            scrollTrigger: { trigger: '#ma-features', start: 'top 80%' },
            opacity: 0,
            y: 24,
            duration: 0.7,
            ease: 'power3.out',
        });

        gsap.from('#ma-features .wd-choose-card', {
            scrollTrigger: { trigger: '#ma-features .wd-choose-grid', start: 'top 80%' },
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.07,
            ease: 'power3.out',
        });

        gsap.from('#ma-best .wd-best-image', {
            scrollTrigger: { trigger: '#ma-best', start: 'top 78%' },
            opacity: 0,
            x: -42,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#ma-best .wd-best-content', {
            scrollTrigger: { trigger: '#ma-best', start: 'top 78%' },
            opacity: 0,
            x: 42,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#ma-android .wd-benefits-content', {
            scrollTrigger: { trigger: '#ma-android', start: 'top 78%' },
            opacity: 0,
            x: -42,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#ma-android .wd-benefits-image', {
            scrollTrigger: { trigger: '#ma-android', start: 'top 78%' },
            opacity: 0,
            x: 42,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#ma-android .wd-benefits-list li', {
            scrollTrigger: { trigger: '#ma-android .wd-benefits-list', start: 'top 82%' },
            opacity: 0,
            x: -20,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power3.out',
        });

        gsap.from('#ma-custom .wd-features-content', {
            scrollTrigger: { trigger: '#ma-custom', start: 'top 78%' },
            opacity: 0,
            x: -42,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#ma-custom .wd-features-image', {
            scrollTrigger: { trigger: '#ma-custom', start: 'top 78%' },
            opacity: 0,
            x: 42,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });

        gsap.from('#ma-custom .wd-ecom-list li', {
            scrollTrigger: { trigger: '#ma-custom .wd-ecom-list', start: 'top 82%' },
            opacity: 0,
            x: -20,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power3.out',
        });

        gsap.from('#ma-growth-cta .wd-gradient-banner', {
            scrollTrigger: { trigger: '#ma-growth-cta', start: 'top 80%' },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.from('#ma-faq .wd-faq-item', {
            scrollTrigger: { trigger: '#ma-faq', start: 'top 75%' },
            opacity: 0,
            y: 24,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
        });

        gsap.from('#ma-contact-cta .wd-cta-content', {
            scrollTrigger: { trigger: '#ma-contact-cta', start: 'top 75%' },
            opacity: 0,
            y: 24,
            duration: 0.75,
            ease: 'power3.out',
        });

        gsap.from('#ma-contact-cta .wd-cta-visual', {
            scrollTrigger: { trigger: '#ma-contact-cta', start: 'top 75%' },
            opacity: 0,
            x: 45,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
        });
    }

    const faqItems = document.querySelectorAll('#ma-faq .wd-faq-item');
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
