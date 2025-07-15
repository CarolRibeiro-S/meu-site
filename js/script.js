document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
}, {
    threshold: 0
});

        // Fechar o sidebar ao clicar em um link (se estiver aberto)
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});


const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const chatIcon = document.getElementById("chat-icon");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

const openModal = function() {
    modal.style.display = "block";
}

openModalBtn.onclick = openModal;
chatIcon.onclick = openModal;

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
});


const codeCanvas = document.getElementById('code-background');
const codeCtx = codeCanvas.getContext('2d');

codeCanvas.width = window.innerWidth;
codeCanvas.height = window.innerHeight;

const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>/?';
const fontSize = 16;
const rows = codeCanvas.height / fontSize;

const drops = [];
for (let i = 0; i < rows; i++) {
    drops[i] = Math.random() * codeCanvas.width / fontSize;
}

function drawCodeBackground() {
    codeCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    codeCtx.fillRect(0, 0, codeCanvas.width, codeCanvas.height);

    codeCtx.fillStyle = '#00aaff';
    codeCtx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        codeCtx.fillText(text, drops[i] * fontSize, i * fontSize);

        if (drops[i] * fontSize > codeCanvas.width && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawCodeBackground, 33);

window.addEventListener('resize', () => {
    codeCanvas.width = window.innerWidth;
    codeCanvas.height = window.innerHeight;
    const newRows = codeCanvas.height / fontSize;
    drops.length = newRows;
    for (let i = 0; i < newRows; i++) {
        if (drops[i] === undefined) {
            drops[i] = Math.random() * codeCanvas.width / fontSize;
        }
    }
});

// Lógica do Hamburger e Sidebar
const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
});

// Lógica de Destaque da Seção Ativa
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#sidebar nav ul li a');

const highlightActiveLink = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) { // Ajuste para quando a seção entra na tela
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightActiveLink);
window.addEventListener('load', highlightActiveLink); // Para destacar a seção inicial ao carregar

// Lógica do Botão Voltar ao Topo
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Mostra o botão após rolar 300px
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});