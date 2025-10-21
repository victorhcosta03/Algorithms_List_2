function festa(){
    let convidado = parseFloat(document.getElementById('convidado').value)

    let presente = convidado * 2

    document.getElementById('resultado').innerHTML = `<p>
    Quantidade de convidados: ${convidado} <br>
    Quantidade total de presentes que você irá receber: ${presente}
    </p>`
}