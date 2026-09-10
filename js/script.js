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
  const loggedIn = view === "logged-in";
  const isAuth = view === "login" || view === "signup";

  document.body.classList.remove("state-auth", "state-logged-in", "state-landing");
  document.body.classList.add(loggedIn ? "state-logged-in" : isAuth ? "state-auth" : "state-landing");
  landingView.hidden = view !== "landing";
  authView.hidden = !isAuth;
  loggedInView.hidden = !loggedIn;
  headerButtons.innerHTML = loggedIn
    ? '<button type="button" class="btn btn--dark" id="logout-button">Logout</button>'
    : '<a href="#login" class="btn btn--dark" data-view-link="login">Login</a><a href="#signup" class="btn btn--dark" data-view-link="signup">Sign Up</a>';
  headerNav.innerHTML = loggedIn
    ? '<li><a href="#courses" class="nav-link">Courses</a></li>'
    : '<li><a href="#courses" class="nav-link">Courses</a></li>';

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

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-view-link]");
  if (link) {
    event.preventDefault();
    setView(link.dataset.viewLink);
    window.location.hash = link.dataset.viewLink;
  }

  if (event.target.id === "logout-button") {
    localStorage.removeItem("classiqLoggedIn");
    setView("landing");
    window.location.hash = "home";
  }
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("classiqLoggedIn", "true");
  setView("logged-in");
  window.location.hash = "courses";
});

const initialView = localStorage.getItem("classiqLoggedIn")
  ? "logged-in"
  : window.location.hash === "#signup"
    ? "signup"
    : window.location.hash === "#login"
      ? "login"
      : "landing";
setView(initialView);