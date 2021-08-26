const editPostForm = document.querySelector('#edit-post-form');

const addPostHandler = async (event) => {
  event.preventDefault();

  // get inputs
  const title = document.querySelector('#post-title-input').value.trim();
  const content = document.querySelector('#post-content-textarea').value.trim();

  // update database
  const response = await fetch(`/api/posts/`, {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  // rerender the page
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add post');
  }
}

addFormValidation(editPostForm);
editPostForm.addEventListener('submit', addPostHandler);
