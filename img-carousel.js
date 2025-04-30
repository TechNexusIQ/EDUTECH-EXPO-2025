// img carousel
const track = document.querySelector(".carousel-track");
const leftButton = document.querySelector(".carousel-button.left");
const rightButton = document.querySelector(".carousel-button.right");

const images = ["IMG_8162.JPG", "IMG_8171.JPG", "IMG_8222.JPG", "IMG_8260 (1).JPG", "IMG_8454.JPG", "IMG_8460.JPG", "IMG_8463.JPG", "IMG_8570.JPG", "IMG_8611.JPG", "IMG_8898.JPG", "IMG_8909.JPG"];

let index = 0;

function loadCarouselImages() {
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = `./Img/Carousel/${image}`;
    img.alt = image;
    track.appendChild(img);
  });

  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = `./Img/Carousel/${image}`;
    img.alt = image;
    track.appendChild(img);
  });
}

function moveToNext() {
  if (index === images.length) {
    index = 0;
    track.style.transition = "none";
    track.style.transform = `translateX(0)`;
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease";
      index++;
      moveToIndex();
    }, 50);
  } else {
    index++;
    moveToIndex();
  }
}

function moveToPrevious() {
  if (index === 0) {
    index = images.length;
    track.style.transition = "none";
    track.style.transform = `translateX(-${images.length * 100}%)`;
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease";
      index--;
      moveToIndex();
    }, 50);
  } else {
    index--;
    moveToIndex();
  }
}

function moveToIndex() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

leftButton.addEventListener("click", moveToPrevious);
rightButton.addEventListener("click", moveToNext);
setInterval(moveToNext, 3000); 
window.onload = loadCarouselImages;