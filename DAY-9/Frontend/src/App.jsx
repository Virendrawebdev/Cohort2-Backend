import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [notes, setNotes]= useState([
    // {
    //   title:"test title 1",
    //   description:"test description 1"
    // },
    //  {
    //   title:"test title 2",
    //   description:"test description 2"
    // },
    //  {
    //   title:"test title 3",
    //   description:"test description 3"
    // },
    //  {
    //   title:"test title 4",
    //   description:"test description 4"
    // }
  ])
  // console.log("Hello world")

  function FetchNotes(){
    axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    // console.log(res.data)
    setNotes(res.data.notes)
  })
  }
  useEffect(()=>{
    FetchNotes()
  },[])

  function handleSubmit(e){
    e.preventDefault()
    const {title, description}=e.target
    console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    }).then((res)=>{
      console.log(res.data)
      FetchNotes()
    })
  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then((res)=>{
      console.log(res.data)
      FetchNotes()
    })
    console.log(noteId)
  }

  function handleUpdateNote(noteId){
    const newTitle=prompt("Enter new title")
    const newDescription=prompt("Enter new description")
    axios.patch("http://localhost:3000/api/notes/"+noteId,{
          title:newTitle,
      description:newDescription
    }).then((res)=>{
      console.log(res.data)
      FetchNotes()
    })
    console.log(noteId)
  }
  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
    <input name='title' type="text" placeholder='Enter title' />
    <input name='description' type="text" placeholder='Enter description' />
    <button type='submit'>Create Note</button>
    </form>
    <div className='notes'>
    {
      notes.map(note=>{
        return <div className='note'>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={()=>handleDeleteNote(note._id)}>Delete</button>
        <button onClick={()=>handleUpdateNote(note._id)}>Update</button>
      </div>
      })
    }
     
    </div>
    </>
  )
}

export default App
