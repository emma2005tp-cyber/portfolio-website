// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Contact button handler
function handleContact() {
    // You can customize this to open an email client or a contact form
    const email = 'your.email@example.com'; // Replace with your actual email
    const subject = encodeURIComponent('Inquiry from CV Website');
    const body = encodeURIComponent('Hello Emma,\n\nI came across your CV website and would like to get in touch...');
    
    // Open email client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Alternative: Show a message or open a contact form modal
    // alert('Please contact me at: your.email@example.com');
}

// Add interactive hover effects for skill and hobby items
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.skill-item, .hobby-item');
    
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Load profile image
    // IMPORTANT: Google redirect URLs don't work in img src tags
    // To get the actual image URL:
    // 1. Visit: https://modernfarmer.com/2017/12/6-facts-sheep-might-not-know/
    // 2. Right-click on the sheep image you want
    // 3. Select "Copy image address" or "Copy image URL"
    // 4. Replace the imageUrl variable below with that direct URL
    // 
    // OR download the image and save it as "profile.jpg" in the same folder,
    // then change imageUrl to 'profile.jpg'
    
    const profileImg = document.getElementById('profile-img');
    
    // Replace this with the direct image URL from modernfarmer.com
    // Example: 'https://modernfarmer.com/wp-content/uploads/2017/12/sheep-image.jpg'
    // Or use a local file: 'profile.jpg'
    const imageUrl = 'https://modernfarmer.com/wp-content/uploads/2017/12/Funny-Sheep-Facts-jpg.webp'; // Change this to the direct image URL or local filename
    
    profileImg.onerror = function() {
        console.log('Image failed to load. Please update the imageUrl in script.js');
        // Optionally show a placeholder or default image
        this.style.display = 'none'; // Hide broken image
    };
    
    profileImg.src = imageUrl;
});
