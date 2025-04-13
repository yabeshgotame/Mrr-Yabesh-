document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const passwordForm = document.getElementById('passwordSection');
    const contentArea = document.getElementById('biographyContent');
    const passwordInput = document.getElementById('bioPassword');
    const submitBtn = document.getElementById('bioSubmitBtn');
    const errorElement = document.getElementById('bioError');
    const unlockAnimation = document.getElementById('unlockAnimation');
    const progressBar = document.querySelector('.progress');

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Password submission
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const password = passwordInput.value.trim();
        
        if (password === 'yabesh@2082') {
            errorElement.textContent = '';
            
            // Show unlock animation
            unlockAnimation.classList.add('active');
            progressBar.style.width = '100%';
            
            // After animation completes
            setTimeout(() => {
                unlockAnimation.classList.remove('active');
                
                // Hide password form
                passwordForm.style.opacity = '0';
                passwordForm.style.transform = 'translateY(-20px)';
                
                // Load and show content
                contentArea.innerHTML = `
                    <div class="biography-details">
                        <h2>Ganesh Gotame</h2>
                        <div class="bio-section">
                            <h3><i class="fas fa-user-graduate"></i> Education</h3>
                            <ul>
                                <li>Grade 12 - Kathmandu Model Secondary School (Current)</li>
                                <li>SEE - Janajyoti P.D.M Secondary School (2078)</li>
                                <li>BLE - Somang Jib Academy (2077)</li>
                            </ul>
                        </div>
                        <div class="bio-section">
                            <h3><i class="fas fa-cogs"></i> Skills</h3>
                            <ul>
                                <li>Professional Video Editing</li>
                                <li>Content Writing (Nepali & English)</li>
                            </ul>
                        </div>
                        <div class="bio-section">
                            <h3><i class="fas fa-birthday-cake"></i> Personal</h3>
                            <p>Date of Birth: <span class="blur">2007/09/08</span></p>
                        </div>
                    </div>
                `;
                
                // Show content with animation
                setTimeout(() => {
                    passwordForm.style.display = 'none';
                    contentArea.classList.add('show');
                }, 300);
                
            }, 2000);
        } else {
            errorElement.textContent = '✗ Incorrect password. Please try again.';
            passwordInput.value = '';
            passwordInput.focus();
            
            // Shake animation for wrong password
            passwordForm.style.animation = 'shake 0.5s';
            setTimeout(() => {
                passwordForm.style.animation = '';
            }, 500);
        }
    });
});
