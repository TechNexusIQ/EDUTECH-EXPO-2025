// Ham-Nav
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".nav-links");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburgerBtn.innerHTML = navLinks.classList.contains("active")
    ? "&times;"
    : "&#9776;";
});


// nav active
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute("href")));

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    sections.forEach(section => {
      if (section && scrollY >= section.offsetTop - 100 && scrollY < section.offsetTop + section.offsetHeight - 100) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("nav-link-active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("nav-link-active");
      }
    });

    if (!currentSectionId) {
      navLinks.forEach(link => link.classList.remove("nav-link-active"));
    }
  });
});



// tawk-to script
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();

Tawk_API.onLoad = function () {
  Tawk_API.hideWidget();
};

(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/680d98adbe6663190a6bf9ee/1ipqhopi8";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();


