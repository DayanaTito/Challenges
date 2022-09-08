const inputTexto = document.querySelector(".text-input");
const mensagem = document.querySelector(".div-mensagem");
const copia = document.querySelector(".btn-copiar")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado 
}

//let matrizCodigo = [["e", "enter"], 
//                    ["i", "imes"], 
//                    ["a", "ai"], 
//                    ["o", "ober"], 
//                    ["u", "ufat"]]
//console.table(matrizCodigo)

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], 
                    ["i", "imes"], 
                    ["a", "ai"], 
                    ["o", "ober"], 
                    ["u", "ufat"]]

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++ ){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado 
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], 
                    ["i", "imes"], 
                    ["a", "ai"], 
                    ["o", "ober"], 
                    ["u", "ufat"]]

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let z = 0; z < matrizCodigo.length; z++ ){

        if(stringDesencriptada.includes(matrizCodigo[z][1])){
           stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[z][1], matrizCodigo[z][0])
        }
    }

    return stringDesencriptada;
}

function btnCopiar(){
    navigator.clipboard.writeText(mensagem.value);
}