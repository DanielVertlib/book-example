// Import components
import { DeleteButton } from 'components'

// Import types
import { BookProps } from 'types/book'

// Typing for BookList props
interface BookListProps {
  books : Array<BookProps>,
  setEditValue : Function
}

const BookList = ({ books, setEditValue } : BookListProps) => {
  return (
    <div>
      <table>
        <tr>
          <th>Book Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
        {books.map((el) => {
          return(
            <tr onClick={() => setEditValue(el)} key={el.id}>
              <td>{el.name}</td>
              <td>{el.price}</td>
              <td>{el.category}</td>
              <td><DeleteButton bookId={el.id}/></td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default BookList
