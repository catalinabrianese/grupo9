    
    let formulario= document.getElementById("form");
    let nombre= document.getElementById("Nombre");
    let apellido= document.getElementById("Apellido");
    let email= document.getElementById("email");
    let genero= document.getElementById("email");
    let boton= document.getElementById("botonregistro");
    let error= document.getElementById("errores");
    let password= document.getElementById("pass");
    let passconfirmation =document.getElementById("passconfirmation");
    let fechanacimiento =document.getElementById("fechanac");

    boton.addEventListener("click", function(event){
        let errores=[];
        event.preventDefault();
        if(nombre.value=="" || nombre.value===null ){
           errores.push("El campo nombre no debe estar vacío");
        }
        if(apellido.value=="" || apellido.value===null ){
            errores.push("El campo apellido no debe estar vacío");
        }
        if(email.value=="" || email.value===null ){
            errores.push("El campo email no debe estar vacío");
        }
        if(password.value !== passconfirmation.value){
            errores.push("La contraseña y la confirmación de contraseña no coinciden");
        }
        if(password.value =="" || password.value === null){
            errores.push("Debe ingresar la contraseña");
        }else if(password.length<=6){
            errores.push("La contraseña debe tener más de 6 caracteres");
        }
        if(fechanacimiento.value==""){
            errores.push("Debe ingresar la fecha de nacimiento");
        }
       

        if(errores.length!==0){
            error.innerText=errores.join(" \n ");
        }else{
            formulario.submit();
            errores=[];
        }
        error.style.color = 'Red';
        error.style.textAlign = 'Center';
    });
    
