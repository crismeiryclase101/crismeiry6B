let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}



function pay() {
    // Aquí puedes realizar cualquier acción relacionada con el pago
    
    // Cambiamos el texto del botón a "Pago"
    document.getElementById("checkout").innerText = "Pago";
  }

