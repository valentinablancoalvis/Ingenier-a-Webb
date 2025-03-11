let cupones = [];

// Cargar cupones almacenados al iniciar
document.addEventListener("DOMContentLoaded", () => {
    cupones = JSON.parse(localStorage.getItem("cupones")) || [];
    document.getElementById('listaCupones').textContent = cupones.join(', ');
});

function generarCupon() {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#';
    let cupon = '';
    for (let i = 0; i < 10; i++) {
        cupon += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    cupones.push(cupon);
    localStorage.setItem("cupones", JSON.stringify(cupones));
    document.getElementById('listaCupones').textContent = cupones.join(', ');
}

function validarCupon() {
    let codigo = document.getElementById("codigo").value.toUpperCase().trim();
    let mensaje = document.getElementById("mensaje");

    if (cupones.includes(codigo)) {
        mensaje.textContent = "✅ Cupón válido.";
        mensaje.className = "valido animacion";
        cupones = cupones.filter(cup => cup !== codigo);
        localStorage.setItem("cupones", JSON.stringify(cupones));
        document.getElementById('listaCupones').textContent = cupones.join(', ');
    } else {
        mensaje.textContent = "❌ Cupón inválido o ya usado.";
        mensaje.className = "invalido animacion";
    }

    // Remueve la animación después de 1 segundo
    setTimeout(() => mensaje.classList.remove("animacion"), 1000);
}
