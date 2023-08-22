const pageObserver = new IntersectionObserver((view) =>{ /* pages target */
    view.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('hiden-show');
        }else{
            entry.target.classList.remove('hiden-show');
        }
    })
})
const pages = document.querySelectorAll('.hiden');

pages.forEach((element) => pageObserver.observe(element))


