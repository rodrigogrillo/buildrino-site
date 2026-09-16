// ============================================
// CONFIG — swap these when the real name/email/domain are ready
// ============================================
const CONFIG = {
  contactEmail: "hello@buildrino.com",
};

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  en: {
    "nav.work": "Work",
    "nav.process": "Process",
    "nav.packages": "Packages",
    "nav.contact": "Contact",
    "nav.cta": "Request a quote",

    "hero.title": "Websites that get your business found, built in days — not months.",
    "hero.sub": "I design and launch custom websites for independent professionals and small businesses — no templates, no bloated builders, just a fast site that looks like it cost ten times more.",
    "hero.ctaPrimary": "Start your project",
    "hero.ctaSecondary": "See the work",

    "strip.speed.title": "Live in about a week",
    "strip.speed.body": "From our first call to a published site — no months-long agency timelines.",
    "strip.custom.title": "Designed, not templated",
    "strip.custom.body": "Every site is built around your work — your colors, your services, your story.",
    "strip.mobile.title": "Mobile-first, always",
    "strip.mobile.body": "Most of your visitors arrive on a phone. Your site is built for that first.",

    "work.title": "Recent work",
    "work.sub": "Every project starts from a blank page — colors, layout, and structure built around what that specific business actually does, not a reused template.",
    "work.placeholder": "Screenshot coming soon",
    "work.physio.title": "Physical therapist",
    "work.physio.body": "A calm, warm site built around their own treatments and service area.",
    "work.dentist.title": "Dentist",
    "work.dentist.body": "A bright, precise site built around the dentist's own procedures, reviews, and insurance partners.",

    "process.title": "How a project runs",
    "process.sub": "Four steps, start to finish.",
    "process.s1.title": "We gather your content",
    "process.s1.body": "Services, photos, service area, contact details — a short call or form, on your time.",
    "process.s2.title": "I design around your brand",
    "process.s2.body": "Real colors from your logo, real copy about your work — never a generic template.",
    "process.s3.title": "You review, we refine",
    "process.s3.body": "You see the actual site before it goes live, and we adjust until it's right.",
    "process.s4.title": "We publish it",
    "process.s4.body": "Domain connected, basic SEO in place, and your site goes live on the web.",

    "packages.title": "Packages",
    "packages.sub": "Every project is quoted individually — here's what's typically included.",
    "packages.tag": "Most requested",
    "packages.cta": "Choose this package",
    "packages.basic.title": "Essential",
    "packages.basic.desc": "A focused one-page site to get you online and easy to find.",
    "packages.basic.f1": "Single-page site, built around your services",
    "packages.basic.f2": "Mobile-first design",
    "packages.basic.f3": "WhatsApp / contact form",
    "packages.basic.f4": "Basic SEO setup",
    "packages.full.title": "Complete",
    "packages.full.desc": "A full multi-section site with your portfolio, reviews, and service areas.",
    "packages.full.f1": "Multi-section site (services, results, reviews)",
    "packages.full.f2": "Custom domain connected",
    "packages.full.f3": "Google Business review integration",
    "packages.full.f4": "Full SEO setup + sitemap submission",

    "contact.title": "Let's scope your site",
    "contact.sub": "A few questions up front means a faster, more accurate quote — no back-and-forth needed to get started.",
    "contact.section1": "About you",
    "contact.name": "Name",
    "contact.profession": "Profession / area of work",
    "contact.region": "City / service area",
    "contact.whatsapp": "WhatsApp (with area code)",
    "contact.email": "Email",
    "contact.social.label": "Social media (optional)",
    "contact.social.instagram": "Instagram",
    "contact.social.facebook": "Facebook",
    "contact.social.linkedin": "LinkedIn",
    "contact.social.tiktok": "TikTok",
    "contact.social.youtube": "YouTube",
    "contact.social.other": "Other",
    "contact.section2": "Site &amp; visual identity",
    "contact.domain.label": "Do you already have a domain?",
    "contact.domain.opt1": "Yes, I already have one",
    "contact.domain.opt2": "Not yet",
    "contact.domain.opt3": "Not sure what that is",
    "contact.logo.label": "Do you already have a logo?",
    "contact.logo.opt1": "Yes",
    "contact.logo.opt2": "Not yet",
    "contact.logo.opt3": "I have one, but want to redo it",
    "contact.reference": "A site whose look you like (optional)",
    "contact.colors": "Preferred colors, if you have any in mind (optional)",
    "contact.section3": "What should the site include?",
    "contact.feat.services": "Services section",
    "contact.feat.portfolio": "Portfolio / results",
    "contact.feat.reviews": "Google reviews",
    "contact.feat.contactform": "Contact form",
    "contact.feat.partnerships": "Insurance / partnerships",
    "contact.feat.blog": "Blog",
    "contact.section4": "A bit more detail",
    "contact.services": "List your main services",
    "contact.message": "Anything else I should know?",
    "contact.note": "Photos, your logo file, and any other references can be attached when you reply to the email this opens.",
    "contact.send": "Send request",

    "footer.note": "Websites for independent professionals.",
  },

  pt: {
    "nav.work": "Trabalhos",
    "nav.process": "Como funciona",
    "nav.packages": "Pacotes",
    "nav.contact": "Contato",
    "nav.cta": "Solicitar orçamento",

    "hero.title": "Sites que fazem seu negócio ser encontrado, prontos em dias — não em meses.",
    "hero.sub": "Eu crio e publico sites sob medida para profissionais autônomos e pequenos negócios — sem templates genéricos, sem construtores inchados, só um site rápido que parece ter custado dez vezes mais.",
    "hero.ctaPrimary": "Comece seu projeto",
    "hero.ctaSecondary": "Ver os trabalhos",

    "strip.speed.title": "No ar em cerca de uma semana",
    "strip.speed.body": "Da primeira conversa até o site publicado — sem prazos de meses de agência.",
    "strip.custom.title": "Desenhado, não montado em template",
    "strip.custom.body": "Cada site é construído em torno do seu trabalho — suas cores, seus serviços, sua história.",
    "strip.mobile.title": "Mobile-first, sempre",
    "strip.mobile.body": "A maioria dos visitantes chega pelo celular. Seu site é pensado pra isso primeiro.",

    "work.title": "Trabalhos recentes",
    "work.sub": "Cada projeto começa do zero — cores, layout e estrutura pensados para o que aquele negócio realmente faz, nunca um template reaproveitado.",
    "work.placeholder": "Captura de tela em breve",
    "work.physio.title": "Fisioterapeuta",
    "work.physio.body": "Um site calmo e acolhedor, construído em torno dos próprios tratamentos e área de atendimento.",
    "work.dentist.title": "Dentista",
    "work.dentist.body": "Um site claro e preciso, construído em torno dos procedimentos, avaliações e convênios do próprio dentista.",

    "process.title": "Como funciona um projeto",
    "process.sub": "Quatro etapas, do início ao fim.",
    "process.s1.title": "Coletamos seu conteúdo",
    "process.s1.body": "Serviços, fotos, área de atendimento, contatos — uma conversa curta ou formulário, no seu tempo.",
    "process.s2.title": "Eu desenho em torno da sua marca",
    "process.s2.body": "Cores reais extraídas da sua logo, texto real sobre seu trabalho — nunca um template genérico.",
    "process.s3.title": "Você revisa, a gente ajusta",
    "process.s3.body": "Você vê o site de verdade antes de publicar, e ajustamos até ficar certo.",
    "process.s4.title": "Publicamos",
    "process.s4.body": "Domínio conectado, SEO básico configurado, e seu site vai ao ar.",

    "packages.title": "Pacotes",
    "packages.sub": "Cada projeto é orçado individualmente — isto é o que normalmente está incluso.",
    "packages.tag": "Mais pedido",
    "packages.cta": "Escolher esse pacote",
    "packages.basic.title": "Essencial",
    "packages.basic.desc": "Um site de uma página só, focado em te colocar no ar e fácil de encontrar.",
    "packages.basic.f1": "Site de página única, construído em torno dos seus serviços",
    "packages.basic.f2": "Design mobile-first",
    "packages.basic.f3": "WhatsApp / formulário de contato",
    "packages.basic.f4": "Configuração básica de SEO",
    "packages.full.title": "Completo",
    "packages.full.desc": "Um site completo com várias seções: portfólio, avaliações e áreas de atendimento.",
    "packages.full.f1": "Site com várias seções (serviços, resultados, avaliações)",
    "packages.full.f2": "Domínio próprio conectado",
    "packages.full.f3": "Integração com avaliações do Google",
    "packages.full.f4": "SEO completo + envio de sitemap",

    "contact.title": "Vamos estruturar o seu site",
    "contact.sub": "Algumas perguntas agora significam um orçamento mais rápido e preciso — sem ida e volta pra começar.",
    "contact.section1": "Sobre você",
    "contact.name": "Nome",
    "contact.profession": "Profissão / área de atuação",
    "contact.region": "Cidade(s) / área de atendimento",
    "contact.whatsapp": "WhatsApp (com DDD)",
    "contact.email": "E-mail",
    "contact.social.label": "Redes sociais (opcional)",
    "contact.social.instagram": "Instagram",
    "contact.social.facebook": "Facebook",
    "contact.social.linkedin": "LinkedIn",
    "contact.social.tiktok": "TikTok",
    "contact.social.youtube": "YouTube",
    "contact.social.other": "Outra",
    "contact.section2": "Site e identidade visual",
    "contact.domain.label": "Você já tem um domínio?",
    "contact.domain.opt1": "Sim, já tenho",
    "contact.domain.opt2": "Ainda não",
    "contact.domain.opt3": "Não sei o que é isso",
    "contact.logo.label": "Você já tem uma logo?",
    "contact.logo.opt1": "Sim",
    "contact.logo.opt2": "Ainda não",
    "contact.logo.opt3": "Tenho, mas quero refazer",
    "contact.reference": "Algum site com um visual que você gosta (opcional)",
    "contact.colors": "Cores de preferência, se já tiver em mente (opcional)",
    "contact.section3": "O que o site precisa ter?",
    "contact.feat.services": "Seção de serviços",
    "contact.feat.portfolio": "Portfólio / resultados",
    "contact.feat.reviews": "Avaliações do Google",
    "contact.feat.contactform": "Formulário de contato",
    "contact.feat.partnerships": "Convênios / parcerias",
    "contact.feat.blog": "Blog",
    "contact.section4": "Mais alguns detalhes",
    "contact.services": "Liste seus principais serviços",
    "contact.message": "Mais alguma coisa que eu deveria saber?",
    "contact.note": "Fotos, o arquivo da sua logo e outras referências podem ser anexados quando você responder ao e-mail que isso abre.",
    "contact.send": "Enviar solicitação",

    "footer.note": "Sites para profissionais autônomos.",
  },
};

