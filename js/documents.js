// IDENTICAL STRUCTURE TO biography.js
document.addEventListener('DOMContentLoaded', function() {
    // Same elements selection
    const passwordForm = document.getElementById('passwordSection');
    const contentArea = document.getElementById('documentsContent');
    const passwordInput = document.getElementById('docPassword');
    const submitBtn = document.getElementById('docSubmitBtn');
    const errorElement = document.getElementById('docError');
    const unlockAnimation = document.getElementById('unlockAnimation');
    const progressBar = document.querySelector('.progress');

    // Same mobile menu
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Same password handling
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const password = passwordInput.value.trim();
        
        if (password === 'yabesh@2082') {
            errorElement.textContent = '';
            unlockAnimation.classList.add('active');
            progressBar.style.width = '100%';
            
            setTimeout(() => {
                unlockAnimation.classList.remove('active');
                passwordForm.style.opacity = '0';
                passwordForm.style.transform = 'translateY(-20px)';
                
                // Documents content structured EXACTLY like biography
                contentArea.innerHTML = `
                    <div class="documents-details">
                        <h2>Academic Documents</h2>
                        
                        <div class="doc-section">
                            <h3><i class="fas fa-certificate"></i> Certificates</h3>
                            <ul>
                                <li><strong>SEE Certificate</strong> - Janajyoti P.D.M Secondary School (2078)</li>
                                <li><strong>BLE Certificate</strong> - Somang Jib Academy (2077)</li>
                            </ul>
                        </div>
                        
                        <div class="doc-section">
                            <h3><i class="fas fa-school"></i> Current Education</h3>
                            <ul>
                                <li><strong>Grade 12 Transcript</strong> - Kathmandu Model Secondary School</li>
                                <li><strong>Character Certificate</strong> - Kathmandu Model Secondary School</li>
                            </ul>
                        </div>
                        
                        <div class="access-note">
                            <i class="fas fa-lock"></i>
                            <p>Original documents available upon verification</p>
                        </div>
                    </div>
                `;
                
                setTimeout(() => {
                    passwordForm.style.display = 'none';
                    contentArea.classList.add('show');
                }, 300);
                
            }, 2000);
        } else {
            // Same error handling
            errorElement.textContent = '✗ Incorrect password. Please try again.';
            passwordInput.value = '';
            passwordInput.focus();
            passwordForm.style.animation = 'shake 0.5s';
            setTimeout(() => passwordForm.style.animation = '', 500);
        }
    });
});
