AOS.init();

let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideIndex) {
  for (let i = 1; i <= totalSlides; i++) {
    document.getElementById(`id_slide_${i}`).style.display = i === slideIndex ? 'block' : 'none';
    document.getElementById(`button_slider_${i}`).classList.toggle('active', i === slideIndex);
    document.getElementById(`button_slider_${i + 3}`).classList.toggle('active', i === slideIndex);
    document.getElementById(`button_slider_${i + 6}`).classList.toggle('active', i === slideIndex);
  }
}

function nextSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  showSlide(currentSlide);
}

setInterval(nextSlide, 10000); // Change slide every 10 seconds

// Initialize the first slide
showSlide(currentSlide);

// Add click event listeners for buttons
document.getElementById('button_slider_1').addEventListener('click', () => showSlide(1));
document.getElementById('button_slider_2').addEventListener('click', () => showSlide(2));
document.getElementById('button_slider_3').addEventListener('click', () => showSlide(3));
document.getElementById('button_slider_4').addEventListener('click', () => showSlide(1));
document.getElementById('button_slider_5').addEventListener('click', () => showSlide(2));
document.getElementById('button_slider_6').addEventListener('click', () => showSlide(3));
document.getElementById('button_slider_7').addEventListener('click', () => showSlide(1));
document.getElementById('button_slider_8').addEventListener('click', () => showSlide(2));
document.getElementById('button_slider_9').addEventListener('click', () => showSlide(3));

// Add click event listeners for minus buttons
document.querySelectorAll('.minus-btn').forEach(button => {
  button.addEventListener('click', () => {
    const pTag = button.closest('.pergunta').querySelector('.div-11');
    pTag.style.display = pTag.style.display === 'none' ? 'block' : 'none';
  });
});

// Add click event listeners for plus buttons
document.querySelectorAll('.plus-btn').forEach(button => {
  button.addEventListener('click', () => {
    const pTag = button.closest('.pergunta').querySelector('.div-11');
    const imgTag = button.querySelector('img');
    const isHidden = pTag.style.display === 'none';
    pTag.style.display = isHidden ? 'block' : 'none';
    imgTag.src = isHidden ? 'img/fi-rr-minus-small-11.svg' : 'img/fi_plus.svg';
  });
});

const abrirModalBotao = document.querySelector("#abrir-modal");
const fecharModalButton = document.querySelector("#fechar-modal");
const modal = document.querySelector("#overlay-lead");
const fade = document.querySelector("#fade");

const alternarModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[abrirModalBotao, fecharModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => alternarModal());
});



// const modal = document.getElementById('my-modal');
// const btnOpenModal = document.getElementById('btn-abrir-modal');

// // Open modal when clicking the button
// btnOpenModal.addEventListener('click', () => {
//   modal.style.display = 'flex';
// });

// // Close modal when clicking outside
// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });

// var acc = document.getElementsByClassName("question-accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