// ============================================
// LANGUAGE DETECTION + APPLY
// ============================================
function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved && translations[saved]) return saved;
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("pt") ? "pt" : "en";
}

function applyLang(lang) {
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text) el.innerHTML = text;
  });
  document.querySelectorAll("[data-lang-label]").forEach((el) => {
    el.classList.toggle("is-active", el.getAttribute("data-lang-label") === lang);
  });
  localStorage.setItem("lang", lang);
  currentLang = lang;
}

let currentLang = detectLang();
applyLang(currentLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLang(currentLang === "en" ? "pt" : "en");
});

// ============================================
// MOBILE MENU
// ============================================
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// ============================================
// QUOTE MODAL
// ============================================
const quoteModal = document.getElementById("quote-modal");
const quoteModalClose = document.getElementById("quote-modal-close");
let lastFocusedBeforeModal = null;

function openQuoteModal() {
  lastFocusedBeforeModal = document.activeElement;
  quoteModal.hidden = false;
  document.body.classList.add("modal-open");
  const firstField = quoteModal.querySelector('input[name="name"]');
  firstField?.focus();
}

function closeQuoteModal() {
  quoteModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedBeforeModal instanceof HTMLElement) lastFocusedBeforeModal.focus();
}

document.querySelectorAll(".js-open-quote").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openQuoteModal();
  });
});

