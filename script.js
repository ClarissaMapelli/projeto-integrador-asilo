document.addEventListener('DOMContentLoaded', () => {

  // Menu no celular
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Dados dos slides
  const slidesData = [
    { img: 'images/slide1.png', title: 'Acolhimento e Esperança', text: 'Oferecendo dignidade e cuidado para quem mais precisa.' },
    { img: 'images/slide2.png', title: 'Nossa Missão', text: 'Garantir um envelhecimento ativo e saudável há mais de 140 anos.' },
    { img: 'images/slide3.jpg', title: 'Sua Ajuda Transforma', text: 'Cada doação contribui para a saúde e bem-estar de todos.' }
  ];

  const slideshow = document.getElementById('slideshow');

  // Cria os slides
  slidesData.forEach((item) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url('${item.img}')`;

    const content = document.createElement('div');
    content.className = 'slide-content';
    content.innerHTML = `<h1>${item.title}</h1><p>${item.text}</p><a href="#doacao" class="btn btn-doar-header">Faça Sua Doação</a>`;

    slide.appendChild(content);
    slideshow.appendChild(slide);
  });

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  showSlide(0);
  setInterval(nextSlide, 7000);

  // Formulário
  const form = document.getElementById('formContato');
  const msg = document.getElementById('msgRetorno');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      msg.textContent = 'Por favor, preencha todos os campos.';
      msg.style.color = 'red';
      return;
    }

    msg.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
    msg.style.color = 'green';
    form.reset();
  });
});
