const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 100;

let capivara = new Image();
capivara.src = "IMG/capbibaraRuning.png";

let x = 0;
let velocidade = 4;

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(capivara, x, 10, 100, 50);

    x += velocidade;
    if (x > canvas.width) {
        x = -100;  // Faz a capivara reaparecer do lado esquerdo
    }

    requestAnimationFrame(animar);
}

capivara.onload = animar;
