const actionBtn = document.getElementById('action-btn');

if (actionBtn) {
    actionBtn.addEventListener('click', () => {
        alert('Ação executada com sucesso!')
    })
}

function toggleTheme(){
    document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === 'black' ? '' : 'black';
}

const navToggle = document.querySelector('.nav-toggle');
const navActions = document.querySelector('.nav-actions');
const navLinks = document.querySelectorAll('.nav-links a');

if (navToggle && navActions) {
    function closeMenu() {
        navToggle.classList.remove('is-open');
        navActions.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
    }

    navToggle.addEventListener('click', () => {
        const isOpen = navActions.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}

