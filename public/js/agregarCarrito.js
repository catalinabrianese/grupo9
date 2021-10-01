
function agregar(x){
    let producto = {"nombre": x[0], "precio": x[1]}
    let k = localStorage.getItem("carrito")
    let arrayProductos=[];
    if(k != null){
        arrayProductos = JSON.parse(localStorage.getItem("carrito"))
    }
    arrayProductos.push(producto);
    localStorage.setItem("carrito",JSON.stringify(arrayProductos));
}



   
    

