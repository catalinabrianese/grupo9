
arrayProductos = JSON.parse(localStorage.getItem("carrito"))
let h= document.getElementById("hola");
for(let p of arrayProductos){
    h.innerHTML+= p.imagen +"\n " + p.nombre + " $ " + p.precio;
    h.insertAdjacentHTML('afterbegin', '<img src="${p.imagen}></img>');
}