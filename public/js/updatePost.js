const editPostForm = document.querySelector('#edit-post-form');

const updatePostHandler = async (event) => {
  event.preventDefault();

  // get inputs
  const title = document.querySelector('#post-title-input').value.trim();
  const content = document.querySelector('#post-content-textarea').value.trim();
  
  // expect posts/:id/edit
  const path = document.location.href.split('?')[0]
  const routes = path.split('/');
  const postId = routes[routes.length - 2]; 

  // update database
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  // rerender the page
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update post');
  }
}

addFormValidation(editPostForm);
editPostForm.addEventListener('submit', updatePostHandler);