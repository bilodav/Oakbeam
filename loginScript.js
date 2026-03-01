// Login page animation

const loginSignUpBtn = document.querySelector(".login-sign-up");
const loginCover = document.querySelector(".login-cover");
const loginHeading = document.querySelector(".login-cover h2");
const loginText = document.querySelector(".login-cover-text")
const loginHomeBtn  = document.querySelector(".login-home-btn");

loginSignUpBtn.addEventListener("click", () => {
  const coverContent = loginCover.querySelectorAll("h2, button");
  
  // Fade out content first
  coverContent.forEach(el => el.style.opacity = "0");

  if (loginCover.classList.contains("login-cover-right")) {
    loginCover.classList.add("login-cover-left");
    loginCover.classList.remove("login-cover-right");

    setTimeout(() => {
        
      loginSignUpBtn.textContent = "Sign In";
      loginHeading.textContent = "Welcome Back!";
      loginText.textContent = "Enter your personal details to use all of the site features"
      coverContent.forEach(el => el.style.opacity = "1");
    }, 300); // fade back in mid-transition

  } else {
    loginCover.classList.add("login-cover-right");
    loginCover.classList.remove("login-cover-left");

    setTimeout(() => {
      loginSignUpBtn.textContent = "Sign Up";
      loginHeading.textContent = "Hello, Friend!";
      loginText.textContent = "Register with your personal details to use all of the site features";
      coverContent.forEach(el => el.style.opacity = "1");
    }, 300);
  }
});

loginHomeBtn.addEventListener("click", ()=>{
    window.location.href =  "./index.html"
})