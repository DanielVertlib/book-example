export function addBook(formData) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_BOOK',
      book: formData
    })
  }
}

export function deleteBook(bookId) {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_BOOK',
      bookId
    })
  }
}

export function editBook(updatedBook) {
  return (dispatch) => {
    dispatch({
      type: 'EDIT_BOOK',
      updatedBook
    })
  }
}
