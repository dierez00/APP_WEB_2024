function operaciones() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operaciones").value;
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingresa números válidos.");
    } 
    else {
        switch (operacion) {
            case "+":
                resultado = n1 + n2;
                break;
            case "-":
                resultado = n1 - n2;
                break;
            case "*":
                resultado = n1 * n2;
                break;
            case "/":
                if (n2 !== 0) {
                    resultado = n1 / n2;
                } else {
                    alert("No se puede dividir por cero.");
                }
                break;
            default:
                alert("Selecciona una operación válida.");
        }
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

document.getElementById("calcular").addEventListener("click", operaciones);
