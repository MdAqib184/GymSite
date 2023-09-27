window.addEventListener('scroll', function(){
    const navbar = this.document.querySelector('.navbar');
    navbar.classList.toggle("sticky", this.window.scrollY>50)
});
const tglbar = document.querySelector('.toggle');
const menu = document.querySelector('ol');
function navtgl(){
    tglbar.classList.toggle("active");
    menu.classList.toggle("active");
}
