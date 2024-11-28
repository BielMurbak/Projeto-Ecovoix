//logica pra abrir o menu-hamburguer e fechar

const getmenu = document.getElementById('hamburguer');

function openMenu(){
    const openAfterclick = document.getElementById('afterClick');
    openAfterclick.classList.toggle("active");
}

getmenu.addEventListener('click',openMenu);