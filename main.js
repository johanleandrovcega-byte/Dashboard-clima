import { obtenerCoordenadas, obtenerClima } from "./service.js";
import { mostrarClima, mostrarError } from "./ui.js";

const form = document.getElementById("formClima");
const loader = document.getElementById("loader");


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const ciudad = document.getElementById("ciudad").value;

    loader.classList.remove("oculto"); 

    try {
        const datosCiudad = await obtenerCoordenadas(ciudad);
        const clima = await obtenerClima(
            datosCiudad.latitude,
            datosCiudad.longitude
        );

        mostrarClima(datosCiudad.name, clima);

    } catch (error) {
        mostrarError(error.message);
    } finally {
        loader.classList.add("oculto");
    }
});

