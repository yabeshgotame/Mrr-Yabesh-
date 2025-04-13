document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Password form submission
    const passwordForm = document.getElementById('bioPasswordForm');
    const passwordInput = document.getElementById('bioPassword');
    const errorElement = document.getElementById('bioError');
    const contentArea = document.getElementById('biographyContent');

    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = passwordInput.value.trim();
            
            if (password === 'yabesh@2082') {
                errorElement.textContent = '';
                passwordForm.style.display = 'none';
                
                // Display actual biography content
                contentArea.style.display = 'block';
                contentArea.innerHTML = `
                    <div class="biography-details">
                        <h3>Ganesh Gotame</h3>
                        <p><strong>Date of Birth:</strong> <span class="blur">2007/09/08</span></p>
                        <p><strong>Education:</strong> Currently studying in Grade 12 at Kathmandu Model Secondary School</p>
                        <p><strong>Skills:</strong> Video Editing, Content Writing (Nepali & English)</p>
                        <div class="access-note">* Detailed information available upon request *</div>
                    </div>
                `;
            } else {
                errorElement.textContent = '✗ Incorrect password. Please try again.';
                passwordInput.value = '';
                passwordInput.focus();
            }
        });
    }
});
