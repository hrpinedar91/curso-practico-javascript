const calcularPrecio = (price, discount, codeDiscount = 0) => {
    const totalDiscount = discount + codeDiscount
    const newPrice = (price * (100 - totalDiscount))/100
    return newPrice    
}

function updateSelect() {
    const select = document.getElementById('discount');
    const option = select.options[select.selectedIndex];
    
    let value = Number(option.value)
     !value  && (value = 0)

     return value
   
}

const btnDiscount = document.getElementById("btnDiscount")

btnDiscount.addEventListener("click", () => {
    const price = document.getElementById("priceProduct").value
    const discount = document.getElementById("discountProduct").value
    // const codeDiscount = document.getElementById("codeDiscount").value
    const result = document.getElementById("result")

    const codeDiscount = updateSelect()
   
    newPrice = calcularPrecio(Number(price), Number(discount), Number(codeDiscount))
    result.innerText = newPrice
    
})

