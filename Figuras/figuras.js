// CODIGO TRIANGULO
const perimetroTriangulo = (b, l1, l2) => b + l1 + l2

const areaTriangulo = (l1, b, l2 ) => {   
    const perimetro = perimetroTriangulo(l1, b, l2)
    const semiPerimetro = perimetro / 2
    const area = Math.sqrt(semiPerimetro * (semiPerimetro - l1) * (semiPerimetro - b) * (semiPerimetro - l2))
    return area
}

function trianguloArea() {
    const ladoA = document.querySelector("#ladoA").value
    const ladoB = document.querySelector("#ladoB").value
    const ladoC = document.querySelector("#ladoC").value
    const area = areaTriangulo(Number(ladoA), Number(ladoB), Number(ladoC))
    return area   
}

function trianguloPerimetro () {
    const ladoA = document.querySelector("#ladoA").value
    const ladoB = document.querySelector("#ladoB").value
    const ladoC = document.querySelector("#ladoC").value
    const perimetro = perimetroTriangulo(Number(ladoA), Number(ladoB), Number(ladoC))
    return perimetro;
}

// FIN CODIGO TRIANGULO 

// CODIGO CUADRADO
const perimeterSquare = (sideSquare) => sideSquare * 4 
const areaSquare = (sideSquare) => sideSquare * sideSquare


// CIRCULOS 
const diameter = (ratio) => ratio * 2
const perimeterCircule = (diameter) => diameter * Math.PI
const areaCircule = (ratio) => ( Math.PI * (ratio * ratio) )

// ---------------------------------------------------------------------------------------

// Funciones Del Cuadrado

function calcularPerimetro() {
    const input = document.getElementById("ladoCuadrado").value
    const perimeter = perimeterSquare(input)
    return perimeter
}

function calcularArea() {
    const input = document.getElementById("ladoCuadrado").value
    const area = areaSquare(input)
    alert(`El area del cuadrado es ${area}`)
    return area
}





// Funciones del triangulo 


// Funciones Circulo 

function areaCirculo() {
    const radio = document.getElementById("radioCirculo").value
    const diametro = diameter(radio)
    const perimetro = perimeterCircule(diametro)
    const area = areaCircule(radio)

    console.group("Resultados Circulo")
    console.log(`El perimetro del circulo es: ${perimetro}`)
    console.log(`El area del circulo es: ${area}`)
    console.log(`El diametro del ciruclo es: ${diametro}`)
    console.groupEnd()
}