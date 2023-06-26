let ventas = [];

function valor() {
    let oneProduct = document.getElementById("producto");
    let text = oneProduct.options[oneProduct.selectedIndex].text;
    let valorProduct = document.getElementById("valorProduct");
    let campo = document.getElementById("total");

    if (text == "AGUA") {
        valorProduct.innerHTML = "200";
        oneAmount.value = "";
        campo.innerHTML = "";
    }
    if (text == "EMOCION") {
        valorProduct.innerHTML = "180";
        oneAmount.value = "";
        campo.innerHTML = "";
    }
    if (text == "ALEGRIA") {
        valorProduct.innerHTML = "160";
        oneAmount.value = "";
        campo.innerHTML = "";
    }
    if (text == "FRESCURA") {
        valorProduct.innerHTML = "150";
        oneAmount.value = "";
        campo.innerHTML = "";
    }
}

function total() {
    let valorProduct = document.getElementById("valorProduct").innerText;
    let oneAmount = parseInt(document.getElementById("oneAmount").value);
    let campo = document.getElementById("total");

    if (oneAmount >= 1) {
        let totalVenta = valorProduct * oneAmount;
        campo.innerHTML = totalVenta;
    } else {
        campo.innerHTML = "";
    }
}


function agregarArticulo() {
    let camVendedor = document.getElementById("vendedor");
    let empleado = camVendedor.options[camVendedor.selectedIndex].text;
    let camProducto = document.getElementById("producto");
    let perfume = camProducto.options[camProducto.selectedIndex].text;
    let cantidad = parseInt(document.getElementById("oneAmount").value);
    let precio = parseInt(document.getElementById("valorProduct").innerText);
    let totPrecio = parseInt(document.getElementById("total").innerText);
    let campo = document.getElementById("total");
    let valorProduct = document.getElementById("valorProduct");

    console.log(" empl: " + empleado + " perfu: " + perfume + " canti: " + cantidad + " prec: " + precio);

    let venta = {
            empl: empleado,
            prod: perfume,
            cant: cantidad,
            prec: precio,
            totPre: totPrecio
    }
    let ventasVen = 
    //ventas.push(empleado);
    ventas.push(venta);
    camVendedor.selectedIndex  = 0;
    camProducto.selectedIndex = 0;
    valorProduct.innerHTML = "";
    document.getElementById("oneAmount").value = "";
    campo.innerHTML = "";
    alert("Venta Agregado");
}

function enviarCuentaJuana(){
    calcular("Juana");
}

function enviarCuentaPedro(){
    calcular("Pedro");
}

const calcular = (vendedor) => {
    let totalEmpleado = 0;
    let totalAgua = 0;
    let totalEmocion = 0;
    let totalAlegria = 0;
    let totalFrescura = 0;

    for (let index = 0; index < ventas.length; index++) {
        if(ventas[index].empl == vendedor){
            totalEmpleado += Number(ventas[index].totPre);
            if(ventas[index].prod == "AGUA"){
                totalAgua += Number(ventas[index].cant);
            }
            if(ventas[index].prod == "EMOCION"){
                totalEmocion += Number(ventas[index].cant);
            }
            if(ventas[index].prod == "ALEGRIA"){
                totalAlegria += Number(ventas[index].cant);
            }
            if(ventas[index].prod == "FRESCURA"){ 
                totalFrescura += Number(ventas[index].cant);
            }
        }
    }
    let totales = document.getElementById("totalVendedor");
    let ventasTot = document.getElementById("ventasVendedor");
    totales.innerHTML = `${vendedor} vendio: $${totalEmpleado} pesos`;
    ventasTot.innerHTML = `${vendedor} vendio los sigueintes perfumes, Aqua: ${totalAgua}, Emocion: ${totalEmocion}, Alegria: ${totalAlegria} y Frescura: ${totalFrescura}`
}

function vendedorMes(){
    let totales = document.getElementById("totalVendedor");
    let ventasTot = document.getElementById("ventasVendedor");

    let dealerJuana = 0;
    let dealerPedro = 0;

    for (let index = 0; index < ventas.length; index++) {
        if(ventas[index].empl === "Juana"){
            dealerJuana += Number(ventas[index].totPre);
            console.log("totaljuana: "+dealerJuana);
        }
        if(ventas[index].empl === "Pedro"){
            dealerPedro += Number(ventas[index].totPre);
            console.log("totalpedro: "+dealerPedro);
        }
    }

    if (dealerJuana > dealerPedro) {
        ventasTot.innerHTML = "";
        totales.innerHTML = `Juana es la vendedora del mes, con un total de : $${dealerJuana} pesos en ventas`;
    }
    else if (dealerJuana < dealerPedro) {
        ventasTot.innerHTML = "";
        totales.innerHTML = `Pedro es la vendedor del mes, con un total de : $${dealerPedro} pesos en ventas`;
    }
    else if (dealerJuana = dealerPedro){
        ventasTot.innerHTML = "";
        totales.innerHTML = `Existe un empate, Juana vendio: $${dealerJuana} pesos y Pedro vendio: $${dealerPedro} pesos`;
    }
}
