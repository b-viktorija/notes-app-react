import React, { useState } from "react"
import Add from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  const updateNote = (e) => {
    const { value, name } = e.target
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  function submitNote(e) {
    e.preventDefault()
    props.addNote((prevItems) => {
      return [...prevItems, note]
    })
    setNote({ title: "", content: "" })
  }

  const [isExpanded, setExpanded] = useState(false)
  const Expand = () => {
    setExpanded(true)
  }

  return (
    <form className="create-note">
      {isExpanded === true && (
          <input
            name="title"
            placeholder="Title"
            onChange={updateNote}
            value={note.title}
          />
      )}

      <textarea
        onClick={Expand}
        name="content"
        placeholder="Write a note here..."
        rows={isExpanded ? "3" : "1"}
        value={note.content}
        onChange={updateNote}
      />
      {/* on click the fab button zoooms in  */}
      <Zoom in={isExpanded}>
        <Fab onClick={submitNote} className="note-btn">
          <Add />
        </Fab>
      </Zoom>
    </form>
  )
}

export default CreateArea
