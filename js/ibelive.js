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
