// CODIGO TRIANGULO

console.group("Triangulo")
const perimeterT = (base, side1, side2) => base + side1 + side2
const areaTriangulo = (base, heigth) => (base * heigth) / 2
console.groupEnd()





// CODIGO CUADRADO

console.group("Cuadrado")

const perimeterSquare = (sideSquare) => sideSquare * 4 
const areaSquare = (sideSquare) => sideSquare * sideSquare

console.groupEnd()

// CIRCULOS 

console.group("Circulo")

// const ratio = 10
// const diameter = ratio * 2
const diameter = (ratio) => ratio * 2
// const PI = Math.PI

// const perimeterCircule = diameter * PI
const perimeterCircule = (diameter) => diameter * Math.PI

// const areaCircule = PI * (ratio * ratio)
const areaCircule = (ratio) => { Math.PI * (ratio * ratio) }

// console.log(`El perimetro del circulo es. ${perimeterCircule}cm`)
// console.log(`El area del circulo es. ${areaCircule}cm`)


console.groupEnd

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

// Fin funciones del cuadrado



// Funciones del triangulo 

