import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddNote, doReset } from "../reducers/actions"
import { EuiFlexGrid, EuiButton, EuiFlexGroup, EuiFlexItem, EuiFieldNumber, EuiAvatar, EuiFormRow, EuiFieldText } from "@elastic/eui"
import { EuiSpacer } from "@elastic/eui"

const LabelHook = () => {
  // useSelector is analogous to connect’s mapStateToProps. You pass it a function that takes the Redux store state
  // and returns the pieces of state you’re interested in.
  const value = useSelector(state => state.counter)

  // useDispatch replaces connect’s mapDispatchToProps but is lighter weight. All it does is return your store’s dispatch method
  // so you can manually dispatch actions.
  const dispatch = useDispatch()

  const style = { width: 900, margin: 10 }
  return (
    <div style={style}>
      <EuiFlexGrid columns={2}>
        <EuiFlexItem grow={true}>
          <EuiFormRow label="Nome" display="columnCompressed" fullWidth>
            <EuiFieldText compressed />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Cognome" display="columnCompressed">
            <EuiFieldText compressed />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFlexGrid columns={2}>
            <EuiFlexItem>
              <EuiFormRow label="Città" display="columnCompressed">
                <EuiFieldText compressed />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow label="Nazione" display="columnCompressed">
                <EuiFieldText compressed />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGrid>
        </EuiFlexItem>
      </EuiFlexGrid>

      <EuiSpacer size="m" />

      <EuiFlexGroup style={{ maxWidth: 600 }}>
        <EuiFlexItem grow={true}>
          <EuiFormRow label="Age" display="columnCompressed">
            <EuiFieldNumber max={10} placeholder={42} compressed />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Full name" display="columnCompressed">
            <EuiFieldText icon="user" placeholder="John Doe" compressed />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFormRow label="Nome" display="columnCompressed">
                <EuiFieldText max={10} placeholder={42} compressed />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  )
}

export default LabelHook
