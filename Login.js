let Usuario = document.getElementById("CorreoElectronico");
let Clave = document.getElementById("Contraseña");


let Bton_Aceptar = document.getElementById("ingresar");
Bton_Aceptar.addEventListener("click", IngresarData);

function IngresarData() {
    let miUsuario = "juan@mail.com";
    let miClave = "1234";
    if (Usuario.value == miUsuario && Clave.value == miClave) {
        let texto = document.getElementById("Ingresar");
        let imagen = document.getElementById("img");
        texto.innerHTML = '<h2>Ingreso correctamente</h2>'
        imagen.innerHTML = '<img src="imagenes/chico2.jpg" alt="" width="150px" height="150px">'
    }
    else {
        //alert("Datos invalidos");
        let error = document.getElementById("Error");
        error.innerHTML= '<h2>Datos invalidos</h2>'
    }
}

