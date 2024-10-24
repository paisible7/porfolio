const menuIcon = document.querySelector('#menu-icon');
const navlink = document.querySelector('.nav');
// let btn = document.getElementById('btn')

menuIcon.onclick = () => {
    navlink.classList.toggle('active');
}

// btn.addEventListener('click', () => {
//     let a = "https://github.com/paisiible7"
//     document.createElement
// })