// Login page animation

const loginSignUpBtn = document.querySelector(".login-sign-up");
const loginCover = document.querySelector(".login-cover")
const loginHeading = document.querySelector(".login-cover h2")

loginSignUpBtn.addEventListener("click", () => {
  const coverContent = loginCover.querySelectorAll("h2, button");
  
  // Fade out content first
  coverContent.forEach(el => el.style.opacity = "0");

  if (loginCover.classList.contains("login-cover-right")) {
    loginCover.classList.add("login-cover-left");
    loginCover.classList.remove("login-cover-right");

    setTimeout(() => {
      loginSignUpBtn.textContent = "Sign In";
      loginHeading.textContent = "Already part of us? Sign in friend";
      coverContent.forEach(el => el.style.opacity = "1");
    }, 300); // fade back in mid-transition

  } else {
    loginCover.classList.add("login-cover-right");
    loginCover.classList.remove("login-cover-left");

    setTimeout(() => {
      loginSignUpBtn.textContent = "Sign Up";
      loginHeading.textContent = "New to us? Sign Up Now";
      coverContent.forEach(el => el.style.opacity = "1");
    }, 300);
  }
});