// Carousel functionality
const carouselTrack = document.getElementById('carouselTrack');
const carouselCards = document.querySelectorAll('.carousel-card');
const prevBtn = document.querySelector('.carousel-nav-prev');
const nextBtn = document.querySelector('.carousel-nav-next');

if (carouselTrack && carouselCards.length > 0) {
    let currentIndex = 0;
    let cardsPerView = 3;

    function getCardsPerView() {
        return window.innerWidth <= 700 ? 1 : 3;
    }

    function updateCardsPerView() {
        cardsPerView = getCardsPerView();
    }

    function getCardWidth() {
        return carouselCards[0].offsetWidth;
    }

    function getGap() {
        const style = window.getComputedStyle(carouselTrack);
        return parseFloat(style.gap) || 24;
    }

    function updateCarouselPosition() {
        const cardWidth = getCardWidth();
        const gap = getGap();
        const totalScroll = (cardWidth + gap) * currentIndex;
        carouselTrack.style.transform = `translateX(-${totalScroll}px)`;
    }

    function moveNext() {
        const maxIndex = carouselCards.length - cardsPerView;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarouselPosition();
        }
    }

    function movePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', moveNext);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', movePrev);
    }

    window.addEventListener('resize', () => {
        updateCardsPerView();
        currentIndex = 0;
        updateCarouselPosition();
    });

    updateCardsPerView();
    updateCarouselPosition();
}

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

