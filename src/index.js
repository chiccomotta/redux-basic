import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import Counter from "./components/Counter"
import Label from "./components/Label"
import counter from "./reducers"
import "./site.css"

const store = createStore(counter)
const rootEl = document.getElementById("root")

render(
  <Provider store={store}>
    <Counter />
    <div>
      <Label />
    </div>
  </Provider>,
  rootEl
)
