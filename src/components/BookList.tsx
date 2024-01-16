import { DeleteButton } from 'components'
import { BookProps } from 'types/book'

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
        {books.map((el : any) => {
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
