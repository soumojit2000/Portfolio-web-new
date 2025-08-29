let navbar=document.getElementById('navbar');

window.addEventListener('scroll',checkScroll);

function checkScroll(){
    if(window.scrollY>100){
        navbar.classList.add('scrolled');

    } else{
        navbar.classList.remove('scrolled');
    }
}