import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { doReset } from "../reducers/actions"

const LabelHook = () => {
  // useSelector is analogous to connect’s mapStateToProps. You pass it a function that takes the Redux store state
  // and returns the pieces of state you’re interested in.
  const value = useSelector(state => state.counter)

  // useDispatch replaces connect’s mapDispatchToProps but is lighter weight. All it does is return your store’s dispatch method
  // so you can manually dispatch actions.
  const dispatch = useDispatch()

  return (
    <div className="container-red">
      <p>
        {value}
        <div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => dispatch(doReset())}
          >
            Reset
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() =>
              dispatch({ type: "ADD_NOTE", note: "sono la prima nota" })
            }
          >
            ADD NOTE
          </button>
        </div>
      </p>
    </div>
  )
}

export default LabelHook
