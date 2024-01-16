const AddButton = ({ onClick } : { onClick : React.MouseEventHandler<HTMLElement> }) => (
  <button className='add-button' onClick={onClick}>
    Add Book
  </button>
)

export default AddButton
