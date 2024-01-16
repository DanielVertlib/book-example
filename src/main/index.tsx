// Import React
import { useState } from 'react'

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
      Book List Blazesoft
      <span className="fa-solid fa-user"></span>
      <AddButton onClick={() => setShowAdd(true)} />
      <BookList
        books={book.items}
        setEditValue={(value: BookProps | null) => setEditValue(value ? value.toString() : null)} />
      {showAdd || editValue ?
        <BookForm
          setShowAdd={() => setShowAdd(false)}
          value={editValue as BookProps | null}
          setEditValue={(value: any) => setEditValue(value as string | null)} /> :
          null
      }
    </div>
  )
}


export default App
