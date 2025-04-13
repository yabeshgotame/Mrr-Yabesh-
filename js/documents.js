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
    
    // Password protection
    const docPasswordForm = document.getElementById('docPasswordForm');
    const docError = document.getElementById('docError');
    const docContent = document.getElementById('documentsContent');
    
    docPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('docPassword').value;
        
        if (password === 'yabesh@2082') {
            docError.textContent = '';
            docContent.style.display = 'block';
            
            // Load documents content
            docContent.innerHTML = `
                <h3>Academic Documents</h3>
                <p>This section contains my academic documents that are accessible only to authorized persons.</p>
                
                <div class="document-item">
                    <h4>SEE Certificate</h4>
                    <p>Year: 2078</p>
                    <p>School: Janajyoti P.D.M Secondary School</p>
                    <div class="access-note">* Available upon request to authorized persons *</div>
                </div>
                
                <div class="document-item">
                    <h4>BLE Certificate</h4>
                    <p>Year: 2077</p>
                    <p>School: Somang Jib Academy</p>
                    <div class="access-note">* Available upon request to authorized persons *</div>
                </div>
                
                <div class="document-item">
                    <h4>Current School Documents</h4>
                    <p>Class: 12</p>
                    <p>School: Kathmandu Model Secondary School, Bagbazar</p>
                    <div class="access-note">* Available upon request to authorized persons *</div>
                </div>
            `;
            
            // Hide password form
            this.style.display = 'none';
        } else {
            docError.textContent = 'Incorrect password. Please try again.';
        }
    });
});
