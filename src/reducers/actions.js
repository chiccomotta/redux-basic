export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"
export const INCREMENT_BY_10 = "INCREMENT_BY_10"
export const ADD_NOTE = "ADD_NOTE"

export const doIncrement = () => {
  return { type: INCREMENT }
}
export const doDecrement = () => {
  return { type: DECREMENT }
}
export const doReset = () => {
  return { type: RESET }
}
export const doIncrementBy10 = () => {
  return { type: INCREMENT_BY_10 }
}
