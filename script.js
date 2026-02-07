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