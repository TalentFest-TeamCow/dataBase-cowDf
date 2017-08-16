
//splash
var start = function (){
    setTimeout(inicio, 3000)
}

var inicio = function (){
    location.href = "index.html";
}




$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$(document).ready(start)


