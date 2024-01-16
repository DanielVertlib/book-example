const AddButton = ({ onClick } : { onClick : React.MouseEventHandler<HTMLElement> }) => (
  <button onClick={onClick}>
    Add Book
  </button>
)

export default AddButton
