// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress Bar on Scroll
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Function to add 'active' class to the current section's link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section'); // Assuming each section is a <section> element
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160; // Adjust based on your header height
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id'); // Assuming each section has an id matching the nav link's href
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Text to be typed
const textArray = ["Web Developer | UI/UX Designer" , "Java Full Stack Developer"];
let currentIndex = 0;
let currentCharIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const dynamicText = document.getElementById("dynamicText");

    if (isDeleting) {
        // Remove characters
        currentText = textArray[currentIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        // Add characters
        currentText = textArray[currentIndex].substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    dynamicText.textContent = currentText;

    if (!isDeleting && currentCharIndex === textArray[currentIndex].length) {
        // Pause before starting to delete
        setTimeout(() => {
            isDeleting = true;
        }, 250);
    } else if (isDeleting && currentCharIndex === 0) {
        // Move to the next text
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length;
    }

    // Speed controls
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeNextText = isDeleting ? 300 : 500;

    setTimeout(typeEffect, currentCharIndex === textArray[currentIndex].length ? pauseBeforeNextText : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    const themeIcon = document.getElementById('themeIcon');
    
    // Toggle the icon between sun (light mode) and moon (dark mode)
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});

// On page load, check if a theme is saved in localStorage and apply it
window.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.add('fa-sun');
    }
});



