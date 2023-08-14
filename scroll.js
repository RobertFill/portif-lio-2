const pageObserver = new IntersectionObserver((view) =>{
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


