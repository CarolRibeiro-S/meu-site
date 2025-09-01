document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Check if the href is one of the service modals
        if (href === '#s-uiux' || href === '#s-frontend' || href === '#s-backend') {
            // Allow default behavior for service modals (CSS :target will handle it)
            // No e.preventDefault() here
        } else {
            // For other internal links, prevent default and smooth scroll
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
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
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const action = form.action;
    fetch(action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "))
                } else {
                    alert('Oops! There was a problem submitting your form')
                }
            })
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form')
    });
});




// Lógica de Destaque da Seção Ativa
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

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



// Theme switcher
const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Service Modals (JS closing)
document.querySelectorAll('.smodal-close').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        window.location.hash = '#servicos'; // Go to #servicos section after closing the modal
    });
});

// Close service modals when clicking outside the smodal-box
document.querySelectorAll('.smodal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) { // Check if the click was directly on the modal overlay
            window.location.hash = '#servicos'; // Go to #servicos section after closing the modal
        }
    });
});