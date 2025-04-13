document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
    
    // New Year Popup
    const newYearPopup = document.getElementById('newYearPopup');
    const closeBtn = document.querySelector('.close-btn');
    
    // Show popup on page load
    setTimeout(() => {
        newYearPopup.classList.add('active');
        
        // Create fireworks
        const fireworks = document.querySelectorAll('.firework');
        fireworks.forEach(firework => {
            const tx = (Math.random() - 0.5) * 200;
            const ty = (Math.random() - 0.5) * 200;
            firework.style.setProperty('--tx', `${tx}px`);
            firework.style.setProperty('--ty', `${ty}px`);
        });
    }, 1000);
    
    // Close popup when clicking close button
    closeBtn.addEventListener('click', function() {
        newYearPopup.classList.remove('active');
    });
    
    // Close popup when clicking outside content
    newYearPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    // Remove New Year Popup completely (for later use)
    function removeNewYearPopup() {
        const popup = document.getElementById('newYearPopup');
        if (popup) {
            popup.remove();
        }
    }
    
    // Expose the function to window for later use
    window.removeNewYearPopup = removeNewYearPopup;
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
// Add this to the DOMContentLoaded event in script.js

// Create particle background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    const particleCount = window.innerWidth < 768 ? 30 : 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * window.innerWidth;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * -20;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.bottom = '0';
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
}

// Smooth scroll to sections with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize effects
createParticles();
// Add this at the beginning of script.js
document.body.insertAdjacentHTML('afterbegin', `
    <div class="loader">
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <h3>Loading Portfolio</h3>
        </div>
    </div>
`);

window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').classList.add('hidden');
    }, 1000);
});

