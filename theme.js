const page = document.querySelector('.container');
const changeTheme = document.getElementById('theme');
const changeThemeMobile = document.getElementById('theme-mobile');


changeTheme.onclick = e =>{
    if(!page.classList.contains('switch')){
        page.classList.add('switch');
        page.style.transition = ".4s"
    }else{
        page.classList.remove('switch');
    }
}

//--mobile theme section//

changeThemeMobile.onclick = e =>{
    if(!page.classList.contains('switch')){
        page.classList.add('switch');
        page.style.transition = ".4s"
    }else{
        page.classList.remove('switch');
    }
}
