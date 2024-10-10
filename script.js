// Wait for the DOM to be fully loaded before running our script
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const fadeInElements = document.querySelectorAll('.feature, .step, .stat');

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Add fade-in class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .feature, .step, .stat {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Mobile menu toggle
    const header = document.querySelector('header .container');
    if (header) {
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
        mobileMenuButton.classList.add('mobile-menu-button');
        header.appendChild(mobileMenuButton);

        const nav = document.querySelector('nav');
        if (nav && mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
        }
    }

    // Add mobile menu styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .mobile-menu-button {
                display: block;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }

            nav {
                display: none;
            }

            nav.active {
                display: block;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: #1a1a1a;
                padding: 1rem;
            }

            nav ul {
                flex-direction: column;
            }

            nav ul li {
                margin: 0.5rem 0;
            }
        }
    `;
    document.head.appendChild(mobileStyles);
});