const imgs = document.querySelectorAll('.img_item');
let dernierIndex = 0;
let survol = false;

function changeImage() {
    if (!survol) {
        imgs.forEach(div => div.classList.remove('active'));
        imgs[dernierIndex].classList.add('active');
        dernierIndex = (dernierIndex + 1) % imgs.length;
    }
}

changeImage();
setInterval(changeImage, 5500);

imgs.forEach(img => {
    img.addEventListener('mouseover', () => {
        survol = true;
    });
    
    img.addEventListener('mouseout', () => {
        survol = false;
    });
});