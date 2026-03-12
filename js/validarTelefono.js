function validarFormulario() {

var telefono = document.forms[0]["telefono"].value;

for (var i = 0; i < telefono.length; i++) {

var caracter = telefono[i];

if (caracter < '0' || caracter > '9') {
alert("Error: el teléfono solo debe contener números");
return false;
}

}

return true;

}