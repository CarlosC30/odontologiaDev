/* MENU MOBILE*/
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

/*FECHAR MENU AO CLICAR NO LINK (MOBILE) */
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

/*SCROLL SUAVE + LINK ATIVO */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* INTERAÇÃO SERVIÇOS */
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("selected");
  });
});

/* FORMULÁRIO (VALIDAÇÃO SIMPLES) */
const form = document.querySelector(".contact-form-grid");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[name='name']").value.trim();
  const phone = form.querySelector("input[name='phone']").value.trim();

  if (name === "" || phone === "") {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  alert("Mensagem enviada com sucesso! Entraremos em contato 😊");
  form.reset();
});
