const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://sheet.best/api/sheets/ffc9e8ec-a978-40c7-a32a-d48712c90c44", {
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
      nombreLider: formulario.identVotante.value,
    }),
  });
});
