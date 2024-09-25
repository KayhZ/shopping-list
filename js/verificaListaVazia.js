const verificaListaVazia = document.getElementById("mensagem-lista-vazia");
export function verificarListaVazia(lista2){
    if(lista2.querySelectorAll("li").length === 0){
        verificaListaVazia.style.display = "none";
    }else{
        verificaListaVazia.style.display = "block";
    }
}