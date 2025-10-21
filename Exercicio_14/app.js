let num_1 = parseInt(prompt("Digite um número: "));
let num_2 = parseInt(prompt("Digite outro número: "));

console.log("O primeiro número é: ", num_1);
document.getElementById("n1").innerHTML="O primeiro número é: "+ num_1

console.log("O segundo número é: ", num_2);
document.getElementById("n2").innerHTML="O segundo número é: "+ num_2

num_1+=1;
num_2-=1;

console.log("O primeiro número acrescido de um é: ", num_1);
document.getElementById("s1").innerHTML="O primeiro número acrescido de um é: "+ (num_1);

console.log("O segundo número decrescido de um é: ", num_2);
document.getElementById("sub2").innerHTML="O segundo número decrescido de um é: "+ (num_2);  