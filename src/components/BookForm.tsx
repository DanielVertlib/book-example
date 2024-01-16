// Import redux actions
import * as BookActions from 'actions/book'

// Import types
import { BookProps } from 'types/book'

// Import redux hooks
import { useAppDispatch } from 'hooks'

// Typing for BookForm props
interface BookFormProps {
  setShowAdd: Function
  setEditValue: Function
  value: BookProps | null
}

// Generate random ID
const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const BookForm = ({ setShowAdd, setEditValue, value } : BookFormProps) => {

  const dispatch = useAppDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Get form data, format as object
    const formData = new FormData(event.currentTarget)
    const bookObject = Object.fromEntries(formData)

    if (!value) {
      // Add form, generate new ID, store in redux
      bookObject.id = generateId()
      dispatch(BookActions.addBook(bookObject))

      setShowAdd(false)
    } else {
      // Edit form, keep same ID, store in redux
      bookObject.id = value.id
      dispatch(BookActions.editBook(bookObject))

      setEditValue(null)
    }
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
