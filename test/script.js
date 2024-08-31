const menuIcon = document.querySelector('#menu-icon');
const navlink = document.querySelector('.nav-link');

menuIcon.onclick = () => {
    navlink.classList.toggle('active');
}