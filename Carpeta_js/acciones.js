
//Añadir un evento de clic al botón para mostrar u ocultar las opciones:


const menu = document.querySelector('.menu');
const opciones = document.querySelector('.opciones');

menu.addEventListener('click', function() {
  if (opciones.style.display === 'none') {
    opciones.style.display = 'block';
  } else {
    opciones.style.display = 'none';
  }
});

//Añadir un evento de clic a cada opción para mostrar el contenido correspondiente:


const opciones = document.querySelectorAll('.opcion');

opciones.forEach(function(opcion) {
  opcion.addEventListener('click', function() {
    const opcionSeleccionada = this.dataset.opcion;
    // Ocultar todas las opciones
    opciones.forEach(function(opcion) {
      opcion.style.display = 'none';
    });
    // Mostrar la opción seleccionada
    const contenido = document.querySelector(`.${opcionSeleccionada}`);
    contenido.style.display = 'block';
  });
});