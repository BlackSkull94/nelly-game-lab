
/* Menú lateral: resaltar la opción seleccionada */
const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


/* Animación de máquina de escribir */
const titulo = document.getElementById("titulo-animado");
const nombre = "Velázquez Nelly";

let indice = 0;
let borrando = false;

function escribirNombre() {
    titulo.textContent = nombre.substring(0, indice);

    if (!borrando) {
        indice++;

        if (indice > nombre.length) {
            borrando = true;
            setTimeout(escribirNombre, 1500);
            return;
        }
    } else {
        indice--;

        if (indice < 0) {
            indice = 0;
            borrando = false;
        }
    }

    setTimeout(escribirNombre, borrando ? 60 : 120);
}

escribirNombre();
