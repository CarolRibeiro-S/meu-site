// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Modal
const modal = document.getElementById('contactModal');
const chatIcon = document.getElementById('chat-icon');
const closeBtn = document.querySelector('.closeBtn');

const openModal = () => { modal.style.display = 'flex'; };
const closeModal = () => { modal.style.display = 'none'; };

document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', openModal);
});

chatIcon.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          alert(data.errors.map(err => err.message).join(', '));
        } else {
          alert('Oops! There was a problem submitting your form');
        }
      });
    }
  }).catch(() => alert('Oops! There was a problem submitting your form'));
});

// Project filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'flex' : 'none';
    });
  });
});

// Typing animation
(function () {
  const el = document.querySelector('.typing-text');
  if (!el) return;
  const texts = ['Developer Full-Stack', 'Software Engineer'];
  let textIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = texts[textIdx];
    el.textContent = deleting
      ? current.slice(0, charIdx - 1)
      : current.slice(0, charIdx + 1);
    deleting ? charIdx-- : charIdx++;

    if (!deleting && charIdx === current.length) {
      setTimeout(() => { deleting = true; tick(); }, 2000);
      return;
    }
    if (deleting && charIdx === 0) {
      deleting = false;
      textIdx = (textIdx + 1) % texts.length;
    }
    setTimeout(tick, deleting ? 45 : 75);
  }

  tick();
})();

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav ul li a');

const highlightActiveLink = () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightActiveLink);
window.addEventListener('load', highlightActiveLink);

// Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme switcher
document.querySelector('.theme-switcher').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Services accordion
document.querySelectorAll('.acc-header').forEach(header => {
  header.addEventListener('click', function () {
    const item = this.closest('.acc-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.acc-header').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

// Project Sliders
document.querySelectorAll('.project-slider').forEach(slider => {
  const images = slider.querySelectorAll('img');
  if (images.length <= 1) return;

  let currentIdx = 0;
  const interval = parseInt(slider.dataset.interval) || 3000;

  setInterval(() => {
    images[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % images.length;
    images[currentIdx].classList.add('active');
  }, interval);
});
