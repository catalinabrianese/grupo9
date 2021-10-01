
let formulario= document.getElementById("form");
let boton= document.getElementById("botonregistro");
let email= document.getElementById("email");
let error= document.getElementById("errores");
let password= document.getElementById("pass");

boton.addEventListener("click", function(event){
    let errores=[];
    event.preventDefault();
    if(email.value=="" || email.value===null ){
        errores.push("El campo email no debe estar vacío");
    }
    if(password.value =="" || password.value === null){
        errores.push("Debe ingresar la contraseña");
    }else if(password.length<=6){
        errores.push("La contraseña debe tener más de 6 caracteres");
    }
    if(errores.length!==0){
        error.innerText=errores.join(" \n ");
    }else{
        formulario.submit();
    }
    error.style.color = 'Red';
    error.style.textAlign = 'Center';
});