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
    const bioPasswordForm = document.getElementById('bioPasswordForm');
    const bioError = document.getElementById('bioError');
    const bioContent = document.getElementById('biographyContent');
    
    bioPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('bioPassword').value;
        
        if (password === 'yabesh@2082') {
            bioError.textContent = '';
            bioContent.style.display = 'block';
            
            // Load biography content
            bioContent.innerHTML = `
                <h3>My Background</h3>
                <p>I am Ganesh Gotame, a passionate student currently pursuing my higher education at Kathmandu Model Secondary School, Bagbazar in class 12. I was born on September 8, 2007, and have always been enthusiastic about learning new skills.</p>
                
                <h3>My Journey</h3>
                <p>My academic journey began at Somang Jib Academy where I completed my BLE in 2077. I then moved to Janajyoti P.D.M Secondary School where I successfully completed my SEE in 2078.</p>
                
                <h3>Skills Development</h3>
                <p>Alongside my academic pursuits, I have developed expertise in video editing and content writing. I create engaging video content and write compelling articles in both Nepali and English languages.</p>
                
                <h3>Future Aspirations</h3>
                <p>As I continue my education, I aim to further enhance my technical and creative skills to build a successful career in the digital media field. I'm particularly interested in exploring more advanced video editing techniques and expanding my content creation portfolio.</p>
            `;
            
            // Hide password form
            this.style.display = 'none';
        } else {
            bioError.textContent = 'Incorrect password. Please try again.';
        }
    });
});
