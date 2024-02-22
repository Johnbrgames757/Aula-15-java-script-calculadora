const display = document.querySelector("#display");
// seleciona um elemento específico

const buttons = document.querySelectorAll("button");
// seleciona todos o mesmo elemento
buttons.forEach((btn) =>{ //define um "apelido" para todos elementos iguais
    btn.addEventListener("click", () =>{ //faz um evento acontecer. "click", reproduz o botão clickado
        if (btn.id === "=") {//se o botão for "=" ,mostra o resultado de um calculo
            display.value = eval (display.value);
        } else if (btn.id === "ac") {//se o botão for "ac", esvazia o display com ""
            display.value = "";
        } else if (btn.id === "de") {//se o botão for "de" deleta um por vez
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        } 
    })
});