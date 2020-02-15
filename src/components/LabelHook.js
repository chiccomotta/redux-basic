import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddNote, doReset } from "../reducers/actions"
import { EuiFlexGrid, EuiButton, EuiFlexGroup, EuiFlexItem, EuiFieldNumber, EuiAvatar, EuiFormRow, EuiFieldText } from "@elastic/eui"

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
        <EuiFlexItem>
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
    </div>
    // <EuiFlexGroup style={{ maxWidth: 900 }}>
    //   <EuiFlexItem grow={false} style={{ width: 80 }}>
    //     <EuiFormRow label="Age">
    //       <EuiFieldNumber max={10} placeholder={42} />
    //     </EuiFormRow>
    //   </EuiFlexItem>
    //   <EuiFlexItem style={{ width: 250 }} grow={false}>
    //     <EuiFormRow label="Full name">
    //       <>
    //         <EuiFieldText icon="user" placeholder="John Doe" />
    //         <br></br>
    //         <EuiFormRow label="Second name">
    //           <EuiFieldText icon="user" placeholder="John Doe" />
    //         </EuiFormRow>
    //       </>
    //     </EuiFormRow>
    //   </EuiFlexItem>
    //   <EuiFlexItem grow={false}>
    //     <EuiFormRow label="Avatar" display="center">
    //       <EuiAvatar name="John Doe" size="s" />
    //     </EuiFormRow>
    //   </EuiFlexItem>
    //   <EuiFlexItem grow={false}>
    //     <EuiFormRow hasEmptyLabelSpace display="center">
    //       <EuiButton>Save</EuiButton>
    //     </EuiFormRow>
    //   </EuiFlexItem>
    // </EuiFlexGroup>
  )
}

export default LabelHook
