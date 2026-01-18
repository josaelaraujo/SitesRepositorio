// Aos inicial
AOS.init({duration: 1000, once:true});

// Alternar menu

function toggleMenu(){
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("active");
}

//Animação parallax
const animItem = document.querySelector('.mouse-anim');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 1000;
    const y = (e.clientY / window.innerHeight - 0.5) * 1000;

    anime({
        targets: animItem,
        translateX: x,
        translateY: y,
        easing: 'easeOutQuad',
        duration: 80
    });
});
