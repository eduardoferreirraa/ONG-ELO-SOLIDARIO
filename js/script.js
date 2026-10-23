// abrir modal: botoes que tem data-modal="id-do-modal"
var botoesModal = document.querySelectorAll("[data-modal]");

for (var i = 0; i < botoesModal.length; i++) {
  botoesModal[i].addEventListener("click", function (evento) {
    evento.preventDefault();
    var id = this.getAttribute("data-modal");
    document.getElementById(id).classList.add("aberto");
  });
}

// fechar modal: botao X, botao "fechar" ou clicando no fundo escuro
var modais = document.querySelectorAll(".modal");

for (var j = 0; j < modais.length; j++) {
  modais[j].addEventListener("click", function (evento) {
    var alvo = evento.target;
    if (alvo === this || alvo.classList.contains("modal-fechar") || alvo.classList.contains("modal-ok")) {
      this.classList.remove("aberto");
    }
  });
}

// toast: some sozinho depois de 5 segundos
function mostrarToast(id) {
  var toast = document.getElementById(id);
  toast.classList.add("mostrar");

  setTimeout(function () {
    toast.classList.remove("mostrar");
  }, 5000);
}

var botoesToast = document.querySelectorAll("[data-mostrar-toast]");

for (var k = 0; k < botoesToast.length; k++) {
  botoesToast[k].addEventListener("click", function () {
    mostrarToast(this.getAttribute("data-mostrar-toast"));
  });
}

// formularios
var formularios = document.querySelectorAll(".formulario");

for (var m = 0; m < formularios.length; m++) {
  var form = formularios[m];
  var botaoEnviar = form.querySelector("button[type=submit]");

  // quando clica em enviar, liga a validacao visual (css .validado)
  botaoEnviar.addEventListener("click", function () {
    this.form.classList.add("validado");
  });

  // o evento submit so acontece se todos os campos estiverem certos
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    mostrarToast(this.getAttribute("data-toast"));
    this.reset();
    this.classList.remove("validado");
  });
}
