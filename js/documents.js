document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Password form submission
    const docPasswordForm = document.getElementById('docPasswordForm');
    if (docPasswordForm) {
        docPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('docPassword').value;
            const errorElement = document.getElementById('docError');
            
            if (password === 'yabesh@2082') {
                errorElement.textContent = '';
                // Successful login would redirect or show content here
                alert('Authentication successful! Documents would be displayed here.');
            } else {
                errorElement.textContent = 'Incorrect password. Please try again.';
                document.getElementById('docPassword').value = '';
            }
        });
    }
});
