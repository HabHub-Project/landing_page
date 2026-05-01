const actionBtn = document.getElementById('action-btn');

actionBtn.addEventListener('click', () => {
    alert('Ação executada com sucesso!')
})

function toggleTheme(){
    document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === 'black' ? '' : 'black';
}

