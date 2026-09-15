// Dados dos projetos exibidos na grade de Portfólio
const projetos = [
  {
    nome: "FEITORIA",
    tipo: "Marketplace multi-tenant",
    categoria: "web",
    descricao: "Produtoras artesanais dependiam só de grupos de WhatsApp e Instagram para vender. Desenvolveu marketplace multi-tenant completo com catálogo, carrinho e checkout via Mercado Pago, permitindo que cada produtora tenha sua própria loja dentro da plataforma.",
    stack: ["Next.js", "TypeScript", "Supabase", "Mercado Pago", "Vercel"],
    link: "https://somosfeitoria.com.br",
    imagens: [
      "images/feitoria/inicial.jpg",
      "images/feitoria/carrinho.jpg",
      "images/feitoria/financeiro.jpg",
      "images/feitoria/painel adm.jpg",
      "images/feitoria/produtoras.jpg",
      "images/feitoria/footer.jpg"
    ]
  },
  {
    nome: "Vetor",
    tipo: "SaaS para freelancers",
    categoria: "sistema",
    descricao: "Desenvolvedores freelancers sem controle organizado de clientes, projetos e financeiro. Criou SaaS próprio com funil de prospecção, gestão de projetos, dashboard financeiro com metas mensais e assinatura recorrente via Mercado Pago.",
    stack: ["Next.js", "TypeScript", "Neon", "Mercado Pago", "Vercel"],
    link: "https://vetordev.com.br",
    imagens: [
      "images/vetor/tela inicial.jpg",
      "images/vetor/dashboard.jpg",
      "images/vetor/clientes.jpg",
      "images/vetor/financeiro.jpg",
      "images/vetor/simulador.jpg"
    ]
  },
  {
    nome: "Opção Contabilidade",
    tipo: "Sistema de gestão",
    categoria: "sistema",
    descricao: "Escritório contábil com centenas de clientes controlando obrigações fiscais manualmente, com risco de perder prazos. Desenvolveu sistema completo com portal do cliente, controle automatizado de prazos fiscais e alertas automáticos por e-mail.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    link: "https://www.opcaocontabilbsb.com.br/",
    linkTexto: "Ver site",
    linkNota: "Sistema de gestão com acesso restrito mediante autenticação.",
    imagens: [
      "images/opção contabil/01-dashboard.png",
      "images/opção contabil/02-honorarios.jpeg",
      "images/opção contabil/03-equipe.jpeg",
      "images/opção contabil/04-clientes.png",
      "images/opção contabil/05-controle-envios.png",
      "images/opção contabil/06-historico.png",
      "images/opção contabil/07-convidar-membro.png",
      "images/opção contabil/08-dre.png",
      "images/opção contabil/09-novo-comunicado.png",
      "images/opção contabil/10-comunicados.png",
      "images/opção contabil/11-prazos-kanban.png",
      "images/opção contabil/12-envio-mensal.png",
      "images/opção contabil/13-novo-cliente.png"
    ]
  },
  {
    nome: "Isabella Machado",
    tipo: "Site para psicóloga",
    categoria: "web",
    descricao: "Psicóloga clínica sem presença digital profissional para atrair novos pacientes. Criou site com identidade visual própria, blog administrável pela própria cliente e painel de gestão de conteúdo.",
    stack: ["Next.js", "TypeScript", "Neon", "PostgreSQL", "Vercel"],
    link: "https://isamachadopsi.com.br",
    imagens: [
      "images/isabella machado/01.png",
      "images/isabella machado/02.png",
      "images/isabella machado/03.png",
      "images/isabella machado/04.png",
      "images/isabella machado/05.png"
    ]
  },
  {
    nome: "Sublime Coquetelaria",
    tipo: "Site premium + agendamento",
    categoria: "web",
    descricao: "Coquetelaria premium recebia pedidos de orçamento pelo WhatsApp sem organização, perdendo solicitações. Desenvolveu site com sistema de agendamento integrado, calendário de disponibilidade e painel administrativo para o cliente gerenciar os eventos.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Drizzle ORM", "Neon"],
    link: "https://sublime-orpin.vercel.app/",
    linkTexto: "Ver site",
    imagens: [
      "images/sublime/01.png",
      "images/sublime/02.png",
      "images/sublime/03.png"
    ]
  },
  {
    nome: "Dr. Rodrigo Corrêa",
    tipo: "Site institucional + blog",
    categoria: "web",
    descricao: "Advogado criminalista sem presença digital para atrair clientes e publicar conteúdo. Desenvolveu site institucional com blog administrável pelo próprio cliente, sem depender de programador para publicar artigos.",
    stack: ["Next.js", "TypeScript", "Neon", "Drizzle ORM", "NextAuth"],
    link: "https://rodrigo-correa-adv.vercel.app/",
    linkTexto: "Ver site",
    imagens: [
      "images/dr rodrigo correa/03.png",
      "images/dr rodrigo correa/04.png",
      "images/dr rodrigo correa/05.png",
      "images/dr rodrigo correa/descrição.png",
      "images/dr rodrigo correa/yopo.png"
    ]
  },
  {
    nome: "Juh Fiche",
    tipo: "Site para confeitaria",
    categoria: "web",
    descricao: "Diretora criativa para marcas artesanais sem site profissional para apresentar seu trabalho e atrair clientes. Desenvolveu site multi-página com identidade visual forte, apresentando suas áreas de atuação e processo de trabalho.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jufiche.com.br",
    imagens: [
      "images/ju fiche/tela 1 juh fiche.png",
      "images/ju fiche/tela 2 juh fiche.png",
      "images/ju fiche/03.png",
      "images/ju fiche/04.png",
      "images/ju fiche/05.png"
    ]
  },
  {
    nome: "Flamingo Tabacaria",
    tipo: "Site institucional",
    categoria: "web",
    descricao: "Tabacaria premium sem presença digital para apresentar produtos e atrair novos clientes. Desenvolveu site institucional moderno alinhado à identidade da marca.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://flamingotab.com.br",
    imagens: [
      "images/flamingo/TELA 1 FLAMINGO.png",
      "images/flamingo/TELA 2 FLAMINGO.png",
      "images/flamingo/TELA 3 FLAMINGO.png"
    ]
  },
  {
    nome: "QPizza",
    tipo: "Site para pizzaria",
    categoria: "web",
    descricao: "Pizzaria artesanal precisava de presença digital com formulários de contato e feedback integrados. Desenvolveu site com formulários via Formspree e identidade visual consistente com a marca.",
    stack: ["HTML", "CSS", "JavaScript", "Formspree"],
    link: "https://pipzzariaqpizza.com.br",
    imagens: [
      "images/qpizza/tela 1 qpizza.png",
      "images/qpizza/tela 2 qpizza.png",
      "images/qpizza/tela 3 qpizza.png",
      "images/qpizza/tela 4 qpizza.png",
      "images/qpizza/tela 5 qpizza.png"
    ]
  },
  {
    nome: "BeautyHub",
    tipo: "App Android",
    categoria: "app",
    descricao: "Salão de beleza sem sistema integrado para agendamentos, clientes e financeiro. Desenvolveu app Android nativo reunindo tudo em um único lugar.",
    stack: ["Kotlin", "Firebase", "Android"],
    link: null,
    linkTexto: "Acesso restrito",
    video: "images/BeautyHub/BeautyHub.mp4"
  }
];

