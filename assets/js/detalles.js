
var config = {
  apiKey: "AIzaSyDav-QXFfvi24iHJLiuLDqFBh-fEa-vG7w",
  authDomain: "team-cow.firebaseapp.com",
  databaseURL: "https://team-cow.firebaseio.com",
  projectId: "team-cow",
  storageBucket: "team-cow.appspot.com",
  messagingSenderId: "1078316727335"
};
firebase.initializeApp(config);

var objDB={}

var formulario = document.getElementById("crear-Empresa")
formulario.addEventListener("submit",extraerDatosForm);

function extraerDatosForm(e) {
  e.preventDefault();
  {objDB=
    {
        "nombreComercialEmpresa" : document.getElementById("nombreComercialEmpresa").value,
        "razonSocialEmpresa" : document.getElementById("razonSocialEmpresa").value,
        "direccionEmpresa" : document.getElementById("direccionEmpresa").value,
        "rfc" : document.getElementById("rfc").value,
        "piso" : document.getElementById("piso").value,
        "precioDeRenta" : document.getElementById("precioDeRenta").value,
        "fechaDeInicio" : document.getElementById("dia").value+"/"+document.getElementById("mes").value+"/"+document.getElementById("anio").value,
        "modalidad" : document.getElementById("modalidad").value,
        "nombreContacto" : document.getElementById("nombreContacto").value,
        "correoContacto" : document.getElementById("correoContacto").value,
        "telContacto" : document.getElementById("telContacto").value,
    }}

    crearJsonNuevaEmpresa(objDB)


}

var database = firebase.database();

function crearJsonNuevaEmpresa(empresas){
  console.log(empresas);
  mostrarDetalle(empresas)
  database.ref("/empresas").push(empresas);
}
function mostrarDetalle(empresa) {
  document.getElementById("textNC").innerHTML = empresa.nombreComercialEmpresa;
  document.getElementById("textRS").innerHTML = empresa.razonSocialEmpresa;
  document.getElementById("textDescrip").innerHTML = empresa.precioDeRenta +" | "+empresa.piso +" |";

  }

function mostrarEmpresas(){
  database.ref('/empresas').on('value',function (snapshot) {
    // console.log(snapshot);
    var usuarios= snapshot.val();
    console.log(usuarios);
    // objDB.usuarios = usuarios;
    // mostrarUsuarios(usuarios);
  })
}
// mostrarEmpresa();
document.getElementById("upload-logo").onchange = function() {
  var reader = new FileReader(); //instanciamos el objeto de la api FileReader

  reader.onload = function(e) {
    //

    document.getElementById("image-logo").src = e.target.result;
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
};

document.getElementById("upload-contacto").onchange = function() {
  var reader = new FileReader(); //instanciamos el objeto de la api FileReader

  reader.onload = function(e) {
    //

    document.getElementById("image-contacto").src = e.target.result;
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
};

