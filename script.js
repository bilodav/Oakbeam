// Initialize on page load to prevent jump
window.addEventListener("DOMContentLoaded", () => {
    const parallax = document.querySelector(".parallax-image");
    const scrolled = window.pageYOffset;
    
    const moveSpeed = 0.6;
    const translateY = scrolled * moveSpeed;
    
    const zoomSpeed = 0.0006;
    const scale = 1.5 - (scrolled * zoomSpeed);
    const finalScale = Math.max(scale, 1);
    
    parallax.style.transform = `translateY(${translateY}px) scale(${finalScale})`;

    updateActiveSection();
});

// Use requestAnimationFrame for smoother animation
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector(".parallax-image");
            
            const moveSpeed = 0.6;
            const translateY = scrolled * moveSpeed;
            
            const zoomSpeed = 0.0006;
            const scale = 1.5 - (scrolled * zoomSpeed);
            const finalScale = Math.max(scale, 1);
            
            parallax.style.transform = `translateY(${translateY}px) scale(${finalScale})`;

            updateActiveSection()
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// NavBar size response

const  burgerMenu = document.querySelector(".burger-menu");
const  navBarList = document.querySelector(".nav-list");
const  navBarIdentifier = document.querySelector(".section-identifier");


function handleNavbarResize() {
    if (window.innerWidth < 968) {
        // Mobile: Show burger menu, hide nav list and contact button
        burgerMenu.classList.remove("hidden");
        navBarList.classList.add("hidden");
        navBarIdentifier.classList.add("nav-center");
        


    } else {
        // Desktop: Hide burger menu, show nav list and contact button
        burgerMenu.classList.add("hidden");
        navBarList.classList.remove("hidden");
        navBarIdentifier.classList.remove("hidden");
        navBarIdentifier.classList.remove("nav-center");

    }
}

// Run on page load
handleNavbarResize();

// Run on window resize
window.addEventListener("resize", handleNavbarResize);

// handle animation for click on burger menu


burgerMenu.addEventListener("click", ()=>{
    if (!burgerMenu.classList.contains("active")){
        
        burgerMenu.classList.add("active");
    } else if (burgerMenu.classList.contains("active")) {
        
        burgerMenu.classList.remove("active");
    }
} )

function updateActiveSection(){
    // Get all the sections
    const sections = document.querySelectorAll("section[id]");

    // Get all nav links
    const navLinks = document.querySelectorAll(".nav-center a[href^='#']");

    // Get current scroll position
    const scrollPosition = window.scrollY + 150;

    let currentSection = "";

    // Determine which section is currently in view
    sections.forEach(section => {
        const  sectionTop = section.offsetTop ;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop +sectionHeight){
            currentSection = section.getAttribute("id")
        }
    })

    // If at the very top of page, highlight home
    if (window.scrollY < 100 ){
        currentSection = "home-banner"
    }

    //update of active class on nav links

    navLinks.forEach(link => {
        link.classList.remove("active");

        const href = link.getAttribute("href");
        if (href === `#${currentSection}`){
            link.classList.add("active")
        }
    })
}

// Optional: Smooth scroll enhancement (already have scroll-behavior: smooth in CSS)
// But this adds a click handler to update immediately
document.querySelectorAll('.nav-center a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active from all links
        document.querySelectorAll('.nav-center a').forEach(l => l.classList.remove('active'));
        // Add active to clicked link
        this.classList.add('active');
    });
});


// Past projects card opening

const ppButton =  document.querySelectorAll(".pp-button");

for(let i = 0; i < ppButton.length; i++){
    ppButton[i].addEventListener("click", ()=>{
        const card = document.querySelectorAll(".pp-card")[i];
        const allCards = document.querySelectorAll(".pp-card");
        const allButtons = document.querySelectorAll(".pp-button");
        const ppDetails = document.querySelectorAll(".pp-details");
        const ppDescription = document.querySelectorAll(".pp-description");


        
        // Check if the clicked card is already active
        if (card.classList.contains("active")) {
            // If yes, just close it
            card.classList.remove("active");
            ppButton[i].classList.remove("active");
            ppDetails[i].classList.add("hidden");
            
        } else {
            // If no, close all other cards first
            allCards.forEach(c => c.classList.remove("active"));
            allButtons.forEach(b => b.classList.remove("active"));
            ppDetails.forEach(b => b.classList.add("hidden"));



            
            // Then open the clicked card
            card.classList.add("active");
            ppButton[i].classList.add("active");
            ppDetails[i].classList.remove("hidden");
        }
    })
}
