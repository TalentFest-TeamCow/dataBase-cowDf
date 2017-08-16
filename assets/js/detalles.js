var config = {
  apiKey: "AIzaSyDav-QXFfvi24iHJLiuLDqFBh-fEa-vG7w",
  authDomain: "team-cow.firebaseapp.com",
  databaseURL: "https://team-cow.firebaseio.com",
  projectId: "team-cow",
  storageBucket: "team-cow.appspot.com",
  messagingSenderId: "1078316727335"
};
firebase.initializeApp(config);
var database = firebase.database();
var contador = new Date().getTime();
console.log(contador);

var objDB={
  empresas:[]
}

var formulario = document.getElementById("crear-Empresa")
formulario.addEventListener("submit",extraerDatosForm);
function extraerDatosForm(e) {
  e.preventDefault();
  var empresa =  { "id": contador,
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
                }
  mostrarDetalle(empresa)
  objDB.empresas.push(empresa)
  contador++;
  crearJsonNuevaEmpresa(objDB);
}


function crearJsonNuevaEmpresa(empresas){
  // console.log(empresas);
  database.ref("/").set(empresas);
}
function mostrarDetalle(empresa) {
  // console.log(empresa);
  document.getElementById("textNC").innerHTML = empresa.nombreComercialEmpresa;
  document.getElementById("textRS").innerHTML = empresa.razonSocialEmpresa;
  document.getElementById("textDescrip").innerHTML = empresa.precioDeRenta +" | "+empresa.piso +" |";

  }

function mostrarEmpresas(){
  //Leer datos en BD:
  database.ref('/empresas').on('value',function (snapshot) {
    var empresa= snapshot.val();
    console.log(empresa);
    objDB.empresas =empresa;
    // mostrarUsuarios(usuarios);
  })
}
mostrarEmpresas();

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
