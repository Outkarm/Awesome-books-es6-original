// function to remove book
const removeBook = (el) => {
  if (el.classList.contains('remove-btn')) {
    el.parentElement.parentElement.remove();
  }
};

// eslint-disable-next-line import/prefer-default-export
export { removeBook };
