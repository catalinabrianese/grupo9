let boton= document.getElementById("botonEditar");
let formulario= document.getElementById("form");
let nombreProducto= document.getElementById("NombreProducto");
let precio= document.getElementById("PrecioProducto");
let descuento= document.getElementById("DescuentoProducto");
let descripcion= document.getElementById("DescripcionProducto");
let imagen= document.getElementById("ImagenProducto");
let error= document.getElementById("errores");


boton.addEventListener("click", function(event){
    let errores=[];
    event.preventDefault();
    if(nombreProducto.value=="" || nombreProducto.value===null ){
       errores.push("El campo nombre de producto no debe estar vacío");
    }
    if(precio.value=="" || precio.value===null ){
        errores.push("El campo precio no debe estar vacío");
    }
    if(descuento.value=="" || descuento.value===null ){
        errores.push("El campo descuento no debe estar vacío");
    }
    if(descripcion.value =="" || descripcion.value === null){
        errores.push("Debe ingresar la descripción del producto");
    }else if(imagen.value =="" || imagen.value === undefined){
        errores.push("Debe cargar una imágen");
    }
   

    if(errores.length!==0){
        error.innerText=errores.join(" \n ");
    }else{
        formulario.submit();
    }
    
    error.style.color = 'Red';
    error.style.textAlign = 'Center';
    
});

