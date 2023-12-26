// Smooth scroll to target section
function smoothScroll(target) {
    const element = document.getElementById(target);
    const headerHeight = document.querySelector('#header').offsetHeight;
    const offsetTop = element.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Attach click event to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = this.getAttribute('href').substring(1); // Remove the '#'
        smoothScroll(targetSection);
    });
});
