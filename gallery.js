let index = 0;
const images = document.querySelectorAll(".slide img");
function showSlide() {
    images.forEach(img => {
        img.className = "";
    });
    images[index].classList.add("center");
    images[(index - 1 + 10) % 10].classList.add("left1");
    images[(index - 2 + 10) % 10].classList.add("left2");
    images[(index + 1) % 10].classList.add("right1");
    images[(index + 2) % 10].classList.add("right2");
    images.forEach(img => {
        if (!img.classList.length) {
            img.classList.add("hidden");
        }
    });
}
function nextSlide() {
    index = (index + 1) % 10;
    showSlide();
}
function previousSlide() {
    index = (index - 1 + 10) % 10;
    showSlide();
}
showSlide();