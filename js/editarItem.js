export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    // Verifica se o valor digitado não é nulo ou vazio
    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        // Verifica se o item já está marcado como comprado
        const estavaComprado = elemento.querySelector(".input-checkbox").checked;
        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked"); // Corrige classlist para classList
            itemTextoAtualizado.style.textDecoration = "line-through";  // Corrige textDecpration para textDecoration
        }
    }
};
