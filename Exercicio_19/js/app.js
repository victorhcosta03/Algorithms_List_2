function retangulo(){
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let area = base * altura
    let perimetro = (base + altura) * 2
    
    document.getElementById('resultado').innerHTML = `<p>
    Área = ${area} <br>
    Perímetro = ${perimetro}
    </p>`
}