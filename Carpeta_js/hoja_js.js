
function mostrarOcultarElementos() {
  var parrafo1 = document.getElementById("parrafo1");
  var parrafo2 = document.getElementById("parrafo2");
  var parrafo3 = document.getElementById("parrafo3");
      
  if (parrafo1.style.display === "none") {
      parrafo1.style.display = "block";
      parrafo2.style.display = "block";
      parrafo3.style.display = "block";
  } else {
      parrafo1.style.display = "none";
      parrafo2.style.display = "none";
      parrafo3.style.display = "none";
  }
}

document.getElementById("boton").addEventListener("click", function() {
  window.location.href = "mailto:marianagaddi@gmail.com?subject=Recibimos su CV&body=Buenos días!";
});


