const formulario = document.getElementById("formulario");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/10f0d16c-bda5-47e9-95cb-d1da18434d60",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identificacionVotante: formulario.identVotante.value,
          nombreCompleto: formulario.nombre.value,
          celular: formulario.telefono.value,
          barrio: formulario.barrio.value,
          direccion: formulario.direccion.value,
          identificacionLider: formulario.identLider.value,
          nombreLider: formulario.nombreLider.value,
        }),
      }
    );
  } catch (err) {
    console.log(err);
  }

  registro.classList.remove("activo");
  exito.classList.add("activo");

});


    
 