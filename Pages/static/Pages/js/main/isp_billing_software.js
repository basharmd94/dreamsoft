(function () {
    'use strict';

    // ✅ Guard: Wait for GSAP + ScrollTrigger to be fully loaded
    function waitForGsap(callback) {
        if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
            callback();
        } else {
            // Fallback: retry after short delay (handles edge cases with defer timing)
            setTimeout(() => waitForGsap(callback), 50);
        }
    }

    function initHeroAnimations() {
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.gsap.from('.ibp-hero .hero-content', {
            scrollTrigger: { trigger: '.ibp-hero', start: 'top 85%', once: true },
            opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
        });

        window.gsap.from('.ibp-hero .hero-image-wrapper', {
            scrollTrigger: { trigger: '.ibp-hero', start: 'top 85%', once: true },
            opacity: 0, x: 50, duration: 0.8, delay: 0.2, ease: 'power3.out',
        });
    }

    function initInfoSectionAnimations() {
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.gsap.from('.ibp-info-content .section-heading', {
            scrollTrigger: { trigger: '.ibp-info-section', start: 'top 75%', once: true },
            opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        });

        window.gsap.from('.ibp-info-text', {
            scrollTrigger: { trigger: '.ibp-info-section', start: 'top 70%', once: true },
            opacity: 0, x: -40, duration: 0.7, ease: 'power3.out',
        });

        window.gsap.from('.ibp-info-image', {
            scrollTrigger: { trigger: '.ibp-info-section', start: 'top 70%', once: true },
            opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
        });

        window.gsap.from('.ibp-check-list li', {
            scrollTrigger: { trigger: '.ibp-check-list', start: 'top 80%', once: true },
            opacity: 0, x: -20, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        });
    }

    function initFeaturesAnimations() {
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.gsap.from('.ibp-features-header', {
            scrollTrigger: { trigger: '.ibp-features-section', start: 'top 75%', once: true },
            opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        });

        window.gsap.from('.ibp-feature-card', {
            scrollTrigger: { trigger: '.ibp-features-grid', start: 'top 80%', once: true },
            opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: 'power3.out',
        });
    }

    function initTrustSectionAnimations() {
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.gsap.from('.ibp-trust-header', {
            scrollTrigger: { trigger: '.ibp-trust-section', start: 'top 75%', once: true },
            opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
        });

        window.gsap.from('.ibp-trust-item', {
            scrollTrigger: { trigger: '.ibp-trust-grid', start: 'top 80%', once: true },
            opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        });
    }

    function initSystemSectionAnimations() {
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.gsap.from('.ibp-system-content', {
            scrollTrigger: { trigger: '.ibp-system-section', start: 'top 75%', once: true },
            opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
        });

        window.gsap.from('.ibp-system-image', {
            scrollTrigger: { trigger: '.ibp-system-section', start: 'top 75%', once: true },
            opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
        });

        window.gsap.from('.ibp-gradient-banner', {
            scrollTrigger: { trigger: '.ibp-banner-section', start: 'top 80%', once: true },
            opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        });
    }

    function initFaqSectionAnimations() {
        // FAQ accordion logic runs regardless of motion preference
        const faqItems = document.querySelectorAll('.ibp-faq-item');
        
        faqItems.forEach((item) => {
            const question = item.querySelector('.ibp-faq-question');
            const answer = item.querySelector('.ibp-faq-answer');
            if (!question || !answer) return;

            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');
                
                // Close all items
                faqItems.forEach((other) => {
                    other.classList.remove('is-open');
                    const otherQuestion = other.querySelector('.ibp-faq-question');
                    const otherAnswer = other.querySelector('.ibp-faq-answer');
                    if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                    if (otherAnswer) otherAnswer.style.maxHeight = '';
                });

                if (isOpen) return;

                // Open clicked item
                item.classList.add('is-open');
                question.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            });
        });

        // Open first item by default
        if (faqItems.length) {
            const firstItem = faqItems[0];
            const firstQuestion = firstItem.querySelector('.ibp-faq-question');
            const firstAnswer = firstItem.querySelector('.ibp-faq-answer');
            firstItem.classList.add('is-open');
            if (firstQuestion) firstQuestion.setAttribute('aria-expanded', 'true');
            if (firstAnswer) firstAnswer.style.maxHeight = `${firstAnswer.scrollHeight}px`;
        }

        // GSAP reveal animation (respects reduced motion)
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.gsap.from('.ibp-faq-item', {
            scrollTrigger: { trigger: '.ibp-faq-section', start: 'top 75%', once: true },
            opacity: 0, y: 24, duration: 0.55, stagger: 0.08, ease: 'power3.out',
        });
    }

    function initCtaAnimations() {
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.gsap.from('.ibp-cta-content', {
            scrollTrigger: { trigger: '.ibp-cta-section', start: 'top 75%', once: true },
            opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
        });

        window.gsap.from('.ibp-cta-visual', {
            scrollTrigger: { trigger: '.ibp-cta-section', start: 'top 75%', once: true },
            opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
        });
    }

    // ✅ Main init: Run after DOM is ready AND GSAP is loaded
    function initIsp() {
        // Register ScrollTrigger plugin once (idempotent, but centralized for clarity)
        if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
            window.gsap.registerPlugin(window.ScrollTrigger);
        }

        initHeroAnimations();
        initInfoSectionAnimations();
        initFeaturesAnimations();
        initTrustSectionAnimations();
        initSystemSectionAnimations();
        initFaqSectionAnimations();
        initCtaAnimations();

        // Refresh ScrollTrigger after page load (images/fonts ready)
        window.addEventListener('load', () => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        });
    }

    // Primary: DOMContentLoaded (fires after deferred scripts execute)
    document.addEventListener('DOMContentLoaded', function () {
        waitForGsap(initIsp);
    });

    // Fallback: If DOMContentLoaded already fired (edge case), run immediately
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        waitForGsap(initIsp);
    }
})();