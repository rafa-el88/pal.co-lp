AOS.init();

let currentSlide = 1;
const totalSlides = 3;

function showSlide(slideIndex) {
    for (let i = 1; i <= totalSlides; i++) {
        document.getElementById(`id_slide_${i}`).style.display = i === slideIndex ? 'inline-flex' : 'none';
        document.getElementById(`button_slider_${i}`).classList.toggle('active', i === slideIndex);
        document.getElementById(`button_slider_${i + 3}`).classList.toggle('active', i === slideIndex);
        document.getElementById(`button_slider_${i + 6}`).classList.toggle('active', i === slideIndex);
    }
}

function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
}

setInterval(nextSlide, 6000); // Change slide every 6 seconds

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

const modal = document.querySelector("#overlay-lead");
const fade = document.querySelector("#fade");

const alternarModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

document.querySelectorAll('.btn-open-modal').forEach(button => {
    button.addEventListener('click', () => alternarModal());
});

document.querySelector("#btn-close-modal").addEventListener('click', () => alternarModal());
fade.addEventListener('click', () => alternarModal());

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
      nomeCompleto: form.querySelector('input[placeholder="Nome completo*"]').value,
      ddd: form.querySelector('input[placeholder="DDD*"]').value,
      telefone: form.querySelector('input[placeholder="Telefone*"]').value,
      email: form.querySelector('input[placeholder="Email*"]').value,
      vinculoMusica: {
        value: form.querySelector('#music-affiliation').value,
        text: form.querySelector('#music-affiliation option:checked').textContent
      }
    };

    // Call the saveFormData function from api.js
    saveFormData(formData)
      .then(data => {
        // Handle the response from the API (e.g., show a success message)
        console.log("Data saved successfully:", data);
        alert("Dados enviados com sucesso!"); //replace with a better UX
      })
      .catch(error => {
        // Handle errors (e.g., show an error message)
        console.error("Error saving data:", error);
        alert("Ocorreu um erro ao salvar os dados."); //replace with a better UX
      });
});

document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('#music-affiliation');
    
    // Atualiza o texto do placeholder quando uma opção é selecionada
    select.addEventListener('change', function() {
      if (this.value) {
        this.classList.add('selected');
      } else {
        this.classList.remove('selected');
      }
    });
});

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// Fecha o menu quando um item for clicado
document.querySelectorAll('#nav a').forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('active');
  });
});