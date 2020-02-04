const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

export const doIncrement = () => {
  return { type: INCREMENT }
}
export const doDecrement = () => {
  return { type: DECREMENT }
}
export const doReset = () => {
  return { type: RESET }
}
