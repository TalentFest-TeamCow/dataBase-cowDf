$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

 function filtrarBusqueda() {
 	var rex = new RegExp($(this).val(), 'i');
        $('.buscar tr').hide();
        $('.buscar tr').filter(function () {
            return rex.test($(this).text());
        }).show();
 	}

function filtrarEmpresa() {
 	var rex = new RegExp($(this).val(), 'i');
        $('.buscar-empresas .empresa').hide();
        $('.buscar-empresas .empresa').filter(function () {
            return rex.test($(this).text());
        }).show();
 	}


var cargarPagina=function(){
	$('#filtrar-espacios').keyup(filtrarBusqueda);
	$('#filtrar-empresas').keyup(filtrarEmpresa);
	$('#filtrar-clientes').keyup(filtrarBusqueda);
  mostrarEmpresas();

}


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

var plantilla = '<div class="empresa row row-margin-bottom margin-vw1-tarjeta">'+
    							'<div class="empresa col-md-10 col-md-offset-1 no-padding lib-item" data-category="view">'+
    								'<div class="lib-panel">'+
    									'<div class="row box-shadow">'+
    										'<div class="col-md-3 marging-vw-uno-search-top-img">'+
    											'<img class="lib-img-show" src="https://dummyimage.com/200x200/000/fff">'+
    										'</div>'+
    										'<div class="col-md-8">'+
    											'<div class="lib-row lib-header buscar-empresas">'+
    												'<h2 >__NOMBRE_COMERCIAL__</h2>'+
    												'<span>SKU:<span id="sku-empresa">__SKU__</span> </span>'+
    												'<span><b>|</b></span>'+
    												'<span> No. de miembros:<span id="miembros-empresa">__MODALIDAD__</span> </span>'+
    												'<span><b>|</b></span>'+
    												'<span> Renta:<span id="renta-empresa">__RENTA__</span> </span>'+
    												'<span> <b>|</b> </span>'+
    												'<span>  Piso:<span id="piso-empresa">__PISO__</span> </span>'+
    											'</div>'+
    											'<div class="lib-row lib-desc">'+
    												'<span>Cliente:</span>'+
    												'<span id="cliente-empresa">__CLIENTE__</span>'+
    											'</div>'+
    											'<div class="lib-row lib-desc">'+
    												'<span>Mail to: </span>'+
    												'<span id="mail-empresa">__MAIL__</span>'+
    											'</div>'+
    											'<div class="lib-row lib-desc">'+
    												'<span>Call: </span>'+
    												'<span id="call-empresa">__NUMERO_TELEFONO__</span>'+
    											'</div>'+
    										'</div>'+
    									'</div>'+
    								'</div>'+
    							'</div>'+
    						'</div>';

var plantillaFinal = "";

function mostrarEmpresas(){
  database.ref('/empresas').on('value',function (snapshot) {
    // console.log(snapshot);
    var empresas= snapshot.val();

    crearEmpresa(empresas);

  })
}

function crearEmpresa(empresas) {
  var card = document.getElementById('id')
  empresas.forEach(function (empresa) {
  plantillaFinal += plantilla.replace("__NOMBRE_COMERCIAL__",empresa.nombreComercialEmpresa)
                              .replace("__RENTA__",empresa.precioDeRenta)
                              .replace("__SKU__",empresa.id)
                              .replace("__PISO__",empresa.piso)
                              .replace("__CLIENTE__",empresa.nombreContacto)
                              .replace("__MAIL__",empresa.correoContacto)
                              .replace("__NUMERO_TELEFONO__",empresa.telContacto)
                              .replace("__MODALIDAD__",empresa.modalidad)
  });
  $("#contenedorEmpresas").html(plantillaFinal);
}



$(document).ready(cargarPagina);
