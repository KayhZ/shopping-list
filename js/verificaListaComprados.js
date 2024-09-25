//controle de visibilidade
const containerListaComprados = document.getElementById("container-lista-comprados");   
//verificar tag <ul>

export function verificaListaComprados(lista){
    if(lista.children.length === 0){
        containerListaComprados.style.display = "none";
    }else{
        containerListaComprados.style.display = "block";
    }

}