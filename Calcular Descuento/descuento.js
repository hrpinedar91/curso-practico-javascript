const price = 100
const descont = 15


const calcularPrice = (price, discount) => {
    const priceTotal = (price * (100 - discount))/100
    return priceTotal
}

function newPrice() {
    const price = document.querySelector("#priceTotal").value
    const discount = document.querySelector("#discount").value

    const result = calcularPrice(Number(price), Number(discount))

    console.log(result)
}