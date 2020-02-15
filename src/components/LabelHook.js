import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { doReset } from "../reducers/actions"
import {
  EuiFieldText,
  EuiFieldNumber,
  EuiAvatar,
  EuiRange,
  EuiSelect,
  EuiColorPicker,
  EuiColorPickerSwatch,
  EuiFormRow,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiButton
} from "@elastic/eui"

const LabelHook = () => {
  // useSelector is analogous to connect’s mapStateToProps. You pass it a function that takes the Redux store state
  // and returns the pieces of state you’re interested in.
  const value = useSelector(state => state)

  // useDispatch replaces connect’s mapDispatchToProps but is lighter weight. All it does is return your store’s dispatch method
  // so you can manually dispatch actions.
  const dispatch = useDispatch()

  const style = { margin: 5 }

  return (
    <div style={style}>
      <EuiFlexGroup style={{ maxWidth: 600 }}>
        <EuiFlexItem grow={false}>
          <EuiFormRow label="Nome" display="columnCompressed">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow display="columnCompressed">
            <EuiButton>Save</EuiButton>
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ maxWidth: 600 }}>
        <EuiFlexItem grow={false}>
          <EuiFormRow label="First n" display="columnCompressed">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Last name" display="columnCompressed">
            <EuiFieldText />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiFormRow display="columnCompressed">
            <EuiButton>Save</EuiButton>
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default LabelHook
