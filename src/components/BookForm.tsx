import * as BookActions from 'actions/book'

import { BookProps } from 'types/book'

import { useAppDispatch } from 'hooks'

interface BookFormProps {
  setShowAdd: Function
  setEditValue: Function
  value: BookProps | null
}

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const BookForm = ({ setShowAdd, setEditValue, value } : BookFormProps) => {
  const dispatch = useAppDispatch()
  const handleSubmit = (event: any) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const bookObject = Object.fromEntries(formData)

    if (!value) {
      // Add form
      bookObject.id = generateId()
      // Store in redux
      dispatch(BookActions.addBook(bookObject))
    } else {
      // Edit form
      bookObject.id = value.id
      dispatch(BookActions.editBook(bookObject))

      setEditValue(null)
    }

    setShowAdd(false)
  }

  return (
    <div className="form-modal">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" defaultValue={value?.name} name="name" />
        </label>
        <label>
          Price:
          <input type="text" defaultValue={value?.price} name="price" />
        </label>
        <label>
          Category:
          <input type="text" defaultValue={value?.category} name="category" />
        </label>
        <label>
          Description:
          <input type="text" defaultValue={value?.description} name="description" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default BookForm
