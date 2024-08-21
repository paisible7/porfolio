const imgs = document.querySelectorAll('.img_item');
let dernierIndex = 0;
let isHovering = false;

function changeImage() {
  if (!isHovering) {
    imgs.forEach(div => div.classList.remove('active'));
    imgs[dernierIndex].classList.add('active');
    dernierIndex = (dernierIndex + 1) % imgs.length;
  }
}

changeImage();
setInterval(changeImage, 5500);

imgs.forEach(img => {
  img.addEventListener('mouseover', () => {
    isHovering = true;
  });
  img.addEventListener('mouseout', () => {
    isHovering = false;
  });
});