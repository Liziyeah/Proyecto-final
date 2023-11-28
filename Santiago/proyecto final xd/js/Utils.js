export async function getData() {
    const response = await fetch("https://raw.githubusercontent.com/Santigumi/Entrega-2/main/data.json");
    const data = await response.json();
    return data;
  }
  
  export class Imagenes {
    constructor(url) {
      this.url = url;
    }
  
    render() {
      const fondo = document.createElement("div");
      fondo.id = "fondo";
  
      const img = document.createElement("img");
      img.src = this.url;
  
      fondo.appendChild(img);
  
      return fondo;
    }
  }
  