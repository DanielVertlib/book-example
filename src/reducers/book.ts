const initialState = {
  items: [
    {
        id: 'id01',
        name: 'The Great Gatsby',
        price: '10$',
        category: 'Fiction',
        description: 'Book about Gatsby'
    },
    {
        id: 'id02',
        name: 'History of Canada',
        price: '30$',
        category: 'Non-Fiction',
        description: 'The history of Canada'
    },
    {
        id: 'id03',
        name: 'Harry Potter',
        price: '40$',
        category: 'Fantasy',
        description: 'Harry potter evadra kadavra'
    }
  ]
}

export default function application(state = initialState, action : any) {
  switch (action.type) {

    case 'ADD_BOOK':
      return {
        ...state,
        items: [...state.items, action.book]
      }

    case 'DELETE_BOOK':
      return {
        ...state,
        items: state.items.filter(book => book.id !== action.bookId)
      }

    case 'EDIT_BOOK':
      const { updatedBook } = action
      state.items.map((item) => {
        console.log(item.id, updatedBook.id)
        return (item.id === updatedBook.id ? { ...item, ...updatedBook } : item)
      })
      return {
        ...state,
        items: state.items.map((item) => (item.id === updatedBook.id ? { ...item, ...updatedBook } : item))
      }

    default:
      return state

  }
}
