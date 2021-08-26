const btnLogin = document.querySelector('#btn-login');
const btnSignUp = document.querySelector('#btn-signup');

const goToLoginHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/login');
}

const goToSignUpHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/signup');
}


if (btnLogin){
  btnLogin.addEventListener('click', goToLoginHandler);
}

if (btnSignUp){
  btnSignUp.addEventListener('click', goToSignUpHandler);
}
