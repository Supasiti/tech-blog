const editPostForm = document.querySelector('#edit-post-form');
const deletePostBtn = document.querySelector('#delete-post-btn');

// get post id from href
// expect posts/:id/edit
// return - int
const getPostId = () => {
  const path = document.location.href.split('?')[0]
  const routes = path.split('/');
  const result = routes[routes.length - 2]; 
  return result;
}

// update post
const updatePostHandler = async (event) => {
  event.preventDefault();

  // get inputs
  const title = document.querySelector('#post-title-input').value.trim();
  const content = document.querySelector('#post-content-textarea').value.trim();
  const postId = getPostId(); 

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

// delete post
const deletePostHandler = async (event) => {
  event.preventDefault();

  const postId = getPostId();
  
  // delete database
  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  });

  // rerender the page
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete post');
  }
}


addFormValidation(editPostForm);
editPostForm.addEventListener('submit', updatePostHandler);
deletePostBtn.addEventListener('click', deletePostHandler);