const navbar = document.querySelector(".navbar");
const welcome = document.querySelector(".welcome");
const navbarToggle = document.querySelector("#navbarNav");

const resizeBakgroundImg = () => {
  const height = (window.innerHeight - navbar.clientHeight) * 2; // Ajusta el valor multiplicador
  welcome.style.height = `${height}px`;
};

// Llama a la función para ajustar la imagen de fondo cuando la página se carga y cuando cambia el tamaño de la ventana.
window.addEventListener("load", resizeBakgroundImg);
window.addEventListener("resize", resizeBakgroundImg);
