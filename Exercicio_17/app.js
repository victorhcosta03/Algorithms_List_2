let n1 = parseInt(prompt("Digite um número inteiro: "));
let ant = n1 - 1
let suc = n1 + 1   

document.getElementById('resultado').innerHTML = `O número digitado foi ${n1}, seu antecessor é ${ant} e seu sucessor é ${suc}`