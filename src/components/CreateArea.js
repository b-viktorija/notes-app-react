import React, { useState } from "react"

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

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={updateNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Write a note here..."
          rows="3"
          value={note.content}
          onChange={updateNote}
        />
        <button onClick={submitNote}>Add note</button>
      </form>
    </div>
  )
}

export default CreateArea
