const showProjects = document.getElementById('projects');
const moreBtnProject = document.getElementById('btn-more-projects');


moreBtnProject.onclick = e =>{
    if(!showProjects.classList.contains('show')){ //--button projects show--//
        showProjects.classList.add('show');
        moreBtnProject.innerHTML ="Mostrar menos";
    }else{
        showProjects.classList.remove('show');
        moreBtnProject.innerHTML ="Mostrar mais";
    }
}