const showDetail = document.querySelector('.more-aboutMy');
const moreBtn = document.querySelector('.more-btn');

moreBtn.onclick = e =>{
    if(!showDetail.classList.contains('show')){
        showDetail.classList.add('show');       //--button abilitys show--//
        moreBtn.innerHTML ="Mostrar menos";
    }else{
        showDetail.classList.remove('show');
        moreBtn.innerHTML = "Mostrar mais";
        
    }
}


