//cambio de logos Y color por desplazamiento del navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('down',window.scrollY > 0);
    header.classList.toggle('scroll', window.scrollY > 0);

});

// Funcionamiento del menú responsivo
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
var header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
    header.classList.add('menu-active'); 
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
    header.classList.remove('menu-active');
});

// Selección de todas las preguntas del FAQ
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
      // Busca el div contenedor de la respuesta asociado al botón
      const faqAnswer = button.nextElementSibling;

      // Alternar la clase 'active' para mostrar u ocultar la respuesta
      faqAnswer.classList.toggle('active');

      // Alternar iconos o estilos si es necesario
      button.classList.toggle('expanded');
  });
});

// carrusel
const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

let counter = 1; // Comenzamos en la primera imagen real
const size = 100 / sliderSection.length; // Tamaño de cada slide

// Coloca el carrusel en la primera imagen real al inicio
slider.style.transform = `translateX(-${counter * size}%)`;

// Botones de navegación
btnRight.addEventListener("click", () => moveToRight());
btnLeft.addEventListener("click", () => moveToLeft());

// Intervalo para auto-slide
setInterval(() => moveToRight(), 3000);

function moveToRight() {
    if (counter >= sliderSection.length - 1) return; // Evita avanzar más allá del último clon
    counter++;
    slider.style.transition = "transform 1.5s ease-in-out";
    slider.style.transform = `translateX(-${counter * size}%)`;

    // Ajuste sin transición al llegar al clon de la primera imagen
    slider.addEventListener("transitionend", () => {
        if (counter === sliderSection.length - 1) {
            slider.style.transition = "none";
            counter = 1; // Primera imagen real
            slider.style.transform = `translateX(-${counter * size}%)`;
        }
    });
}

function moveToLeft() {
    if (counter <= 0) return; // Evita retroceder más allá del primer clon
    counter--;
    slider.style.transition = "transform 1.5s ease-in-out";
    slider.style.transform = `translateX(-${counter * size}%)`;

    // Ajuste sin transición al llegar al clon de la última imagen
    slider.addEventListener("transitionend", () => {
        if (counter === 0) {
            slider.style.transition = "none";
            counter = sliderSection.length - 2; // Última imagen real
            slider.style.transform = `translateX(-${counter * size}%)`;
        }
    });
}

// Direccion instrumentos
document.getElementById('instrumentos').addEventListener('click', function() {
    window.location.href = 'https://ejemplojimlabblog.blogspot.com/';
});

// Carruseles logo
document.querySelectorAll('.carousel-section-seven').forEach(carousel => {
    const containerWidth = carousel.parentElement.offsetWidth; // Ancho del contenedor
    const logoWidth = carousel.querySelector('img').offsetWidth + 20; // Ancho del logo + gap
    const logoCount = carousel.querySelectorAll('img').length; // Cantidad de logos originales

    let logosToClone = Math.ceil(containerWidth / (logoWidth * logoCount)); // Calcula cuántas veces duplicar
    for (let i = 0; i < logosToClone; i++) {
        carousel.innerHTML += carousel.innerHTML; // Duplica logos
    }
});

// Selecciona el botón "Volver arriba"
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { 
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
});