quoteModalClose?.addEventListener("click", closeQuoteModal);
quoteModal?.querySelector("[data-modal-close]")?.addEventListener("click", closeQuoteModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !quoteModal.hidden) closeQuoteModal();
});

// ============================================
// FORM VALIDATION MESSAGES (match the selected site language,
// not the browser's own locale, which HTML5 defaults to)
// ============================================
const validationMessages = {
  en: {
    required: "Please fill in this field.",
    email: "Please enter a valid email address.",
  },
  pt: {
    required: "Por favor, preencha este campo.",
    email: "Por favor, insira um endereço de e-mail válido.",
  },
};

function applyValidationMessage(field) {
  const V = validationMessages[currentLang] || validationMessages.en;
  if (field.validity.valueMissing) {
    field.setCustomValidity(V.required);
  } else if (field.validity.typeMismatch && field.type === "email") {
    field.setCustomValidity(V.email);
  } else {
    field.setCustomValidity("");
  }
}

document.querySelectorAll("#contact-form [required]").forEach((field) => {
  field.addEventListener("invalid", () => applyValidationMessage(field));
  field.addEventListener("input", () => field.setCustomValidity(""));
});

// ============================================
// SOCIAL MEDIA CHECKBOXES -> reveal field on check
// ============================================
document.querySelectorAll(".social-toggle").forEach((checkbox) => {
  const input = document.getElementById(checkbox.dataset.target);
  checkbox.addEventListener("change", () => {
    input.hidden = !checkbox.checked;
    if (checkbox.checked) {
      input.focus();
    } else {
      input.value = "";
    }
  });
});

