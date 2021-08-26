const goToAddPostBtn = document.querySelector('#go-to-add-post-btn');

// add post handler
const goToAddPostHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/posts/add');
}

goToAddPostBtn.addEventListener('click', goToAddPostHandler);