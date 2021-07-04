
import React from "react";
import { connect } from "react-redux";
import { actions } from "../Redux/action"


function mapStateToProps(state) {
    return {
        productReducer: state.productReducer.product,
    };
}
function mapDispatchToProps(dispatch) {
    return {

        changeName: (nameP) => dispatch(actions.setName(nameP)),
        changeId: (id) => dispatch(actions.setId(id)),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(function UserDetails(props) {

    return (
        <>
            <input value={props.productReducer.name} onChange={(e) => { props.changeName(e.target.value) }} />
            <input value={props.productReducer.id} onChange={(e) => { props.changeId(e.target.value) }} />

        </>
    );
}
)




