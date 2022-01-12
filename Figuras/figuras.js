// CODIGO TRIANGULO

console.group("Triangulo")

const base = 4
const side1 = 6
const side2 = 6
const heigth = 5.5

const perimeterT = base + side1 + side2
const areaTriangulo = (base * heigth) / 2
console.log(`Los lados del triangulo miden: ${base}cm, ${side1}cm y ${side2}cm`)
console.log(`La altura del triangulo es de ${heigth}`)
console.log(`El perimetro del triangulo es: ${perimeterT}`)
console.log(`El area del triangulo es: ${areaTriangulo} cm2`)

console.groupEnd()

// CODIGO CUADRADO

console.group("Cuadrado")

const sideSquare = 5
console.log(`Los lados del cuadrado miden ${sideSquare}cm`)

const perimeterSquare = sideSquare * 4
console.log(`El perimetro del cuadrado es ${perimeterSquare}cm`)

const areaSquare = sideSquare * sideSquare
console.log(`El area del cuadrado es: ${areaSquare}cm2 `)

console.groupEnd()

// CIRCULOS 

console.group("Circulo")

const ratio = 10
const diameter = ratio * 2
const PI = Math.PI

const perimeterCircule = diameter * PI
const areaCircule = PI * (ratio * ratio)

console.log(`El perimetro del circulo es. ${perimeterCircule}cm`)
console.log(`El area del circulo es. ${areaCircule}cm`)


console.groupEnd