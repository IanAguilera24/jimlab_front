//cambio de logos Y color por desplazamiento del navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var logoJimlab = document.querySelector(".jimlab");
    header.classList.toggle('down',window.scrollY > 0);
    header.classList.toggle('scroll', window.scrollY > 0);

    // Cambia el contorno de la imagen Jimlab según el scroll
    if (window.scrollY > 0) {
        logoJimlab.classList.add('highlight'); // Agrega contorno
    } else {
        logoJimlab.classList.remove('highlight'); // Quita contorno
    }
});

//funcionamiento del menu responsivo
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
})

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