
import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        userComponent: state.userReducer.user,
    };
}


export default connect(mapStateToProps)(function ShowUserDetails(props) {

    return (
        <>

            <p>Your First Name: {props.userComponent.firstName}</p>
            <p>Your Last Name: {props.userComponent.lastName}</p>
            <p>Your Tel: {props.userComponent.tel}</p>


        </>
    );
}
)




