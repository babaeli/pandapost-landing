// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Sticky Navigation Scroll Effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
const sections = document.querySelectorAll('.feature-card, .benefit-card, .solution-card, .workflow-step');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Track CTA clicks (can be connected to analytics)
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();
        const buttonHref = button.getAttribute('href');
        
        // Log CTA interaction (replace with actual analytics code)
        console.log('CTA Click:', {
            text: buttonText,
            href: buttonHref,
            timestamp: new Date().toISOString()
        });
        
        // You can add Google Analytics, Mixpanel, or other tracking here
        // Example: gtag('event', 'cta_click', { button_text: buttonText });
    });
});

// Parallax effect for hero mascot (subtle)
const heroMascot = document.querySelector('.hero-mascot');
if (heroMascot) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3;
        
        if (scrolled < 800) { // Only apply in hero section
            heroMascot.style.transform = `translate(-50%, calc(-50% + ${scrolled * parallaxSpeed}px))`;
        }
    });
}

// Form validation helper (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Accessibility: Focus management
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.focus();
    }
});

// Add keyboard navigation for mobile menu toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        }
    });
}

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers if needed
const debouncedScroll = debounce(() => {
    // Additional scroll logic can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Log page load for analytics
window.addEventListener('load', () => {
    console.log('PandaPost Landing Page Loaded', {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        }
    });
});


// Demo Modal Functionality
const demoModal = document.getElementById('demoModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const demoForm = document.getElementById('demoForm');
const formSuccess = document.getElementById('formSuccess');
const closeSuccess = document.getElementById('closeSuccess');

// Get all "Book a Demo" buttons
const demoButtons = document.querySelectorAll('a[href="/demo"]');

// Open modal when any "Book a Demo" button is clicked
demoButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

// Open modal function
function openModal() {
    demoModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal function
function closeModal() {
    demoModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Reset form after a delay
    setTimeout(() => {
        demoForm.reset();
        demoForm.style.display = 'flex';
        formSuccess.style.display = 'none';
    }, 300);
}

// Close modal on overlay click
modalOverlay.addEventListener('click', closeModal);

// Close modal on X button click
modalClose.addEventListener('click', closeModal);

// Close modal on success button click
if (closeSuccess) {
    closeSuccess.addEventListener('click', closeModal);
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal.classList.contains('active')) {
        closeModal();
    }
});

// Handle form submission
demoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = demoForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        const formData = new FormData(demoForm);
        const response = await fetch(demoForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            demoForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Log success for analytics
            console.log('Demo request submitted successfully', {
                email: formData.get('email'),
                timestamp: new Date().toISOString()
            });
            
            // Optional: Send to Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'demo_request', {
                    method: 'form_submission'
                });
            }
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        alert('Oops! There was a problem submitting your request. Please try again or email us directly at flynnduerrel@gmail.com');
        console.error('Form submission error:', error);
    } finally {
        // Restore button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Check if redirected back after successful submission
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
    openModal();
    demoForm.style.display = 'none';
    formSuccess.style.display = 'block';
    
    // Clean up URL
    window.history.replaceState({}, document.title, window.location.pathname);
}

// Form field validation feedback
const formInputs = document.querySelectorAll('.demo-form input, .demo-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#EF4444';
        } else if (input.value.trim()) {
            input.style.borderColor = '#10B981';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#FF4B3E';
    });
});
