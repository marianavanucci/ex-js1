// resposta aula 20

console.log(`ola!`);

function hello() {
  const form = document.querySelector(".form");

  // form.onsubmit = function (evento) {
  //   evento.preventDefaut();
  //   alert(1);
  //   console.log("foi enviado");
  // };

  function stopDefAction(evt) {
    evt.preventDefault();
    console.log("form nao foi enviado");
    // event.preventDefault(); = Cancela o evento se for cancelável,
    // sem parar a propagação do mesmo.
  }

  form.addEventListener("submit", stopDefAction);
}

hello();
