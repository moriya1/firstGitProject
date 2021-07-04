
import React from "react";
import { connect } from "react-redux";
// import { addBook, deleteBook } from "../Redux/action"
import { actions } from "../Redux/action"

function mapStateToProps(state) {
    return {
        booksReducer: state.booksReducer,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addBook: (b) => dispatch(actions.addBook(b)),
        deleteBook: (i) => dispatch(actions.deleteBook(i)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(function AddOrRemoveBook(props) {

    return (
        <>
    
     
        </>
    );
}
)




