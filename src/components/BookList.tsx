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
      <table className="booklist-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        {books.map((el) => {
          return(
            <tbody key={el.id}>
              <tr onClick={() => setEditValue(el)}>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.category}</td>
                <td><DeleteButton bookId={el.id}/></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default BookList
