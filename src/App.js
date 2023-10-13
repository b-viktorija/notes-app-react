import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "./notes"
import CreateArea from "./components/CreateArea"

function App() {
  const [notesArray, addNote] = useState(notes)

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div className="note-container">
        {notesArray.map((note, i) => (
          <Note key={i} title={note.title} content={note.content} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
