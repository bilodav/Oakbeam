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

