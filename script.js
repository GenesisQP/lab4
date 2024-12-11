
function mostrarMensaje() {
    alert("¡HOLA!!!, Bienvenidos...");
}

const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(evento) {
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const motivo = document.getElementById('motivo').value;

    
    if (nombre === '' || email === '' || motivo === '') {
        alert('Por favor, completa todos los campos.');
        evento.preventDefault();  
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});
