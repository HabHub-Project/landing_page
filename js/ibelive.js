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

const pillarsTrack = document.querySelector('.pillars-track');
const pillarCards = document.querySelectorAll('.pillar-card');
const carouselDots = document.querySelectorAll('.carousel-dot');
const previousPillarBtn = document.querySelector('.carousel-btn-prev');
const nextPillarBtn = document.querySelector('.carousel-btn-next');

if (pillarsTrack && pillarCards.length > 0) {
    let activePillar = 0;

    function updatePillarsCarousel() {
        pillarsTrack.style.transform = `translateX(-${activePillar * 100}%)`;

        carouselDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activePillar);
            dot.setAttribute('aria-current', index === activePillar ? 'true' : 'false');
        });
    }

    function showPillar(index) {
        activePillar = (index + pillarCards.length) % pillarCards.length;
        updatePillarsCarousel();
    }

    if (previousPillarBtn) {
        previousPillarBtn.addEventListener('click', () => {
            showPillar(activePillar - 1);
        });
    }

    if (nextPillarBtn) {
        nextPillarBtn.addEventListener('click', () => {
            showPillar(activePillar + 1);
        });
    }

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showPillar(index);
        });
    });

    updatePillarsCarousel();
}
