import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "./notes"
import CreateArea from "./components/CreateArea"

function App() {
  const [notesArray, addNote] = useState(notes)

  function deleteNote(id) {
    addNote((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div className="note-container">
        {notesArray.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
