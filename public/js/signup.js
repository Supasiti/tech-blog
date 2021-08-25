const signupForm = document.querySelector('.signup-form');

const signUpHandler = async (event) => {
  event.preventDefault();

  if (!signupForm.checkValidity()) {
    event.stopPropagation()
    return
  }

  signupForm.classList.add('was-validated')
  
  const username = signupForm.querySelector('#username-signup').value.trim();
  const email = signupForm.querySelector('#email-signup').value.trim();
  const password = signupForm.querySelector('#password-signup').value.trim();

  const response = await fetch('/api/users/signup', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Fail to sign up ');
  }
}

signupForm.addEventListener('submit', signUpHandler)