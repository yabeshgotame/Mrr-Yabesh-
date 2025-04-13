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
