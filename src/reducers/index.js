import { DECREMENT, INCREMENT, INCREMENT_BY_10, RESET } from "./actions"

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return 0
    case INCREMENT_BY_10:
      return state + 10
    default:
      return state
  }
}
