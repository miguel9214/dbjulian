const formulario = document.getElementById("formulario");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/ffc9e8ec-a978-40c7-a32a-d48712c90c44",
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


    
 