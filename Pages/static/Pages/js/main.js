const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

if (typeof lenis !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof lenis.on === 'function') {
    lenis.on('scroll', ScrollTrigger.update);
}

document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButtons = document.querySelectorAll('[data-scroll-top]');
    scrollTopButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    const navToggle = document.querySelector('[data-nav-toggle]');
    const navMenu = document.querySelector('[data-nav-menu]');

    if (!(navToggle instanceof HTMLElement) || !(navMenu instanceof HTMLElement)) {
        return;
    }

    const setMenuState = (isOpen) => {
        navMenu.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    };

    const toggleMenu = () => {
        setMenuState(!navMenu.classList.contains('is-open'));
    };

    navToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    navMenu.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }

        const link = target.closest('a');
        if (link) {
            // Check if this specific link is a dropdown toggle
            // It should be the direct child of .has-dropdown
            const isDropdownToggle = link.parentElement.classList.contains('has-dropdown');

            if (isDropdownToggle) {
                const dropdown = link.parentElement.querySelector('.dropdown-menu');
                if (dropdown) {
                    event.preventDefault();
                    event.stopPropagation();

                    // Close other dropdowns
                    document.querySelectorAll('.dropdown-menu.is-expanded').forEach(menu => {
                        if (menu !== dropdown) {
                            menu.classList.remove('is-expanded');
                            const otherParent = menu.closest('.has-dropdown');
                            const otherArrow = otherParent?.querySelector('.arrow-down');
                            if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
                        }
                    });

                    dropdown.classList.toggle('is-expanded');
                    const arrow = link.querySelector('.arrow-down');
                    if (arrow) {
                        const isOpen = dropdown.classList.contains('is-expanded');
                        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
                    }
                    return;
                }
            }
            
            // Only close menu if it's a regular link (not a dropdown toggle)
            setMenuState(false);
        }
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Node)) {
            return;
        }

        // Close dropdowns if clicked outside
        if (!target.closest('.has-dropdown')) {
            document.querySelectorAll('.dropdown-menu.is-expanded').forEach(menu => {
                menu.classList.remove('is-expanded');
                const parent = menu.closest('.has-dropdown');
                const arrow = parent?.querySelector('.arrow-down');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            });
        }

        if (!navMenu.classList.contains('is-open')) {
            return;
        }

        if (navMenu.contains(target) || navToggle.contains(target)) {
            return;
        }

        setMenuState(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false);
        }
    });

    const breakpointQuery = window.matchMedia('(max-width: 992px)');

    const handleBreakpointChange = () => {
        if (!breakpointQuery.matches) {
            setMenuState(false);
        }
    };

    if (typeof breakpointQuery.addEventListener === 'function') {
        breakpointQuery.addEventListener('change', handleBreakpointChange);
    } else {
        window.addEventListener('resize', handleBreakpointChange);
    }

    handleBreakpointChange();
});
