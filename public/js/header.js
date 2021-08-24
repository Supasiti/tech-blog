const btnLogin = document.querySelector('#btn-login');

const goToLoginHandler = async (event) => {
  event.preventDefault();

  document.location.replace('/login');
}

btnLogin.addEventListener('click', goToLoginHandler);
