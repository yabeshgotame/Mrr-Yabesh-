document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const passwordForm = document.getElementById('passwordSection');
    const contentArea = document.getElementById('documentsContent');
    const passwordInput = document.getElementById('docPassword');
    const submitBtn = document.getElementById('docSubmitBtn');
    const errorElement = document.getElementById('docError');
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
                    <div class="documents-list">
                        <h2>Academic Documents</h2>
                        <div class="document-item">
                            <h3><i class="fas fa-certificate"></i> SEE Certificate</h3>
                            <p>Year: 2078</p>
                            <p>School: Janajyoti P.D.M Secondary School</p>
                            <div class="access-note">* Original available upon request *</div>
                        </div>
                        <div class="document-item">
                            <h3><i class="fas fa-certificate"></i> BLE Certificate</h3>
                            <p>Year: 2077</p>
                            <p>School: Somang Jib Academy</p>
                            <div class="access-note">* Original available upon request *</div>
                        </div>
                        <div class="document-item">
                            <h3><i class="fas fa-file-alt"></i> Current Academic Records</h3>
                            <p>Grade: 12</p>
                            <p>School: Kathmandu Model Secondary School</p>
                            <div class="access-note">* Updated records available *</div>
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
