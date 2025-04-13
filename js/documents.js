document.addEventListener('DOMContentLoaded', function() {
    const passwordForm = document.getElementById('passwordSection');
    const passwordInput = document.getElementById('docPassword');
    const submitBtn = document.getElementById('docSubmitBtn');
    const errorElement = document.getElementById('docError');
    const unlockAnimation = document.getElementById('unlockAnimation');
    const contentArea = document.getElementById('documentsContent');

    // Enhanced input interaction
    passwordInput.addEventListener('focus', function() {
        this.parentNode.style.borderColor = 'var(--primary)';
        this.parentNode.style.boxShadow = '0 0 0 4px rgba(67, 97, 238, 0.1)';
    });

    passwordInput.addEventListener('blur', function() {
        this.parentNode.style.borderColor = '#eee';
        this.parentNode.style.boxShadow = 'none';
    });

    // Form submission with enhanced loading state
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const password = passwordInput.value.trim();
        
        if (!password) {
            errorElement.textContent = 'Please enter your password';
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        errorElement.textContent = '';
        
        // Simulate verification delay
        setTimeout(() => {
            if (password === 'yabesh@2082') {
                // Show unlock animation
                unlockAnimation.style.display = 'flex';
                
                // Hide password form with animation
                passwordForm.style.opacity = '0';
                passwordForm.style.transform = 'translateY(20px)';
                passwordForm.style.pointerEvents = 'none';
                
                // Load content after animation
                setTimeout(() => {
                    unlockAnimation.style.display = 'none';
                    loadDocumentsContent();
                }, 2000);
            } else {
                // Error state
                submitBtn.classList.remove('loading');
                errorElement.textContent = 'Incorrect password. Please try again.';
                passwordForm.style.animation = 'shake 0.5s';
                setTimeout(() => passwordForm.style.animation = '', 500);
            }
        }, 1500);
    });

    function loadDocumentsContent() {
        contentArea.innerHTML = `
            <div class="documents-container">
                <h2 style="background: var(--gradient); -webkit-background-clip: text; 
                    background-clip: text; color: transparent; text-align: center; 
                    margin-bottom: 2.5rem; font-size: 2.2rem;">
                    Academic Documents
                </h2>
                
                <div class="doc-section">
                    <h3><i class="fas fa-certificate" style="color: var(--primary);"></i> Certificates</h3>
                    <ul>
                        <li><strong>SEE Certificate</strong> - Janajyoti P.D.M Secondary School (2078)</li>
                        <li><strong>BLE Certificate</strong> - Somang Jib Academy (2077)</li>
                    </ul>
                </div>
                
                <div class="doc-section">
                    <h3><i class="fas fa-file-alt" style="color: var(--primary);"></i> Current Records</h3>
                    <ul>
                        <li><strong>Grade 12 Transcript</strong> - Kathmandu Model Secondary School</li>
                        <li><strong>Character Certificate</strong> - Kathmandu Model Secondary School</li>
                    </ul>
                </div>
                
                <div class="access-note">
                    <i class="fas fa-lock" style="color: var(--primary);"></i>
                    <p>Original documents available upon verification</p>
                </div>
            </div>
        `;
        
        // Animate content in
        setTimeout(() => {
            contentArea.style.opacity = '1';
            contentArea.style.transform = 'translateY(0)';
        }, 100);
    }
});
