document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de navegación
    var navLinks = document.querySelectorAll('.nav-link');

    // Iterar sobre cada enlace y agregar un evento de clic
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtener el atributo href del enlace clicado
            var target = this.getAttribute('href');

            // Navegar a la nueva vista utilizando el atributo href
            window.location.href = target;
        });
    });
});
