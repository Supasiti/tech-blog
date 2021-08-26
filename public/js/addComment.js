
const commentForm = document.querySelector('#add-comment-form');

const addCommentHandler = async (event) => {
  event.preventDefault();

  // get post id
  const path = document.location.href.split('?')[0]
  const routes = path.split('/');
  const postId = routes[routes.length - 1];
  const content = document.querySelector('#add-comment-textarea').value.trim();

  // add comment to database
  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ postId, content }),
    headers: { 'Content-Type': 'application/json' },
  })

  // rerender the page
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add comment');
  }
}

addFormValidation(commentForm);
commentForm.addEventListener('submit', addCommentHandler);