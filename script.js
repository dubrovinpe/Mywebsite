// Initialisiere Animationen
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic'
});

// Navbar Effekt
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Kontakt Button Logik
document.getElementById('contactBtn').addEventListener('click', () => {
    const u = "info";
    const d = "dubrovinpe.com";
    window.location.href = `mailto:${u}@${d}`;
});