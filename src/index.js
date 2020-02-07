import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import Counter from "./components/Counter"
import Label from "./components/Label"
import counter from "./reducers"
import "./site.css"
import LabelHook from "./components/LabelHook"

const store = createStore(counter)

render(
  <Provider store={store}>
    <Counter />
    <div>
      <Label />
      <LabelHook />
    </div>
  </Provider>,
  document.getElementById("root")
)
