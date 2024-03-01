function criptografar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                resultado += "enter";
                break;
            case 'i':
                resultado += "imes";
                break;
            case 'a':
                resultado += "ai";
                break;
            case 'o':
                resultado += "ober";
                break;
            case 'u':
                resultado += "ufat";
                break;
            default:
                resultado += texto[i];
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function descriptografar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    for (var i = 0; i < texto.length; i += 5) {
        var parte = texto.substr(i, 5);
        switch (parte) {
            case 'enter':
                resultado += "e";
                break;
            case 'imes':
                resultado += "i";
                break;
            case 'ai':
                resultado += "a";
                break;
            case 'ober':
                resultado += "o";
                break;
            case 'ufat':
                resultado += "u";
                break;
            default:
                resultado += parte;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function copiarTexto() {
    var resultado = document.getElementById("resultado");
    
    var inputTemporario = document.createElement("input");
    
    inputTemporario.setAttribute("value", resultado.textContent);
    
    document.body.appendChild(inputTemporario);
    
    inputTemporario.select();
    
    document.execCommand("copy");
    
    document.body.removeChild(inputTemporario);
    
    alert("Texto copiado com sucesso!");
}
