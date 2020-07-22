import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import Counter from "./components/Counter"
import Label from "./components/Label"
import LabelHook from "./components/LabelHook"
import ShowNotes from "./components/ShowNotes"
import { TodoList } from "./components/Animation"
import counterReducer from "./reducers/counter"
import notesReducer from "./reducers/notes"
import "@elastic/eui/dist/eui_theme_light.css"
import "./site.css"

const store = createStore(
  combineReducers({
    counter: counterReducer,
    notes: notesReducer,
  })
)

render(
  <Provider store={store}>
    <Counter />
    <div>
      <Label />
      <LabelHook />
      <ShowNotes />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById("root")
)
