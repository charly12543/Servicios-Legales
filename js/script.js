let navToggle = document.querySelector('.navbar-toggler');
let navCollapse = document.querySelector('.navbar-collapse');
let body  = document.querySelector('body');
let btnClose = document.querySelector('.btn-equis-close');

navToggle.addEventListener('click',()=>{
    body.classList.add('body-scroll');
});

btnClose.addEventListener('click',()=>{
    body.classList.remove('body-scroll');
    navCollapse.classList.remove('show');
});

document.querySelectorAll('#app-store').forEach(element=>{
    element.setAttribute('href', 'https://apps.apple.com/mx/app/trafalgar-fintech/id1582196231');
    element.setAttribute('target', '_blank');
})

document.querySelectorAll('#play-store').forEach(element=>{
    element.setAttribute('href', 'https://play.google.com/store/apps/details?id=com.trafalgar.mbanking');
    element.setAttribute('target', '_blank');
})