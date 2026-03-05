// se obtienen las coordenadas de la ciudad buscada
export async function obtenerCoordenadas(ciudad) {
    try {
        const respuesta = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=1&language=es&format=json`
        );

        const datos = await respuesta.json();

        if (!datos.results) {
            throw new Error("Ciudad no encontrada");
        }

        return datos.results[0];

    } catch (error) {
        throw error;
    }
}


// Obtenemos el clima actual de la ciudad indicada 
export async function obtenerClima(lat, lon) {
    try {
        const respuesta = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );

        const datos = await respuesta.json();
        return datos.current_weather;

    } catch (error) {
        throw error;
    }
}
