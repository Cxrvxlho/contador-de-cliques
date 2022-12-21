var counterVal = 0;
/*Função para comecar*/
function comecar() {
    /*Função para adicionar +1 ao contador*/
    updateDisplay(++counterVal);
}
/*Função para resetar*/
function resetar() {
        /*Função para retirar tudo,ele volta ao 0*/
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
        /*vai buscar as funções "comecar" e "resetar" ao html*/
    document.getElementById("counter-label").innerHTML = val;
}