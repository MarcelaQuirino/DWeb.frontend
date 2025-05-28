let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let adicionaCarrinho = document.querySelector(".link-carrinho")

function mudarVisual(cor, imagem) {

    tenis.classList.add("troca-efeito")
    
    body.style.background = cor
    adicionaCarrinho.style.background = cor
    
    setTimeout(()=>{
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")

    },500)
   }


