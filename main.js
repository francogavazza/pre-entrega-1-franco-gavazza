const txtop1 = document.getElementById("op1")
const txtoperacion = document.getElementById("operacion")
const txtop2 = document.getElementById("op2")
const btncalcular = document.getElementById("calcular")
const presultado = document.getElementById("resultado")

btncalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtoperacion.value
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break;        
        }

        presultado.innerText = " = " + resultado
    }else{
        presultado.innerText = "calculo invalido"
    }
}