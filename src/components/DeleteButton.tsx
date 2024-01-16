import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import * as BookActions from 'actions/book'

import { useAppDispatch } from 'hooks'

const DeleteButton = ({ bookId } : { bookId : String }) => {
  const dispatch = useAppDispatch()

  return (
    <FontAwesomeIcon
      className='delete-button'
      onClick={(e) => {
        e.stopPropagation()
        dispatch(BookActions.deleteBook(bookId))
      }}
      icon={faTrash} />
  )
}

export default DeleteButton
