// Import React
import { SetStateAction, useState } from 'react'

// Import redux hooks
import { useAppSelector } from 'hooks'

// Import Components
import { AddButton, BookForm, BookList } from 'components'

// Import types
import { BookProps } from 'types/book'

// Import SCSS
import './index.scss'

const App = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [editValue, setEditValue] = useState<string | null>(null)
  const book = useAppSelector(state => state.book)

  return (
    <div className="main-page">
      <div className="main-page__header">
        Book List Blazesoft
        <AddButton onClick={() => setShowAdd(true)} />
      </div>
      <BookList
        books={book.items}
        setEditValue={(value : SetStateAction<string | null>) => setEditValue(value)} />
      {showAdd || editValue ?
        <BookForm
          setShowAdd={() => setShowAdd(false)}
          value={editValue as BookProps | null}
          setEditValue={(value : SetStateAction<string | null>) => setEditValue(value)} /> :
          null
      }
    </div>
  )
}


export default App
