document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Password form submission
    const passwordForm = document.getElementById('docPasswordForm');
    const passwordInput = document.getElementById('docPassword');
    const errorElement = document.getElementById('docError');
    const contentArea = document.getElementById('documentsContent');

    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = passwordInput.value.trim();
            
            if (password === 'yabesh@2082') {
                errorElement.textContent = '';
                passwordForm.style.display = 'none';
                
                // Display actual documents content
                contentArea.style.display = 'block';
                contentArea.innerHTML = `
                    <div class="documents-list">
                        <h3>Academic Documents</h3>
                        <ul>
                            <li>
                                <strong>SEE Certificate</strong>
                                <p>Year: 2078 | School: Janajyoti P.D.M Secondary School</p>
                            </li>
                            <li>
                                <strong>BLE Certificate</strong>
                                <p>Year: 2077 | School: Somang Jib Academy</p>
                            </li>
                            <li>
                                <strong>Current Academic Records</strong>
                                <p>Grade 12 | Kathmandu Model Secondary School</p>
                            </li>
                        </ul>
                        <div class="access-note">* Original documents available upon verification *</div>
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
