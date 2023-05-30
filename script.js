console.log(`ola!`);

function hello() {
  alert(1);
  const form = document.querySelector(".form");
  form.onsubmit = function (event) {
    alert(2);
  };
}

hello();
