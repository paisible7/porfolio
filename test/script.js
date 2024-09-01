const menuIcon = document.querySelector('#menu-icon');
const navlink = document.querySelector('.nav_link');

menuIcon.onclick = () => {
    navlink.classList.toggle('active');
}