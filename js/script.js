
const CONTENEDOR = document.getElementById("contadorVisitas")
const BOTON = document.getElementById("btnReestablecer")


   if (localStorage.visitas == undefined) {
      localStorage.visitas = 1;
   } else {
      localStorage.visitas = Number(localStorage.visitas) + 1;
   }
   
   CONTENEDOR.innerText = localStorage.visitas;


BOTON.addEventListener("click", () => {
    CONTENEDOR.innerText = 0;
    localStorage.visitas = 0;
})


