const botao = document.querySelector("#botao-alterar-tema");
const body = document.querySelector("body");
const imagem = document.querySelector(".imagem-botao");

botao.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    if(body.classList.contains("modo-escuro")) {
        imagem.setAttribute("src", "./src/images/moon.png");
    } else {
        imagem.setAttribute("src", "./src/images/sun.png");
    }
})