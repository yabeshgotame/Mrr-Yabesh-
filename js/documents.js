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
                    <div class="documents-details">
                        <h2>Academic Documents</h2>
                        <div class="doc-section">
                            <h3><i class="fas fa-certificate"></i> Certificates</h3>
                            <ul>
                                <li>SEE Certificate - Janajyoti P.D.M Secondary School (2078)</li>
                                <li>BLE Certificate - Somang Jib Academy (2077)</li>
                            </ul>
                        </div>
                        <div class="doc-section">
                            <h3><i class="fas fa-file-alt"></i> Current Records</h3>
                            <ul>
                                <li>Grade 12 Academic Transcript - Kathmandu Model Secondary School</li>
                                <li>Character Certificate - Kathmandu Model Secondary School</li>
                            </ul>
                        </div>
                        <div class="doc-section">
                            <h3><i class="fas fa-award"></i> Achievements</h3>
                            <ul>
                                <li>Academic Excellence Award (2077)</li>
                                <li>Best Content Writer Award (School Level, 2078)</li>
                            </ul>
                        </div>
                        <div class="access-note">
                            <i class="fas fa-lock"></i>
                            <p>Original documents available upon verification</p>
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
