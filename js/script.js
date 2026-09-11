const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
const headerActions = document.querySelector(".header__actions");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  mainNav.classList.toggle("active");
  headerActions.classList.toggle("active");
});

const landingView = document.getElementById("landing-view");
const authView = document.getElementById("auth-view");
const loggedInView = document.getElementById("logged-in-view");
const authTitle = document.getElementById("auth-title");
const authForm = document.getElementById("auth-form");
const authName = document.getElementById("auth-name");
const authNameLabel = document.getElementById("auth-name-label");
const authSubmit = document.querySelector(".auth-submit");
const authSwitch = document.getElementById("auth-switch");
const headerButtons = document.querySelector(".header-btn-container");
const headerNav = document.querySelector(".main-nav__list");

function setView(view) {
  // Determine the current state based on the view 
  const loggedIn = view === "logged-in";
  const isAuth = view === "login" || view === "signup";

  // Update body classes to reflect the current state
  document.body.classList.remove("state-auth", "state-logged-in", "state-landing");
  document.body.classList.add(loggedIn ? "state-logged-in" : isAuth ? "state-auth" : "state-landing");

  // Show/hide UI elements based on the current view state (i.e., landing, auth = login/signup, logged-in)
  landingView.hidden = view !== "landing";
  authView.hidden = !isAuth;
  loggedInView.hidden = !loggedIn;



  // Chaning header buttons based on the current state (i.e., logged-in or not)
  headerButtons.innerHTML = loggedIn
    ? '<button type="button" class="btn btn--dark" id="logout-button">Logout</button>'
    : '<a href="#login" class="btn btn--dark" data-view-link="login">Login</a><a href="#signup" class="btn btn--dark" data-view-link="signup">Sign Up</a>';

  
  // Only do the following if we're on Login or Sign Up.
  if (isAuth) {
    authForm.reset();
    const signup = view === "signup";
    authTitle.textContent = signup ? "Sign Up" : "Login";
    authSubmit.textContent = signup ? "SignUp" : "Login";
    authName.hidden = !signup;
    authNameLabel.hidden = !signup;
    authName.required = signup;
    authSwitch.innerHTML = signup
      ? 'Already have an account? <a href="#login" data-view-link="login">Login</a>'
      : 'Don’t have an account? <a href="#signup" data-view-link="signup">SignUp</a>';
  }
}

// 
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-view-link]");
  if (link) {
    event.preventDefault();

    // Sets the view based on the data-view-link attribute of the clicked link and updates the URL hash accordingly.
    setView(link.dataset.viewLink);
    window.location.hash = link.dataset.viewLink;
  }

  // Handle logout button click: removes the "classiqLoggedIn" item from localStorage, sets the view to "landing", and updates the URL hash to "home".
  if (event.target.id === "logout-button") {
    localStorage.removeItem("classiqLoggedIn");
    setView("landing");
    window.location.hash = "home";
  }
});

// Handle form submission for authentication (login/signup)
authForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Store a flag in localStorage to indicate that the user is logged in
  localStorage.setItem("classiqLoggedIn", "true");
  // Set the view to "logged-in" and update the URL hash to "courses"
  setView("logged-in");
  window.location.hash = "courses";
});


// Used hash so that refreshing the page remembers which view we were on.
// From the url hash decide which view to show on page load.
const initialView = localStorage.getItem("classiqLoggedIn")
  ? "logged-in"
  : window.location.hash === "#signup"
    ? "signup"
    : window.location.hash === "#login"
      ? "login"
      : "landing";
setView(initialView);