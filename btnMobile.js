const menu = document.querySelector('.menu-mobile-list');
const nav = document.querySelector('.navigation-mobile');
const menuOpen = document.querySelector('#menu-btn');
const menuClose = document.querySelector('#close-menu-btn');

menuOpen.onclick = e =>{
    menu.classList.toggle('active')
    
}

menuClose.onclick = e =>{
    menu.classList.toggle('active')
}
nav.onclick = e =>{  /*---hiden-navigation---*/
    menu.classList.toggle('active')
}



