
import React from "react";
import { connect } from "react-redux";
// import { setFirstName, setLastName, setTel } from "../Redux/action"
import { actions } from "../Redux/action"


function mapStateToProps(state) {
    return {
        userComponent: state.userReducer.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        // changeFirstName: (fName) => dispatch(setFirstName(fName)),
        // changeLastName: (lName) => dispatch(setLastName(lName)),
        // changeTel: (tel) => dispatch(setTel(tel)),

        // changeFirstName: (fName) => dispatch({type:"SET_FIRST_NAME",action:fName}),

        changeFirstName: (fName) => dispatch({ type: "SET_FIRST_NAME_WITH_DOLAR", payload: fName }),
        changeLastName: (lName) => dispatch({ type: "SET_LAST_NAME_LOCAL_STORAGE", payload: lName }),
        changeTel: (tel) => dispatch(actions.setTel(tel)),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(function UserDetails(props) {

    return (
        <>
            <label for="firstName"></label>
            <input id="firstName" value={props.userComponent.firstName} onChange={(e) => { props.changeFirstName(e.target.value) }} />
            <label for="lastName"></label>
            <input id="lastName" value={props.userComponent.lastName} onChange={(e) => { props.changeLastName(e.target.value) }} />
            <label for="tel"></label>
            <input id="tel" value={props.userComponent.tel} onChange={(e) => { props.changeTel(e.target.value) }} />

        </>
    );
}
)




