var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

function login(tipo) {
  if (tipo == 1) {
    document.getElementById("logon").classList.add("d-none");
    document.getElementById("signup").classList.remove("d-none");
  } else {
    document.getElementById("logon").classList.remove("d-none");
    document.getElementById("signup").classList.add("d-none");
  }
}

let btn = document.querySelector("#showPass");
btn.addEventListener("click", function () {
  let input = document.querySelector("#passwordSignup");
  let eye = document.querySelector("#eye");

  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
    eye.classList.add("icon-eye");
    eye.classList.remove("icon-eye-off");
  } else {
    input.setAttribute("type", "password");
    eye.classList.remove("icon-eye");
    eye.classList.add("icon-eye-off");
  }
});

let btnlogin = document.querySelector("#showPassLogin");
btnlogin.addEventListener("click", function () {
  let inputlogin = document.querySelector("#passwordLogin");
  let eyelogin = document.querySelector("#eyeLogin");
  console.log("teste");
  if (inputlogin.getAttribute("type") == "password") {
    inputlogin.setAttribute("type", "text");
    eyelogin.classList.add("icon-eye");
    eyelogin.classList.remove("icon-eye-off");
  } else {
    inputlogin.setAttribute("type", "password");
    eyelogin.classList.remove("icon-eye");
    eyelogin.classList.add("icon-eye-off");
  }
});

//Verificações de Input
const nameContent = document.getElementById('nameContent');
const nameInput = document.getElementById('nameSignup');
const usernameContent = document.getElementById('usernameContent');
const usernameInput = document.getElementById('usernameSignup');
const emailContent = document.getElementById('emailContent');
const emailInput = document.getElementById('emailSignup');
const passwordContent = document.getElementById('passwordContent');
const passwordInput = document.getElementById('passwordSignup');


function msgAlert(pai, text, key) {
  let message = document.createElement('span');
  message.textContent = text;
  message.className = 'messageAlert';
  message.id = key;
  pai.appendChild(message);
}

nameInput.addEventListener('focusout', () => {
  let msg = document.getElementById('msgName');
  if (msg)
    nameContent.removeChild(msg);

  let nome = nameInput.value;
  let re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  if (nome === '')
    msgAlert(nameContent, "Campo obrigatório","msgName");
  else if (!re.exec(nome))
    msgAlert(nameContent, "Nome inválido","msgName");
})

usernameInput.addEventListener('focusout', () => {
  let msg = document.getElementById('msgUsername');
  if (msg)
    usernameContent.removeChild(msg);

  let nome = usernameInput.value;
  if (nome === '')
    msgAlert(usernameContent, "Campo obrigatório","msgUsername");
})

emailInput.addEventListener('focusout', () => {
  let msg = document.getElementById('msgEmail');
  if (msg)
    emailContent.removeChild(msg);

  let email = emailInput.value;
  let re = /\S+@\S+.\S+/;
  if (email === '')
    msgAlert(emailContent, "Campo obrigatório","msgEmail");
  else if (!re.exec(email))
    msgAlert(emailContent, "Email inválido","msgEmail");
})

passwordInput.addEventListener('focusout', () => {
  let msg = document.getElementById('msgPassword');
  if (msg)
    passwordContent.removeChild(msg);

  let password = passwordInput.value;
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,12}$/;
  if (password === '')
    msgAlert(passwordContent, "Campo obrigatório","msgPassword");
  else if (!re.exec(password))
    msgAlert(passwordContent, "Senha inválida","msgPassword");
})


