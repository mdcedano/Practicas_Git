//hacer una funcion donde calcule de dos numeros, segun el simbolo, suma
// resta, multiplicacion, division
//Marcos Cedano
let a = parseFloat(prompt("Ingrese el primer número:"));
let op =prompt("Ingrese la operación (+, -, *, /):");
let b = parseFloat(prompt("Ingrese el segundo número:"));
function calculadora(a,operacion,b){
    let resultado;
    
    switch (operacion){
        case "+":
        resultado = a+b;
        break;
        case "-":
            resultado = a-b;
            break;
        case "*":
             resultado = a*b;
             break;
        case "/":
            resultado =a/b;
            break;
        case "%":
            resultado = a%b;
            break;
        case "**":
            resultado = a**b;
            break;
            default: alert("La Operacion no es Valida")
            
            
    }
   return "El resultado es " + resultado;
}
alert(calculadora(a, op, b));