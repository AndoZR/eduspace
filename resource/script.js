let stars = document.getElementById('stars');
let pluto = document.getElementById('pluto');
let kaca = document.getElementById('kaca');
let jupiter = document.getElementById('jupiter');
let btn = document.getElementById('btn');
let ship = document.getElementById('ship');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    pluto.style.top = value * 0.25 + 'px';
    kaca.style.top = value * 0 + 'px';
    jupiter.style.top = value * 0.5 + 'px';
    stars.style.left = value * 0.25 + 'px';
    ship.style.top = value * 0 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})