document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = document.getElementById(this.getAttribute('href').substring(1));

            if (targetId) {
                // Scroll to the target section smoothly
                targetId.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        });
    });
});

function scrollToDiv(divId) {
    const div = document.getElementById(divId);
    const navBarht = document.getElementById('navbar').offsetHeight

    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
