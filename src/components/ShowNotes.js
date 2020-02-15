import React from "react"
import { useSelector } from "react-redux"

const ShowNotes = () => {
  const notes = useSelector(state => state.notes)

  return (
    <ul>
      {notes.map(n => (
        <li>{n}</li>
      ))}
    </ul>
  )
}

export default ShowNotes
