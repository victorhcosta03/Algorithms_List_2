let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));
let n4 = parseFloat(prompt("Digite o quarto número: "));
let n5 = parseFloat(prompt("Digite o quinto número: "));

let soma = n1 + n2 + n3 + n4 + n5;

document.getElementById('resultado').innerHTML = `Os números digitados foram ${n1}, ${n2}, ${n3}, ${n4} e ${n5} e sua soma é ${soma}.`

