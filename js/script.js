import { saveData } from './server/api.js';

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

document.addEventListener('DOMContentLoaded', function() {
  let currentSlideM = 1;
  const totalSlidesM = 3;
  let slideInterval; // Declarar fora para poder limpar o intervalo

  function showSlideM(slideIndex) {
    for (let i = 1; i <= totalSlidesM; i++) {
      const slide = document.getElementById(`id_slide_${i}_m`);
      if (slide) {
        slide.style.display = i === slideIndex ? 'flex' : 'none';
      }
      
      // Atualiza os botões do slider
      const buttons = [
        document.getElementById(`button_slider_${i}_m`),
        document.getElementById(`button_slider_${i + 3}_m`),
        document.getElementById(`button_slider_${i + 6}_m`)
      ];
      
      buttons.forEach(btn => {
        if (btn) {
          btn.classList.toggle('active', i === slideIndex);
        }
      });
    }
  }

  function nextSlideM() {
    currentSlideM = (currentSlideM % totalSlidesM) + 1;
    showSlideM(currentSlideM);
  }

  // Inicializa o primeiro slide
  showSlideM(currentSlideM);

  // Adiciona event listeners para os botões
  for (let i = 1; i <= 9; i++) {
    const btn = document.getElementById(`button_slider_${i}_m`);
    if (btn) {
      btn.addEventListener('click', () => {
        const targetSlide = ((i - 1) % 3) + 1;
        currentSlideM = targetSlide;
        showSlideM(targetSlide);
        
        // Reseta o intervalo quando clica no botão
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlideM, 6000); // Ajustado para 6000ms
      });
    }
  }

  // Inicia o intervalo inicial
  slideInterval = setInterval(nextSlideM, 6000); // Ajustado para 6000ms

  // Controle de pausa no hover
  const slideContainer = document.querySelector('.slide-mobile');
  if (slideContainer) {
    slideContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlideM, 6000); // Ajustado para 6000ms
    });
  }
});

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

// Add click event listeners for minus buttons
document.querySelectorAll('.minus-btn').forEach(button => {
  button.addEventListener('click', () => {
      const pTag = button.closest('.pergunta').querySelector('.div-5');
      pTag.style.display = pTag.style.display === 'none' ? 'block' : 'none';
  });
});

// Add click event listeners for plus buttons
document.querySelectorAll('.plus-btn').forEach(button => {
  button.addEventListener('click', () => {
      const pTag = button.closest('.pergunta').querySelector('.div-5');
      const imgTag = button.querySelector('img');
      const isHidden = pTag.style.display === 'none';
      pTag.style.display = isHidden ? 'block' : 'none';
      imgTag.src = isHidden ? 'img/fi-rr-minus-small-11.svg' : 'img/fi_plus.svg';
  });
});

const modal = document.querySelector("#overlay-lead");
const fade = document.querySelector("#fade");

if (modal && fade) {
    const alternarModal = () => {
        [modal, fade].forEach((el) => el.classList.toggle("hide"));
    };

    // Open modal buttons
    document.querySelectorAll('.btn-open-modal')?.forEach(button => {
        button.addEventListener('click', () => alternarModal());
    });

    // Close modal buttons - using class instead of ID
    document.querySelectorAll('.btn-close-modal')?.forEach(button => {
        button.addEventListener('click', () => alternarModal());
    });

    // Close on fade click
    fade.addEventListener('click', () => alternarModal());
}

document.querySelectorAll('form')?.forEach(form => {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        try {
            const nameInput = this.querySelector('#name');
            const dddInput = this.querySelector('#ddd');
            const phoneInput = this.querySelector('#phone');
            const emailInput = this.querySelector('#email');
            const musicSelect = this.querySelector('#music-affiliation');

            // Validate if elements exist
            if (!nameInput || !dddInput || !phoneInput || !emailInput || !musicSelect) {
                console.error("Form elements not found");
                alert("Erro no formulário: elementos não encontrados");
                return;
            }

            // Clean phone numbers from any non-digit characters
            const cleanDDD = dddInput.value.replace(/\D/g, '');
            const cleanPhone = phoneInput.value.replace(/\D/g, '');

            // Validate DDD (2 digits)
            if (!cleanDDD || cleanDDD.length !== 2) {
                alert("Por favor, insira um DDD válido (2 dígitos)");
                dddInput.focus();
                return;
            }

            // Validate phone (just check for 8 or 9 digits)
            if (!cleanPhone || (cleanPhone.length !== 8 && cleanPhone.length !== 9)) {
                alert("Por favor, insira um telefone válido (8 ou 9 dígitos)");
                phoneInput.focus();
                return;
            }

            // Get the selected option from music select
            const selectedOption = musicSelect.options[musicSelect.selectedIndex];

            if (!selectedOption || !selectedOption.value || !selectedOption.text) {
                alert("Por favor, selecione sua conexão com a música");
                musicSelect.focus();
                return;
            }

            const formData = {
                name: nameInput.value.trim(),
                ddd: cleanDDD,
                phone: cleanPhone,
                email: emailInput.value.trim(),
                connectionMusic: {
                    value: selectedOption.value,
                    text: selectedOption.text
                }
            };

            console.log("Enviando dados:", formData);
            
            try {
                const response = await saveData(formData);
                console.log("Resposta:", response);
                // Primeiro reseta o formulário
                form.reset();
                // Depois mostra o alerta
                alert("Dados enviados com sucesso!");
                // Por último fecha a modal
                if (modal && fade) {
                    modal.classList.add('hide');
                    fade.classList.add('hide');
                }
            } catch (error) {
                alert(error.message || "Ocorreu um erro ao salvar os dados. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error("Erro de validação:", error);
            alert(error.message || "Por favor, verifique os dados informados.");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('#music-affiliation');
    if (select) {
        select.addEventListener('change', function() {
            if (this.value) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }
});   

const btnMobile = document.getElementById('btn-mobile');
if (btnMobile) {
    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        if (nav) {
            nav.classList.toggle('active');
            const active = nav.classList.contains('active');
            event.currentTarget.setAttribute('aria-expanded', active);
            event.currentTarget.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');
        }
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
}

const nav = document.getElementById('nav');
if (nav) {
    document.querySelectorAll('#nav a')?.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}