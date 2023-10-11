import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "./notes"
import CreateArea from "./components/CreateArea"

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <div className="note-container">
        {notes.map((note) => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
