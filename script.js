let decimal = document.querySelector("#decimal").value;


function calculo(){
    let decimal = document.querySelector("#decimal").value;
    let calculo = (decimal >>> 0).toString(2);
    let binario = document.querySelector("#binario").value = calculo;
    return binario
}


document.addEventListener("keydown",calculo)

