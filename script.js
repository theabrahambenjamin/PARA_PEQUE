/* ============================= */
/* BOTÓN INICIAR */
/* ============================= */

const btnIniciar = document.getElementById("btnIniciar");

const inicio = document.getElementById("inicio");

const contenido = document.getElementById("contenido");

btnIniciar.addEventListener("click", () => {
  inicio.style.opacity = "0";

  inicio.style.transition = "opacity 1s ease";

  setTimeout(() => {
    inicio.style.display = "none";

    contenido.classList.remove("oculto");

    window.scrollTo(0, 0);
  }, 1000);
});

/* ============================= */
/* MODAL DE FOTOS */
/* ============================= */

const fotos = document.querySelectorAll(".foto");

const modal = document.getElementById("modal");

const modalImagen = document.getElementById("modalImagen");

const modalTitulo = document.getElementById("modalTitulo");

const modalMensaje = document.getElementById("modalMensaje");

const cerrar = document.getElementById("cerrar");

/* ============================= */
/* ABRIR FOTO */
/* ============================= */

fotos.forEach((foto) => {
  foto.addEventListener("click", () => {
    const imagen = foto.querySelector("img");

    const titulo = foto.dataset.titulo;

    const mensaje = foto.dataset.mensaje;

    modalImagen.src = imagen.src;

    modalTitulo.textContent = titulo;

    modalMensaje.textContent = mensaje;

    modal.classList.add("activo");

    document.body.style.overflow = "hidden";
  });
});

/* ============================= */
/* CERRAR MODAL */
/* ============================= */

cerrar.addEventListener("click", cerrarModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    cerrarModal();
  }
});

function cerrarModal() {
  modal.classList.remove("activo");

  document.body.style.overflow = "auto";
}

/* ============================= */
/* BOTÓN VOLVER */
/* ============================= */

const volver = document.getElementById("volver");

volver.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* ============================= */
/* TECLA ESCAPE */
/* ============================= */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cerrarModal();
  }
});
