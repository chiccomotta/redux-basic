const notesReducer = (notes = [], action) => {
  switch (action.type) {
    case "ADD_NOTE":
      // Adding an new element into an array.
      const newState = [...notes, action.note]
      return newState
    default:
      return notes
  }
}

export default notesReducer
