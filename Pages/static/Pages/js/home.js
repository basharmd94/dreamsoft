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

    function initSectionEntrances() {
        // Safety check (redundant but safe)
        if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
            return;
        }

        window.gsap.registerPlugin(window.ScrollTrigger);

        // Respect user preference for reduced motion
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const sections = window.gsap.utils.toArray('main section');
        sections.forEach((section) => {
            window.gsap.fromTo(
                section,
                { autoAlpha: 0, y: 40 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        once: true,
                    },
                },
            );
        });

        // Refresh ScrollTrigger after page load (images/fonts ready)
        window.addEventListener('load', () => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        });
    }

    function initLogoScroller() {
        if (typeof window.gsap === 'undefined') {
            return;
        }

        const scrollers = document.querySelectorAll('.scroller');
        scrollers.forEach((scroller) => {
            const scrollerInner = scroller.querySelector('.scroller__inner');
            if (!scrollerInner) return;
            if (scrollerInner.dataset.cloned === 'true') return;

            const items = Array.from(scrollerInner.children);
            if (!items.length) return;

            // Clone items for infinite scroll effect
            items.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (duplicatedItem instanceof HTMLElement) {
                    duplicatedItem.setAttribute('aria-hidden', 'true');
                }
                scrollerInner.appendChild(duplicatedItem);
            });

            scrollerInner.dataset.cloned = 'true';

            const speed = scroller.dataset.speed;
            const duration = speed === 'fast' ? 20 : speed === 'slow' ? 40 : 30;
            const totalWidth = scrollerInner.scrollWidth / 2;
            if (!totalWidth) return;

            window.gsap.set(scrollerInner, { x: 0 });
            window.gsap.to(scrollerInner, {
                x: -totalWidth,
                duration,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: window.gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
                },
            });
        });
    }

    function initTestimonialsCarousel() {
        const carousel = document.querySelector('[data-testimonials-carousel]');
        if (!carousel) return;

        const track = carousel.querySelector('[data-testimonials-track]');
        const root = carousel.closest('.testimonials-section') || carousel.parentElement || document;
        const dotsContainer = root.querySelector('[data-testimonials-dots]');
        const prevButton = root.querySelector('[data-testimonials-prev]');
        const nextButton = root.querySelector('[data-testimonials-next]');

        if (!track || !dotsContainer) return;

        const cards = Array.from(track.children).filter((el) => el instanceof HTMLElement);
        if (!cards.length) return;

        let currentIndex = 0;
        let dotButtons = [];

        function getTranslateXForIndex(index) {
            const card = cards[index];
            if (!card) return 0;
            const trackStyle = window.getComputedStyle(track);
            const paddingLeft = parseFloat(trackStyle.paddingLeft || '0') || 0;
            return -(card.offsetLeft - paddingLeft);
        }

        function renderDots() {
            dotsContainer.innerHTML = '';
            dotButtons = [];

            cards.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'testimonial-dot';
                dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
                dot.addEventListener('click', () => goTo(i));
                dotsContainer.appendChild(dot);
                dotButtons.push(dot);
            });
        }

        function updateControls() {
            dotButtons.forEach((btn, i) => {
                btn.classList.toggle('is-active', i === currentIndex);
                btn.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
            });

            if (prevButton instanceof HTMLButtonElement) {
                prevButton.disabled = currentIndex <= 0;
            }
            if (nextButton instanceof HTMLButtonElement) {
                nextButton.disabled = currentIndex >= cards.length - 1;
            }
        }

        function goTo(index, animate = true) {
            const clamped = Math.max(0, Math.min(index, cards.length - 1));
            currentIndex = clamped;
            const x = getTranslateXForIndex(currentIndex);

            if (typeof window.gsap !== 'undefined' && animate) {
                window.gsap.to(track, { x, duration: 0.6, ease: 'power3.out' });
            } else {
                track.style.transform = `translateX(${x}px)`;
            }
            updateControls();
        }

        function rebuild() {
            renderDots();
            goTo(currentIndex, false);
        }

        // Initialize
        renderDots();
        goTo(0, false);

        // Event listeners
        if (prevButton) {
            prevButton.addEventListener('click', () => goTo(currentIndex - 1));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => goTo(currentIndex + 1));
        }
        window.addEventListener('resize', () => {
            // Debounce resize for performance
            clearTimeout(window.__testimonialsResizeTimeout);
            window.__testimonialsResizeTimeout = setTimeout(rebuild, 150);
        });
    }

    // ✅ Main init: Run after DOM is ready AND GSAP is loaded
    function initHome() {
        initSectionEntrances();
        initLogoScroller();
        initTestimonialsCarousel();
    }

    // Primary: DOMContentLoaded (fires after deferred scripts execute)
    document.addEventListener('DOMContentLoaded', function() {
        waitForGsap(initHome);
    });

    // Fallback: If DOMContentLoaded already fired (edge case), run immediately
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        waitForGsap(initHome);
    }
})();