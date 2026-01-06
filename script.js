// Navigation Effekt beim Scrollen
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.9)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '25px 8%';
    }
});

// Kontakt Button Logik (Anti-Spam)
document.getElementById('contactBtn').addEventListener('click', () => {
    const user = "info"; // Ändere das zu deiner E-Mail
    const domain = "dubrovinpe.com";
    window.location.href = `mailto:${user}@${domain}`;
});