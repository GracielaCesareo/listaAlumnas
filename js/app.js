var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
}

var lista = $('#lista-alumnas');

var cargarPagina = function () {
  cargarAlumnas();
};

var cargarAlumnas = function () {
  $.getJSON(api.url, function (alumnas) {
    console.log(alumnas);
    alumnas.forEach(crearAlumna);
  });
}

var crearAlumna = function (response) {
  var nombre = response.name;
  var apellidoP = response.pLastName;
  console.log(apellidoP);
  var apellidoM = response.mLastName;

  var $listaNombres = $("<li />");
  $listaNombres.text(nombre + " " + apellidoP + " " + apellidoM);

  $listaNombres.append(" " + "<input type=checkbox />")
  lista.append($listaNombres);
};

$(document).ready(cargarPagina);
