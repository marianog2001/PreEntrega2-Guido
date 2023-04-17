$('.collapse').on('show.bs.collapse', function () {
    // Cierra todos los elementos collapse abiertos excepto el que se está abriendo
    $('.collapse.show').not($(this)).collapse('hide');
  });