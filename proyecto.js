// proyecto2.js

// Función para alternar el menú desplegable
function toggleMenu() {
    const menu = document.getElementById('menu-desplegable');
    menu.classList.toggle('show'); // Agrega o quita la clase 'show'
  }
  
  // Opcional: Cerrar el menú después de hacer clic en un enlace
  document.querySelectorAll('#menu-desplegable a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu-desplegable').classList.remove('show');
    });
  });
  
  // Validación básica del formulario de reservación (opcional)
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario2');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        // Aquí podrías hacer validaciones personalizadas si quieres
        alert('¡Gracias por tu reservación! Nos pondremos en contacto contigo pronto.');
      });
    }
  });