// ============================================
// CONTACT FORM -> mailto (with visible fallback)
// ============================================
const emailLabels = {
  en: {
    name: "Name", profession: "Profession", region: "City / service area",
    whatsapp: "WhatsApp", email: "Email", social: "Social media",
    domain: "Has a domain", logo: "Has a logo", reference: "Reference site",
    colors: "Preferred colors", features: "Wants on the site",
    services: "Main services", message: "Additional notes",
    subject: "Quote request",
  },
  pt: {
    name: "Nome", profession: "Profissão", region: "Cidade / área de atendimento",
    whatsapp: "WhatsApp", email: "E-mail", social: "Redes sociais",
    domain: "Já tem domínio", logo: "Já tem logo", reference: "Site de referência",
    colors: "Cores de preferência", features: "Quer no site",
    services: "Principais serviços", message: "Observações",
    subject: "Solicitação de orçamento",
  },
};

const fallbackText = {
  en: {
    title: "Your email app should have opened in a new tab.",
    sub: (email) => `If nothing happened, copy the message below and send it to ${email}.`,
    copy: "Copy message",
    copied: "Copied!",
    open: "Open email app",
  },
  pt: {
    title: "Seu aplicativo de e-mail deve ter aberto em uma nova aba.",
    sub: (email) => `Se nada aconteceu, copie a mensagem abaixo e envie para ${email}.`,
    copy: "Copiar mensagem",
    copied: "Copiado!",
    open: "Abrir aplicativo de e-mail",
  },
};

document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const get = (key) => (data.get(key) || "").toString().trim();
  const features = data.getAll("features").join(", ") || "-";
  const L = emailLabels[currentLang] || emailLabels.en;

  const socialParts = [];
  document.querySelectorAll(".social-toggle:checked").forEach((checkbox) => {
    const input = document.getElementById(checkbox.dataset.target);
    const label = checkbox.closest(".social-row").querySelector(".checkbox span").textContent;
    const value = (input?.value || "").trim();
    socialParts.push(value ? `${label} (${value})` : label);
  });
  const social = socialParts.length ? socialParts.join(", ") : "-";

  const lines = [
    `${L.name}: ${get("name")}`,
    `${L.profession}: ${get("profession")}`,
    `${L.region}: ${get("region")}`,
    `${L.whatsapp}: ${get("whatsapp")}`,
    `${L.email}: ${get("email")}`,
    `${L.social}: ${social}`,
    "",
    `${L.domain}: ${get("domain")}`,
    `${L.logo}: ${get("logo")}`,
    `${L.reference}: ${get("reference")}`,
    `${L.colors}: ${get("colors")}`,
    "",
    `${L.features}: ${features}`,
    "",
    `${L.services}: ${get("services")}`,
    `${L.message}: ${get("message")}`,
  ];
  const plainBody = lines.join("\n");
  const subject = encodeURIComponent(`${L.subject} — ${get("name")}`);
  const mailtoUrl = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${encodeURIComponent(plainBody)}`;

  // Try to open the person's email app in a new tab via a real link click —
  // more reliable across browsers than window.open() for external protocols.
  const tempLink = document.createElement("a");
  tempLink.href = mailtoUrl;
  tempLink.target = "_blank";
  tempLink.rel = "noopener";
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);

  // Always show a visible fallback too — mailto silently does nothing if
  // the device has no email app configured, so the person always gets a
  // copyable version of their message as a backup.
  const FB = fallbackText[currentLang] || fallbackText.en;
  const fallback = document.getElementById("brief-fallback");
  document.getElementById("fallback-title").textContent = FB.title;
  document.getElementById("fallback-sub").textContent = FB.sub(CONFIG.contactEmail);
  document.getElementById("fallback-text").value = plainBody;
  document.getElementById("fallback-copy-btn").textContent = FB.copy;
  const openLink = document.getElementById("fallback-mailto-link");
  openLink.href = mailtoUrl;
  openLink.textContent = FB.open;

  fallback.hidden = false;
  fallback.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("fallback-copy-btn")?.addEventListener("click", () => {
  const textarea = document.getElementById("fallback-text");
  const btn = document.getElementById("fallback-copy-btn");
  const FB = fallbackText[currentLang] || fallbackText.en;
  navigator.clipboard?.writeText(textarea.value).then(() => {
    btn.textContent = FB.copied;
    setTimeout(() => { btn.textContent = FB.copy; }, 2000);
  });
});
