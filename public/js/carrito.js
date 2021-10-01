
arrayProductos = JSON.parse(localStorage.getItem("carrito"))
let h= document.getElementById("hola");
for(let p of arrayProductos){
    h.innerHTML= h.innerHTML + p.nombre + " - " + p.precio
}