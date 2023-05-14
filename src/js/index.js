const botaoAlterarTema = document.getElementById("botao");

const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) { 
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/on.png");

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/off.png")
    }
});