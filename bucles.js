//Imprimir impares 1-20 Usando un bucle, escribe un código que haga que console.logimprima todos los valores impares del 1 al 20.

for (var impar=1; impar<21; impar++){
    if(impar % 2 === 1){
    console.log(impar)}
}
//Disminuir múltiplos de 3 Usando un bucle, escribe un código que haga que console.logimprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.

for (var n=100; n>=0; n--){
    if(n % 3 === 0){
    console.log(n)}
}
// Imprime la secuencia Usando un bucle, escribe un código que haga que console.log imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.

for (let m=4; m>=-3.5; m= m - 1.5){
    console.log(m)}

//Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.
var sum= 0
for (var i=1; i<101; i++){
    sum= sum + i;
}
console.log(sum)

//Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, al final, console.logdé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.
var resultado = 1

for(var producty = 1; producty < 13; producty++){
    resultado = resultado * producty;
}
console.log(resultado)