// Controlador de slideshow com fade, reutilizado pelo card e pelo lightbox
function createSlideshow(imgs, interval = 3000) {
  let current = 0;
  let timer = null;

  function show(index) {
    imgs[current].classList.remove('active');
    current = (index + imgs.length) % imgs.length;
    imgs[current].classList.add('active');
  }

  function start() {
    stop();
    if (imgs.length <= 1) return;
    timer = setInterval(() => show(current + 1), interval);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  return {
    start,
    stop,
    next: () => { show(current + 1); start(); },
    prev: () => { show(current - 1); start(); }
  };
}

function buildLinkAction(projeto, linkClass) {
  let html = projeto.link
    ? `<a href="${projeto.link}" target="_blank" rel="noopener" class="${linkClass}">Ver site ↗</a>`
    : `<span class="portfolio-card-restricted">${projeto.linkTexto || 'Acesso restrito'}</span>`;
  if (projeto.linkNota) {
    html += `<p class="portfolio-card-note">${projeto.linkNota}</p>`;
  }
  return html;
}

function buildMedia(projeto, container) {
  container.innerHTML = '';
  if (projeto.video) {
    const video = document.createElement('video');
    video.src = projeto.video;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    container.appendChild(video);
    return null;
  }
  const imgs = projeto.imagens.map((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${projeto.nome} ${i + 1}`;
    if (i === 0) img.classList.add('active');
    return img;
  });
  imgs.forEach(img => container.appendChild(img));
  const slideshow = createSlideshow(imgs);
  slideshow.start();
  return slideshow;
}

// Monta a grade de cards de projeto a partir do array `projetos`
(function () {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const lightbox = document.getElementById('portfolio-lightbox');
  const lightboxMedia = lightbox && lightbox.querySelector('.lightbox-media');
  const lightboxTitle = lightbox && lightbox.querySelector('.lightbox-title');
  const lightboxType = lightbox && lightbox.querySelector('.lightbox-type');
  const lightboxDesc = lightbox && lightbox.querySelector('.lightbox-desc');
  const lightboxStack = lightbox && lightbox.querySelector('.lightbox-stack');
  const lightboxLinkWrap = lightbox && lightbox.querySelector('.lightbox-footer-link');
  const lightboxPrev = lightbox && lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox && lightbox.querySelector('.lightbox-next');
  let lightboxSlideshow = null;

  function openLightbox(projeto) {
    if (!lightbox) return;

    lightboxTitle.textContent = projeto.nome;
    lightboxType.textContent = projeto.tipo;
    lightboxDesc.textContent = projeto.descricao || '';
    lightboxStack.innerHTML = projeto.stack.map(s => `<span class="portfolio-badge">${s}</span>`).join('');
    lightboxLinkWrap.innerHTML = buildLinkAction(projeto, 'lightbox-link');

    if (lightboxSlideshow) lightboxSlideshow.stop();
    lightboxSlideshow = buildMedia(projeto, lightboxMedia);

    const hideNav = !lightboxSlideshow;
    lightboxPrev.classList.toggle('is-hidden', hideNav);
    lightboxNext.classList.toggle('is-hidden', hideNav);

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lightboxSlideshow) { lightboxSlideshow.stop(); lightboxSlideshow = null; }
    lightboxMedia.innerHTML = '';
  }

  if (lightbox) {
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => lightboxSlideshow && lightboxSlideshow.prev());
    lightboxNext.addEventListener('click', () => lightboxSlideshow && lightboxSlideshow.next());
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxSlideshow) lightboxSlideshow.prev();
      if (e.key === 'ArrowRight' && lightboxSlideshow) lightboxSlideshow.next();
    });
  }

  projetos.forEach(projeto => {
    const card = document.createElement('article');
    card.className = 'portfolio-card';
    if (projeto.categoria) card.dataset.categoria = projeto.categoria;

    const thumb = document.createElement('div');
    thumb.className = 'portfolio-card-thumb';
    buildMedia(projeto, thumb);

    const body = document.createElement('div');
    body.className = 'portfolio-card-body';

    const head = document.createElement('div');
    head.className = 'portfolio-card-head';
    head.innerHTML = `<h3>${projeto.nome}</h3><span class="portfolio-card-type">${projeto.tipo}</span>`;

    const desc = document.createElement('p');
    desc.className = 'portfolio-card-desc';
    desc.textContent = projeto.descricao || '';

    const more = document.createElement('button');
    more.type = 'button';
    more.className = 'portfolio-card-more';
    more.textContent = 'Ver detalhes ↗';
    more.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(projeto);
    });

    const stack = document.createElement('div');
    stack.className = 'portfolio-card-stack';
    stack.innerHTML = projeto.stack.map(s => `<span class="portfolio-badge">${s}</span>`).join('');

    const action = document.createElement('div');
    action.className = 'portfolio-card-action';
    action.innerHTML = buildLinkAction(projeto, 'portfolio-card-link');

    body.appendChild(head);
    body.appendChild(desc);
    body.appendChild(more);
    body.appendChild(stack);
    body.appendChild(action);

    card.appendChild(thumb);
    card.appendChild(body);
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openLightbox(projeto);
    });
    grid.appendChild(card);
  });
})();
