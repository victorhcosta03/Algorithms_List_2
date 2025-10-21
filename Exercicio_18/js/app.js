function quadrado(){
    let lado = parseFloat(document.getElementById('lado').value);

    let area = Math.pow(lado, 2);
    let perimetro = lado * 4;

    document.getElementById('resultado').innerHTML = `<p>
    Área = ${area} <br>
    Perímetro = ${perimetro}
    </p>`
}