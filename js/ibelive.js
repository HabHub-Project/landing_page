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
    let activePage = 0;
    let itemsPerPage = 3;
    let autoPlayInterval = null;

    function getItemsPerPage() {
        return window.innerWidth <= 700 ? 1 : 3;
    }

    function updateItemsPerPage() {
        itemsPerPage = getItemsPerPage();
    }

    function getTotalPages() {
        return Math.ceil(pillarCards.length / itemsPerPage);
    }

    function updatePillarsCarousel() {
        const percentage = (activePage * 100) / itemsPerPage;
        pillarsTrack.style.transform = `translateX(-${percentage}%)`;

        const totalPages = getTotalPages();
        carouselDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activePage);
            dot.setAttribute('aria-current', index === activePage ? 'true' : 'false');
        });
    }

    function showPage(index) {
        const totalPages = getTotalPages();
        activePage = index % totalPages;
        updatePillarsCarousel();
    }

    function nextPage() {
        const totalPages = getTotalPages();
        const nextIndex = activePage + 1;

        if (nextIndex >= totalPages) {
            activePage = 0;
        } else {
            activePage = nextIndex;
        }
        updatePillarsCarousel();
    }

    function prevPage() {
        if (activePage === 0) {
            activePage = getTotalPages() - 1;
        } else {
            activePage -= 1;
        }
        updatePillarsCarousel();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextPage, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    if (previousPillarBtn) {
        previousPillarBtn.addEventListener('click', () => {
            prevPage();
            resetAutoPlay();
        });
    }

    if (nextPillarBtn) {
        nextPillarBtn.addEventListener('click', () => {
            nextPage();
            resetAutoPlay();
        });
    }

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showPage(index);
            resetAutoPlay();
        });
    });

    pillarsTrack.addEventListener('mouseenter', stopAutoPlay);
    pillarsTrack.addEventListener('mouseleave', startAutoPlay);

    window.addEventListener('resize', () => {
        updateItemsPerPage();
        activePage = 0;
        updatePillarsCarousel();
        resetAutoPlay();
    });

    updateItemsPerPage();
    updatePillarsCarousel();
    startAutoPlay();
}
