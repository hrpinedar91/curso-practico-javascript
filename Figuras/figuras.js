// CODIGO CUADRADO
const perimeterSquare = (sideSquare) => sideSquare * 4 
const areaSquare = (sideSquare) => sideSquare * sideSquare

function perimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado").value
    const result = document.getElementById("result-square")
    const perimeter = perimeterSquare(input)

    // Se utiliza fragment para evitar reflow
    const fragment = document.createDocumentFragment()
    const p = document.createElement("p")
    p.innerHTML += `<b>Perimeter: </b><span>${perimeter}</span>`

    fragment.appendChild(p)
    result.appendChild(fragment)

    // return perimeter
}

function areaCuadrado() {
    const input = document.getElementById("ladoCuadrado").value
    const result = document.getElementById("result-square")
    const area = areaSquare(input)

     // Se utiliza fragment para evitar reflow 
    const fragment = document.createDocumentFragment()
    const p = document.createElement("p")
    p.innerHTML += `<b>Área: </b><span>${area}</span>`

    fragment.appendChild(p)
    result.appendChild(fragment)
    
}

// FIN CODIGO CUADRADO




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
    const result = document.querySelector("#result-triangle")
    
    const area = areaTriangulo(Number(ladoA), Number(ladoB), Number(ladoC))
    
    const fragment = document.createDocumentFragment()
    const p = document.createElement("p")
    p.innerHTML += `<b>Área: </b><span>${area}</span>` 

    fragment.appendChild(p)
    result.appendChild(fragment)

       
}

function trianguloPerimetro () {
    const ladoA = document.querySelector("#ladoA").value
    const ladoB = document.querySelector("#ladoB").value
    const ladoC = document.querySelector("#ladoC").value
    const result = document.querySelector("#result-triangle")
    
    const perimetro = perimetroTriangulo(Number(ladoA), Number(ladoB), Number(ladoC))
    
    const fragment = document.createDocumentFragment()
    
    const p = document.createElement("p")
    p.innerHTML += `<b>Perimetro: </b><span>${perimetro}</span>`

    fragment.appendChild(p)
    result.appendChild(fragment)

    
}

// FIN CODIGO TRIANGULO 





// CIRCULOS 
const diameter = (ratio) => ratio * 2
const perimeterCircule = (diameter) => diameter * Math.PI
const areaCircule = (ratio) => ( Math.PI * (ratio * ratio) )


function areaCirculo() {
    const radio = document.getElementById("radioCirculo").value
    const result = document.getElementById("result-circle")
    const area = areaCircule(radio)

    const fragment = document.createDocumentFragment()
    const p = document.createElement("p")
    p.innerHTML += `<b>Área: </b><span>${area}</span>`

    fragment.appendChild(p)
    result.appendChild(fragment)
    
}

function perimetroCirculo() {
    const radio = document.getElementById("radioCirculo").value
    const result = document.getElementById("result-circle")
    const diametro = diameter(radio)
    const perimetro = perimeterCircule(diametro)

    const fragment = document.createDocumentFragment()
    const p = document.createElement("p")
    p.innerHTML += `<b>Perimetre: </b><span>${perimetro}</span>`

    fragment.appendChild(p)
    result.appendChild(fragment)

}