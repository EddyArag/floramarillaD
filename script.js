$(document).ready(function() {
  document.body.classList.remove("container");

  // Espera a que la animación haya cargado
  setTimeout(function() {
    // Muestra el cuadro con la pregunta
    $("#pregunta-container").fadeIn();
  }, 20000); // Ajusta el tiempo según la duración de tu animación

  // Agrega evento de clic al botón "NO"
  $("#no-button").on("click", function() {
    alert("Ta bueno");
  });

  // Agrega evento de mouseover al botón "SI"
  $("#si-button").on("mouseover", function() {
    // Mueve el botón aleatoriamente
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    $(this).css({
      "left": x + "px",
      "top": y + "px"
    });
  });
});
