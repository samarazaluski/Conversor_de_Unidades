///selecionando os elementos

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outpuElement = document.querySelector("#output");
const covertButton = document.querySelector("#convert-btn");
const menssageElement = document.querySelector("#message");

//Função para converter as unidades

function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue == toValue){
        outpu.value = inputElement.value;
        menssageElement.textContent=""
        return;

    }


//Converter para metros

let metros;
switch(fromValue){
    case "m":
        metros = inputElement.value
        break;
    case"km":
       metros = inputElement.value *1000
       break;
    case "cm":
        metros = inputElement.value / 100
        break;
    case "mm":
        metros = inputElement.value / 1000
        break; 
}

//converter metros para uniddae de saída

let result

switch(toValue){
    case "m":
        result = metros;
        break;
    case"km":
        result = metros/ 1000;
       break;
    case "cm":
        result = metros / 100;
        break;
    case "mm":
        result = metros / 1000
        break; 
}

//resultado  no input
    outpuElement.value = result;

//Resultado na mensagem
const fromLabel = fromElement.options[fromElement.selectedIndex].text
const toLabel = toElement.options[toElement.selectedIndex].text

const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
menssageElement.textContent = message;
return;
}

covertButton.addEventListener("click", convert);