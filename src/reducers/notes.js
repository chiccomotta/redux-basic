import { ADD_NOTE, RESET } from "./actions"

const notesReducer = (notes = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      // Adding an new element into an array.
      const newState = [...notes, action.note]
      return newState
    case RESET:
      return []
    default:
      return notes
  }
}

export default notesReducer
