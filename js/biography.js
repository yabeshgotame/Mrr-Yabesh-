document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Password form submission
    const bioPasswordForm = document.getElementById('bioPasswordForm');
    if (bioPasswordForm) {
        bioPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('bioPassword').value;
            const errorElement = document.getElementById('bioError');
            
            if (password === 'yabesh@2082') {
                errorElement.textContent = '';
                // Successful login would redirect or show content here
                alert('Authentication successful! Biography content would be displayed here.');
            } else {
                errorElement.textContent = 'Incorrect password. Please try again.';
                document.getElementById('bioPassword').value = '';
            }
        });
    }
});
