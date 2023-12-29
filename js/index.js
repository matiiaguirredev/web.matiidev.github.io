new TypeIt('.animated-text', {
    speed: 65,
    loop: true
})
    .type("Hola!👋 Soy Matias Aguirre, Desarrollador Web Full-Stack.", { delay: 500 })
    .move(1, { delay: 500 })
    .delete(70, { pause: 500 })
    .type("Developer. ", { delay: 750 })
    .delete(15, { pause: 750 })
    .type("BackEnd. ", { delay: 750 })
    .delete(10, { pause: 750 })
    .type("FrontEnd. ", { delay: 750 })
    .delete(10, { pause: 750 })
    .type("Full-Stack. ", { delay: 750 })
    .delete(60, { pause: 750 })
    .move(null, { to: 'end' })
    .move(null, { speed: 30, to: 'start', instant: true })
    .type("Bienvenido</em>", { delay: 750 })
    .delete(1, { delay: 750 })
    .type("a", { delay: 750 })
    .delete(1, { delay: 750 })
    .type('os.', { delay: 750 })
    .move(null, { delay: 500, to: 'end', instant: true })
    .go();

new TypeIt("#simpleUsage", {
    strings: "“Y aqui abajo, un poquito de mi vida ...”",
    speed: 50,
    waitUntilVisible: true,
    loop: true
}).go();

new TypeIt("#h4masproy", {
    strings: "Algunos proyectos mas !",
    speed: 100,
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


/*//////////////// carrusel gallery ////////////////*/

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

/* ///////////////////// CARRUSEL DE HABILIDADES ! //////////////////////// */

const images = [
    'img/php.png',
    'img/laravel.png',
    'img/python.png',
    'img/mysql.png',
    'img/html.png',
    'img/css.png',
    'img/sass.png',
    'img/javascript.png',
    'img/react.png',
    'img/github.png',
    'img/bootstrap.png',
    'img/figma.png',
    'img/figma.png',
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



/* ////////////////// abre en grande las img sobremi/educacion ////////////////// */

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
        event.target.classList.contains('interno3') ||
        event.target.classList.contains('interno4')) {
        openOverlay(event.target.src);
    } else if (event.target.id === 'overlay') {
        closeOverlay();
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeOverlay();
    }
});

/* //////////  CARRUSEL DE EDUCACION    ////////////// */

function rotateCarousel() {
    const carousel = document.getElementById('grid-carousel');
    const item1 = carousel.querySelector('.item1');
    const item2 = carousel.querySelector('.item2');
    const item3 = carousel.querySelector('.item3');


    // Agregar clase para ocultar con transición
    item1.classList.add('hidden');
    item2.classList.add('hidden');
    item3.classList.add('hidden');


    // Guardar el contenido del último elemento
    const lastItemContent = item3.innerHTML;

    // Mover contenido de item2 a item3
    item3.innerHTML = item2.innerHTML;

    // Mover contenido de item1 a item2
    item2.innerHTML = item1.innerHTML;

    // Colocar el contenido guardado en item1
    item1.innerHTML = lastItemContent;


    // Eliminar clase después de la transición de la animación
    item1.addEventListener('transitionend', function() {
        item1.classList.remove('hidden');
        item2.classList.remove('hidden');
        item3.classList.remove('hidden');

    }, { once: true });

}
setInterval(rotateCarousel, 7500);


/* ////////////////////////////////////////////////// */
/* CARRUSEL DE titulos  funciona perfecto pero es demaciada rotacion ya, molesta a la vista incluso*/

/* function rotateCarouselInternos() {
    const carouselInternos = document.getElementById('internos');
    const interno1 = carouselInternos.querySelector('.interno1');
    const interno2 = carouselInternos.querySelector('.interno2');
    const interno3 = carouselInternos.querySelector('.interno3');
    const interno4 = carouselInternos.querySelector('.interno4');

    // Agregar clase para ocultar con transición
    interno1.classList.add('hidden');
    interno2.classList.add('hidden');
    interno3.classList.add('hidden');
    interno4.classList.add('hidden');

    // Guardar el contenido del último elemento
    const lastInternoContent = interno4.src;

    // Mover contenido de interno2 a interno3
    interno4.src = interno3.src;

    // Mover contenido de interno1 a interno2
    interno3.src = interno2.src;

    // Mover contenido de interno0 a interno1
    interno2.src = interno1.src;

    // Colocar el contenido guardado en interno0
    interno1.src = lastInternoContent;

    // Eliminar clase después de la transición de la animación
    interno1.addEventListener('transitionend', function() {
        interno1.classList.remove('hidden');
        interno2.classList.remove('hidden');
        interno3.classList.remove('hidden');
        interno4.classList.remove('hidden');

    }, { once: true });
}
setInterval(rotateCarouselInternos, 3500);
 */


/* /////////////// MENU RESPONSIVE ///////////////// */


document.addEventListener('DOMContentLoaded', function () {
    const openMenu = document.getElementById('open-menu');
    const aside = document.querySelector('aside');
    const menuLinks = document.querySelectorAll('.menu-link');

    openMenu.addEventListener('click', function() {
        aside.classList.toggle('list-menu');
    });

    // Agregar event listener al documento para cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!aside.contains(event.target) && !openMenu.contains(event.target)) {
        // Si el clic no ocurrió dentro del menú ni en el botón de abrir, cierra el menú
        aside.classList.remove('list-menu');
        }
    });

    // Agregar event listener a cada enlace del menú para cerrar el menú al hacer clic en ellos
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function() {
        aside.classList.remove('list-menu');
        });
    });
});


/* ///////////// DARK MODE ////////////////// */

const noche = document.querySelector(".bi-moon-fill");

noche.addEventListener("click", function() {
    const body = document.body;

    body.classList.toggle("dark-mode");

});

const noche2 = document.querySelector(".bi-moon-stars-fill")

noche2.addEventListener("click", function(){
    const body = document.body;

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        body.style.transition = "2s linear";
    } else {
        body.style.transition = "2s linear";
        setTimeout(() => {
            body.style.transition = "2s linear";
        }, );
    }
})

/* /////////////      //////////////// */



