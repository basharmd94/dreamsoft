document.addEventListener('DOMContentLoaded', () => {
    // Ensure GSAP is loaded
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Animate Hero Content (Text side only)
        // Staggering the title, description, and action buttons
        tl.from('.hero-content > *', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            delay: 0.1,
            clearProps: 'all' // Clear properties after animation for clean state
        });

        // Overview Section Entrance Animation
        // Check if ScrollTrigger is available, otherwise just animate on load with delay
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from('.fs-section-overview .container > *', {
                scrollTrigger: {
                    trigger: '.fs-section-overview',
                    start: 'top 80%', // Start when top of section hits 80% of viewport height
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            });

            // Why Choose Section Animation
            // Text Content Animation
            gsap.from('.fs-why-choose-content > *', {
                scrollTrigger: {
                    trigger: '.fs-section-why-choose',
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            });

            // Image Isometric/Placement Animation
            // Starts from top (y: -100px), slightly scaled up, and settles into place as you scroll
            gsap.fromTo('.fs-dashboard-img', 
                { 
                    y: -150, 
                    opacity: 0,
                    scale: 1.1,
                    rotationX: 10, // Slight 3D tilt for effect
                    transformPerspective: 1000
                },
                {
                    scrollTrigger: {
                        trigger: '.fs-section-why-choose',
                        start: 'top 80%',
                        end: 'center center',
                        scrub: 1, // Smooth scrubbing effect linked to scroll
                    },
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotationX: 0,
                    ease: 'power2.out'
                }
            );

            // Stock Tracking Section - Apple Style Scroll Animation
            // Only on desktop (min-width: 992px)
            ScrollTrigger.matchMedia({
                "(min-width: 992px)": function() {
                    const stockTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".fs-section-stock-tracking",
                            start: "top center", // Start earlier when section is in view
                            end: "+=500", // Duration of the entrance effect
                            scrub: 1, // Smooth scrubbing
                            pin: false, // Don't pin the whole section, rely on sticky CSS
                        }
                    });

                    // Initial state set via fromTo
                    // Move image from center (approx) to right (where it is natively)
                    // Text fades in
                    stockTl.fromTo(".fs-stock-image", 
                        { 
                            xPercent: -60, // Move left towards center
                            scale: 1.2, // Start larger
                            transformOrigin: "center top"
                        },
                        {
                            xPercent: 0,
                            scale: 1,
                            ease: "power2.inOut",
                            duration: 1
                        }
                    )
                    .fromTo(".fs-stock-text", 
                        { 
                            autoAlpha: 0, 
                            x: -30 
                        },
                        { 
                            autoAlpha: 1, 
                            x: 0, 
                            ease: "power2.out",
                            duration: 0.8
                        }, 
                        "<+=0.1" 
                    );
                }
            });
        } else {
            // Fallback if ScrollTrigger isn't loaded: simple IntersectionObserver or delayed animation
            // Assuming for now we might want to add ScrollTrigger or just rely on simple delayed animation if visible
            // But let's just add a simple delayed animation for now to be safe if it's near the top, 
            // or we can use a basic IntersectionObserver here.
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(entry.target.querySelectorAll('.container > *'), 
                            { y: 50, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, overwrite: 'auto' }
                        );
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            const overviewSection = document.querySelector('.fs-section-overview');
            if (overviewSection) {
                observer.observe(overviewSection);
            }
        }
    } else {
        console.error('GSAP not found');
    }
});
