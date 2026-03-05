export function mostrarClima(ciudad, clima) {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <div class="card">
            <h2>${ciudad}</h2>
            <p>🌡 Temperatura: ${clima.temperature} °C</p>
            <p>💨 Viento: ${clima.windspeed} km/h</p>
            <p>☁ Código clima: ${clima.weathercode}</p>
            <p>🕒 Hora: ${clima.time}</p>
        </div>
    `;
}

export function mostrarError(mensaje) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p style="color:red;">${mensaje}</p>`;
}
