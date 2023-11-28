import { getData, Imagenes } from "./Utils.js";

const render = async () => {
  const data = await getData();
  const contenedor = document.querySelector(".presentacion__carrusel--slider");

  for (const product of data) {
    const item = new Imagenes(product.url);
    const productDiv = item.render();

    productDiv.classList.add("slide"); 
    contenedor.appendChild(productDiv);
  }

  const slides = document.querySelectorAll(".slide"); 

 
  let currentIndex = 0;

  function moveCarousel() {
    slides[currentIndex].style.display = "none"; 
    currentIndex = (currentIndex + 1) % slides.length; 
    slides[currentIndex].style.display = "block"; 
  }

  setInterval(moveCarousel, 5000);

  slides[currentIndex].style.display = "block";
};

window.onload = async () => {
  await render();
};
