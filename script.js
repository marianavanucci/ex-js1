// resposta aula 20

console.log(`ola!`);

// function hello() {
//   const form = document.querySelector(".form");

// form.onsubmit = function (evento) {
//   evento.preventDefaut();
//   alert(1);
//   console.log("foi enviado");
// };

//   let contador = 1;

//   function stopDefAction(evt) {
//     evt.preventDefault();
//     console.log(`form nao foi enviado ${contador}`);
//     // event.preventDefault(); = Cancela o evento se for cancelável,
//     // sem parar a propagação do mesmo.
//     contador++;
//   }

//   form.addEventListener("submit", stopDefAction);
// }

// hello();

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evt) {
    evt.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    // console.log(nome.value, sobrenome.value, peso.value, altura.value);
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value,
    });
    console.log(pessoas);
    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
