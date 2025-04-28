function toggleMenu() {
    const menu = document.getElementById('menu-desplegable');
    menu.classList.toggle('show');
  }
  
  document.querySelectorAll('#menu-desplegable a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu-desplegable').classList.remove('show');
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel');
    const imagenes = carrusel.querySelectorAll('img');
    const siguiente = document.getElementById('siguiente');
    const anterior = document.getElementById('anterior');
  
    let index = 0;
    const total = imagenes.length;
    const imagenWidth = 310; // 300px + 10px de margen
  
    function moverCarrusel(i) {
      carrusel.style.transform = `translateX(-${i * imagenWidth}px)`;
    }
  
    siguiente.addEventListener('click', () => {
      if (index < total - 1) index++;
      moverCarrusel(index);
    });
  
    anterior.addEventListener('click', () => {
      if (index > 0) index--;
      moverCarrusel(index);
    });
  
    setInterval(() => {
      index = (index + 1) % total;
      moverCarrusel(index);
    }, 4000);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario2');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const personas = document.getElementById('personas').value;
  
        let objeto = {
          nombre: nombre,
          telefono: telefono,
          email: email,
          fecha: fecha,
          hora: hora,
          personas: personas
        };
  
        localStorage.setItem('reserva', JSON.stringify(objeto));
        alert('¡Gracias por tu reservación! Nos pondremos en contacto contigo pronto.');
        form.reset();
      });
    }
  });
