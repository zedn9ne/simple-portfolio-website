const bar = document.querySelector('.bar');
const navbar = document.querySelector('.navbar');
const arrow = document.querySelector('.arrow')
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

bar.addEventListener('click', function () {
    navbar.classList.toggle('navBar-active');
    bar.classList.toggle('active-i')
})
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 550) {
        arrow.classList.add('arrow-active')
        navbar.classList.remove('navBar-active');
        bar.classList.remove('active-i')
    } else {
        arrow.classList.remove('arrow-active')
    }
})