// ----- MENU MOBILE -----
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");

// Ouvrir
burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

// Fermer via le bouton X
closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

// ----- Fermer en cliquant sur un lien -----
document.querySelectorAll(".mobile-menu-links a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// Copier email
const card = document.getElementById("contactCard");
const btn = document.getElementById("contactCopyButton");
const email = document.getElementById("contactEmail").textContent.trim();
const hint = document.getElementById("contactHint");
const iconCopy = document.getElementById("contactIconCopy");
const iconCheck = document.getElementById("contactIconCheck");

let timer;

function copyEmail() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
            .then(showFeedback)
            .catch(fallbackCopy);
    } else {
        fallbackCopy();
    }
}

function fallbackCopy() {
    const ta = document.createElement("textarea");
    ta.value = email;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    try {
        document.execCommand("copy");
        showFeedback();
    } catch (err) {
        alert("Impossible de copier, sélectionnez manuellement l'email");
    }
    document.body.removeChild(ta);
}

function showFeedback() {
    hint.textContent = "Copié !";
    iconCopy.style.display = "none";
    iconCheck.style.display = "block";
    iconCheck.classList.add("contact-card-pulse");

    clearTimeout(timer);
    timer = setTimeout(function () {
        hint.textContent = "Clique pour copier";
        iconCheck.style.display = "none";
        iconCopy.style.display = "block";
        iconCheck.classList.remove("contact-card-pulse");
    }, 1800);
}

// Sur le bouton ET sur la carte
btn.addEventListener("click", function(e){
    e.stopPropagation(); // éviter double événement
    copyEmail();
});

card.addEventListener("click", copyEmail);