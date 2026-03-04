let isMenuOpen = false;
const sideNavbar = document.getElementById("sideNavbar");
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const loadingOverlay = document.getElementById("loadingOverlay");
const themeToggle = document.getElementById("themeToggle");
const navItems = document.querySelectorAll('.nav-item');
const notification = document.getElementById('notification');
let activeLink = null;

openMenuBtn.addEventListener('click', () => {
    isMenuOpen = true;
    sideNavbar.style.width = "250px";
});

closeMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    isMenuOpen = false;
    sideNavbar.style.width = "0";
});

function triggerNotification() {
    
    loadingOverlay.classList.remove("hidden");
    setTimeout(() => loadingOverlay.classList.add("hidden"), 2000);
}

navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        if (activeLink) activeLink.classList.remove('active');

        activeLink = event.target;
        activeLink.classList.add('active');

        triggerNotification();

        if (isMenuOpen) {
            isMenuOpen = false;
            sideNavbar.style.width = "0";
        }

        console.log(`Nav item clicked: ${event.target.textContent}`);
    });
});

const appContainer = document.getElementById('appContainer');
appContainer.addEventListener('click', () => {
    console.log("App Container clicked! (Triggered via Event Bubbling)");
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
