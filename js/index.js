new TypeIt('.animated-text', {
    speed: 65,
    loop: true
})
    .type("Hola!👋 Soy Matias Aguirre. <em>Desarrollador Web Full-Stack</em>", { delay: 500 })
    .move(1, { delay: 500 })
    .delete(70, { pause: 500 })
    .type("<em>Developer.</em> ", { delay: 750 })
    .delete(15, { pause: 750 })
    .type("<em>BackEnd. </em>", { delay: 750 })
    .delete(10, { pause: 750 })
    .type("<em>FrontEnd. </em>", { delay: 750 })
    .delete(10, { pause: 750 })
    .type("<em>Full-Stack. </em>", { delay: 750 })
    .delete(60, { pause: 750 })
    .move(null, { to: 'end' })
    .move(null, { speed: 30, to: 'start', instant: true })
    .type("<em>Bienvenido</em>", { delay: 750 })
    .delete(1, { delay: 750 })
    .type("<em>a</em>", { delay: 750 })
    .delete(1, { delay: 750 })
    .type('<em>os<em>.', { delay: 750 })
    .move(null, { delay: 500, to: 'end', instant: true })
    .go();

new TypeIt("#simpleUsage", {
    strings: "<em>“Y aqui abajo, un poquito de mi vida ...”</em>",
    speed: 50,
    waitUntilVisible: true,
    loop: true
}).go();


// Abrir lightbox al hacer clic en una imagen del slider
//no funcionaba al dar click fuera de la pantalla asique utilice la de overlay mas abajo.
/* 
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');
const closeLightboxButton = document.querySelector('.close-lightbox');
const mygalleryItems = document.querySelectorAll('.gallery-item');

mygalleryItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const clickedImageSrc = e.target.src;
        lightboxImage.src = clickedImageSrc;
        lightboxContainer.style.display = 'flex';
    });
});

closeLightboxButton.addEventListener('click', () => {
    lightboxContainer.style.display = 'none';
});
 */

/* gallery */

const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.currentIndex = 0;
        this.intervalId = null;
    }

    updateGallery() {
        this.carouselArray.forEach((el, index) => {
            el.classList.remove(`gallery-item-1`, `gallery-item-2`, `gallery-item-3`, `gallery-item-4`, `gallery-item-5`);
            const position = (index - this.currentIndex + this.carouselArray.length) % this.carouselArray.length + 1;
            el.classList.add(`gallery-item-${position}`);
        });
    }

    setCurrentState(direction) {
        if (direction === "previous") {
            this.currentIndex = (this.currentIndex - 1 + this.carouselArray.length) % this.carouselArray.length;
        } else {
            this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach((control) => {
            const button = document.createElement("button");
            button.className = `gallery-controls-${control}`;
            galleryControlsContainer.appendChild(button);

            button.addEventListener("click", () => {
                this.setCurrentState(control);
            });
        });
    }

    startRotation(intervalTime) {
        this.intervalId = setInterval(() => {
            this.setCurrentState("next");
        }, intervalTime);
    }

    stopRotation() {
        clearInterval(this.intervalId);
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
/* exampleCarousel.setControls(); */ // estos son los botones, por el momentos los elimino.
exampleCarousel.startRotation(5000); // Cambia el intervalo a tu preferencia (en milisegundos)

/* ////////////////////////////////////////////////// */
/* CARRUSEL DE HABILIDADES */
/* const imgHabilidades = document.querySelector('.img-habilidades');

function rotateSlider() {
    const firstItem = document.querySelector('.id-habilidad');
    imgHabilidades.appendChild(firstItem);
    setTimeout(() => {
        imgHabilidades.style.transition = 'none';
        setTimeout(() => {
            imgHabilidades.style.transition = 'transform .3 infinite linear, opacity .3 infinite linear'; //Añade la transición de opacidad 
            imgHabilidades.style.opacity = 1; // Establece la opacidad a 1 después de la transición
        });
    }, 3000);
}

setInterval(rotateSlider, 3000); */

/* /////////////////////////////////////////////////////////////////////// */

const images = [
    '/img/php.png',
    '/img/laravel.png',
    '/img/python.png',
    '/img/mysql.png',
    '/img/html.png',
    '/img/css.png',
    '/img/sass.png',
    '/img/javascript.png',
    '/img/react.png',
    '/img/github.png',
    '/img/bootstrap.png',
    '/img/figma.png',
    '/img/figma.png',
];

const imageCarousel = document.getElementById('image-carousel');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;
let intervalId;

// Inicializa el carrusel con las imágenes del array
function initCarousel() {
    let imagesLoaded = 0;

    for (let i = 0; i < images.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = images[i];
        imgElement.classList.add('carousel-image');
        imgElement.style.display = 'none';

        imgElement.addEventListener('load', function () {
            imagesLoaded++;

            if (imagesLoaded === images.length) {
                showImage(currentIndex);
                startInterval();
            }
        });

        imageCarousel.appendChild(imgElement);
    }
}

function prevSlide() {
    stopInterval();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    startInterval();
}

function nextSlide() {
    stopInterval();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    startInterval();
}

function showImage(index) {
    const imgElements = document.querySelectorAll('.carousel-image');
    imgElements.forEach((imgElement, i) => {
        imgElement.style.display = i === index ? 'block' : 'none';
    });
}

function startInterval() {
    intervalId = setInterval(nextSlide, 2000);
}

function stopInterval() {
    clearInterval(intervalId);
}

window.onload = initCarousel;

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Pausa el intervalo cuando se pasa el mouse sobre el carrusel
imageCarousel.addEventListener('mouseenter', stopInterval);

// Reinicia el intervalo cuando se quita el mouse del carrusel
imageCarousel.addEventListener('mouseleave', startInterval);



/* ////////////////// img educacion ////////////////// */

const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close-btn');

function openOverlay(imgSrc) {
    overlay.style.display = 'flex';
    overlayImg.src = imgSrc;
}

function closeOverlay() {
    overlay.style.display = 'none';
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('interno1') ||
        event.target.classList.contains('interno2') ||
        event.target.classList.contains('interno3')) {
        openOverlay(event.target.src);
    } else if (event.target.id === 'overlay') {
        closeOverlay();
    }

});