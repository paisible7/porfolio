const menuIcon = document.querySelector('#menu-icon');
const navlink = document.querySelector('.nav');

menuIcon.onclick = () => {
    navlink.classList.toggle('active');
}