import DeleteIcon from "@material-ui/icons/Delete"


function Note(props) {
  // called when the delete button is clicked, invokes the onDelete function passed as a prop from the app component
  // props.id is used to access the id associated with the specific note component
  // the id is passed as an argument to the on delete function;

  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Note
