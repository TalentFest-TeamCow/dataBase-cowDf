
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
        $('.buscar th').hide();
        $('.buscar th').filter(function () {
            return rex.test($(this).text());
        }).show();
 	}


var cargarPagina=function(){
	$('#filtrar-espacios').keyup(filtrarBusqueda);
	$('#filtrar-empresas').keyup(filtrarEmpresa);
}




$(document).ready(cargarPagina);
