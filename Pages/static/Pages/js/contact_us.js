/**
 * Contact Us Page — DreamSoft
 * Form validation, open/closed status, and GSAP scroll animations
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── Open / Closed Status Badge ─── */
    const statusBadge = document.getElementById('cu-status-badge');
    if (statusBadge) {
        const updateStatus = () => {
            const now = new Date();
            // Bangladesh timezone offset: UTC+6
            const bdOffset = 6 * 60;
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const bdTime = new Date(utc + bdOffset * 60000);

            const day = bdTime.getDay(); // 0=Sun, 6=Sat
            const hour = bdTime.getHours();
            const minute = bdTime.getMinutes();
            const currentMinutes = hour * 60 + minute;

            // Open: Saturday(6) through Thursday(4), 9:00 - 18:00
            // Closed: Friday(5)
            const isFriday = day === 5;
            const isWorkday = !isFriday; // Sat-Thu
            const isWithinHours = currentMinutes >= 540 && currentMinutes < 1080; // 9AM to 6PM

            const isOpen = isWorkday && isWithinHours;

            if (isOpen) {
                statusBadge.className = 'cu-info-badge cu-badge-open';
                statusBadge.innerHTML = '<span class="cu-status-dot"></span> Open Now';
            } else {
                statusBadge.className = 'cu-info-badge cu-badge-closed';
                statusBadge.innerHTML = '<span class="cu-status-dot"></span> Closed';
            }
        };

        updateStatus();
        setInterval(updateStatus, 60000); // Update every minute
    }

    /* ─── Contact Form Handling ─── */
    const form = document.getElementById('cu-contact-form');
    const successEl = document.getElementById('cu-success');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous errors
            form.querySelectorAll('.cu-error').forEach((el) => el.classList.remove('cu-error'));

            let isValid = true;

            // Validate required fields
            const name = form.querySelector('#cu-name');
            const email = form.querySelector('#cu-email');
            const subject = form.querySelector('#cu-subject');
            const message = form.querySelector('#cu-message');

            if (!name.value.trim()) {
                name.classList.add('cu-error');
                isValid = false;
            }

            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.classList.add('cu-error');
                isValid = false;
            }

            if (!subject.value) {
                subject.classList.add('cu-error');
                isValid = false;
            }

            if (!message.value.trim()) {
                message.classList.add('cu-error');
                isValid = false;
            }

            if (!isValid) {
                // Shake the first error field
                const firstError = form.querySelector('.cu-error');
                if (firstError) {
                    firstError.focus();
                    firstError.style.animation = 'none';
                    requestAnimationFrame(() => {
                        firstError.style.animation = 'cu-shake 0.5s ease';
                    });
                }
                return;
            }

            // Simulate form submission
            const submitBtn = document.getElementById('cu-submit');
            const submitText = submitBtn.querySelector('.cu-submit-text');
            const originalText = submitText.textContent;

            submitText.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                // Show success
                form.style.display = 'none';
                if (successEl) successEl.style.display = 'block';

                // Reset form
                form.reset();
                submitText.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';

                // Auto-reset after 5s
                setTimeout(() => {
                    if (successEl) successEl.style.display = 'none';
                    form.style.display = 'flex';
                }, 5000);
            }, 1500);
        });

        // Remove error state on input
        form.querySelectorAll('.cu-input').forEach((input) => {
            input.addEventListener('input', () => {
                input.classList.remove('cu-error');
            });
            input.addEventListener('change', () => {
                input.classList.remove('cu-error');
            });
        });
    }

    /* ─── GSAP Scroll Animations ─── */

    // Hero
    gsap.from('.cu-hero-inner', {
        scrollTrigger: { trigger: '.cu-hero', start: 'top 85%' },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
    });

    // Info cards
    gsap.from('.cu-info-card', {
        scrollTrigger: { trigger: '.cu-info-grid', start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // Form section
    gsap.from('.cu-form-wrapper', {
        scrollTrigger: { trigger: '.cu-main-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.cu-sidebar', {
        scrollTrigger: { trigger: '.cu-main-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // Why cards
    gsap.from('.cu-why-header', {
        scrollTrigger: { trigger: '.cu-why-section', start: 'top 75%' },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.cu-why-card', {
        scrollTrigger: { trigger: '.cu-why-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // Full map
    gsap.from('.cu-fullmap-header', {
        scrollTrigger: { trigger: '.cu-fullmap-section', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    // CTA
    gsap.from('.cu-cta-content', {
        scrollTrigger: { trigger: '.cu-cta-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.cu-cta-visual', {
        scrollTrigger: { trigger: '.cu-cta-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });
});

/* CSS animation for shake (injected via JS) */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes cu-shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-6px); }
        40% { transform: translateX(6px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(4px); }
    }
`;
document.head.appendChild(shakeStyle);
